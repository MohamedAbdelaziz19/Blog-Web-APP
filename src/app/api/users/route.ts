import { NextResponse } from 'next/server';
import connectToDatabase from '@/src/lib/db';
import User from '@/src/models/User';

// Handle GET requests to fetch users
export async function GET() {
  try {
    await connectToDatabase();
    const users = await User.find({ role: { $ne: 'SuperAdmin' } });
    return NextResponse.json({ success: true, users });
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch users' }, { status: 500 });
  }
}
