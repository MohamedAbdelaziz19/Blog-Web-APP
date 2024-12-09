"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useSession, signIn, getProviders, ClientSafeProvider } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FcGoogle } from "react-icons/fc";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

config.autoAddCss = false;

const SignIn: React.FC = () => {
  // State for managing providers, credentials, errors, and password visibility
  const [providers, setProviders] = useState<Record<string, ClientSafeProvider> | null>(null);
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
  const [loading, setLoading] = useState(false);
  const [formVisible, setFormVisible] = useState(true); // Manage form visibility
  const router = useRouter();
  const { data: session } = useSession();

  // Fetch providers on component mount
  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const res = await getProviders();
        if (res) {
          setProviders(res);
        } else {
          setError('Failed to load authentication providers.');
        }
      } catch (error) {
        console.error('Error fetching providers:', error);
        setError('An unexpected error occurred while loading providers. Please try again.');
      }
    };
    fetchProviders();
  }, []);

  // Redirect based on user session
  useEffect(() => {
    if (session) {
      if (session.user?.role === 'Admin') {
        router.push('/admin');
      } else {
        router.push('/');
      }
    }
  }, [session, router]);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email: credentials.email,
        password: credentials.password,
      });

      if (result?.ok) {
        setFormVisible(false); // Hide the form on successful sign-in
        router.push('/');
      } else {
        setError('Failed to sign in. Please check your email and password and try again.');
      }
    } catch (error) {
      console.error('Sign in error:', error);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      {formVisible && (
        <div className="bg-[#F1F4F9] p-4 sm:p-4 md:p-8 lg:p-8 xl:p-8 2xl:p-8 rounded-lg shadow-md  w-[90%] sm:w-[90%] md:w-[60%] lg:w-[60%] xl:w-[60%] 2xl:w-[60%]">
          {error && (
            <div className="bg-red-500 text-white p-3 rounded mb-4">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            {/* Email Block */}
            <div className="mb-4">
              <label className="block text-gray-900 text-sm mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={credentials.email}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm hover:border-orange-400 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white"
                placeholder="Enter Email Address"
                required
              />
            </div>
            {/* Password Block */}
            <div className="relative mb-4">
              <label className="block text-gray-900 text-sm mb-2" htmlFor="password">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={credentials.password}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm hover:border-orange-400 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white pr-10"
                placeholder="******"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center px-3 pt-6 text-gray-600"
              >
                {showPassword ? <FaEye className="w-5 h-5" /> : <FaEyeSlash className="w-5 h-5" />}
              </button>
            </div>

            {/* Remember Me */}
            <div className="flex items-start mb-5 flex-col gap-3 sm:gap-3 lg:justify-between lg:flex-row md:flex-row xl:flex-row ">
              <div className="flex items-center h-5">
                <input id="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-300 dark:border-gray-300 dark:focus:ring-blue-600 dark:ring-offset-gray-300 dark:focus:ring-offset-gray-300" required />
                <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
              </div>
              <Link href="#" className="text-primary line border-b-2 hover:border-primary border-[#F1F4F9]">Forgot Password?</Link>
            </div>

            {/* Sign In Block */}
            <div className="flex flex-col items-center justify-center gap-4">
              <button
                type="submit"
                className={`bg-primary hover:bg-gray-300 hover:text-primary text-white py-2 w-full rounded focus:outline-none focus:shadow-outline ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={loading}
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </button>
              <p className="text-gray-300">Or continue with</p>
            </div>

            {/* Media Connect Block */}
            <div className="flex items-center gap-4 py-4 flex-col sm:gap-3 lg:justify-between lg:flex-row md:flex-row xl:flex-row">
              <button
                type="button"
                onClick={() => signIn('facebook', { callbackUrl: '/' })}
                className="bg-white text-gray-900 text-sm border border-gray-300 py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-full md:w-[50%] lg:w-[50%] xl:w-[50%] flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faFacebook} className="text-blue-600 text-lg mr-2" />
                Sign In with Facebook
              </button>
              <button
                type="button"
                onClick={() => signIn('google', { callbackUrl: '/' })}
                className="bg-white text-gray-900 text-sm border border-gray-300 py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-full md:w-[50%] lg:w-[50%] xl:w-[50%] flex items-center justify-center"
              >
                <FcGoogle className="text-lg mr-2" />
                Sign In with Google
              </button>
            </div>
          </form>
        </div>
      )}
      
    </div>
  );
};

export default SignIn;
