import React from 'react';
import { services } from '@/public/data';

const ServiceBar: React.FC = () => {
  return (
    <div className="bg-blue-50 flex justify-around sm:flex-row w-full h-40 sm:h-20 md:h-28 lg:h-28 xl:h-28">
      <div className="max-w-screen-xl flex justify-around items-center text-gray-700 w-full">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center gap-2 text-center">
            <service.icon className="text-gray-600 text-4xl" />
            <p className="font-medium text-sm">
              {service.title} <br />
              <span className="text-[10px] text-gray-500 font-light">{service.description}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceBar;
