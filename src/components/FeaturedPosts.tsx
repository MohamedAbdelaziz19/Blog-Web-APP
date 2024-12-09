import { Link } from 'lucide-react';
import React from 'react';

const FeaturedPosts: React.FC = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Featured Posts</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Recent Blog Posts</p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Example post card */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img className="h-56 w-full object-cover" src="/post-image.jpg" alt="Post Image" />
              <div className="p-6">
                <h3 className="font-semibold text-lg leading-tight truncate">Title of the Post</h3>
                <p className="mt-2 text-gray-600">Short description of the post...</p>
                <Link href="#" className="mt-4 block text-indigo-600 hover:text-indigo-900">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
