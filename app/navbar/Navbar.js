"use client"
import React from 'react'
import { Menu , Search } from 'lucide-react'



const Navbar = () => {
    return (
        <>
            <div > 
                <div className='flex text-center px-10 py-5 border-slate-950 rounded-xl justify-between'>
                <h1 className='text-black font-medium text-2xl'>Chats</h1>

                <div>
                    <Menu className='text-black' />
                </div>
                </div>

                <div >
                    <input id='search' className='border-slate-500 border-2 w-2/3 px-3 py-2 rounded-xl mb-5' placeholder={<Search/> + "Search"} />
                </div>
            </div>





        </>
    )
}

export default Navbar
