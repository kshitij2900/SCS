'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='w-full h-auto lg:pb-28 pb-16'>
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className='flex justify-center items-center pt-20 lg:pt-40 md:pt-30 mx-auto w-[60%] flex-col'
      >
        <h1 className='text-center text-5xl lg:text-7xl md:text-6xl font-semibold text-wrap'>
          Explore Innovation with Expert 
          <span className='bg-gradient-to-r from-purple-600 via-purple-500 to-purple-300 text-transparent bg-clip-text'> AI Consulting</span>
        </h1>

        <motion.p 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.0, delay: 0.5 }}
          className='text-center font-normal text-base lg:text-lg md:text-lg mt-10 lg:mt-20'
        >
          Unlock innovation with our AI consulting. We provide tailored solutions to optimize operations and enhance decision-making, helping you stay ahead in the market.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, delay: 1.0 }}
          className='flex flex-col lg:flex-row gap-4 items-center'
        >
          <button className='p-3 px-4 rounded-full bg-btn text-white mt-10 transform transition hover:scale-105 lg:mt-20'>
            Get Free Consultant
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;
