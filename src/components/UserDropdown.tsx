"use client";

import React from 'react';
import { User, Shield, Edit, LogOut, LayoutDashboard } from 'lucide-react';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface DropdownMenuProps {
  isDropdownOpen: boolean;
  closeDropdown: () => void;
  toggleMobileDropdown: () => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ isDropdownOpen, closeDropdown, toggleMobileDropdown }) => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push('/signin');
    closeDropdown(); // Close dropdown when signing out
  };

  return (
    <div className={`absolute right-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg ${isDropdownOpen ? 'block' : 'hidden'}`}>
      <ul className="flex flex-col">
        <li className="flex items-center">
          <User className="w-4 h-4 text-gray-800 ml-2" />
          <span className="block px-4 py-2 text-gray-800">{session?.user?.name}</span>
        </li>
        <li className="flex items-center">
          <Shield className="w-4 h-4 text-gray-800 ml-2" />
          <span className="block px-4 py-2 text-gray-800">Role: {session?.user?.role}</span>
        </li>
        {session?.user?.role === 'SuperAdmin' && (
          <li className="flex items-center">
            <Link href="/SuperAdmin" className="flex items-center" onClick={closeDropdown}>
              <LayoutDashboard className="w-4 h-4 text-gray-800 ml-2" />
              <span className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Dashboard
              </span>
            </Link>
          </li>
        )}
        <li className="flex items-center">
          <Link href="/profile" className="flex items-center" onClick={closeDropdown}>
            <Edit className="w-4 h-4 text-gray-800 ml-2" />
            <span className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
              Profile
            </span>
          </Link>
        </li>
        <li className="flex items-center">
          <Link href="/" className="flex items-center" onClick={handleSignOut}>
            <LogOut className="w-4 h-4 text-gray-800 ml-2" />
            <span className="block w-full px-4 py-2 text-gray-800 hover:bg-gray-100 text-left">
              Sign Out
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
