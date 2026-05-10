import React from 'react'
import PlantCard from './PlantCard'
import TopPlant1 from '../assests/plant Image.png'
import TopPlant2 from '../assests/TrendyImage1.png'
import TopPlant3 from '../assests/Cactus.png'
import TopPlant4 from '../assests/Swiss Cheese.png'
import TopPlant5 from '../assests/Sansevieria.png'
import TopPlant6 from '../assests/Agave.png'

const plants=[
    {
        title:"Aglaonema Plant",
        description:'The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care',
        price: 'Rs. 300/-',
        image: TopPlant1,
    },
      {
    title: 'Plantain Lilies',
    description: 'Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,',
    price: 'Rs. 380/-',
    image: TopPlant2,
  },
  {
    title: 'Cactus',
    description: 'It is known for their ability to thrive in arid environments',
    price: 'Rs. 259/-',
    image: TopPlant3,
  },
  {
    title: 'Swiss cheese Plant',
    description: 'It is a popular tropical houseplant known for its distinctive, perforated leaves',
    price: 'Rs. 400/-',
    image: TopPlant4,
  },
  {
    title: 'Sansevieria plant',
    description: 'it is a popular indoor plant admired for its striking appearance and low-maintenance nature.',
    price: 'Rs. 450/-',
    image: TopPlant5,
  },
  {
    title: 'Agave plant',
    description: 'The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and arechitectural forms.',
    price: 'Rs. 359/-',
    image: TopPlant6,
  },
]
export default function TopSellingPlants() {
  return (
    <div className='w-full bg-[#142214] py-24 px-8'>
        {/* Heading */}
        <h2 className='text-center text-white font-semibold text-4xl mb-16'>Our Top Selling Plants</h2>

        {/* Plant card */}
        <div className='max-w-[1180px] mx-auto grid grid-cols-3 gap-x-10 gap-y-24 justify-items-center'>
            {plants.map((item,index)=>(
                <PlantCard key={index} item={item}/>
            ))}
        </div>
    </div>
  )
}
