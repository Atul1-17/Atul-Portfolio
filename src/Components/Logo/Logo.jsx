import React from 'react'

function Logo() {
  return (
    <div className='text-2xl flex flex-col items-center p-2 cursor-pointer'>
        <h1 className=' font-medium'>Atul<span className='text-[rgb(17,150,125)]'>Bopche</span></h1>
        <div className='h-1 w-24 bg-gradient-to-r from-[rgb(17,150,125)] to-[rgb(209,238,204)] rounded-full'></div>
    </div>
  )
}

export default Logo