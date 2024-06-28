import React from "react";
import img1 from '/assets/Experience/1.png'
import img2 from '/assets/Experience/2.png'
import img3 from '/assets/Experience/3.png'
import img4 from '/assets/Experience/4.png'
import img5 from '/assets/Experience/5.png'
import img6 from '/assets/Experience/6.png'
import Image from "next/image";

const Experience = () => {
  return (
    <div className="flex flex-col p-9 space-y-14">
      <div className="flex flex-col items-center pl-14 w-full max-md:pl-5 max-md:max-w-full">
        <div className="ml-8 text-3xl font-bold tracking-tight leading-9 text-zinc-700">
          Experts with all the intelligence
        </div>
        <div className="mt-7 ml-8 text-base tracking-normal leading-6 text-center text-zinc-500 max-md:max-w-full">
          Browse freelancers who’ve got all the generative AI platforms down to
          get your idea up and running
        </div>
        <div className="self-stretch mt-16 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-center max-md:mt-10">
                <Image
                  loading="lazy"
                  src={img1}
                  className="self-center max-w-full aspect-square w-[100px]"
                />
                <div className="mt-6 text-lg font-bold tracking-normal leading-6 text-zinc-700">
                  ChatGPT Application Developers
                </div>
                <div className="mt-2 text-base tracking-normal leading-6 text-neutral-500">
                  Development of ChatGPT-based apps
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center text-center max-md:mt-10">
              <Image
                  loading="lazy"
                  src={img2}
                  className="self-center max-w-full aspect-square w-[100px]"
                />
                <div className="mt-6 text-lg font-bold tracking-normal leading-6 text-zinc-700">
                  Stable Diffusion Artists
                </div>
                <div className="self-stretch mt-3 text-base tracking-normal leading-6 text-neutral-500">
                  Prompt engineering and editing for photo-realistic visuals
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-center text-center max-md:mt-10">
              <Image
                  loading="lazy"
                  src={img3}
                  className="self-center max-w-full aspect-square w-[100px]"
                />
                <div className="mt-6 text-lg font-bold tracking-normal leading-6 text-zinc-700">
                  DALL-E Artists
                </div>
                <div className="self-stretch mt-3 text-base tracking-normal leading-6 text-neutral-500">
                  Prompt engineering and editing for detailed visuals
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 mt-14 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center text-center max-md:mt-10">
            <Image
                  loading="lazy"
                  src={img4}
                  className="self-center max-w-full aspect-square w-[100px]"
                />
              <div className="mt-6 text-lg font-bold tracking-normal leading-6 text-zinc-700">
                AI Chatbot Developers
              </div>
              <div className="self-stretch mt-2 text-base tracking-normal leading-6 text-neutral-500">
                Development of AI-powered chatbots for your website or mobile
                app
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-center text-center max-md:mt-10">
            <Image
                  loading="lazy"
                  src={img5}
                  className="self-center max-w-full aspect-square w-[100px]"
                />
              <div className="self-stretch mt-6 text-lg font-bold tracking-normal leading-6 text-zinc-700">
                AI Mobile Application Developers
              </div>
              <div className="mt-2 text-base tracking-normal leading-6 text-neutral-500">
                Integration of AI into mobile apps
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-center text-center max-md:mt-10">
            <Image
                  loading="lazy"
                  src={img6}
                  className="self-center max-w-full aspect-square w-[100px]"
                />
              <div className="mt-6 text-lg font-bold tracking-normal leading-6 text-zinc-700">
                Midjourney Artists
              </div>
              <div className="self-stretch mt-2 text-base tracking-normal leading-6 text-neutral-500">
                Prompt engineering and editing for artistic visuals
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
