"use client"
import { MessageCircle } from 'lucide-react'
import React, { useState } from 'react'
import Navbar from './navbar/Navbar'
import Contacts from './contact/Contacts'
import Msgin from './msginterface/Msgin'



const page = () => {
  const onClick=()=>{
    setState(true)
  }
  const[state , setState]=useState(false)
  let iff =<div className=' fixed border-2 h-full ' >
  <Msgin/> 
  </div>
  let eelse = <div id='main' className='fixed flex justify-center items-center border-2 h-full' >
  <MessageCircle/> 
  </div>
  return (
    
     <div className='flex justify-normal'>
      <div id='top' className='w-1/3'>
      <div><Navbar/></div>

      <div id='down'>
        <Contacts onClick={onClick} />
      </div>
      </div>
       
     <div className='w-2/3'>
      {state == false ? eelse : iff}
     </div>



     </div>
    
  )
}

export default page
