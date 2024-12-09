import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import connectToDatabase from '@/src/lib/db';
import UserModel from '@/src/models/User';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const firstname = formData.get('name') as string;
    const lastname = formData.get('lastname') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const role = formData.get('role') as string;
    const image = formData.get('image') as string; // Added image field

    // Combine firstname and lastname for the full username
    const username = `${firstname} ${lastname}`;

    // Check for missing fields
    if (!username || !email || !password) {
      return NextResponse.json({ message: 'Username, email, and password are required' }, { status: 400 });
    }

    await connectToDatabase();

    // Check if the user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    // Hash the password before saving
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = new UserModel({
      username,
      email,
      password: hashedPassword,
      role: role || 'Visiteur', // Default role if not provided
      image, // Save image field
    });

    // Save the new user
    await newUser.save();
    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error during signup:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
