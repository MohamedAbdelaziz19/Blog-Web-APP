"use client";

import { Link } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
 

<section className="py-8">
  <div className=' w-[90%] sm:w-[90%]  mx-auto '>
  <h1 className=' py-6 pl-0 sm:pl-0 md:pl-8 lg:pl-8 xl:pl-8 text-center sm:text-center md:text-left lg:text-left xl:text-left font-medium text-2xl bg-primary rounded-tr-xl rounded-tl-xl text-white '>
    Get In Touch With Us</h1>
  </div>
  <div className="mx-auto w-[90%] sm:w-[90%]   px-4 py-16 sm:px-6 xl:px-8 border-r-2 border-l-2 border-b-2">
    <div className="grid grid-cols-1 gap-x-16 gap-y-8 xl:grid-cols-5">
      <div className="xl:col-span-2 xl:py-12">
      <div className="border-b-2 pb-8">
        <h1 className="max-w-xl text-lg">
         Phone Number </h1>
         <span className='font-light text-gray-400' >+216 12 345 678</span> 
         </div>
        <div className="mt-8 border-b-2 pb-8">
          <Link href="#" className="max-w-xl text-lg"> Email Address </Link><br />
          <span className='font-light text-gray-400' >nameproject@example.com</span> 
          </div>
          <div className="mt-8">
          <Link className="max-w-xl text-lg">Location</Link><br />
          <span className='font-light text-gray-400' >Tebouba ,Monastir , Tunisie</span> 
          </div>
      </div>

      <div className="rounded-xl xl:col-span-3 xl:p-12">
        <div className='mb-12'>
          <h1 className='text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl pb-4'>Send us a message</h1>
          <p className='font-light text-gray-400 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. </p>
        </div>
        <form action="#" className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="sr-only" htmlFor="name">Name</label>
            <input
              className="w-full rounded-full border-2 border-primary py-3 px-3 text-sm"
              placeholder="Name"
              type="text"
              id="name"
            />
          </div>
            <div>
              <label className="sr-only" htmlFor="email">Email</label>
              <input
                className="w-full rounded-full border-2 border-primary p-3 text-sm"
                placeholder="Email address"
                type="email"
                id="email"
              />
            </div>
            
            <div>
              <label className="sr-only" htmlFor="phone">Phone</label>
              <input
                className="w-full rounded-full border-2 border-primary p-3 text-sm"
                placeholder="Phone Number"
                type="tel"
                id="phone"
              />
            </div>
         
          <div>
          <div>
              <label className="sr-only" htmlFor="Subject">Subject</label>
              <input
                className="w-full rounded-full border-2 border-primary p-3 text-sm"
                placeholder="Subject"
                type="text"
                id="subject"
              />
            </div>
          </div>
          </div>

          <div>
            <label className="sr-only" htmlFor="message">Message</label>

            <textarea
              className="w-full rounded-xl border-2 border-primary p-3 text-sm"
              placeholder="Message"
              
              id="message"
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="rounded-full bg-orange-400 px-6  py-3 font-medium text-white sm:w-auto"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
  );
};

export default Contact;
