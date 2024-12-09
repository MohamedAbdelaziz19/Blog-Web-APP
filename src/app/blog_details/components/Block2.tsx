import React from 'react';
import { IBlog } from '@/src/models/Blog'; // Ensure this is the correct path
import Image from 'next/image';

interface Block2Props {
  blog: IBlog;
}

const Block2: React.FC<Block2Props> = ({ blog }) => {
  // Destructure AddMoreBlog from the blog prop
  const { AddMoreBlog } = blog;


  return (
    <section className='w-[95%] sm:w-[95%] md:w-[80%] lg:w-[80%] xl:w-[80%] 2xl:w-[75%] mx-auto py-8 flex flex-col gap-8'>
      {AddMoreBlog && AddMoreBlog.length > 0 ? (
        AddMoreBlog.map((item, index) => (
          <div key={index} className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <h1 className='font-bold text-2xl sm:text-2xl md:text-4xl text-orange-400 mb-2'>
                {item.title}
              </h1>
            </div>
            <div>
              <p className='w-full sm:w-full md:w-[70%]'>
                {item.description || 'No description available'}
              </p>
            </div>
            <div className="relative md:h-64  mb-6"> {/* Maintain aspect ratio */}
              {item.image ? (
                <Image
                  className="w-full h-full rounded shadow-lg "
                  layout="fill"
                  objectFit="cover"
                  alt={`Image ${index}`}
                  src={item.image}
                  sizes="(max-width: 700px) 300px, 700px"
                  loading="eager"
                  decoding="async"
                />
              ) : (
                <p>No image available</p> // Fallback content
              )}
            </div>
          </div>
        ))
      ) : (
        <p>No additional blog entries available.</p>
      )}
    </section>
  );
}

export default Block2;
