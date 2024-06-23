import React from "react";
import gpt from '/assets/Experience/gpt.jpeg'
import Image from "next/image";

const Experience = () => {
  return (
    <div className="flex justify-center p-4 md:p-6 lg:p-0">
      <div className="w-full md:w-11/12 lg:w-[1440px] h-auto lg:h-[686px] bg-white">
        <div className="flex items-center justify-center flex-col gap-4 p-4 lg:p-0">
          <h2 className="text-black text-xl md:text-2xl font-semibold text-center">
            Experts with all the intelligence
          </h2>
          <p className="text-gray-800 text-center">
            Browse freelancers who've got all the generative AI platforms down
            to get your idea up and running
          </p>
          <div className="w-full md:w-3/4 flex flex-col lg:flex-row gap-2">
            <div className="w-full md:w-[429px] h-auto lg:h-[190px] bg-white flex justify-center items-center flex-col p-4 lg:p-0">
              <Image src={gpt} width={100} height={100} />
              <h3 className="text-lg text-black font-semibold text-center">ChatGPT Application Developers</h3>
              <p className="text-black text-xs text-center">Development of ChatGPT-based apps</p>
            </div>
            <div className="w-full md:w-[429px] h-auto lg:h-[190px] bg-white flex justify-center items-center flex-col p-4 lg:p-0">
              <Image src={gpt} width={100} height={100} />
              <h3 className="text-lg text-black font-semibold text-center">ChatGPT Application Developers</h3>
              <p className="text-black text-xs text-center">Development of ChatGPT-based apps</p>
            </div>
            <div className="w-full md:w-[429px] h-auto lg:h-[190px] bg-white flex justify-center items-center flex-col p-4 lg:p-0">
              <Image src={gpt} width={100} height={100} />
              <h3 className="text-lg text-black font-semibold text-center">ChatGPT Application Developers</h3>
              <p className="text-black text-xs text-center">Development of ChatGPT-based apps</p>
            </div>
          </div>
          <div className="w-full md:w-3/4 flex flex-col lg:flex-row gap-2">
            <div className="w-full md:w-[429px] h-auto lg:h-[190px] bg-white flex justify-center items-center flex-col p-4 lg:p-0">
              <Image src={gpt} width={100} height={100} />
              <h3 className="text-lg text-black font-semibold text-center">ChatGPT Application Developers</h3>
              <p className="text-black text-xs text-center">Development of ChatGPT-based apps</p>
            </div>
            <div className="w-full md:w-[429px] h-auto lg:h-[190px] bg-white flex justify-center items-center flex-col p-4 lg:p-0">
              <Image src={gpt} width={100} height={100} />
              <h3 className="text-lg text-black font-semibold text-center">ChatGPT Application Developers</h3>
              <p className="text-black text-xs text-center">Development of ChatGPT-based apps</p>
            </div>
            <div className="w-full md:w-[429px] h-auto lg:h-[190px] bg-white flex justify-center items-center flex-col p-4 lg:p-0">
              <Image src={gpt} width={100} height={100} />
              <h3 className="text-lg text-black font-semibold text-center">ChatGPT Application Developers</h3>
              <p className="text-black text-xs text-center">Development of ChatGPT-based apps</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
