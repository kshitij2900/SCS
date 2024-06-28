import React from 'react'


const Hero = () => {
  return (
    <div className='w-full h-auto lg:pb-28 pb-16'>
        <div className='flex justify-center items-center pt-20 lg:pt-40 md:pt-30 mx-auto w-[60%] flex-col'>
          <h1 className='text-center text-5xl lg:text-7xl md:text-6xl font-semibold text-wrap'>Explore Innovation with Expert <span className='text-[#4812E4]'>AI Consulting</span> </h1>

          <p className='text-center font-normal text-base lg:text-lg md:text-lg mt-10 lg:mt-20'>Unlock innovation with our AI consulting. We provide tailored solutions to optimize operations and enhance decision-making, helping you stay ahead in the market.</p>
            <div className='flex flex-col lg:flex-row gap-4 items-center'>
          <button className='p-3 px-4 rounded-full bg-btn text-white mt-10 trasnform transition hover:scale-105 lg:mt-20'>Get Free Consultant</button>
          
          </div>
        </div>
    </div>
  )
}

export default Hero