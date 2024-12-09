import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';
import { Logo3 } from '../../public/img/image';
import { quickLinks,helpfulLinks } from '@/public/data';
import Link from 'next/link';

const contactItems = [
  {
    href: "#",
    icon: <MapPin className="w-6 h-6 text-white" />,
    text: "Teboulba, Monastir, Tunisie",
  },
  {
    href: "tel:+21612345678",
    icon: <Phone className="w-6 h-6 text-white" />,
    text: " +(216) 12 345 678 ",
  },
  {
    href: "mailto:rustikahouse@gmail.com",
    icon: <Mail className="w-6 h-6 text-white" />,
    text: " rustikahouse@gmail.com",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white p-2 mt-8">
      <div className="mx-0 sm:mx-0 md:mx-0 lg:mx-0 xl:mx-56 max-w-screen-xl px-4 py-2 sm:py-2 md:py-8 lg:py-16 xl:py-16 sm:px-6 lg:px-8 flex flex-col justify-center ">
        <div className="lg:flex lg:items-start lg:gap-8">
          <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-4 lg:gap-y-12">
            <div className="col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 flex flex-col justify-center w-72 sm:w-72 md:w-80 lg:w-96 xl:w-96 truncate line-clamp-1 centred">
              <div className="text-white centred">
                <Image src={Logo3} alt="logo" />
              </div>
              <ul className="mt-6 space-y-4 text-sm centred">
                {contactItems.map((item, index) => (
                  <li key={index}>
                    <span  className="text-white transition hover:opacity-75">
                      <span className="mt-2 text-[15px] text-sm">
                        <span  className="hover:underline text-white text-sm flex items-center gap-2  ">
                          {item.icon}
                          {item.text}
                        </span>
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center row col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-2">
              <div className="flex flex-row gap-16">
                <div className="row-span-4 sm:row-span-2">
                  <p className="font-medium text-white">Quick Links</p>
                  <ul className="mt-6 space-y-4 text-sm">
                    {quickLinks.map((link, index) => (
                      <li key={index}>
                        <Link href={link.href} className="text-white transition hover:opacity-75">
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="row-span-4 sm:row-span-2">
                  <p className="font-medium text-white">Helpful Links</p>
                  <ul className="mt-6 space-y-4 text-sm">
                    {helpfulLinks.map((link, index) => (
                      <li key={index}>
                        <Link href={link.href} className="text-white transition hover:opacity-75">
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1 flex flex-col justify-center w-80 sm:w-80 md:w-60 lg:w-60 xl:w-80 centred">
              <p className="font-medium text-white text-center truncate">Abonnez-vous à notre newsletter!</p>
              <ul className="mt-6 space-y-4 text-sm">
                <div className="row-span-2 lg:row-span-3 lg:flex lg:items-end">
                  <form className="w-full">
                    <label htmlFor="UserEmail" className="sr-only">Email</label>
                    <div className="flex border border-white px-4 py-2 focus-within:ring sm:flex sm:items-center sm:gap-4 bg-white rounded-full">
                      <input
                        type="email"
                        id="UserEmail"
                        placeholder="john@rhcp.com"
                        className="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm"
                      />
                      <Link
                        className="-mr-2 inline-block rounded-full border border-orange-400 p-3 text-orange hover:bg-orange-100 bg-orange-400 hover:text-orange-400 text-white focus:outline-none focus:ring active:bg-orange-400"
                        href="#"
                      >
                        <span className="sr-only">Next Link Droite</span>
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
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </form>
                </div>
              </ul>
              <div className="text-center mt-4 flex flex-col justify-start">
                <p className="text-white transition hover:opacity-75">Suivez-nous sur</p>
                <div className="flex gap-6 mt-2 justify-center">
                  <div>
                    <Link
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      className="text-white transition hover:opacity-75"
                    >
                      <span className="sr-only">Facebook</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      className="text-white transition hover:opacity-75"
                    >
                      <span className="sr-only">Instagram</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06v.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.067-.06-1.407-.06-4.123v-.08c0-2.643.012-2.987.06-4.043.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.201 2.013 9.555 2 11.985 2h.08zm-.081 1.8h-.072c-2.418 0-2.748.012-3.791.06-.893.04-1.375.18-1.698.299-.427.166-.732.366-1.05.683a3.093 3.093 0 00-.683 1.05c-.12.324-.259.805-.299 1.698-.048 1.043-.06 1.373-.06 3.791v.144c0 2.418.012 2.748.06 3.791.04.893.18 1.375.299 1.698.166.427.366.732.683 1.05.318.317.623.517 1.05.683.324.12.805.259 1.698.299 1.043.048 1.373.06 3.791.06h.144c2.418 0 2.748-.012 3.791-.06.893-.04 1.375-.18 1.698-.299a3.097 3.097 0 001.05-.683 3.097 3.097 0 00.683-1.05c.12-.324.259-.805.299-1.698.048-1.043.06-1.373.06-3.791v-.144c0-2.418-.012-2.748-.06-3.791-.04-.893-.18-1.375-.299-1.698a3.097 3.097 0 00-.683-1.05 3.097 3.097 0 00-1.05-.683c-.324-.12-.805-.259-1.698-.299-1.043-.048-1.373-.06-3.791-.06h-.072zm0 4.377a5.121 5.121 0 110 10.242 5.121 5.121 0 010-10.242zm0 1.8a3.321 3.321 0 100 6.642 3.321 3.321 0 000-6.642zm5.193-1.25a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      className="text-white transition hover:opacity-75"
                    >
                      <span className="sr-only">Twitter</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M8.29 20c7.547 0 11.675-6.255 11.675-11.675 0-.176 0-.353-.012-.53A8.35 8.35 0 0022 5.92a8.19 8.19 0 01-2.357.646A4.11 4.11 0 0021.448 4.2a8.233 8.233 0 01-2.606.996A4.107 4.107 0 0015.85 3a4.106 4.106 0 00-4.093 4.093c0 .32.036.637.105.941A11.664 11.664 0 013 4.702a4.093 4.093 0 001.268 5.463 4.068 4.068 0 01-1.86-.514v.052a4.1 4.1 0 003.292 4.017 4.098 4.098 0 01-1.853.07 4.106 4.106 0 003.834 2.85A8.233 8.233 0 012 18.407 11.616 11.616 0 008.29 20"
                          clipRule="evenodd"
                        />
                        </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </footer>
  );
};

export default Footer;