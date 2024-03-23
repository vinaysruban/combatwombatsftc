import Image from "next/image";
import { SiGithub } from "react-icons/si";
import Link from 'next/link';
import DarkMode from "@/components/darkmode";
import SideNav from "@/components/layouts/sidebar";

export default function Navbar() {
    return (
        <nav className="mx-auto font-bold">
          <ul className="hidden md:flex flex-row flex-nowrap justify-between items-center child:mx-3 py-3 ">
            <li className=" text-xl mx-6"><Link href="https://github.com/vinaysruban/combatwombatsftc"><SiGithub /></Link></li>
            <li>
              <ul className="flex flex-row flex-nowrap justify-center items-center child:mx-3 hover:child:text-combatgreen child:transition child:ease-linear child:duration-150">
                <li><Link href="/about-us" prefetch={false}>About Us</Link></li>
                <li><Link href="/docs" className="cursor-pointer">Robot Docs</Link></li>
                <li className="mx-8"><Link href="/"><Image src={"/image-transformed.webp"} alt="Team logo of a wombat" width="40" height="40" className="dark:invert" /></Link></li>
                <li>Sponsors</li>
                <li>Contact Us</li>
              </ul>
            </li>
            <li className="mx-6"><DarkMode /></li>
          </ul>
          <SideNav />
        </nav>
    )
}