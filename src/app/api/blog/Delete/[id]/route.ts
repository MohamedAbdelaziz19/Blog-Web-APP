import connectToDatabase from '@/src/lib/db';
import Blog from '@/src/models/Blog';
import { NextRequest, NextResponse } from 'next/server';
import cloudinary from '@/src/lib/cloudinary';  // Import Cloudinary

const extractPublicIdFromUrl = (url: string): string => {
  const matches = url.match(/\/([^\/]+)\.(jpg|jpeg|png|gif|webp)$/);
  return matches ? matches[1] : "";
};
// DELETE request handler to delete a blog by ID
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    await connectToDatabase();
    const { id } = params;
  
    try {
      const deletedBlog = await Blog.findByIdAndDelete(id);
  
      if (!deletedBlog) {
        return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
      }
  
      // Delete associated images from Cloudinary
      const publicId = extractPublicIdFromUrl(deletedBlog.image);
      if (publicId) {
        await cloudinary.uploader.destroy(publicId); // Delete the image from Cloudinary
      }
      
      return NextResponse.json({ success: true, msg: 'Blog and associated images deleted successfully' });
    } catch (error) {
      console.error('Database error:', error);
      return NextResponse.json({ error: 'Error deleting blog data' }, { status: 500 });
    }
  }