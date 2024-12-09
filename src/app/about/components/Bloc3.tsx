import React from 'react';
import { testimonials } from '@/public/data';

function Bloc3() {
  return (
    <section className='w-[95%] sm:w-[95%] md:w-[80%] lg:w-[80%] xl:w-[80%] 2xl:w-[80%] mx-auto py-8'>
      {/* Text Bloc */}
      <div className='flex flex-col justify-center gap-4'>
        <h1 className='text-orange-400 font-semibold text-2xl sm:text-2xl xl:text-5xl text-center'>Client Reviews</h1>
        <p className='text-center w-[95%] sm:w-[95%] md:w-[60%] mx-auto'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien et ex volutpat tincidunt eget at felis.
        </p>
      </div>

      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 py-8'>
  {testimonials.map((testimonial, index) => (
    <blockquote
      key={index}
      className="group flex flex-col md:flex-row items-center rounded-xl bg-white p-6 shadow-xl sm:p-8 transition duration-300 ease-in-out hover:bg-blue-500"
    >
      <img
        alt=""
        src={testimonial.image}
        className="w-20 h-20 rounded-full object-cover mr-6 mb-4 md:mb-0"
      />
      <div>
        <p className="mb-4 text-gray-700 text-center sm:text-center md:text-left transition duration-300 ease-in-out group-hover:text-white">
          {testimonial.text}
        </p>
        <div className="flex items-center gap-4">
          <div>
            <p className="mt-0.5 text-2xl font-bold text-gray-900 transition duration-300 ease-in-out group-hover:text-white">
              {testimonial.name}
            </p>
            <span className='text-[10px] transition duration-300 ease-in-out group-hover:text-white'>
              Regional Mobility Manager
            </span>
          </div>
          <div className="flex justify-end ml-auto gap-0.5 text-yellow-400">
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

export default Bloc3;
