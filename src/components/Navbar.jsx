
"use client";

import {  Navbar } from "flowbite-react";
import { Button } from "flowbite-react";
import Image from "next/image";
export function Nav() {
  return (
    <Navbar fluid rounded className="p-4 bg-gray-100">
      <Navbar.Brand href="/">
       <Image className="mr-3 h-6 sm:h-9"  src="/assets/s.png"
      width={42}
      height={42}
      alt="Picture of the author"></Image>
        <span className="self-center whitespace-nowrap text-3xl font-bold dark:text-white ">SCS</span>
      </Navbar.Brand>
      <div className="flex md:order-2 gap-2">
        <a href="tel:+1234567890">
      <Button className="bg-btn rounded-3xl" >Call Us at +9192924949</Button>
      </a>

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        
        <Navbar.Link href="/about" className="text-gray-900 text-base font-normal hover:text-purple-500 lg:hover:text-purple-500  hover:underline">About</Navbar.Link>
        <Navbar.Link href="/services" className="text-gray-900  text-base font-normal hover:text-purple-500 lg:hover:text-purple-500  hover:underline">Services</Navbar.Link>
        <Navbar.Link href="#" className=" text-gray-900 text-base font-normal hover:text-purple-500 lg:hover:text-purple-500  hover:underline">Pricing</Navbar.Link>
        <Navbar.Link href="/contact" className=" text-gray-900 text-base font-normal hover:text-purple-500 lg:hover:text-purple-500  hover:underline">Contact</Navbar.Link>
       
      </Navbar.Collapse>
    </Navbar>
  );
}
