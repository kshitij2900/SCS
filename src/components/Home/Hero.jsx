"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Blobby from "../blobby";
import AnimatedGradientText from "../ui/gradienttxt";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="w-full h-auto lg:pb-28 pb-16">
      <Image
        src={"/PNGs/Grad_01.png"}
        width={300}
        height={300}
        alt="hero"
        className="absolute top-10 right-14 hover:rotate-6 duration-300 transition-all overflow-hidden  z-0"
      />
      <Image
        src={"/PNGs/Grad_05.png"}
        width={300}
        height={300}
        alt="hero"
        className="absolute top-12 left-20 z-0 hover:rotate-6 duration-300 transition-all overflow-hidden"
      />
      <Image
        src={"/PNGs/Grad_04.png"}
        width={300}
        height={300}
        alt="hero"
        className="absolute bottom-12 right-32 z-0 hover:rotate-6 duration-300 transition-all overflow-hidden"
      />
      <Image
        src={"/PNGs/Grad_15.png"}
        width={300}
        height={300}
        alt="hero"
        className="absolute bottom-10 left-20 z-0 hover:rotate-6 duration-300 transition-all overflow-hidden"
      />
      <Blobby className="top-10 left-1/2 bg-cyan-400/40 rounded-full h-40 w-40" />
      <Blobby className="bottom-10 right-1/2 bg-purple-400/40 rounded-full h-40 w-40" />

      <Blobby className="bottom-64 left-52 bg-blue-400/40 rounded-full h-40 w-40" />
      <AnimatedGradientText
        className={"mt-20 hover:scale-105 transition-all hover:rotate-3"}
      >
        🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
          )}
        >
          Trusted my thousands!
        </span>
      </AnimatedGradientText>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center items-center pt-6 mx-auto w-[60%] flex-col"
      >
        <h1 className="text-center tracking-tighter text-5xl lg:text-8xl md:text-6xl font-semibold text-wrap">
          Explore Innovation with Expert
          <span className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 text-transparent bg-clip-text">
            {" "}
            AI Consulting
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3 }}
          className="text-center font-normal text-base md:text-xl max-w-2xl text-muted-foreground lg:text-lg mt-6 lg:mt-10"
        >
          Unlock innovation with our AI consulting. We provide tailored
          solutions to optimize operations and enhance decision-making, helping
          you stay ahead in the market.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col lg:flex-row gap-4 items-center"
        >
          <button className="p-3 px-7 flex items-center rounded-full bg-primary text-2xl text-white mt-6 transform transition-all active:scale-95 hover:scale-105 lg:mt-12">
            Get Free Consultant <ArrowUpRight className="ml-2" size={30}/>
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
