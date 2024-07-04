"use client";

import { Navbar } from "flowbite-react";
import { Button } from "flowbite-react";
import Image from "next/image";
import scs from "../../assets/syntalix.png";
export function Nav() {
  return (
    <Navbar className="p-5 bg-white/40 backdrop-blur-md border-b sticky top-0 z-[100]">
      <Navbar.Brand href="/">
        <Image
          className="mr-3 h-6 sm:h-9"
          src={scs}
          width={42}
          height={42}
          alt="Picture of the author"
        ></Image>
        <span className="self-center whitespace-nowrap text-3xl font-bold dark:text-white ">
          SCS
        </span>
      </Navbar.Brand>

      <div className="flex md:order-2 gap-2">
        <a href="tel:+1234567890">
          <Button className="bg-transparent rounded-3xl border-gray-800 text-gray-800 font-bold">
            Contact Us
          </Button>
        </a>

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          href="/about"
          className="text-gray-900 text-base font-normal hover:font-bold hover:text-gray-900 lg:hover:text-gray-900 transform hover:scale-105 transition duration-500"
        >
          About Us
        </Navbar.Link>
        <Navbar.Link
          href="/services"
          className="text-gray-900 text-base font-medium hover:font-bold hover:text-gray-900 lg:hover:text-gray-900 transform hover:scale-105 transition duration-500"
        >
          Services
        </Navbar.Link>
        <Navbar.Link
          href="#"
          className="text-gray-900 text-base font-normal hover:font-bold hover:text-gray-900 lg:hover:text-gray-900 transform hover:scale-105 transition duration-500"
        >
          Pricing
        </Navbar.Link>
        
      </Navbar.Collapse>
    </Navbar>
  );
}
