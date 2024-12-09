import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/src/lib/db';
import Blog from '@/src/models/Blog';
import cloudinary from '@/src/lib/cloudinary';
import stream from 'stream';

// Fonction pour uploader une image unique sur Cloudinary
async function uploadImage(imageFile: File): Promise<string> {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];

  if (!allowedTypes.includes(imageFile.type)) {
    throw new Error('Invalid image type');
  }

  if (imageFile.size > 2 * 1024 * 1024) { // Limite de 2 Mo
    throw new Error('Image size exceeds 2MB');
  }

  return new Promise((resolve, reject) => {
    imageFile.arrayBuffer().then(imageBuffer => {
      const bufferStream = new stream.PassThrough();
      bufferStream.end(Buffer.from(imageBuffer));

      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: 'Blogs' },
        (error, result) => {
          if (error) {
            return reject(error);
          }
          if (!result || !result.secure_url) {
            return reject(new Error('Image upload failed: No URL returned'));
          }
          resolve(result.secure_url);
        }
      );

      bufferStream.pipe(uploadStream);
    }).catch(reject);
  });
}

export async function POST(req: NextRequest) {
  await connectToDatabase();

  try {
    const formData = await req.formData();

    const title = formData.get('title') as string | null;
    const description = formData.get('description') as string | null;
    const category = formData.get('Category') as string | null;
    const userName = formData.get('userName') as string | null;
    const userImg = formData.get('userImg') as string | null;
    const addMoreBlog = formData.get('AddMoreBlog') as string | null;
    console.log(formData);

    if (!title || !description || !category || !userImg || !userName || !addMoreBlog) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    let parsedAddMoreBlog: { title: string; description: string; imageUrl?: string }[] = [];
    try {
      parsedAddMoreBlog = JSON.parse(addMoreBlog);
    } catch (parseError) {
      console.error('JSON parse error:', parseError);
      return NextResponse.json({ error: 'Invalid JSON format for AddMoreBlog' }, { status: 400 });
    }

    const imageFile = formData.get('image') as File | null;
    let mainImage = null;

    if (imageFile) {
      try {
        mainImage = await uploadImage(imageFile);
      } catch (uploadError) {
        console.error('Cloudinary upload error:', uploadError);
        return NextResponse.json({ error: 'Error uploading main image' }, { status: 500 });
      }
    }

    // Associer les images supplémentaires aux entrées correspondantes n'est plus nécessaire

    // Mise à jour des entrées AddMoreBlog sans images supplémentaires
    const updatedAddMoreBlog = parsedAddMoreBlog.map((entry) => ({
      ...entry,
      image: entry.imageUrl || '', // Assurer que chaque entrée a une image ou une chaîne vide
    }));

    const blogData = {
      image: mainImage,
      title,
      description,
      category,
      userImg,
      userName,
      date: new Date(),
      AddMoreBlog: updatedAddMoreBlog,
    };

    await Blog.create(blogData);

    return NextResponse.json({ success: true, msg: 'Blog Added' }, { status: 201 });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Error creating blog data' }, { status: 500 });
  }
}
