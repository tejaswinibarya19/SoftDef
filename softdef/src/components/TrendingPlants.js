import React from 'react'
import Button from './Button'
import { RiShoppingBag4Line } from "react-icons/ri";
import TrendyImage1 from '../assests/TrendyImage1.png'
import TrendyImage2 from '../assests/TrendyImage2.png'
const trendy = [
  {
    title: 'For Your Desks Decorations',
    text: 'I recently added a beautiful desk decoration plant to my workspace, and it \n has made such a positive difference!',
    price: 'Rs. 599/-',
    image: TrendyImage1,
    reverse: false,
  },
  {
    title: 'For Your Desks Decorations',
    text: 'The greenery adds a touch of nature and serenity to my desk, making it feel\nmore inviting and calming',
    price: 'Rs. 399/-',
    image: TrendyImage2,
    reverse: true,
  },
]
export default function TrendingPlants() {
  return (
    <div className='w-full mt-16 px-8'>
        {/* Heading */}
        <h1 className='text-center text-white font-semibold text-4xl mb-10'>Our Trendy plants</h1>

        {/* Trendy Plant Cards */}
        <div className='space-y-20'>
            {trendy.map((item,index)=>(
                
                // Rectangle blur box
                <div 
                key={index}
                className={`relative max-w-[1180px] min-h-[320px] mx-auto border border-white/25 rounded-[90px] bg-white/10 backdrop-blur-md flex items-center px-12 py-12 overflow-visible ${item.reverse?'justify-between':'justify-end'}`}
                >

                {/* Plant image */}
                <img src={item.image}
                alt={item.title}
                className={`absolute object-contain z-10 ${
                    item.reverse?'right-2 -top-32 w-[500px]'
                  : 'left-6 -top-36 w-[430px]'
                }`}
                />

                {/* Content */}
                <div
                className={`text-white z-20 ${
                item.reverse
                  ? 'w-[48%] mr-auto'
                  : 'w-[48%] ml-auto'
                }`}
                >

                
                {/* Title */}
                    <h2 className='text-white font-semibold text-2xl'>{item.title}</h2>

                    {/* Description */}
                    <p className="mt-4 w-[520px] whitespace-pre-line text-sm font-semibold leading-[16px] text-white/90">{item.text}</p>

                    {/* price */}
                    <p className="mb-5 text-3xl font-semibold text-white">{item.price}</p>

                    <div className='flex items-center gap-5'>
                        {/* Button */}
                        <Button variant="outline" className="h-10 px-10 text-lg">Explore</Button>

                        <Button variant="icon" ><RiShoppingBag4Line className='text-white' size={20}></RiShoppingBag4Line></Button>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}
