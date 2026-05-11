import React from 'react'
import { FaStar, FaStarHalf } from "react-icons/fa";
export default function TestimonialCard({item}) {
  return (
    <div className='w-[310px] rounded-3xl border border-white/30 bg-white/10 backdrop-blur-md p-6 ml-0'>
        <div className='flex items-center gap-4'>
            <div className='relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-white/10'>
                <img 
                    src={item.profile} 
                    alt={item.name} 
                    className='absolute top-[0.5px] left-[-74px] w-full h-full object-cover origin-top-left scale-[4.0]'
                />
            </div>
            <div className='flex flex-col justify-center'>
                <h1 className='text-sm font-medium leading-none'>{item.name}</h1>
                {/* Rating */}
                <div className='flex gap-1 text-yellow-300 text-sm mt-1'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalf />
                </div>
            </div>
        </div>
        <p className='w-[220px] text-[12px] text-white/70 mt-5 leading-[13px]'>{item.description}</p>
    </div>
  )
}
