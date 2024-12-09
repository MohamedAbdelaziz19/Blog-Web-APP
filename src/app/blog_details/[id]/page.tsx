// Use GetStatiqueParams Generation
import React from 'react';
import Block1 from '../components/Block1';
import CommentsBlock from '../components/CommentsBlock';
import Block2 from '../components/Block2';
import { IBlog } from '@/src/models/Blog'; // Import the IBlog interface

interface BlogDetailProps {
  blog: IBlog | null;
  error?: string;
}

// Function to fetch blog data
const fetchBlogData = async (id: string) => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/blog/get/${id}`); // Adjust the API endpoint
    if (!res.ok) {
      throw new Error('Blog not found');
    }
    const data: IBlog = await res.json();
    return { blog: data, error: null };
  } catch (error) {
    return { blog: null, error: (error as Error).message };
  }
};

// Server component that handles data fetching and rendering
const BlogDetail: React.FC<{ params: { id: string } }> = async ({ params }) => {
  const { id } = params;
  const { blog, error } = await fetchBlogData(id);

  if (error) {
    return <div>{error}</div>;
  }

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <Block1 blog={blog} />
      <Block2 blog={blog} />
      <CommentsBlock />
    </div>
  );
};

// Generate static paths for all blog posts
export async function generateStaticParams() {
  try {
    const res = await fetch('${process.env.NEXTAUTH_URL}/api/blog'); // Adjust the API endpoint

    // Check if the response is OK and content-type is JSON
    if (!res.ok) {
      throw new Error('Failed to fetch blogs');
    }

    const contentType = res.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      const blogs: IBlog[] = await res.json();

      // Ensure that all blog objects have a defined `id` before mapping
      const paths = blogs
        .filter(blog => blog.id) // Filter out blogs without an id
        .map(blog => ({
          id: blog.id.toString(),
        }));

      return paths;
    } else {
      const errorText = await res.text(); // Read the response as text
      console.error('Unexpected response format:', errorText);
      throw new Error('Unexpected response format, not JSON');
    }
  } catch (error) {
    // Here, we assert that error is an instance of Error
    if (error instanceof Error) {
      console.error('Error fetching blogs:', error.message);
      
    } else {
      console.error('Unknown error occurred');
    }
    return []; // Return an empty array on error to avoid build-time failures
  }
}

export default BlogDetail;

{/* //OLD CODE
  'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Block1 from '../components/Block1';
import CommentsBlock from '../components/CommentsBlock';
import { IBlog } from '@/models/Blog'; // Import the IBlog interface
import Block2 from '../components/Block2';


const BlogDetail: React.FC = () => {
  const params = useParams();

  const id = params?.id as string | undefined; 
  const [blog, setBlog] = useState<IBlog | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  //console.log(blog)
 useEffect(() => {
    const fetchBlog = async () => {
      if (!id) {
        setError('Invalid blog ID');
        setLoading(false);
        return;
      }

      try {
        
        const response = await fetch('/api/blog/${id}');
        console.log(response);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: IBlog = await response.json();
        setBlog(data);
        console.log(data);
        
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <Block1 blog={blog} />
      <Block2 blog={blog}/>
      <CommentsBlock />
    </div>
  );
};

export default BlogDetail;
  */}