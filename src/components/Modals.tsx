'use client'
import React, { useState } from 'react';
import SignIn from '../app/(auth)/signin/page';
import SignUp from '../app/(auth)/signup/page';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [isSignIn, setIsSignIn] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full flex flex-col gap-4">
        {isSignIn ? (
          <>
            <h2 className="text-lg font-semibold mb-4">Login</h2>
            <SignIn />
            <button
              type="button"
              onClick={() => setIsSignIn(false)}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded"
            >
              Switch to Register
            </button>
          </>
        ) : (
          <>
            <h2 className="text-lg font-semibold mb-4">Register</h2>
            <SignUp />
            <button
              type="button"
              onClick={() => setIsSignIn(true)}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded"
            >
              Switch to Login
            </button>
          </>
        )}
        <button
          type="button"
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-primary text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
