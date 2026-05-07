import React from 'react'
import plantlogo from '../assests/plant 2.png'
import { Search } from "lucide-react";
import { MdArrowDropDown } from "react-icons/md";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiMenuAlt4 } from "react-icons/hi";

const Navbarlinks = ['Home', 'Plants Type', 'More', 'Contact']

export default function Navbar() {
  return (
    <div className='w-full h-20 px-7 flex items-center justify-between text-white pt-6'>

      {/* Logo */}
      {/* Logo */}
<div className='flex items-center gap-2 w-1/4'>
  <div className='w-9 h-9 flex items-center justify-center overflow-visible'>
    <img
      src={plantlogo}
      alt='FloraVision Logo'
      className='w-9 h-9 object-contain scale-[2.8] translate-y-8'
    />
  </div>

  <div className='text-white text-[18px] font-semibold leading-none'>
    FloraVision.
  </div>
</div>

      {/* Menu links */}
      <div className='hidden md:flex items-center justify-center gap-14 w-2/4 text-[14px] font-["Original_Surfer"]'>
        {Navbarlinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replaceAll(" ", "-")}`}
            className='hover:text-green-300 transition flex items-center gap-1'
          >
            {link}

            {link === 'Plants Type' && (
              <MdArrowDropDown  size={17} />
            )}
          </a>
        ))}
      </div>

      {/* Right Icons */}
      <div className="flex items-center justify-end gap-8 w-1/4">
        <Search size={20} className="cursor-pointer hover:text-green-300" />
        <IoBagHandleOutline  size={18} className="cursor-pointer hover:text-green-300" />
        <HiMenuAlt4  size={26} className="cursor-pointer hover:text-green-300" />
      </div>

    </div>
  )
}