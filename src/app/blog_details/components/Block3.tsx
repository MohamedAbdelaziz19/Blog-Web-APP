import React from 'react';
import Image from 'next/image';
import { IBlog } from '@/src/models/Blog'; // Import the Blog interface from your models

interface Block3Props {
  blog: IBlog; // Use the Blog type here
}

const Block3: React.FC<Block3Props> = ({ blog }) => {
  return (
    <section className='w-[95%] sm:w-[95%] md:w-[80%] lg:w-[80%] xl:w-[80%] 2xl:w-[75%] mx-auto py-8 flex gap-4 sm:gap-4 md:gap-2 lg:gap-2 xl:gap-2 flex-col md:flex-row'>
      {/* Bloc A gauche */}
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <h1 className='font-bold text-2xl sm:text-2xl md:text-4xl text-orange-400 mb-2'>{blog.title}</h1>
        </div>
        <div>
          <p className='w-full sm:w-full md:w-[70%]'>{blog.description}</p>
        </div>
        <div className='w-full sm:w-full md:w-[70%]'>
          <Image src={blog.image} alt={blog.title} className='rounded-md' width={500} height={100} /> {/* Added height for the Image */}
        </div>
      </div>
    </section>
  );
}

export default Block3;
