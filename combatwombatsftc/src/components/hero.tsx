import { FaInstagram, FaYoutube } from "react-icons/fa6";
import { IoMailOpenOutline } from "react-icons/io5";
import Link from "next/link";
import Robot from "@/components/robot";
import Image from "next/image";

export default function Hero() {
  const imageStyle = {
    position: "absolute",
    bottom: "-6rem",
    right: "-36rem",
    width: "48rem",
  } as React.CSSProperties;

  return (
    <div className={""}>
      <section className="mx-12 mt-16 mb-24 lg:mb-72 3xl:mb-44 4xl:mb-72 lg:mt-24 relative max-w-7xl">
        <Robot />
        <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl text-center sm:text-left mt-8 sm:mt-0">
          We&apos;re the
          <br />
          <span className="combat">Combat Wombats</span>
        </h1>
        <article className="mt-8 ml-2 font-medium max-w-3xl text-md md:text-xl 2xl:text-2xl text-center sm:text-left">
          We&apos;re an Australian team of{" "}
          <span className="text-combatgreen font-bold">driven</span> and{" "}
          <span className="text-wombatbrown font-bold">dedicated</span> STEM
          students aiming to become future{" "}
          <span className="text-wombatbrown font-bold">change-makers</span> and{" "}
          <span className="text-combatgreen font-bold z-10">innovators</span>.
        </article>
        <article className="ml-2">
          <ul className="flex flex-row mt-6 child:mx-4 text-2xl justify-center sm:justify-normal">
            <li className="ml-0">
              <Link href="https://www.instagram.com/combat_wombats_ftc_aus/">
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/@CombatWombats23335">
                <FaYoutube />
              </Link>
            </li>
            <li>
              <Link href="mailto: combatwombatsftc@gmail.com">
                <IoMailOpenOutline />
              </Link>
            </li>
          </ul>
        </article>
      </section>
      <section className="flex flex-col items-center text-md md:text-xl font-medium pb-12 mx-auto px-12 text-center sm:text-left">
        <span>
          We extend our{" "}
          <span className="text-combatgreen font-bold z-10">heartfealt</span>{" "}
          gratitude and love for the support our wonderful sponsors have
          provided to us!
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
