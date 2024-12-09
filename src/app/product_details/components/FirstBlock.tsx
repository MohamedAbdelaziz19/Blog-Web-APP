import React from 'react';
import Image from 'next/image';
import { Product } from '@/public/data'; // Import the Product type

interface FirstBlockProps {
  products: Product[]; // Array of products passed as props
}

const FirstBlock: React.FC<FirstBlockProps> = ({ products }) => {
  return (
    <section className='centred py-8 flex flex-col items-center justify-center'>
      {products.map((product) => (
        <div key={product.id} className='flex flex-col md:flex-row items-center justify-center mb-8'>
          <div className="flex justify-center items-center centred">
            <Image
              alt={product.title} // Use product title for alt text
              src={product.imgSrc}
              className="max-w-[500px] rounded-xl"
              layout='responsive'
              width={500}
              height={200}
            />
          </div>
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h1 className="font-mono text-lg text-primary mt-2">RUSTIKA HOUSE</h1>
            <h2 className="font-bold text-2xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-4xl -mt-2 text-orange-400">
              {product.title} {/* Adjust as needed */}
            </h2>
            <p className="text-gray-600">
              {product.description} {/* Adjust as needed */}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FirstBlock;
