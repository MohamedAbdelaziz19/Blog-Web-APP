"use client";

import React from 'react';
import Image from 'next/image';
import { Product } from '@/public/data'; // Import the Product type
import { Link } from 'lucide-react';

interface ContactBlockProps {
  products: Product[]; // Array of products passed as props
}

const ContactBlock: React.FC<ContactBlockProps> = ({ products }) => {
  return (
    <section className='centred py-4 flex flex-col items-center justify-center'>
      {products.map((product) => (
        <div key={product.id} className='flex flex-col md:flex-row centred gap-12 items-center w-full'>
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

          {/* Text Content Section */}
          <div className="flex flex-col gap-4 text-center md:text-left w-full md:w-1/2">
            <h2 className="font-bold text-xl sm:text-xl md:text-4xl lg:text-4xl xl:text-4xl -mt-2 text-orange-400 text-center">
               Contacte Nous
            </h2>
            <p className="text-gray-600 text-left">
              {product.description} {/* Use product description */}
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="#"
                className="rounded-full bg-primary px-12 sm:px-10 py-3 text-sm font-medium text-white transition hover:bg-blue-400 focus:outline-none"
              >
                APPELLER NOUS!
              </Link>
              <Link
                href="#"
                className="rounded-full bg-white px-10 py-3 text-sm font-medium text-primary transition hover:bg-blue-100 focus:outline-none border border-blue-400"
              >
                ESTIMATION GRATUITE !
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ContactBlock;
