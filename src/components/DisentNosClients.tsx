import React from 'react';
import { testimonials,headers,navLinks } from '@/public/data';
import Link from 'next/link';

const visibleTestimonialIndex = 0; 

const DisentNosClients: React.FC = () => {
  return (
    <section className='flex flex-col lg:flex-row gap-8 px-4 centred'>
      <div className='flex flex-col w-full lg:w-1/2 justify-center gap-2'>
        {headers.map((header, index) => (
          <h1 key={index} className={header.className}>{header.text}</h1>
        ))}
        <p>Fusce venenatis tellus a felis scelerisque, non pulvinar est pellentesque.</p>
        <div className="flex gap-8 justify-center sm:justify-center md:justify-start lg:justify-start ">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              className="inline-block rounded-full border border-primary p-3 text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring active:bg-primary"
              href={link.href}
            >
              <span className="sr-only">{link.srText}</span>
              <svg
                className="h-5 w-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={link.d}
                />
              </svg>
            </Link>
          ))}
        </div>
      </div>

      <div className='flex justify-center w-full lg:w-1/2'>
      {testimonials.slice(visibleTestimonialIndex, visibleTestimonialIndex + 1).map((testimonial, index) => (
        <blockquote key={index} className="rounded-xl bg-white p-6 shadow-xl sm:p-8">
          <img src="/img/PNG/deuxcote.png" alt="deux cote" className='my-2' />
          <p className="mb-4 text-gray-700">
            {testimonial.text}
            <span className="flex items-center my-3">
              <span className="h-px flex-1 bg-gray-500"></span>
            </span>
          </p>
          <div className="flex items-center gap-4">
            <img
              alt=""
              src={testimonial.image}
              className="size-14 rounded-full object-cover"
            />
            <div className='flex flex-col sm:flex-col md:flex-row'>
              <p className="mt-0.5 text-lg font-medium text-gray-900">{testimonial.name}</p>
              <div className="flex justify-end md:ml-64 lg:ml-10 xl:ml-52 2xl:ml-96 md:mt-2 lg:mt-2 xl:mt-2 gap-0.5 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </blockquote>
      ))}
    </div>

    </section>
  );
}

export default DisentNosClients;
