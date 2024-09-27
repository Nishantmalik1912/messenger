"use client"
import { Phone, Smile, Video } from 'lucide-react'
import React from 'react'

const Msgin = () => {
    return (
        
            
           <>
           <div className='flex fixed justify-between w-full px-3 py-2'>
                <h1 className='text-3xl font-semibold'>Suryash</h1>

                <div className='border-2 p-2 flex justify-center rounded-sm'>
                    <Phone />
                    <div className='h-6 bg-slate-300 mx-2' id='line' ></div>
                    <Video />
                </div>

            </div>
            <div className='h-4/5 w-full'>

            </div>

            <div id='msgbar' className='fixed'>
                <Smile />
            </div>
           </>
          
    )
}

export default Msgin
