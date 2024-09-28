"use client"
import Image from 'next/image'
import React from 'react'


const Contacts = (props) => {
  return (
    <>
       <div onClick={props.onClick} className='flex w-full p-10 justify-between items-center h-20 hover:bg-zinc-200'>
            <div className='flex justify-normal items-center'>
                <div className='mr-3'>
                    <Image src='' width={20} height={20} />
                </div>
                <div>
                    <h1 className='text-xl font-medium '>Name</h1>
                    <h2>Last message</h2>
                </div>
            </div>
            <div><h2 className='font-extralight '>time of the last msg send</h2></div>
        </div>
    </>
  )
}

export default Contacts
