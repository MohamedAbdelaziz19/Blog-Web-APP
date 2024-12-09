"use client";

import React from 'react';
import Image from 'next/image';
import { Product } from '@/public/data'; // Import the Product type

interface SecondBlockProps {
  products: Product[]; // Array of products passed as props
}

const SecondBlock: React.FC<SecondBlockProps> = ({ products }) => {
  return (
    <section className='centred py-8 flex flex-col items-center justify-center'>
      {products.map((product) => (
        <div key={product.id} className='flex flex-col items-center justify-center gap-8 py-8 w-full'>
          <div className="flex flex-col gap-4 text-center">
            <h2 className="font-bold text-xl sm:text-xl md:text-4xl lg:text-4xl xl:text-4xl -mt-2 text-orange-400">
            Découvre Notre Produit
            </h2>
            <p className="text-gray-600 centred">
              {product.description} {/* Use product description */}
            </p>
          </div>

          <div className='flex flex-row md:flex-row items-center justify-center gap-6 w-full'>
            <div className="flex justify-center items-center  w-full md:w-1/3">
              <Image
                alt={product.title} // Use product title for alt text
                src={product.imgSrc}
                className="w-full rounded-xl"
                layout='responsive'
                width={500}
                height={200}
              />
            </div>
            <div className="flex justify-center items-center  w-full md:w-1/3">
              <Image
                alt={product.title} // Use product title for alt text
                src={product.imgSrc}
                className="w-full rounded-xl"
                layout='responsive'
                width={500}
                height={200}
              />
            </div>
          </div>

          <p className="text-gray-600 centred mt-4 text-center">
            {product.description} {/* Use product description */}
          </p>
        </div>
      ))}
    </section>
  );
}

export default SecondBlock;
