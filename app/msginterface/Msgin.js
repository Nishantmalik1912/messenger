"use client"
import { Paperclip, PhoneCallIcon, Search, Send, Smile, VideoIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Msgin = () => {
  return (

    <div id='main' >
      <div id='header' className='fixed h-1/6 items-center flex justify-between p-10'>

        <div className='flex items-center'>
          <div>
            <Image src='' width={20} height={20} />
          </div>
          <div>
            <h1 className='font-semibold text-2xl'>Name</h1> <h2>time of the last seen</h2>
          </div>
        </div>
        <div className='flex items-center'>
          <div className='flex justify-between border-2 py-2 rounded-sm '>
            <PhoneCallIcon id='Ticon' className='mx-2 ' />
            <div className='w-[1px] h-7 bg-zinc-300 mx-2 '></div>
            <VideoIcon id='Ticon' className='mx-2' />
          </div>
          <Search id='Ticon' className='mx-3' />
        </div>

      </div>
      <div className=''>

      </div>

      <div className=' fixed flex items-center px-10 py-5 w-full h-20 bottom-0'>
        <Smile id='Ticon' className='mx-3' /> <Paperclip id='Ticon' className='mx-3' />
        <input id='inPut' type='text' placeholder='message' className='px-3 py-3 ml-4 border-none' />
        <Send id='Ticon' className='mx-3' />
      </div>
    </div>
  )
}

export default Msgin
