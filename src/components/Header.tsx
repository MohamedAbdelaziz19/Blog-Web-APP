"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Logo from './Logo';
import Link from 'next/link';
import SignIn from '@/src/app/(auth)/signin/page'; // Ensure the path is correct
import SignUp from '@/src/app/(auth)/signup/page';
import InfoBar from './InfoBar';
import { User, Shield, Edit, LogOut,LayoutDashboard } from 'lucide-react';
import NavBar from './Navbar';

const Header: React.FC = () => {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [isModalRegOpen, setIsModalRegOpen] = useState(false); // Modal state
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement>(null); // Ref for modal container

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (modalRef.current && !modalRef.current.contains(target)) {
        setIsDropdownOpen(false);
        setIsMobileDropdownOpen(false);
        setIsModalOpen(false); // Close modal when clicking outside
        setIsModalRegOpen(false); // Close modal when clicking outside
      }
    };


    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (session) {
      setIsModalOpen(false); // Close modal on successful sign-in
      setIsModalRegOpen(false); // Close registration modal as well
    }
  }, [session]);

  const handleNavigation = (url: string) => {
    try {
      router.push(url);
      setIsMenuOpen(false); // Optionally close menu after navigation
    } catch (err) {
      console.error('Navigation error:', err);
    }
  };

  // Toggle the main menu for desktop view
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
    setIsMobileDropdownOpen(false); // Close mobile dropdown when menu opens/closes
  };

  // Toggle the dropdown menu for user options
  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  // Close the dropdown menu
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // Toggle the dropdown menu for mobile view
  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(prev => !prev);
  };

  // Handle user sign-out
  const handleSignOut = async () => {
    await signOut();
    router.push('/signin');
    closeDropdown(); // Close dropdown when signing out
  };

  // Open or close modal
  const toggleModal = () => {
    setIsModalOpen(prev => !prev);
  };

  
  // Open or close modal Reg
  const toggleModalReg = () => {
    setIsModalRegOpen(prev => !prev);
  };

  return (
    <header className="bg-white">
      {/* InfoBar */}
      <InfoBar/>
      {/* NavBar */}
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-1 lg:px-8 flex h-16 my-2 items-center justify-between">
      {/* Logo */}
      <Logo/>
        {!session ? (
        <button
                  onClick={toggleModal} // Open modal
                  className="rounded-full bg-primary px-8 py-2 ml-6 text-sm font-medium text-white shadow transition hover:bg-primary md:hidden lg:hidden xl:hidden 2xl:hidden"
                >
                  Login
                </button>
        ):(<div></div>)}
        {/* Navbar*/}
        <NavBar/>
        <div className="hidden md:flex md:items-center gap-4 sm:gap-0 md:gap-0 lg:gap-2 xl:gap-4">
          {!session ? (
            <>
              <div className="sm:flex gap-4 sm:gap-4 md:gap-1 lg:gap-1">
                <button
                  onClick={toggleModal} // Open modal
                  className="rounded-full bg-primary px-10 py-2.5 text-sm font-medium text-white shadow transition hover:bg-primary"
                >
                  Login
                </button>
              </div>
              <div className="sm:flex sm:gap-4">
                <button
                   onClick={toggleModalReg} // Open modal
                  className="rounded-full px-10 py-2.5 text-sm font-medium text-primary transition hover:bg-gray-200"
                >
                  Register
                </button>
              </div>
            </>
          ) : (
            <div className="relative dropdown">
              <button
                onClick={toggleDropdown}
                className="flex items-center rounded-full px-10 py-2.5 text-sm font-medium text-primary transition hover:bg-gray-200"
              >
                <FontAwesomeIcon icon={faUser} className="text-xl" />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg ">
                <ul className="flex flex-col">
                  <li className="flex items-center">
                    <User className="w-4 h-4 text-gray-800 ml-2" />
                    <span className="block px-4 py-2 text-gray-800">{session.user?.name}</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-4 h-4 text-gray-800 ml-2" />
                    <span className="block px-4 py-2 text-gray-800">Role: {session.user?.role}</span>
                  </li>
                  {session.user?.role === 'SuperAdmin' && (
                      <li className="flex items-center">
                        <Link href="/SuperAdmin" className="flex items-center">
                        <LayoutDashboard className="w-4 h-4 text-gray-800 ml-2" />
                          <span className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={closeDropdown}>
                            Dashboard
                          </span>
                        </Link>
                      </li>
                    )}
                  <li className="flex items-center">
                    <Link href="/profile" className="flex items-center">
                      <Edit className="w-4 h-4 text-gray-800 ml-2" />
                      <span className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={closeDropdown}>
                        Profile
                      </span>
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <Link href="/" className="flex items-center">
                      <LogOut className="w-4 h-4 text-gray-800 ml-2" />
                      <span
                        onClick={handleSignOut}
                        className="block w-full px-4 py-2 text-gray-800 hover:bg-gray-100 text-left"
                      >
                        Sign Out
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
              )}
            </div>
          )}
        </div>
        <div className="flex md:hidden items-center justify-center">
          <button onClick={toggleMenu} className="p-2 text-blue-600 transition hover:text-primary text-3xl dropdown">
            <FontAwesomeIcon icon={faBars} />
          </button>
          {session && (
            <div className="relative dropdown">
              <button
                onClick={toggleMobileDropdown}
                className="rounded-full bg-white border border-primary px-2.5 py-2.5 text-sm font-medium text-primary transition hover:bg-gray-200 ml-4"
              >
                <FontAwesomeIcon icon={faUser} className="text-xl" />
              </button>
              {isMobileDropdownOpen && (
              <div className="absolute left-1/4 transform -translate-x-[80%] mt-2 w-48 bg-white border border-gray-200 shadow-lg">
  <ul className="flex flex-col">
    <li className="flex items-center">
      <User className="w-4 h-4 text-gray-800 ml-2" />
      <span className="block px-4 py-2 text-gray-800">{session.user?.name}</span>
    </li>
    <li className="flex items-center">
      <Shield className="w-4 h-4 text-gray-800 ml-2" />
      <span className="block px-4 py-2 text-gray-800">Role: {session.user?.role}</span>
    </li>
    {session.user?.role === 'SuperAdmin' && (
                      <li className="flex items-center">
                        <Link href="/SuperAdmin" className="flex items-center">
                        <LayoutDashboard className="w-4 h-4 text-gray-800 ml-2" />
                          <span className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={closeDropdown}>
                            Dashboard
                          </span>
                        </Link>
                      </li>
                    )}
    <li className="flex items-center">
      <Link href="/profile" className="flex items-center">
        <Edit className="w-4 h-4 text-gray-800 ml-2" />
        <span className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => setIsMobileDropdownOpen(false)}>
          Edit Profile
        </span>
      </Link>
    </li>
    <li className="flex items-center">
      <Link href="/" className="flex items-center">
        <LogOut className="w-4 h-4 text-gray-800 ml-2" />
        <span
          onClick={handleSignOut}
          className="block w-full px-4 py-2 text-gray-800 hover:bg-gray-100 text-left"
        >
          Sign Out
        </span>
      </Link>
    </li>
  </ul>
</div>
              )}
            </div>
          )}
        </div>
      </div>

