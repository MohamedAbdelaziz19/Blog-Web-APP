import React from 'react';

const NewsletterSignup: React.FC = () => {
  return (
    <div className="bg-indigo-600">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Sign up for our newsletter</span>
          <span className="block text-indigo-200">Stay updated with our latest posts.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <input type="email" className="rounded-md p-2" placeholder="Enter your email" />
            <button className="ml-2 px-4 py-2 bg-white text-indigo-600 font-medium rounded-md hover:bg-indigo-200">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;
