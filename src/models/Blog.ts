import mongoose, { Document, Schema, Model } from 'mongoose';
import { Key } from 'react';

// Define the Blog interface extending mongoose Document
export interface IBlog extends Document {
  image: string;
  category: string;
  title: string;
  description: string;
  likes: string[]; // Array 
  comments: {
    _id: Key | null | undefined;
    user: mongoose.Schema.Types.ObjectId;
    text: string;
    date: Date;
  }[];
  userImg: string;
  userName: string;
  date: Date;
  AddMoreBlog: { 
    title: string;
    description: string;
    image: string;
  }[];
}

const BlogSchema: Schema = new Schema({
  image: { type: String, required: true },
  category: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  likes: { type: [String], default: [] }, // Initialize as empty array
  comments: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
      text: { type: String, required: true },
      date: { type: Date, default: Date.now }
    }
  ],
  userImg: { type: String, required: true },
  userName: { type: String, required: true },
  date: { type: Date, default: Date.now },
  AddMoreBlog: [
    {
      title: { type: String, required: true },
      description: { type: String, required: true },
      image: { type: String }
    }
  ]
});

// Create and export the Blog model
const Blog: Model<IBlog> = mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema);
export default Blog;
