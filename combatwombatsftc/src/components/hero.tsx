import { FaInstagram, FaYoutube } from "react-icons/fa6";
import { IoMailOpenOutline } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import Robot from "@/components/robot2.png";
import blururl from "@/components/blururl";
import Sponsors from "./sponsors/sponsors";

interface Sponsor {
  sponsor: string;
  url: string;
  link: string;
}

const sponsors: Sponsor[] = [
  {
    sponsor: "Auscoil",
    url: "auscoil.png",
    link: "https://auscoil.com.au/about-us?referrer=qasmt",
  },
  {
    sponsor: "Bilby",
    url: "bilby.png",
    link: "https://b3d.com.au/stem?referrer=qasmt",
  },
  {
    sponsor: "BMD",
    url: "bmd.webp",
    link: "https://www.bmd.com.au?referrer=qasmt",
  },
  {
    sponsor: "Metal-Tech Industries",
    url: "mti.png",
    link: "https://metaltech.com.au?referrer=qasmt",
  },
  {
    sponsor: "QASMT",
    url: "sitelogo.png",
    link: "https://qasmt.eq.edu.au?referrer=qasmt",
  },
];

export default function Hero() {
  return (
    <div className="">
      <section className="pl-12 mr-12 pt-18 mb-12 lg:mb-44 3xl:mb-6 4xl:mb-48 lg:pt-24 relative max-w-7xl 5xl:max-w-[96rem] bg-parent">
        <Image
          src={Robot}
          alt="An image of the robot"
          sizes="(max-width: 768px) 31rem, (max-width: 1024px) 36rem, (min-width: 2248px) 68rem, (min-width: 1920px) 48rem, 31rem"
          priority
          placeholder={`${blururl}`}
          className="mx-auto w-small md:mx-auto md:w-medium lg:absolute lg:-bottom-52 lg:-right-12 lg:mr-4 lg:w-medium 3xl:absolute 3xl:-bottom-24 3xl:-right-xmoderate 3xl:w-large 4xl:-bottom-56 4xl:right-[-60rem] 4xl:w-xlarge bg-plain bg-no-repeat bg-contain bg-slide transition-all"
        />
        <h1 className="font-bold text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl 5xl:text-10xl text-center sm:text-left mt-8 sm:mt-0">
          We&apos;re the
          <br />
          <span className="combat">Combat Wombats</span>
        </h1>
        <article className="mt-8 ml-2 font-medium max-w-2xl 2xl:max-w-3xl 3xl:max-w-4xl 4xl:max-w-5xl text-base md:text-xl 2xl:text-2xl 3xl:text-3xl text-center sm:text-left">
          We&apos;re an Australian team of{" "}
          <span className="text-combatgreen font-bold">driven</span> and{" "}
          <span className="text-wombatbrown font-bold">dedicated</span> STEM
          students aiming to become future{" "}
          <span className="text-wombatbrown font-bold">change-makers</span> and{" "}
          <br className="block xl:hidden" />
          <span className="text-combatgreen font-bold">innovators</span>.
        </article>
        <article className="ml-2">
          <hr
            className={`h-1 rounded-xl border-0 w-0 my-6 bg-combatgreen after:content-[''] after:w-2 after:h-2 after:rounded-full after:bg-combatgreen after:absolute animation-line text-center hidden   md:block`}
          />
          <div data-aos="fade-up">
            <ul className="flex flex-row mt-6 gap-8 3xl:gap-12 text-2xl 3xl:text-3xl 4xl:text-4xl justify-center sm:justify-normal">
              <li className="ml-0">
                <Link
                  href="https://www.instagram.com/combat_wombats_ftc_aus/"
                  aria-label="Check out our Instagram."
                >
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.youtube.com/@CombatWombats23335"
                  aria-label="Check out our Youtube."
                >
                  <FaYoutube />
                </Link>
              </li>
              <li>
                <Link
                  href="mailto: combatwombatsftc@gmail.com"
                  aria-label="Get in touch via email."
                >
                  <IoMailOpenOutline />
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </section>
      <hr className="spacer" />
      <section
        data-aos="fade-up"
        className="flex flex-col items-center text-base md:text-xl 2xl:text-2xl 4xl:text-3xl font-medium mb-24 sm:mb-48 mx-auto px-12 text-center lg:text-left relative"
      >
        <span className="mt-12">
          We extend our{" "}
          <span className="text-combatgreen font-bold">heartfelt</span>{" "}
          gratitude and love for the support our wonderful sponsors have
          provided to us: 👇
        </span>
        <ul
          data-aos="fade-up"
          className="flex justify-center flex-wrap gap-x-24 gap-y-12 mt-20 overflow-hidden"
        >
          {sponsors.map((sponsor) => {
            return (
              <Link href={sponsor.link} key={sponsor.sponsor}>
                <Image
                  src={`/sponsors/${sponsor.url}`}
                  alt="QASMT"
                  height="250"
                  width="250"
                  className="w-auto h-10 sm:h-16 md:h-12 lg:h-8 xl:h-12 2xl:h-18 3xl:h-20 4xl:h-24 grayscale hover:grayscale-0 transition-all object-cover"
                />
              </Link>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
