import { FaInstagram, FaYoutube } from "react-icons/fa6";
import { IoMailOpenOutline } from "react-icons/io5";
import Link from 'next/link'
import Robot from "@/components/robot";
import Image from "next/image";


export default function Hero() {
  return (
    <div className={"bg-wombatbi"}>
      <Robot />
      <section className="mx-12 mt-16 mb-24 lg:mb-72 lg:mt-24">
        <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
          Meet the <br />
          <span className="combat">Combat Wombats</span>
        </h1>
        <article className="font-medium mt-8 ml-2 md:text-xl max-w-3xl">
          We&apos;re an Australian team of{" "}
          <span className="text-combatgreen font-bold">driven</span>{" "}
          and <span className="text-wombatbrown font-bold">dedicated</span> STEM students{" "}
          aiming to become future <span className="text-wombatbrown font-bold">change-makers</span>{" "}
          and <span className="text-combatgreen font-bold z-10">innovators</span>.
        </article>
        <article className="ml-2">
          <ul className="flex flex-row mt-6 child:mx-4 text-2xl">
            <li className="ml-0"><Link href="https://www.instagram.com/combat_wombats_ftc_aus/"><FaInstagram /></Link></li>
            <li><Link href="https://www.youtube.com/@CombatWombats23335"><FaYoutube /></Link></li>
            <li><Link href="mailto: combatwombatsftc@gmail.com"><IoMailOpenOutline /></Link></li>
          </ul>
        </article>
      </section>
      <section className="flex flex-col items-center mx-auto text-xl font-semibold pb-12">
        <span>
          Thanks to these{" "}
          <span className="text-combatgreen font-bold">fellows</span> for
          supporting us:
        </span>
        <ul className="flex justify-start child:mx-12 mt-12">
          <li>
            <Image src="/sitelogo.png" alt="QASMT" height="150" width="150" />
          </li>
        </ul>
      </section>
    </div>
  );
}
