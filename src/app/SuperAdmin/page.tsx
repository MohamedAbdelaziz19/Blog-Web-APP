import React from 'react';
import { FaCog, FaUser, FaChartBar, FaRegFileAlt, FaBox } from 'react-icons/fa'; // Import additional icons
import Image from 'next/image';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/src/lib/authOptions';
import { Session } from 'next-auth';
import Link from 'next/link';

export default async function Page() {
  const session: Session | null = await getServerSession(authOptions);

  if (session?.user?.role !== 'SuperAdmin') {
    return (
      <section className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-xl text-red-500 font-semibold">
            You are not authorized to view this Page
          </h1>
        </div>
      </section>
    );
  }

  return (
    <div className="flex flex-col p-6">
      <h1 className="text-4xl text-center text-primary hover:text-orange-400 font-bold mb-8 transition-colors duration-300">
        Admin Panel
      </h1>

      <div className="flex justify-center mb-8">
        <Image
          src="https://res.cloudinary.com/dzo2bvw5a/image/upload/v1723116603/profileImage_npkuum.jpg"
          alt="Admin"
          width={100}
          height={100}
          className="rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <FaCog className="text-4xl text-blue-500 mr-4 transition-transform duration-300 hover:text-blue-700" />
          <div>
            <h2 className="text-2xl font-semibold mb-2">Settings</h2>
            <p className="text-gray-600">Manage your application settings.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <FaUser className="text-4xl text-green-500 mr-4 transition-transform duration-300 hover:text-green-700" />
          <Link href="SuperAdmin/utilisateur">
            <h2 className="text-2xl font-semibold mb-2">Users</h2>
            <p className="text-gray-600">Manage user accounts and profiles.</p>
          </Link>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <FaChartBar className="text-4xl text-purple-500 mr-4 transition-transform duration-300 hover:text-purple-700" />
          <Link href="SuperAdmin/Dashboard">
            <h2 className="text-2xl font-semibold mb-2">Analytics</h2>
            <p className="text-gray-600">View and analyze application data.</p>
          </Link>
        </div>

        {/* Card 4 - Blogs */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <FaRegFileAlt className="text-4xl text-yellow-500 mr-4 transition-transform duration-300 hover:text-yellow-700" />
          <Link href="SuperAdmin/blogList">
            <h2 className="text-2xl font-semibold mb-2">Blogs</h2>
            <p className="text-gray-600">Manage and view blog posts.</p>
          </Link>
        </div>

        {/* Card 5 - Products */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <FaBox className="text-4xl text-red-500 mr-4 transition-transform duration-300 hover:text-red-700" />
          <div>
            <h2 className="text-2xl font-semibold mb-2">Products</h2>
            <p className="text-gray-600">Manage and view products.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
