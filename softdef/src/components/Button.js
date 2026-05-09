import React from 'react'

export default function Button({children,variant="primary", className='',...props}) {
    const variants={
         primary: 'px-7 py-2 border-white/80 bg-white text-[#142112] hover:text-black',
    outline: 'px-7 py-2 border-white/80 bg-transparent text-white hover:bg-white hover:text-black',
    icon: 'h-10 w-10 min-w-10 p-0 border-white/70 bg-transparent text-white hover:bg-white hover:text-[#142112]'
  
    }
  return (
     <button
      className={`inline-flex items-center justify-center rounded-md border text-sm font-medium transition duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