{/* Mobile NavBar */}
{isMenuOpen && (
          <div className="md:hidden">
            <nav aria-label="Global">
              <ul className="flex flex-col items-center gap-4 text-sm">
                <li>
                  <span 
                    className="text-gray-800 text-lg transition hover:text-primary font-bold cursor-pointer"
                    onClick={() => handleNavigation('/')}
                  >
                    Home
                  </span>
                </li>
                <li>
                  <span 
                    className="text-gray-800 text-lg transition hover:text-primary font-bold cursor-pointer"
                    onClick={() => handleNavigation('/about')}
                  >
                    About Us
                  </span>
                </li>
                <li>
                  <span 
                    className="text-gray-800 text-lg transition hover:text-primary font-bold cursor-pointer"
                    onClick={() => handleNavigation('/blog')}
                  >
                    Blog
                  </span>
                </li>
                <li>
                  <span 
                    className="text-gray-800 text-lg transition hover:text-primary font-bold cursor-pointer"
                    onClick={() => handleNavigation('/product')}
                  >
                    Products
                  </span>
                </li>
                <li>
                  <span 
                    className="text-gray-800 text-lg transition hover:text-primary border-b-2 px-24 pb-4 font-bold cursor-pointer"
                    onClick={() => handleNavigation('/contact')}
                  >
                    Contact
                  </span>
                </li>
              </ul>
            <div className="flex flex-row gap-4 py-10 justify-center items-center">
              {!session ? (
                <>
                  <div>
                  <button
                  onClick={toggleModal} // Open modal
                  className="rounded-full bg-primary px-10 py-2.5 text-sm font-medium text-white shadow transition hover:bg-primary"
                >
                  Login
                </button>
                  </div>
                  <div>
                  <button
                   onClick={toggleModalReg} // Open modal
                  className="rounded-full px-10 py-2.5 text-sm font-medium text-primary transition hover:bg-gray-200"
                >
                  Register
                </button>
                  </div>
                </>
              ) : (
                <div>
                </div>
              )}
              </div>
          </nav>
        </div>
      )}
      
      {/* Modal */}
      {isModalOpen && !session &&  (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div
      ref={modalRef}
      className="rounded-lg shadow-lg w-full "
    >
      <button
        onClick={toggleModal}
        className="absolute top-4 right-6 text-white hover:text-orange-500 text-4xl"
      >
        &times;
      </button>
      <SignIn />
    </div>
  </div>
)}

{isModalRegOpen && !session && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div
      ref={modalRef}
      className="rounded-lg shadow-lg w-full "
    >
      <button
        onClick={toggleModalReg}
        className="absolute top-2 right-6 text-white hover:text-orange-500 text-4xl"
      >
        &times;
      </button>
      <SignUp/>
    </div>
  </div>
)}
    </header>
  );
};

export default Header;