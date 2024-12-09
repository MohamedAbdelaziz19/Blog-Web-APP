import React from 'react'

function SousFooter() {
  return (
    <div className='flex-row'>
      <div className="bg-white text-primary text-center py-2 mt-2 flex flex-row w-[80%] mx-auto justify-between items-center">
        <p className='text-center mx-auto sm:mx-auto md:mx-3'>© Nproject – All rights reserved</p>
        <div className="hidden lg:flex space-x-16">
          <p><a href="#" className="text-primary hover:underline">Terms and Conditions</a></p>
          <p><a href="#" className="text-primary hover:underline">Privacy Policy</a></p>
          <p><a href="#" className="text-primary hover:underline">Disclaimer</a></p>
        </div>
      </div>
    </div>
  )
}

export default SousFooter
