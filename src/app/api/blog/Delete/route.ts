import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/src/lib/db';
import Blog from '@/src/models/Blog';
import cloudinary from '@/src/lib/cloudinary';

// Helper function to extract the public ID from a Cloudinary URL
const extractBlogId = (url: string): string => {
  const matches = url.match(/\/([^\/]+)\.(jpg|jpeg|png|gif|webp)$/);
  if (matches) return matches[1];
  return url.split('/').pop()?.split('.')[0] || '';
};

export async function DELETE(req: NextRequest) {
  await connectToDatabase();
  const { id } = await req.json();

  try {
    if (!id) {
      return NextResponse.json({ error: 'Missing blog ID' }, { status: 400 });
    }

    // Find the blog to be deleted
    const blog = await Blog.findById(id);
    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    // Delete associated image from Cloudinary if it exists
    if (blog.image) {
      const publicId = extractBlogId(blog.image);
      await cloudinary.uploader.destroy(publicId);
    }

    // Delete the blog from the database
    await Blog.findByIdAndDelete(id);

    return NextResponse.json({ success: true, msg: 'Blog Deleted' }, { status: 200 });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Error deleting blog data' }, { status: 500 });
  }
}
