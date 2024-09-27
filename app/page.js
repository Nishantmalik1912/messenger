"use client"
import { MessageCircle } from 'lucide-react'
import React, { useState } from 'react'
import Navbar from './navbar/Navbar'
import Contacts from './contact/Contacts'
import Msgin from './msginterface/Msgin'



const page = () => {
  const[state , setState]=useState(false)
  let iff =<div id='msgin' className=' fixed flex justify-between border-2 h-full ' >
  <Msgin/> 
  </div>
  let eelse = <div id='main' className='fixed flex justify-center items-center border-2 h-full' >
  <MessageCircle/> 
  </div>
  return (
    <>
      <div className='flex mx-4 '>

        <div id='sMain' className='  border-2'>
          <div id='navbar' className='justify-center fixed w-1/3 bg-white text-center '>


            <Navbar />

          </div>
          <div className='mt-32' >
            <div onClick={()=>{setState(true)}} ><Contacts/></div>
            <div onClick={()=>{setState(true)}} ><Contacts/></div>
            <div onClick={()=>{setState(true)}} ><Contacts/></div>
            <div onClick={()=>{setState(true)}} ><Contacts/></div>
            <div onClick={()=>{setState(true)}} ><Contacts/></div>
            <div onClick={()=>{setState(true)}} ><Contacts/></div>
            <div onClick={()=>{setState(true)}} ><Contacts/></div>
            <div onClick={()=>{setState(true)}} ><Contacts/></div>
            <div onClick={()=>{setState(true)}} ><Contacts/></div>
         
          </div>

        </div>
        <div className='w-2/3'>  { state==true ? iff : eelse}</div>
       

      </div>
    </>
  )
}

export default page
