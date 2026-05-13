import React from 'react'
import plantImg from '../assests/plant Image.png'
import { IoIosArrowForward } from "react-icons/io";
import { ChevronLeft } from 'lucide-react';
import Button from './Button'

export default function SectionTitle() {
  return (
    <div className='gap-40 flex flex-col w-full px-8 pb-20'>

      {/* Heading */}
      <div className='flex justify-center'>
        <div className='relative inline-block px-3 py-1'>
          <h1 className='text-center text-white font-semibold text-3xl'>
            Our Best o2
          </h1>

          {/* left rounded border */}
    
            <span className='absolute left-0 bottom-0 w-8 h-8 border-l-2 border-b-2 border-[#7C9C45] rounded-bl-md'></span>

            {/* right rounded border */}
            <span className='absolute right-0 top-0 w-8 h-8 border-r-2 border-t-2 border-[#7C9C45] rounded-tr-md'></span>

        </div>
      </div>

      {/* Blur box */}
      <div className='relative w-full min-h-[430px] mx-auto border border-white/25 rounded-[90px] bg-white/10 backdrop-blur-[6px] flex items-center px-12 py-12 overflow-visible'>

        {/* Image */}
        <img 
          src={plantImg}
          alt="plant"
          className='absolute -left-12 -top-48 w-[550px] object-contain'
        />

        {/* Content */}
        <div className='flex flex-col w-[48%] ml-auto'>
          <div className='flex flex-col gap-8 text-white/80'>
            <h1 className='text-3xl font-semibold leading-7'>
              We Have Small And Best O2 Plants Colection's
            </h1>

            <div className='text-lg flex flex-col gap-8 '>
              <p>
                Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.
              </p>

              <p>
                Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.
              </p>
            </div>
          </div>

          {/* Button */}
          <div className='flex items-center justify-between'>
            <Button variant="outline" className="h-10 px-10 text-lg">
              Explore
            </Button>

            <div className='gap-5 flex items-center'>
              <ChevronLeft size={28} className="text-gray-400" />
              <div className='text-gray-200 font-semibold flex '>
                <p className='text-[20px] pb-1'>01/</p>
                <p className='text-[15px] mt-[6px]'>04</p>
                </div>
              <IoIosArrowForward size={28} className='text-white/90' />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}