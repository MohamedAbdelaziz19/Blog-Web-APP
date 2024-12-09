import connectToDatabase from '@/src/lib/db';
import Blog from '@/src/models/Blog';
import { NextRequest, NextResponse } from 'next/server';
import cloudinary from '@/src/lib/cloudinary';  // Import Cloudinary
// GET request handler to fetch a blog by ID
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    await connectToDatabase();
    const { id } = params;
  
    try {
      const blog = await Blog.findById(id).exec();
      if (!blog) {
        return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
      }
      return NextResponse.json(blog);
    } catch (error) {
      console.error('Database error:', error);
      return NextResponse.json({ error: 'Error fetching blog data' }, { status: 500 });
    }
  }