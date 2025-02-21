import React from 'react'
import Button from './button'
import Image from 'next/image'

export default function Body2() {
  return (
    <div className='w-[95%] md:h-[1127px] h-auto border-[2px] border-[#A5A5A5]'>
        {/* button div */}
        <div><Button title="하우스 오너"/></div>
        {/* content div */}
        <div className='w-full h-full flex justify-center items-center'>
            {/* main div */}
          <div className='w-[90%] h-[783px] bg-red-500 flex flex-col '>
          <div className='md:text-[45px] text-[30px] text-center font-bold border-[#DDDDDD]'>하우스백 입주절차안내</div>
          <div>
            
          </div>
         
          </div>
        </div>
       
        
    </div>
  )
}
