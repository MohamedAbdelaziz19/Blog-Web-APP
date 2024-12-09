import React from 'react'
import Image from 'next/image'
import { AboutImg,CollectionImg1,CollectionImg3,AboutImg2,CollectionImg4 } from '@/public/img/image'

function Bloc2() {
  return (
    <section className=' w-[95%] sm:w-[95%] md:w-[80%] lg:w-[80%] xl:w-[80%] 2xl:w-[80%] mx-auto py-8 '>
        {/*Text Bloc */}
       <div className='flex flex-col justify-center gap-4'>
        <h1 className='text-orange-400 font-semibold text-2xl sm:text-2xl xl:text-5xl text-center'>Nous Somme Des Experts</h1>
        <p className='text-center w-[95%] sm:w-[95%] md:w-[60%] mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien et ex volutpat tincidunt eget at felis.</p>
        </div>

        {/*Image Bloc */}
        <div className='flex flex-col sm:flex-col md:flex-row gap-8 justify-center py-8'>
             <div><Image alt='' src={AboutImg} width={400} className='rounded-2xl'></Image></div>
              <div className='flex flex-col gap-6'>
               <div className='flex flex-row justify-around gap-4'>
                <div><Image alt='' src={CollectionImg1} width={200} className='h-64 sm:h-64 md:h-40 lg:h-32 xl:h-64 2xl:h-72 rounded-2xl'></Image></div>
                <div><Image alt='' src={CollectionImg3} width={200} className='h-64 sm:h-64 md:h-40 lg:h-32 xl:h-64 2xl:h-72 rounded-2xl'></Image></div>
               </div>
               <div><Image alt='' src={AboutImg2} width={400} className=' h-42 sm:h-42 md:h-42 lg:h-32 xl:h-48 2xl:h-72 rounded-2xl '></Image></div>   
             </div>
            <div><Image alt='' src={CollectionImg4} width={400} className='rounded-2xl'></Image></div>
        </div>
         
    </section>
  )
}

export default Bloc2