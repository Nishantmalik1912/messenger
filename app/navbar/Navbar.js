"use client"
import React from 'react'
import { ListFilter, SquarePen } from 'lucide-react'



const Navbar = () => {

    return (
     
        
     
            <div className=' fixed w-1/3 items-center bg-white top-0'>
                <div className=' flex w-full justify-between px-10 py-5'>
                    <h1 className='text-2xl font-semibold'>Chat</h1>
                    <div className='flex justify-between '>
                        <div className='w-10  h-10 flex rounded-sm items-center justify-center hover:bg-zinc-200 ' ><SquarePen id='Ticon'  /></div>
                        <div className='w-10 h-10 flex rounded-sm items-center justify-center hover:bg-zinc-200 '><ListFilter id='Ticon'  /></div>
                    </div>
                </div>
               

                <div id='search' className=' w-full' >
                    <input type='text' className='w-4/5 py-2 px-3 border-[1px] rounded-md ' placeholder='Search' />
                </div>
            </div>

         

 
    )
}

export default Navbar
