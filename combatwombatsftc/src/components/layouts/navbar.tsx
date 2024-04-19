import Image from "next/image";
import { SiGithub } from "react-icons/si";
import Link from 'next/link';
import DarkMode from "@/components/darkmode";
import MobileNav from "@/components/layouts/sidebar";

export default function Navbar() {
    return (
        <nav className="mx-auto font-bold z-50 static top-0">
          <ul className="hidden md:flex flex-row flex-nowrap justify-between items-center child:mx-3 py-3 ">
            <li className="text-xl mx-8"><Link href="https://github.com/vinaysruban/combatwombatsftc" aria-label="The project's Github"><SiGithub /></Link></li>
            <li>
              <ul className="flex flex-row flex-nowrap justify-center items-center child:mx-3 hover:child:text-combatgreen child:transition child:ease-linear child:duration-150">
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/docs">FTC Docs</Link></li>
                <li className="mx-8"><Link href="/"><Image src={"/images/image-transformed.webp"} alt="Team logo of a wombat" width="40" height="40" className="dark:invert aspect-[96/77] w-auto" /></Link></li>
                <li><Link href="/sponsors">Sponsors</Link></li>
                <li><Link href="/outreach">Outreach</Link></li>
              </ul>
            </li>
            <li className="mx-8"><DarkMode /></li>
          </ul>
          <MobileNav />
        </nav>
    )
}