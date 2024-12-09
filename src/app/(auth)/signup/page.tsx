"use client";

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FcGoogle } from "react-icons/fc";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import SignIn from '../signin/page';

config.autoAddCss = false;

const SignUp = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    repeatPassword: '',
    name: '',
    lastname: '',
    image: null as File | null, // Added image field
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false); // Added loading state
  const [showPassword, setShowPassword] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false); // State to toggle between SignUp and SignIn
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setCredentials({ ...credentials, image: files ? files[0] : null });
    } else {
      setCredentials({ ...credentials, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Clear any previous errors
    setLoading(true); // Set loading to true while processing

    if (credentials.password !== credentials.repeatPassword) {
      setError("Passwords do not match");
      setLoading(false); // Set loading to false if there's an error
      return;
    }

    try {
      const formData = new FormData();
      formData.append('name', credentials.name);
      formData.append('lastname', credentials.lastname);
      formData.append('email', credentials.email);
      formData.append('password', credentials.password);
      formData.append('role', 'Visiteur'); // Default role
      if (credentials.image) {
        formData.append('image', credentials.image);
      }

      const result = await fetch('/api/auth/signup', {
        method: 'POST',
        body: formData,
      });

      const data = await result.json();

      if (result.ok) {
        setIsRegistered(true); // Show the SignIn component after successful registration
        setIsModalOpen(true); // Open modal for SignIn
      } else {
        setError(data.message || 'An error occurred. Please try again.');
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false); // Ensure loading is set to false after processing
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-[#F1F4F9] p-4 sm:p-4 md:p-8 lg:p-8 xl:p-8 2xl:p-8 rounded-lg shadow-md w-[90%] sm:w-[90%] md:w-[60%] lg:w-[60%] xl:w-[60%] 2xl:w-[60%]">
        {error && (
          <div className="bg-red-500 text-white p-3 rounded mb-4">
            {error}
          </div>
        )}
        {isRegistered ? (
          // Display SignIn component in a modal after registration
          isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center">
              <div
                ref={modalRef}
                className="rounded-lg shadow-lg w-full "
              >
                <button
                  onClick={toggleModal}
                  className="absolute top-2 right-6 text-white hover:text-orange-500 text-4xl"
                >
                  &times;
                </button>
                <SignIn />
              </div>
            </div>
          )
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-900 text-sm mb-2" htmlFor="name">
                First Name
              </label>
              <input
                type="text"
                name="name"
                value={credentials.name}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm hover:border-orange-400 block w-full p-2.5"
                placeholder="Enter First Name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-900 text-sm mb-2" htmlFor="lastname">
                Last Name
              </label>
              <input
                type="text"
                name="lastname"
                value={credentials.lastname}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm hover:border-orange-400 block w-full p-2.5"
                placeholder="Enter Last Name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-900 text-sm mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={credentials.email}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm hover:border-orange-400 block w-full p-2.5"
                placeholder="Enter Email Address"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-900 text-sm mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm hover:border-orange-400 block w-full p-2.5"
                placeholder="******"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-900 text-sm mb-2" htmlFor="repeatPassword">
                Repeat Password
              </label>
              <input
                type="password"
                name="repeatPassword"
                value={credentials.repeatPassword}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm hover:border-orange-400 block w-full p-2.5"
                placeholder="******"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-900 text-sm mb-2" htmlFor="image">
                Profile Image
              </label>
              <input
                type="file"
                name="image"
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm hover:border-orange-400 block w-full p-2.5"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <button
                type="submit"
                className={`bg-primary hover:bg-gray-300 hover:text-primary text-white py-2 w-full rounded focus:outline-none ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={loading}
              >
                {loading ? 'Signing Up...' : 'Sign Up'}
              </button>
              <p className='text-gray-300'>Or continue with</p>
            </div>
            <div className="flex items-center gap-4 py-4 flex-col sm:gap-3 lg:justify-between lg:flex-row md:flex-row xl:flex-row">
              <button
                type="button"
                onClick={() => signIn('facebook', { callbackUrl: '/' })}
                className="bg-white text-gray-900 text-sm border border-gray-300 py-2 px-4 rounded flex items-center justify-center w-full sm:w-full md:w-[50%] lg:w-[50%] xl:w-[50%]"
              >
                <FontAwesomeIcon icon={faFacebook} className="text-blue-600 text-lg mr-2" />
                Sign Up with Facebook
              </button>
              <button
                type="button"
                onClick={() => signIn('google', { callbackUrl: '/' })}
                className="bg-white text-gray-900 text-sm border border-gray-300 py-2 px-4 rounded flex items-center justify-center w-full sm:w-full md:w-[50%] lg:w-[50%] xl:w-[50%]"
              >
                <FcGoogle className="text-lg mr-2" />
                Sign Up with Google
              </button>
            </div>
          </form>
        )}
        
      </div>
    </div>
  );
};

export default SignUp;
