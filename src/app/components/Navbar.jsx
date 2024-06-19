
"use client";

import {  Navbar } from "flowbite-react";
import { Button } from "flowbite-react";
export function Nav() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
       
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-black">Syntalix</span>
      </Navbar.Brand>
      <div className="flex md:order-2 gap-2">
        <a href="tel:+1234567890">
      <Button pill>Call Us at +9192924949</Button>
      </a>

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
       
      </Navbar.Collapse>
    </Navbar>
  );
}
