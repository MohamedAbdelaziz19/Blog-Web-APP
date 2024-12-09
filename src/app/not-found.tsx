import React from 'react'
import Link from 'next/link'

function notfoundPage() {
  return (
    <section className='flex justify-center items-center flex-col'>
        <h1 className='text-7xl text-gray-800 font-bold'>404</h1>
        <p className='text-gray-500 text-3xl mt-2 mb-5'>
            Page Not Found 
        </p>
        <Link className ='border rounded-full py-2 px-4 border-primary hover:bg-primary hover:text-white text-xl underline text-primary' href="/">
        Go to Home Page
        </Link>
    </section>
  )
}

export default notfoundPage