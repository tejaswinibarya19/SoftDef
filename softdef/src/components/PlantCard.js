import React from 'react'
import { RiShoppingBag4Line } from "react-icons/ri";
import Button from './Button';

export default function PlantCard({item}) {
  return (
    <div>
        <div className='relative w-[320px] min-h-[410px] rounded-[45px] border border-white/30 bg-white/10 backdrop-blur-md px-10 pb-8 pt-6 flex flex-col justify-end overflow-visible'>

            {/* image */}
           
                <img 
                src={item.image}
                alt={item.title}
                className='absolute left-1/2 -translate-x-1/2 -top-20 w-[230px] h-[230px] object-contain'
                />
            

            <div className='flex flex-col gap-4 mt-32'>
                {/* plant heading */}
                <h1 className='text-white/90 text-3xl font-medium'>{item.title}</h1>

                {/* Description */}
                <p className='text-white/90 text-base leading-[20px] min-h-[80px]'>{item.description}</p>

                <div className='flex justify-between items-center mt-1'>
                    {/* price */}
                    <p className='text-white/90 font-medium text-3xl'>{item.price}</p>
                    {/* shopping Bag */}
                    <Button variant="icon" ><RiShoppingBag4Line className='text-white' size={20}></RiShoppingBag4Line></Button>                
                </div>
            </div>
        </div>
    </div>
  )
}
