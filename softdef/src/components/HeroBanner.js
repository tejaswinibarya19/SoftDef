import React from 'react'
import '../index.css'
import { CgPlayButtonO } from "react-icons/cg";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import userImg from '../assests/user image.png'
import plantImg from '../assests/plant Image.png'


export default function HeroBanner() {
  return (
    <div className='w-full min-h-[calc(100vh-80px)] px-8 flex items-start justify-between text-white pt-28'>
        {/* Earth exhale and review */}
        <div className='flex flex-col gap-24 mt-20'>

            {/* Earth exhale */}
            <div className='flex flex-col gap-5'>

                <div className='flex flex-col'>
                <h1 className='font-semibold text-6xl leading-none'>Earth's Exhale</h1>

                <p className='w-[520px] text-sm text-white/80 mt-4 leading-relaxed'>"Earth Exhale symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life."
                </p>
                </div>

                <div className='flex items-center gap-5'>
                    {/* Button */}
                    <button className='border border-white rounded-md px-10 py-2.5 text-sm hover:bg-white hover:text-black transition'>Buy Now</button>
                    {/* play icon */}
                    <CgPlayButtonO  size={42} className='cursor-pointer'/>
                    {/* text */}
                    <p className='font-["Original_Surfer"] text-sm text-white/80'>Live Demo...</p>
                </div>
            </div>

            {/* Review */}
            <div className='w-[315px] rounded-3xl border border-white/30 bg-white/10 backdrop-blur-md p-6 ml-0'>
                <div className='flex items-center gap-4'>
                    {/* image */}
                    
                    <div
                        className='relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-white/10'>
                         <img
                                src={userImg}
                                alt="user"
                                className='absolute top-[-50px] left-[-58px] w-full h-full object-cover origin-top-left scale-[4.0]'
                            />
                    </div>
                    {/* Name and star */}
                    <div className='flex flex-col justify-center'>
                        {/* Name */}
                        <h3 className='text-sm font-medium leading-none'>Ronnie Hamill</h3>

                        {/* star */}
                        <div className='flex gap-1 text-yellow-300 text-sm mt-1'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalf />
                        </div>
                    </div>
                </div>  
                <p className='w-[220px] text-[12px] text-white/70 mt-5 leading-[13px]'>I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.</p>              
            </div>

        </div>

        {/* plant image */}
        <div className='plant-card w-[320px] min-h-[400px] border rounded-[45px] border-white/30 bg-white/10 backdrop-blur-md flex flex-col items-center justify-between p-10 mr-20 mb-15'>
        <img
        src={plantImg}
        alt="plant"
        className='w-[300px] object-contain -mt-40'
        />

        <div className='w-full mb-2'>
            <p className='text-sm text-white/60'>Indoor plant</p>
            <div className='flex items-center justify-between mt-2'>
                <h2 className='text-3xl font-light'>Aglaonema plant</h2>
                <IoIosArrowForward size={28} />
            </div>

            <button className='mt-5 border border-white rounded-md px-10 py-2.5 text-sm hover:bg-white hover:text-black transition'>Buy Now</button>

            <div className='flex justify-center gap-2 mt-6 '>
                    <span className='w-4 h-1 bg-white rounded-full'></span>
                    <span className='w-1 h-1 bg-white/70 rounded-full'></span>
                    <span className='w-1 h-1 bg-white/70 rounded-full'></span>
            </div>
        </div>
        </div>
    </div>
  )
}