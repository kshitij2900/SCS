'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { FaRobot } from 'react-icons/fa6'


const Whatsapp = () => {

 

  return (
    <>
      <div className='bg-green-600 w-min p-2 rounded-full fixed 
          bottom-28 right-4 cursor-pointer md:right-8'>
        <FaRobot color='white' className='w-7 h-7 md:w-10 md:h-10' />
      </div>
    </>
  )
}

export default Whatsapp