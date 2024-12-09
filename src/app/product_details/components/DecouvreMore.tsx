"use client";
import React from 'react';
import { AiOutlineHeart, AiOutlineComment } from 'react-icons/ai';
import Image from 'next/image';
import { DecouvreMore as DecouvreMoreData } from '@/public/data'; // Import data
import Link from 'next/link';

const DecouvreMore: React.FC = () => {
  return (
    <section className='py-8 flex flex-col items-center justify-center gap-8 xl:w-full md:w-full sm:w-full'>
      <h1 className='font-bold text-xl sm:text-xl md:text-4xl lg:text-4xl xl:text-4xl -mt-2 text-orange-400'>
        DECOUVRE MORE ...
      </h1>
      {/* DecouvreMore Blog */}
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 centred">
        {DecouvreMoreData.map((product, index) => (
          <div
            key={index}
            className="sm:w-1/2 md:w-[85%] lg:w-[85%] xl:w-[85%] mb-8 overflow-hidden flex flex-col"
          >
            <div className="relative">
              <Image
                src={product.imgSrc}
                alt="Product"
                className="w-full h-52 sm:h-52 md:h-96 lg:h-96 xl:h-96 object-cover rounded-xl mb-4"
              />
            </div>
            <div className="flex flex-col bg-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <AiOutlineHeart className="text-[20px] sm:text-[20px] md:text-[25px] lg:text-[25px] xl:text-[25px]" />
                  <Link href="#" className="text-gray-400 text-[12px] sm:text-[12px] md:text-[15px] lg:text-[15px] xl:text-[15px] truncate">
                    {product.likes} likes
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <AiOutlineComment className="text-[20px] sm:text-[20px] md:text-[25px] lg:text-[25px] xl:text-[25px]" />
                  <Link href="#" className="text-gray-400 text-[12px] sm:text-[12px] md:text-[15px] lg:text-[15px] xl:text-[15px] truncate">
                    {product.comments} comments
                  </Link>
                </div>
              </div>
              <h1 className="text-xl font-bold text-blue-500 drop-shadow-xl mb-2 truncate">
                {product.title}
              </h1>
              <p className="text-xs sm:text-sm text-gray-400 mb-4 truncate">
                {product.description}
              </p>
              <div className="mx-auto w-[90%] sm:w-[90%] md:w-[50%] lg:w-[50%] xl:w-[50%] text-center rounded-full bg-white py-2 text-sm font-medium text-primary transition hover:bg-blue-100 focus:outline-none border border-primary shadow-md">
                <Link href={`/product-details/${product.id}`}>SAVOIR PLUS</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DecouvreMore;
