
"use client";

import {  Navbar } from "flowbite-react";
import { Button } from "flowbite-react";
import Image from "next/image";
export function Nav() {
  return (
    <Navbar fluid rounded className="p-4 bg-indio-950">
      <Navbar.Brand href="/">
       <Image className="mr-3 h-6 sm:h-9"  src="/assets/s.png"
      width={42}
      height={42}
      alt="Picture of the author"></Image>
        <span className="self-center whitespace-nowrap text-3xl font-bold dark:text-white ">SCS</span>
      </Navbar.Brand>
      <div className="flex md:order-2 gap-2">
        <a href="tel:+1234567890">
      <Button color="blue" pill>Call Us at +9192924949</Button>
      </a>

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        
        <Navbar.Link href="#" className="text-gray-100 text-base font-semibold">About</Navbar.Link>
        <Navbar.Link href="#" className="text-gray-100  text-base font-semibold">Services</Navbar.Link>
        <Navbar.Link href="#" className=" text-gray-100 text-base font-semibold">Pricing</Navbar.Link>
        <Navbar.Link href="/pages/contact" className=" text-gray-100 text-base font-semibold">Contact</Navbar.Link>
       
      </Navbar.Collapse>
    </Navbar>
  );
}
