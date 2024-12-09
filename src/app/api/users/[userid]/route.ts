// src/app/api/users/[userid]/route.ts
import { NextResponse } from 'next/server';
import connectToDatabase from '@/src/lib/db'; // Import your database connection function
import User from '@/src/models/User'; // Import your User model

// Handler for GET requests for a specific user
export async function GET(request: Request, { params }: { params: { userid: string } }) {
  try {
    // Connect to the database
    await connectToDatabase();

    // Fetch user by ID
    const user = await User.findById(params.userid);
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    return NextResponse.json({ user });
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json({ error: 'Failed to fetch user' }, { status: 500 });
  }
}

// Handler for DELETE requests for a specific user

export async function DELETE(req: Request, { params }: { params: { userid: string } }) {
  try {
    await connectToDatabase();

    const { userid } = params;

    if (!userid) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    const user = await User.findByIdAndDelete(userid);

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'User deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting user:', error);
    return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 });
  }
}


// Handler for PUT requests for a specific user
export async function PUT(request: Request, { params }: { params: { userid: string } }) {
  try {
    // Connect to the database
    await connectToDatabase();

    // Parse request body
    const { role } = await request.json();

    // Update user role by ID
    const user = await User.findByIdAndUpdate(params.userid, { role }, { new: true });
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    return NextResponse.json({ user });
  } catch (error) {
    console.error('Error updating user:', error);
    return NextResponse.json({ error: 'Failed to update user' }, { status: 500 });
  }
}
