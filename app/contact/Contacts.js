"use client"
import Image from 'next/image'
import React from 'react'


const Contacts = () => {
  return (
    <>
      <div className='px-10 py-5 h-25 hover:bg-slate-100 rounded-xl'>

        <div className='flex text-center'>
          <div className='rounded-full p-[6px] '>
            <Image src='/app/image/flower.jpg' width='30' height='30' />
          </div>


          <div className='flex justify-between mx-1 w-4/5 '>

            <h1 className='text-xl font-semibold'>Suryash</h1>
            <h1 className='font-extralight'>22:10</h1>

          </div>

        </div>

        <div className='text-start ml-[50px] font-light w-4/5 '>
          <h1>Last message</h1>
        </div>

      </div>
    </>
  )
}

export default Contacts
