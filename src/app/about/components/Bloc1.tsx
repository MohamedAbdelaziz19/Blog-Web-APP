import React from 'react'
import { Blog5 } from '@/public/img/image'
import Image from 'next/image'

function Bloc1() {
  return (
    <section className='w-[95%] sm:w-[95%] md:w-[80%] lg:w-[80%] xl:w-[80%] 2xl:w-[80%] mx-auto py-8 flex items-center gap-4 sm:gap-4 md:gap-4 lg:gap-2 xl:gap-2 flex-col justify-center md:flex-row'>
        {/*img bloc a gauche*/}
      <div>
        <Image 
         alt='About-img-1'
         src={Blog5} 
         className='rounded-lg shadow-2xl w-full sm:w-full md:w-[90%] lg:[80%] xl:[80%] 2xl:[80%]'
         width={400}
         height={400}
         >
         </Image>
      </div>
       {/*text bloc a droite*/}
      <div className='flex flex-col gap-8 w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[40%] 2xl:w-[40%] py-12 sm:py-12 md:py-0 lg:py-0 xl:py-0 2xl:py-0'>
      <div className='flex flex-col gap-4 '>
        <h1 className='text-orange-400 text-3xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-semibold'>Rustika House</h1>
        <p className='text-[12px] sm:text-[12px] md:text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien et ex volutpat tincidunt eget at felis  nunc eget congue ante. Vivamus ut sapien . </p>
      </div>

      <div>{/* CheckBox */}
  <fieldset>
    <legend className="sr-only">Checkboxes</legend>

    <div className="space-y-2">
      <label htmlFor="Option1" className="flex cursor-pointer items-start gap-4">
        <div className="flex items-center">
          &#8203;
          <input
            type="checkbox"
            className="rounded border-gray-300"
            id="Option1"
            checked
            style={{ width: '1.5rem', height: '1.5rem' }}
          />
        </div>

        <div>
          <strong className="font-semibold text-gray-900 text-xl"> Expertise </strong>
        </div>
      </label>

      <label htmlFor="Option2" className="flex cursor-pointer items-start gap-4">
        <div className="flex items-center">
          &#8203;
          <input
            type="checkbox"
            className="rounded border-gray-300"
            id="Option2"
            checked
            style={{ width: '1.5rem', height: '1.5rem' }}
          />
        </div>

        <div>
          <strong className="font-semibold text-gray-900 text-xl"> Timeliness </strong>
        </div>
      </label>

      <label htmlFor="Option3" className="flex cursor-pointer items-start gap-4">
        <div className="flex items-center">
          &#8203;
          <input
            type="checkbox"
            className="rounded border-gray-300"
            id="Option3"
            checked
            style={{ width: '1.5rem', height: '1.5rem' }}
          />
        </div>

        <div>
          <strong className="font-semibold text-gray-900 text-xl"> Customization </strong>
        </div>
      </label>

      <label htmlFor="Option4" className="flex cursor-pointer items-start gap-4">
        <div className="flex items-center">
          &#8203;
          <input
            type="checkbox"
            className="rounded border-gray-300"
            id="Option4"
            checked
            style={{ width: '1.5rem', height: '1.5rem' }}
          />
        </div>

        <div>
          <strong className="font-semibold text-gray-900 text-xl"> Quality Workmanship </strong>
        </div>
      </label>
    </div>
  </fieldset>
</div>



      {/*stat bloc */}
      <div className='flex flex-row justify-around xl:gap-64'>
        <div className='flex flex-col'><h1 className='text-center text-orange-400 font-semibold text-4xl'>15YEAR</h1><span className='text-[10px] text-center'>EXPERIENCE</span></div>
        <div className='flex flex-col'><h1 className='text-center text-orange-400 font-semibold text-4xl'>500+</h1><span className='text-[10px] text-center'>TOTAL CLIENT</span></div>
      </div>
      </div>
    </section>
  )
}

export default Bloc1