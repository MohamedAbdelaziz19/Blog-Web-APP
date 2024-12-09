import dbConnect from '@/src/lib/db';
import Blog from '@/src/models/Blog';
import { NextRequest, NextResponse } from 'next/server';
import cloudinary from '@/src/lib/cloudinary';
import stream from 'stream';



const extractPublicIdFromUrl = (url: string): string => {
  const matches = url.match(/\/([^\/]+)\.(jpg|jpeg|png|gif|webp)$/);
  return matches ? matches[1] : "";
};

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await dbConnect();

  

  try {
    const formData = await req.formData();
    const title = formData.get('title') as string;
    const category = formData.get('category') as string;
    const imageFile = formData.get("image") as File | null;
    const id = params.id;

    // Validate the ID
    if (!id) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

    // Find the existing blog by ID
    const existingBlog = await Blog.findById(id);
    if (!existingBlog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    // Initialize imageUrl with the existing value
    let imageUrl = existingBlog.image;

    // If there's a new image file, upload it and update the imageUrl
    if (imageFile) {
      if (existingBlog.image) {
        const publicId = extractPublicIdFromUrl(existingBlog.image);
        if (publicId) {
          await cloudinary.uploader.destroy('Blogs/' + publicId);
        }
      }

      const imageBuffer = Buffer.from(await imageFile.arrayBuffer());
      const imageStream = new stream.PassThrough();
      imageStream.end(imageBuffer);

      const { secure_url: newImageUrl } = await new Promise<any>(
        (resolve, reject) => {
          const uploadStream = cloudinary.uploader.upload_stream(
            {
              folder: "Blogs",
              format: 'webp',
            },
            (error, result) => {
              if (error) {
                return reject(new Error(`Image upload failed: ${error.message}`));
              }
              resolve(result);
            }
          );
          imageStream.pipe(uploadStream);
        }
      );

      imageUrl = newImageUrl; // Update imageUrl with the uploaded URL
    }

    // Update the blog with new data
    const updatedBlog = {
      title,
      category,
      image: imageUrl, // Update the image URL field
    };

    const blog = await Blog.findByIdAndUpdate(id, updatedBlog, { new: true });

    return NextResponse.json(blog, {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 200,
    });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: "SERVER ERROR" }, { status: 500 });
  }
}
