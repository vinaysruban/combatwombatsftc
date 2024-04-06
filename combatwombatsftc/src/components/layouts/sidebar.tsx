"use client";

import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { RxCross1 } from "react-icons/rx";
import DarkMode from "@/components/darkmode";
import { useState } from "react";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";

export default function SideNav() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <ul className="md:hidden flex flex-row justify-between child:mx-4 py-3">
        <li>
          <a href="/">
            <Image
              src={"/images/image-transformed.webp"}
              alt="Team logo of a wombat"
              width="40"
              height="40"
              className="dark:invert aspect-[96/77]"
            />
          </a>
        </li>
        <li className=" text-3xl" onClick={() => setOpen(true)}>
          <IoMenu />
        </li>
      </ul>
      <nav
        className={`fixed right-0 top-0 bg-gradient-to-r from-darkgrey to-lightgrey text-white transition-all ${
          open ? "w-56" : "w-0"
        } h-full z-10 overflow-hidden`}
      >
        <ul className="flex flex-col child:my-2 child:py-1 items-center child:px-6 child:border-solid child:border-b-2 h-full">
          <li className="border-none ml-auto text-2xl mt-3" onClick={() => setOpen(false)}>
            <RxCross1 />
          </li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/docs">Robot Docs</Link></li>
          <li>Sponsors</li>
          <li className="mb-auto"><Link href="/contact">Contact Us</Link></li>
          <li className="border-none w-full">
            <ul className="flex flex-row justify-evenly text-2xl">
              <li className="">
                <DarkMode />
              </li>
              <li className="border-none">
                <Link href="https://github.com/vinaysruban/combatwombatsftc" aria-label="The project's Github">
                  <SiGithub />
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
