import connectToDatabase from '@/src/lib/db';
import Blog from '@/src/models/Blog';
import { NextRequest, NextResponse } from 'next/server';
import cloudinary from '@/src/lib/cloudinary';
import { IncomingForm } from 'formidable';
import fs from 'fs';

// Helper function to handle file uploads
const handleFileUpload = async (req: NextRequest) => {
  return new Promise<{ fields: any; imageFile: any }>((resolve, reject) => {
    const form = new IncomingForm();
    form.parse(req as any, (err, fields, files) => {
      if (err) return reject(err);
      resolve({ fields, imageFile: files.image });
    });
  });
};

// PUT request handler to update a blog by ID
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  await connectToDatabase();
  const { id } = params;

  try {
    // Handle file upload and parse form data
    const { fields, imageFile } = await handleFileUpload(request);
    const { title, category } = fields;

    const blog = await Blog.findById(id);
    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    // Prepare update data
    const updateData: any = { title, category };

    if (imageFile && imageFile.filepath) {
      // If a new image is uploaded, delete the old image from Cloudinary
      if (blog.image) {
        const publicId = extractBlogId(blog.image); // Extract Cloudinary public ID
        await cloudinary.uploader.destroy(publicId);
      }

      // Upload new image to Cloudinary
      const uploadResult = await cloudinary.uploader.upload(imageFile.filepath);
      updateData.image = uploadResult.secure_url; // Update the image URL

      // Clean up the temporary file
      fs.unlinkSync(imageFile.filepath);
    }

    // Update the blog in the database
    const updatedBlog = await Blog.findByIdAndUpdate(id, updateData, { new: true });
    return NextResponse.json(updatedBlog, { status: 200 });
  } catch (error) {
    console.error('Error updating blog:', error);
    return NextResponse.json({ error: 'Error updating blog' }, { status: 500 });
  }
}

// Helper function to extract the public ID from a Cloudinary URL
const extractBlogId = (url: string): string => {
  const matches = url.match(/\/([^\/]+)\.(jpg|jpeg|png|gif|webp)$/);
  if (matches) return matches[1];
  return url.split('/').pop()?.split('.')[0] || '';
};
