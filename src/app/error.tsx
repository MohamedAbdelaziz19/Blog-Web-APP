'use client'

import Link from "next/link";
import React from 'react';

interface ErrorProps {
    error: Error;
    reset: () => void;
}

const ErrorComponent: React.FC<ErrorProps> = ({ error, reset }) => {
  return (
    <div className="pt-7 text-center">
      <div>
        Something Went Wrong
      </div>
      <h2 className="text-gray-700 my-3 text-xl">
        Error Message: {error.message}
      </h2>
      <button onClick={reset} className="bg-primary hover:bg-blue-700 text-white font-bold px-4 rounded-full">
        Try Again
      </button>
      <Link className="text-xl underline text-primary block mt-6" href="/" >
        Go to Home Page
      </Link>
    </div>
  )
}

export default ErrorComponent;
