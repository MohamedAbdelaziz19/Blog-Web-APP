'use client';

import React, { useState } from 'react';
import { CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image';

interface AddImageProps {
  onUploadSuccess: (url: string) => void;
}

export default function AddImage({ onUploadSuccess }: AddImageProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleUploadSuccess = (result: any) => {
    const url = result.info.secure_url;
    setImageUrl(url);
    // Call the onUploadSuccess prop to pass the URL back to the parent
    onUploadSuccess(url);
  };

  return (
    <section className="flex flex-col items-center justify-between">
      <CldUploadWidget 
        signatureEndpoint="/api/sign-image"
        onSuccess={handleUploadSuccess}
      >
        {({ open }) => (
          <button 
            onClick={() => open()} 
            type='button'
            className="px-6 py-3 bg-primary text-white hover:text-primary font-semibold rounded-lg shadow-md hover:bg-white active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 ease-in-out"
          >
            Upload an Image
          </button>
        )}
      </CldUploadWidget>

      {imageUrl && (
        <div className="mt-4">
          <Image src={imageUrl} alt="Uploaded Image" className="rounded-lg shadow-md" width={200} height={200}/>
        </div>
      )}
    </section>
  );
}