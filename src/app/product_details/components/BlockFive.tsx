"use client";

import React from 'react';
import Image from 'next/image';
import { Product } from '@/public/data'; // Import the Product type

interface BlockFiveProps {
  products: Product[]; // Array of products passed as props
}

const BlockFive: React.FC<BlockFiveProps> = ({ products }) => {
  return (
    <section className='centred py-8 flex flex-col items-center justify-center'>
      {products.map((product) => (
        <div key={product.id} className='flex flex-col md:flex-row centred gap-12 items-center w-full'>
          {/* Text Content Section */}
          <div className="flex flex-col gap-4 text-center md:text-left w-full md:w-1/2">
            <h2 className="font-bold text-xl sm:text-xl md:text-4xl lg:text-4xl xl:text-4xl -mt-2 text-orange-400">
              {product.title} {/* Use product title */}
            </h2>
            <p className="text-gray-600">
              {product.description} {/* Use product description */}
            </p>
          </div>
          <div className="flex justify-center items-center w-full md:w-1/2">
            <Image
              alt={product.title} // Use product title for alt text
              src={product.imgSrc}
              className="w-full rounded-xl"
              layout='responsive'
              width={400}
              height={200}
            />
          </div>
        </div>
      ))}
      <p className="text-gray-600 centred mt-4 text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur
        quis eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt?
        Molestiae eius quidem quam repellat.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur
        quis eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt?
        Molestiae eius quidem quam repellat.
      </p>
    </section>
  );
}

export default BlockFive;
