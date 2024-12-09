import React from 'react'
import { ShoppingCartIcon,CheckCircleIcon,TruckIcon } from 'lucide-react'; // Import icons from Heroicons
import Link from 'next/link';

function OfrireMeilleurService() {
  return (
    <section className='py-8 centred'>
      <div className='grid gap-6'>
        <h2 className='text-orange-400 text-center text-4xl font-bold'>OFFRIRE LE MEILLEUR SERVICE</h2>
      </div>
      <div className="flex flex-col gap-8 px-4 py-8 sm:px-6 sm:py-12 lg:flex-row lg:px-8 lg:py-16">
        <Link
          className="block rounded-xl border p-8 shadow-xl transition hover:border-primary/10 hover:shadow-primary/10 flex-1 text-center"
          href="#"
        >
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-primary p-2">
              <ShoppingCartIcon className="h-6 w-6 text-white" />
            </div>
        </div>

          <h2 className="mt-4 text-xl font-bold text-black">BUY A NEW DOOR</h2>
          <p className="mt-1 text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
            distinctio alias voluptatum blanditiis laudantium.
          </p>
        </Link>
        <Link
          className="block rounded-xl border p-8 shadow-xl transition hover:border-primary/10 hover:shadow-primary/10 flex-1 text-center"
          href="#"
        >
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-primary p-2">
              <CheckCircleIcon className="h-6 w-6 text-white" />
            </div>
        </div>

          <h2 className="mt-4 text-xl font-bold text-black">SELL A DOOR</h2>
          <p className="mt-1 text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
            distinctio alias voluptatum blanditiis laudantium.
          </p>
        </Link>
        <Link
          className="block rounded-xl border p-8 shadow-xl transition hover:border-primary/10 hover:shadow-primary/10 flex-1 text-center"
          href="#"
        >
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-primary p-2">
              <TruckIcon className="h-6 w-6 text-white" />
            </div>
          </div>
          <h2 className="mt-4 text-xl font-bold text-black">PRODUCT A DOOR</h2>
          <p className="mt-1 text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
            distinctio alias voluptatum blanditiis laudantium.
          </p>
        </Link>
      </div>
    </section>
  );
}

export default OfrireMeilleurService;
