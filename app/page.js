"use client"
import { MessageCircle } from 'lucide-react'
import React, { useState } from 'react'
import Navbar from './navbar/Navbar'
import Contacts from './contact/Contacts'
import Msgin from './msginterface/Msgin'
import Sidediv from './sideDiv/Sidediv'
import CallDiv from './callDiv/CallDiv'



const page = () => {
  const onClick = () => {
    setState(true)
  }
  const [state, setState] = useState(false)
  const [call, setCall] = useState(0)
  let iff = <div className=' fixed border-2 h-full ' >
    <Msgin />
  </div>
  let eelse = <div id='main' className='fixed flex justify-center items-center border-2 h-full' >
    <MessageCircle />
  </div>
  return (

    <div className='flex justify-normal'>
      <div id='Sdiv' className='border-2'>
        <Sidediv onClick={()=>setCall(1) }/>
      </div>
      {call == 1 ? <div id='top' className='w-2/6'> <CallDiv/> </div> : <div id='top' className='w-2/6'>
        <div><Navbar /></div>

        <div id='down'>
          <Contacts onClick={onClick} />
          <Contacts onClick={onClick} />
          <Contacts onClick={onClick} />
          <Contacts onClick={onClick} />
          <Contacts onClick={onClick} />
          <Contacts onClick={onClick} />
          <Contacts onClick={onClick} />
          <Contacts onClick={onClick} />
          <Contacts onClick={onClick} />
          <Contacts onClick={onClick} />
          <Contacts onClick={onClick} />
        </div>
      </div>}

      <div className='w-3/6'>
        {state == false ? eelse : iff}
      </div>



    </div>

  )
}

export default page
