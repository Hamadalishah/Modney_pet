import React from 'react'

export default function Button(props) {
  return (
    <>
    <div className='w-[159px] h-[39.5px] bg-black flex justify-center items-center text-white '>{props.title}</div>
    </>
  )
}
