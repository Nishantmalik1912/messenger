"use client"
import { Menu, MessageCircle } from 'lucide-react'
import React from 'react'



const page = () => {
  return (
    <>
      <div className='flex mt-5 mx-20 border-slate-950 rounded-xl '>
       
       
        <div id='sMain' className='w-1/3 fixed justify-center border-2 rounded-xl text-center h-full'>
          <nav className='flex text-center p-3 border-slate-950 rounded-xl justify-between'>
            <h1 className=''>Chats</h1>
            <div>
              <Menu/>
            </div>
          </nav>
          <input className='m-5 border-slate-500 border-2 w-2/3 py-2 px-3 rounded-sm' placeholder='Search' />

        </div>

        <div id='main' className='w-2/3 fixed border-2 p-3 rounded-xl h-full'>

       <MessageCircle/>
         
        </div>
        <div>lorem</div>
      </div>
    </>
  )
}

export default page
