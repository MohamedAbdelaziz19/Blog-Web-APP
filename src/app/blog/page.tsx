import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineHeart, AiOutlineComment } from 'react-icons/ai';
import { FaArrowRight } from 'react-icons/fa';
import connectToDatabase from '../../lib/db';
import Blog from '../../models/Blog';

async function fetchBlogs() {
  try {
    await connectToDatabase();
    const blogs = await Blog.find({}).sort({ date: -1 }).exec();
    return blogs;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

const Page: React.FC = async () => {
  const blogs = await fetchBlogs();

  return (
    <section className='w-[95%] mx-auto sm:w-[95%] md:w-[80%] lg:w-[80%] xl:w-[80%] 2xl:w-[80%] flex flex-col gap-2 py-16'>
      <h1 className='text-center text-2xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl text-orange-400 font-bold'>DECOUVRE NOS BLOG</h1>
      <h2 className='text-center text-gray-400 font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
      
      <div className='grid gap-2 sm:gap-2 md:gap-6 lg:gap-6 xl:gap-6 2xl:gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3'>
        {blogs.map((blog) => (
          <div 
            key={String(blog._id)} // Cast _id to string
            className={`w-full mb-2 overflow-hidden block rounded-xl border shadow-xl transition hover:border-orange-400/10 hover:shadow-orange-400/10 flex-1`}
          >
            <Link href={`/blog_details/${blog._id}`} className="relative block">
              <Image 
                src={blog.image} 
                width={500} height={100}
                alt="Blog Image" 
                className="w-full h-32 sm:h-40 md:h-72 object-cover mb-4"
              />
            </Link>
            <div className="flex flex-col gap-1 bg-white rounded-xl p-4 h-42 -mt-4">
              <Link href={`/blog_details/${blog._id}`} className="text-[10px] sm:text-[10px] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[15px] text-orange-300">{blog.category}</Link>
              <div className="flex items">
                <Link href={`/blog_details/${blog._id}`} className="text-sm sm:text-sm md:text-xl font-semibold text-gray-800 drop-shadow-xl truncate">{blog.title}</Link>
                <FaArrowRight className="text-black ml-3 -rotate-45" />
              </div>
              <p className="text-xs sm:text-sm text-gray-400 mb-0 sm:mb-0 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2 line-clamp-2">{blog.description}</p>
              <div className="flex items-center gap-2 text-xs sm:text-sm -mx-2 sm:-mx-2 md:-mx-0 lg:-mx-0 xl:-mx-0 2xl:-mx-0">
                <div className="flex items-center gap-1">
                  <AiOutlineHeart className="text-[15px] sm:text-[15px] md:text-[20px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px]"/>
                  <Link href={`/blog_details/${blog._id}`} className="text-gray-800 text-[10px] sm:text-[10px] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[15px]">{blog.likes}</Link>
                  <p className="text-gray-800 text-[10px] sm:text-[10px] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[15px]">likes</p>
                </div>
                <div className="flex items-center gap-1">
                  <AiOutlineComment className="text-[15px] sm:text-[15px] md:text-[20px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px]" />
                  <Link href={`/blog_details/${blog._id}`} className="text-gray-800 text-[10px] sm:text-[10px] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[15px]"></Link>
                  <p className="text-gray-800 text-[10px] sm:text-[10px] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[15px]">comments</p>
                </div>
              </div>
              <Link href={`/blog_details/${blog._id}`} className="hidden md:flex items-center gap-2 py-2 overflow-hidden">
                <Image src={blog.userImg} alt="User Image" width={30} height={30} className="rounded-full" />
                <h3 className="text-sm sm:text-base text-gray-700 font-bold">{blog.userName}</h3>
                {/*<span className="text-xs sm:text-sm text-gray-400">{blog.date}</span>*/}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page;
