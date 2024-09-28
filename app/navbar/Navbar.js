"use client"
import React from 'react'
import { ListFilter, SquarePen } from 'lucide-react'



const Navbar = () => {

    return (
     
            <div className=' fixed w-1/3 items-center bg-white top-0'>
                <div className=' flex w-full justify-between px-10 py-5'>
                    <h1 className='text-2xl font-semibold'>Chat</h1>
                    <div className='flex justify-between '>
                        <SquarePen id='Ticon' className='mx-4' />
                        <ListFilter id='Ticon' />
                    </div>
                </div>

                <div id='search' className=' w-full' >
                    <input type='text' className='w-4/5 py-2 px-3 border-[1px] rounded-md ' placeholder='Search' />
                </div>
            </div>




      
    )
}

export default Navbar
