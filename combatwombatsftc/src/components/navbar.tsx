import Image from "next/image";
import { SiGithub } from "react-icons/si";
import Link from 'next/link';
import DarkMode from "./darkmode";

export default function Navbar() {
    return (
        <nav className="mx-auto font-bold">
          <ul className="flex flex-row flex-nowrap justify-between items-center child:mx-3 py-3 hover:child:text-zinc-500 child:transition child:ease-linear child:duration-150">
            <li className=" text-xl mx-6"><Link href="https://github.com/vinaysruban/combatwombatsftc"><SiGithub /></Link></li>
            <li>
              <ul className="flex flex-row flex-nowrap justify-center items-center child:mx-3 hover:child:text-zinc-500 child:transition child:ease-linear child:duration-150">
                <li>About Us</li>
                <li>Our Robot</li>
                <li className="mx-8"><Image src={"/image-transformed.webp"} alt="Team logo of a wombat" width="40" height="40" className="dark:invert"></Image></li>
                <li>Sponsors</li>
                <li>Contact Us</li>
              </ul>
            </li>
            <DarkMode />
          </ul>
        </nav>
    )
}