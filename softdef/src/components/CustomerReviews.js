import React from 'react'
import TestimonialCard from './TestimonialCard'
import profile1 from '../assests/profile1.png'
import profile2 from '../assests/profile2.png'
import profile3 from '../assests/profile3.png'
export default function CustomerReviews() {

    const reviews=[
        
        {
            name:"Shelly Russel",
            profile:profile1,
            description:"Just got my hands on some absolutely awesome plants, and I couldn't be happier!",
            
        },
        {
            name:"Lula Rolfson",
            profile:profile2,
            description:"Each one has its own unique charm and personality, and they've already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.",
            
        },
        {
            name:"Carol Huels",
            profile:profile3,
            description:"It's like bringing a little piece of nature indoors. Definitely worth the investment-my plant collection has never looked better!",
            
        }
        
    ]
  return (
    <div className='w-full bg-[#142214] py-24 px-8'>
        {/* Heading */}
        <h1 className='text-center text-white font-semibold text-4xl mb-16'>Customer Review</h1>
        {/* Testimonial card */}
        <div className='max-w-[1180px] mx-auto grid grid-cols-3 gap-x-10 gap-y-24 justify-items-center'>
            {
                reviews.map((item,index)=>(
                    <TestimonialCard key={index} item={item}/>
                ))
            }
        </div>
    </div>
  )
}
