
import React from 'react';
import Image from 'next/image.js';
import { imagesCOLL } from '@/public/data'; // Update this path
import Link from 'next/link';



function DernierCollection() {
  return (
    <section className="flex flex-col gap-8 sm:gap-12 lg:gap-16 py-8 items-center ">
      <div className="flex flex-col items-center gap-8 w-[90%]">
        <header className="text-center">
          <h2 className="text-xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-orange-400">
            DERNIER COLLECTION
          </h2>
          <div className="flex justify-center">
            <p className="max-w-md text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </header>

        {[0, 1].map((i) => (
          <ul key={i} className="grid gap-4 grid-cols-2 lg:grid-cols-4 w-full centred">
            {imagesCOLL.slice(i * 4, (i + 1) * 4).map((imgSrc, index) => (
              <li key={index} className="h-[200px] sm:h-[200px] md:h-[400px] lg:h-[400px] xl:h-[400px]">
                <Link href="#" className="group block overflow-hidden h-full">
                  <Image
                    src={imgSrc}
                    alt={`Port-${index + 1}`}
                    className="rounded-xl w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </Link>
              </li>
            ))}
          </ul>
        ))}

        <div className="flex flex-col md:flex-row justify-between items-center text-center text-gray-500 gap-12 w-full sm:w-full md:w-[70%] lg:w-[70%] xl:w-[70%] ">
          <p className="flex-1 mx-2 sm:mx-2 md:mx-2 lg:mx-8 xl:mx-20 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
            dicta incidunt est ipsam, officia dolor fugit natus? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
      
            
          </p>
          <a
            
            href="#"
            className="rounded-full bg-primary px-14 sm:px-14 md:px-16 lg:px-16 xl:px-16 py-3 text-sm font-medium text-white transition hover:bg-blue-300 focus:outline-none"
          >
            EXPLOREZ MAINTENANT
          </a>
        </div>
      </div>
    </section>
  );
}

export default DernierCollection;
