'use client'
import { CldImage } from 'next-cloudinary';
import React from 'react';

import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <section className='centred py-8 flex items-center gap-8 sm:gap-8 md:gap-16 lg:gap-16 xl:gap-16 flex-col justify-center md:flex-row'>
        {/* Image Section */}
        
        <CldImage
         width="960"
         height="600"
         src="https://res.cloudinary.com/dzo2bvw5a/image/upload/v1722931963/Rustika-House/ntvfij8tpd8377qlq47f.jpg"
         sizes="100vw"
         alt="HeroImg"
         className="rounded-xl w-full h-auto sm:h-full sm:w-auto md:w-full md:h-full lg:max-w-[1200px] xl:max-w-[2000px] 2xl:maw-w-[1200px] object-cover"
/>

        {/* Text Content Section */}
        <div className="flex flex-col gap-4  md:text-left sm:text-left w-full sm:w-full md:w-[50%] lg:w-[40%]  xl:w-[60%] 2xl:w-full ">
          <h1 className="font-mono  lg:text-lg md:text-lg sm:text-sm text-primary">BIENVENUE SUR RUSTIKA HOUSE</h1>
          <h2 className="lg:text-4xl md:text-4xl sm:text-2xl font-bold  text-orange-400">
            CONSTRUISEZ VOTRE RÊVE ÉLÉGAN TRADIIONNELLE PORTE
          </h2>

          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur
            quis eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt?
            Molestiae eius quidem quam repellat.
          </p>
          
          <div className="flex gap-4 justify-center sm:justify-center md:justify-center lg:justify-center xl:justify-center">
          <Link
              href="#"
              className="rounded-full text-center bg-white px-6 sm:px-6 md:px-16 lg:px-8 xl:px-8 2xl:px-16 py-3 sm:py-3 md:py-3 lg:py-2 xl:py-3 text-sm font-medium text-[#054C73] transition hover:bg-blue-100 focus:outline-none border border-[#054C73]"
            >
              CONTACTER NOUS
            </Link>  
            <Link
              href="#"
              className="inline-block flex-initial rounded-full bg-primary px-6 sm:px-6  md:px-8 lg:px-8 xl:px-8 2xl:px-16 py-3 sm:py-3 md:py-5 lg:py-4 xl:py-3 text-sm font-medium text-white transition hover:bg-blue-300 focus:outline-none"
            >
              APPELLER
            </Link>
          </div>
        </div>

    </section>



   
  );
};

export default HeroSection;
