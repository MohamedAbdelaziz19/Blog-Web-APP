import React from 'react';
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';

function Logo(){
    return(
  <div className="md:flex md:items-center md:gap-12">
    <Link className="block text-primary" href="/">
      <span className="sr-only">Home</span>
      <CldImage src={"https://res.cloudinary.com/dzo2bvw5a/image/upload/v1722931867/Rustika-House/vbeozjtwhxqffwqxnuyv.png"} alt="Logo" width={140} height={140} />
    </Link>
  </div>
);
}
export default Logo;
