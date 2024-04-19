"use client";

import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { RxCross1 } from "react-icons/rx";
import DarkMode from "@/components/darkmode";
import { useState } from "react";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <ul className="md:hidden flex flex-row justify-between child:mx-4 py-3 z-50">
        <li>
          <a href="/">
            <Image
              src={"/images/image-transformed.webp"}
              alt="Team logo of a wombat"
              width="40"
              height="40"
              className="dark:invert aspect-[96/77] w-auto"
            />
          </a>
        </li>
        <li className=" text-3xl z-50 absolute right-0" onClick={() => open ? setOpen(false) : setOpen(true)}>
          <IoMenu className="z-50" />
        </li>
      </ul>
      <nav className={`w-56 border-4 rounded-2xl border-combatgreen bg-midbeige dark:bg-lightgrey ${open ? "right-0" : "-right-[100rem]"} transition-all block md:hidden absolute top-0 z-10`}>
        <ul className="px-2 py-6 flex flex-col gap-4">
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/docs">FTC Docs</Link>
          </li>
          <li>
            <Link href="/sponsors">Sponsors</Link>
          </li>
          <li className="mb-auto">
            <Link href="/outreach">Outreach</Link>
          </li>
          <li>
            <hr className="border-black dark:border-white" />
          </li>
          <li className="border-none w-full">
            <ul className="flex flex-row justify-evenly text-2xl">
              <li className="">
                <DarkMode />
              </li>
              <li className="border-none">
                <Link
                  href="https://github.com/vinaysruban/combatwombatsftc"
                  aria-label="The project's Github"
                >
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
