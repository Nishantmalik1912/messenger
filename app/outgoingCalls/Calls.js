import React from 'react'
import { Link2, PhoneOutgoing } from 'lucide-react'
const Calls = () => {
  return (
    <div >
      <div id='calls' className='flex items-center py-2 '>
        <div className='border-2 rounded-full p-4 mr-3 '><Link2 /></div>
        <div className='flex justify-between w-full'>
          <div>
            <h1 className=' font-semibold'>Name</h1>
            <div className='flex justify-start items-center'>
              <div><PhoneOutgoing id='Ticon' className='p-1' />
              </div>
              <h2 className='font-extralight'>Outgoing</h2>
            </div>
          </div>
          <div><h1 className='font-extralight pr-14'>Timeing of calls</h1></div>
        </div>
      </div>
    </div>
  )
}

export default Calls
