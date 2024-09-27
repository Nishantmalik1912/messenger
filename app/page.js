"use client"
import { MessageCircle } from 'lucide-react'
import React from 'react'
import Navbar from './navbar/Navbar'
import Contacts from './contact/Contacts'



const page = () => {
  return (
    <>
      <div className='flex mt-5 mx-4 '>

        <div className='w-1/3 border-2 fixed rounded-xl '>
          <div id='sMain' className='justify-center text-center '>


            <Navbar />

          </div>
          <div >
            <div ><Contacts/></div>
            <div ><Contacts/></div>
            <div ><Contacts/></div>
            <div ><Contacts/></div>
            <div ><Contacts/></div>
            <div ><Contacts/></div>
            <div ><Contacts/></div>
            <div ><Contacts/></div>
          </div>

        </div>

        <div id='main' className='w-2/3 fixed flex justify-center items-center border-2 rounded-xl h-full'>


          <MessageCircle />

        </div>

      </div>
    </>
  )
}

export default page
