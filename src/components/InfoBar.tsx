import React from 'react'
import {locationIcone, phoneIcone, emailIcone } from '@/public/img/image';
import Image from 'next/image';

function InfoBar() {
  return (
    //{/* InfoBar */}
    <div className="bg-blue-600 text-white p-2 text-center">
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 centred">
      <div className="hidden sm:flex overflow-hidden items-center justify-center sm:justify-start text-xl sm:text-xl">
        <Image src={locationIcone} alt="Location Icon" className="mr-2" />
        <span>RUSTIKLink HOUSE, 5080 Teboulba, Monastir, Tunisie</span>
      </div>
      <div className="flex items-center justify-center sm:justify-start text-xl sm:text-xl">
        <Image src={phoneIcone} alt="Phone Icon" className="mr-1 scale-50" />
        <span>+1 206-214-2298</span>
      </div>
      <div className="hidden sm:flex items-center justify-center sm:justify-start text-xl sm:text-xl">
        <Image src={emailIcone} alt="Email Icon" className="mr-1 scale-50" />
        <span>support@rezilla.com</span>
      </div>
    </div>
  </div>
  )
}

export default InfoBar