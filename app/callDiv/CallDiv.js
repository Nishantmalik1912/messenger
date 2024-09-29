import { Link2, Phone } from 'lucide-react'
import React from 'react'
import Calls from '../outgoingCalls/Calls'
import Callsin from '../incomingCalls/Callsin'


const page = () => {
    return (
        <div className=''>
            <div className=' w-1/3 items-center bg-white top-0 fixed '>
                <div className=' flex w-full justify-between px-10 py-5'>
                    <h1 className='text-2xl font-semibold '>Calls</h1>
                    <div className='flex justify-center items-center hover:bg-zinc-200 px-3 rounded-sm'>
                        <Phone id='Ticon' />
                        <div> <div><h1 id='plus'>+</h1></div>
                            <div className='w-1 h-10'></div></div>
                    </div>
                </div>

                <div id='search' className=' w-full mb-2 ' >
                    <input type='text' className='w-4/5 py-2 px-3 border-[1px] rounded-md' placeholder='Search' />
                </div>

            </div>


            <div className='flex justify-center items-center  p-2 mt-44 w-3/5'>
                <div className='ml-3 border-2 rounded-full p-4 mr-3 '><Link2 /></div>
                <div>
                    <h1 className='text-xl font-semibold'>Create call link</h1>
                    <h2>Share a link for your WhatsApp call</h2>
                </div>
            </div>




            <div id='recent' className='flex sticky top-40 bg-white justify-start'><h1 className='p-2 font-extralight'>Recent </h1></div>



           <Calls/>
           <Calls/>
           <Callsin/>
           <Callsin/>
           <Callsin/>
           <Calls/>
           <Calls/>
          
          


        </div>
    )
}

export default page
