import { NextResponse } from 'next/server';
import connectToDatabase from '@/src/lib/db';
import Blog from '@/src/models/Blog';

export async function GET() {
  await connectToDatabase();

  try {
    const blogs = await Blog.find({}).sort({ date: -1 }).exec();
    return NextResponse.json(blogs);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Error fetching blog data' }, { status: 500 });
  }
}
