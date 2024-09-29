import { Menu, MessageCircle, MessageCircleMore, Phone, Settings } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Sidediv = (props) => {
  return (
   <div className='fixed'>
      <div className='mb-20 mt-20'>

        <div className='flex justify-center p-2 hover:bg-slate-200 ' ><MessageCircleMore id='Ticon' /></div>
        <div className='flex justify-center p-2 hover:bg-slate-200 ' ><Phone onClick={props.onClick} id='Ticon' /></div>
      </div>
     

      <div  className='bottom-0'>
        <div className='flex justify-center p-2 hover:bg-slate-200 '> <Settings className='text-gray-600' /></div>
        
        <div className='flex justify-center p-2 hover:bg-slate-200 '><Image src="" width={20} height={20} /></div>
      </div>
    </div>
  )
}

export default Sidediv
