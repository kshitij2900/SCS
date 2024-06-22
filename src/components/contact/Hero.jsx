import Image from 'next/image'
import React from 'react'
import { TiArrowDown, TiArrowUp } from "react-icons/ti";
import { FaFacebook, FaXTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa6';
import Link from 'next/link';

const social = [
    {
        title: "Facebook",
        href: "https://www.facebook.com/achintyasolutions",
        svg: <FaFacebook className='w-6 h-6' />
    },
    {
        title: "Twitter",
        href: "https://twitter.com/AchintyaCompany",
        svg: <FaXTwitter className='w-6 h-6' />
    },
    {
        title: "Instagram",
        href: "https://www.instagram.com/achintyasolutions/",
        svg: <FaInstagram className='w-6 h-6' />
    },
    {
        title: "Linkeden",
        href: "https://www.linkedin.com/company/achintyasolutions/",
        svg: <FaLinkedin className='w-6 h-6' />
    },
    {
        title: "Youtube",
        href: "https://www.youtube.com/@achintyasolutions-services",
        svg: <FaYoutube className='w-6 h-6' />
    },
];

const Hero = () => {
    return (
        <section className="relative isolate bg-white py-8 lg:py-16 ">
            <div className="mx-auto max-w-full px-4 md:max-w-[90%] lg:px-8 ">
                <div className="mx-auto max-w-full">
                    <p className="text-base font-semibold leading-7 uppercase bg-black rounded-xl w-fit mx-auto md:mx-0 px-4 py-1 text-primary-1">
                        Get in Touch
                    </p>
                    <div className="flex flex-col mt-2 items-center justify-between gap-y-5 py-4 text-center md:gap-x-10 lg:flex-row lg:text-left">
                        <div className='flex flex-col gap-8'>
                            <h2 className="text-4xl text-gray-800 md:text-6xl font-semibold font-cabm">
                                Contact us
                            </h2>
                            <p className="my-auto max-w-xl text- text-gray-700 text-lg">
                                Ready to explore transformative IT solutions with Syntalix Consultancy Services? Contact us today for seamless collaboration and dedicated support on your journey toward innovative technology solutions. Let&apos;s connect and grow together.
                            </p>
                        </div>
                        <div className='md:mr-16 flex flex-col md:items-end'>
                            <Link href="#contact-form">
                                <button className=' bg-gray-900  flex gap-2 items-center md:mx-0 mx-auto text-white text-lg rounded-full px-8 py-2'>
                                    Book your free call
                                    <TiArrowDown className='w-5 h-5' />
                                </button>
                            </Link>

                            <div className='flex flex-col md:flex-row items-center gap-4 mt-6'>
                                <p className='text-lg font-semibold text-gray-800'>Follow us on:</p>

                                <div className="flex flex-wrap gap-x-3">
                                    {social.map((item, i) => (
                                        <Link
                                            key={i}
                                            href={item.href}
                                            target='_blank'
                                            className="rounded-full bg-blue-900 p-3 shadow-lg hover:bg-blue-600"
                                        >
                                            <span className="sr-only">{item.title}</span>
                                            {item.svg}
                                        </Link>
                                    ))}
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero