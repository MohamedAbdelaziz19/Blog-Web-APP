import React from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
  return (
    <div className="hidden md:flex md:items-center md:justify-center md:flex-grow">
      <nav aria-label="Global">
        <ul className="flex items-center gap-6 text-sm">
          <li>
            <Link className="text-gray-500 transition hover:text-primary" href="/">Home</Link>
          </li>
          <li>
            <Link className="text-gray-500 transition hover:text-primary" href="/about">About Us</Link>
          </li>
          <li>
            <Link className="text-gray-500 transition hover:text-primary" href="/blog">Blog</Link>
          </li>
          <li>
            <Link className="text-gray-500 transition hover:text-primary" href="/product">Products</Link>
          </li>
          <li>
            <Link className="text-gray-500 transition hover:text-primary" href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
