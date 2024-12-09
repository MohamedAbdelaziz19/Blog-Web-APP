import React from 'react';
import Image from 'next/image';
import { AppelezImg } from '@/public/img/image'; // Adjust the path as necessary
import Link from 'next/link';

function AppelezNousMaintenant() {
  return (
    <section className="flex flex-col items-center justify-center py-8 sm:py-12 lg:py-16 bg-gray-100">
      <div className="w-4/5 max-w-screen-xl flex flex-col lg:flex-row-reverse gap-8 lg:gap-20">
        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full flex-shrink-0">
          <Image
            alt="img"
            src={AppelezImg}
            className="object-cover rounded-xl "
          />
        </div>
        <div className="flex flex-col justify-center gap-6 lg:py-36 lg:w-1/2">
          <h2 className="text-3xl font-bold sm:text-4xl text-orange-400">APPELEZ NOUS MAINTENANT</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
            eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
            quidem quam repellat.
          </p>
          <Link
            href="#"
            className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-400 flex items-center justify-center"
            style={{ maxWidth: '300px' }}
          >
            EXPLOREZ MAINTENANT
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AppelezNousMaintenant;
