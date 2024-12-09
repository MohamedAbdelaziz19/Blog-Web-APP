import React from 'react';
import Image from 'next/image';
import { imageGAMME } from '@/public/data';
import Link from 'next/link';



function ParcourezLeGamme() {
  return (
    <section className='py-8 centred'>
      <div className='flex justify-center mb-8'>
        <h1 className='text-orange-400 text-4xl font-bold text-center'>PARCOUREZ LE GAMME</h1>
      </div>

      {/* Container for grid layout */}
      <div className='grid gap-4 grid-cols-2 md:grid-cols-3 h-full sm:h-full md:h-full lg:h-full xl:h-full'>
        {imageGAMME.map((image, index) => (
          <Link
            key={index}
            href="#"
            className={`group relative block bg-black rounded-xl overflow-hidden ${image.className} `}
          >
            <Image
              alt={image.alt}
              src={image.src}
              className="w-full h-full sm:h-96 md:h-96 lg:h-96 xl:h-96 object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />
            <div className="absolute inset-0 flex items-center">
              <div className="transform opacity-0 transition-all group-hover:opacity-100">
                <p className="text-md text-white">
                  <span className='text-[60px] font-bold opacity-50'>216</span><br />
                  {image.text}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ParcourezLeGamme;
