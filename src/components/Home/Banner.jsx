import React from "react";
import Link from "next/link";
import Image from "next/image";

import { MdOutlineMail, MdCall, MdWhatsapp } from "react-icons/md";
import { RiGlobalLine } from "react-icons/ri";
import L1 from '/assets/Banner/bgg.svg'

const Reach = () => {
    return (
        <section className="px-4 py-6 lg:px-8 lg:py-20 max-w-full md:max-w-[90%] mx-auto">
            <div
                className="relative isolate overflow-hidden rounded-2xl bg-custom-gradient shadow-xl shadow-gray-400"
            >
                <Image
                    src={L1}
                    alt="bg"
                    className=" absolute top-0"
                />

                <div className="relative isolate overflow-hidden py-12 px-4 sm:px-24">
                    <p className="text-center text-base font-semibold leading-7 uppercase bg-white rounded-xl w-fit px-4 py-1 text-black lg:text-left">
                        Get in touch
                    </p>
                    <h2 className='text-4xl mt-3 font-cabr text-white md:text-6xl max-w-md font-semibold'>
                        How Can You <span className='text-primary-2'> Reach Us</span>?
                    </h2>
                    <p className="my-auto mt-3 max-w-2xl text-base text-gray-300 md:text-lg">
                        If you need to get in touch, there are several ways to contact us.
                    </p>

                    <div className="flex flex-col md:flex-row w-full gap-y-4 justify-between mt-8 text-lg">
                        <Link href='mailto:info@achintyasolutions.com' className="text-white flex gap-2 items-center">
                            <MdOutlineMail className=" text-yellow-500 w-7 h-7" />
                            abc@gmail.com
                        </Link>
                        <Link href='tel:6291858611' target='_blank' className="text-white flex gap-2 items-center">
                            <MdCall className=" text-blue-600 w-7 h-7" />
                            +91-1234567890                        </Link>
                        <Link href='https://api.whatsapp.com/send?phone=916291858611&text=Hello,%20Welcome%20to%20Achintya%20Solution.%20We%20are%20delighted%20to%20have%20you%20here%20and%20are%20eager%20to%20assist%20you%20in%20any%20way%20we%20can.%20Whether%20you%27re%20looking%20for%20information,%20support,%20or%20simply%20want%20to%20learn%20more%20about%20our%20services,%20we%20are%20at%20your%20disposal.%20Please%20feel%20free%20to%20explore%20our%20website,%20and%20don%27t%20hesitate%20to%20reach%20out%20if%20you%20have%20any%20questions%20or%20concerns.%20Your%20satisfaction%20is%20our%20top%20priority,%20and%20we%20look%20forward%20to%20serving%20you.%20Thank%20you%20for%20choosing%20Achintya%20Solution!' className="text-white flex gap-2 items-center">
                            <MdWhatsapp className=" text-green-500 w-7 h-7" />
                            +91-1234567890
                        </Link>
                        <Link href={'/'} className="text-white flex gap-2 items-center">
                            <RiGlobalLine className=" text-purple-500 w-7 h-7" />
                           scs.com
                        </Link>
                    </div>

                    <ul className=" mt-8 text-gray-300 list-disc ml-4 text-sm md:text-base">
                        <li>
                            Submit your query and state your requirements.
                        </li>
                        <li>
                            Receive a call back from our experts as per your query to help for your need.
                        </li>
                    </ul>

                    {/* <div className="flex lg:items-center flex-col lg:flex-row gap-3 lg:gap-14">
                        <div className="flex items-center gap-2">
                            <Image className="w-10 h-10" src={MdEmail} alt="" />
                            <p className="mb-2 text-white">info@achintyasolutions.com</p>
                        </div>
                        <div className="flex items-center gap-2 ">
                            <Link href='tel:6291858611' target='_blank'>
                            <Image className="w-10 h-10" src={MdCall} alt="" />
                            </Link>
                            <p className="mb-2 text-white">+91-8459418970</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link href='https://api.whatsapp.com/send?phone=916291858611&text=Hello,%20Welcome%20to%20Achintya%20Solution.%20We%20are%20delighted%20to%20have%20you%20here%20and%20are%20eager%20to%20assist%20you%20in%20any%20way%20we%20can.%20Whether%20you%27re%20looking%20for%20information,%20support,%20or%20simply%20want%20to%20learn%20more%20about%20our%20services,%20we%20are%20at%20your%20disposal.%20Please%20feel%20free%20to%20explore%20our%20website,%20and%20don%27t%20hesitate%20to%20reach%20out%20if%20you%20have%20any%20questions%20or%20concerns.%20Your%20satisfaction%20is%20our%20top%20priority,%20and%20we%20look%20forward%20to%20serving%20you.%20Thank%20you%20for%20choosing%20Achintya%20Solution!'>
                            
                            <Image className="w-10 h-10" src={MdWhatsapp} alt="" />
                            </Link>
                            <p className="mb-2 text-white">+91-8459418970</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image className="w-10 h-10" src={MdWeb} alt="" />
                            <p className="mb-2 text-white">www.achintyasolutions.com</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default Reach;