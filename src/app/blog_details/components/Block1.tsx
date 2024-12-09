// src/components/Block1.tsx
'use client'
import React from 'react';
import Image from 'next/image';
import { IBlog } from '@/src/models/Blog'; // Import the IBlog interface from your Blog model
import Link from 'next/link';
import { Provider, LikeButton } from "@lyket/react";
interface Block1Props {
  blog: IBlog; // Use the IBlog type here
}

const Block1: React.FC<Block1Props> = ({ blog }) => {
  console.log(blog); return (
    <section className='w-[95%] sm:w-[95%] md:w-[80%] lg:w-[80%] xl:w-[80%] 2xl:w-[75%] mx-auto py-8 flex gap-4 sm:gap-4 md:gap-2 lg:gap-2 xl:gap-2 flex-col justify-center md:flex-row'>
      {/* Bloc A gauche */}
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <h1 className='font-bold text-2xl sm:text-2xl md:text-4xl text-orange-400 mb-2'>{blog.title}</h1>
          <span className='text-gray-400 text-sm'>
            Posted on {new Date(blog.date).toDateString()} by {blog.userName}
          </span>
          <div className='flex gap-4'>
            <span className='bg-gray-500 text-white rounded-md px-2 text-sm'>{blog.category}</span>
          </div>
        </div>
        <div>
          <Image 
            src={blog.image} 
            alt={blog.title} 
            className='rounded-md w-full' 
            width={500} 
            height={100} 
          />
        </div>
        <Provider apiKey="acc0dbccce8e557db5ebbe6d605aaa">
        <LikeButton
         namespace="my-blog-post"
         id="how-to-beat-me-at-chess"
         component={LikeButton.templates.Twitter}
        />
        </Provider>
        <div>
          <p className='w-full sm:w-full md:w-[90%]'>{blog.description}</p>
        </div>
      </div>

      {/* Bloc A droite */}
      <div className='w-full max-w-sm mx-auto flex flex-col gap-6'>
        <div className='border border-gray-300 rounded-md overflow-hidden hidden md:block shadow-lg'>
          <div className='bg-gray-200 border-b border-gray-300 p-3'>
            <h3 className='text-gray-700'>Search</h3>
          </div>
          <div className='bg-white p-4'>
            <div className='flex border border-gray-300 rounded-md overflow-hidden'>
              <input 
                type="text"
                placeholder='Enter search term...'
                className='flex-grow p-2 outline-none'
              />
              <button className='bg-primary text-white px-4 py-2'>
                Go!
              </button>
            </div>
          </div>
        </div>

        <div className='border border-gray-300 rounded-md overflow-hidden hidden md:block shadow-lg'>
          <div className='bg-gray-200 border-b border-gray-300 p-3'>
            <h3 className='text-gray-700'>Category</h3>
          </div>
          <div className='bg-white p-4 flex flex-row justify-around'>
            {/* Sample Categories */}
            <div className='flex flex-col gap-2'>
              <Link href="#" className='hover:underline text-primary'>Category 1</Link>
              <Link href="#" className='hover:underline text-primary'>Category 2</Link>
              <Link href="#" className='hover:underline text-primary'>Category 3</Link>
            </div>
            <div className='flex flex-col gap-2'>
              <Link href="#" className='hover:underline text-primary'>Category 4</Link>
              <Link href="#" className='hover:underline text-primary'>Category 5</Link>
              <Link href="#" className='hover:underline text-primary'>Category 6</Link>
            </div>
          </div>
        </div>

        <div className='border border-gray-300 rounded-md overflow-hidden shadow-lg hidden md:block'>
          <div className='bg-gray-200 border-b border-gray-300 p-3'>
            <h3 className='text-gray-700'>Side Widget</h3>
          </div>
          <div className='bg-white p-4 flex flex-row justify-around'>
            <p>You can put anything you want inside of these side widgets. They are easy to use, and feature the Bootstrap 5 card component!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Block1;