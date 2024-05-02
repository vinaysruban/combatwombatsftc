"use client";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaYoutube } from "react-icons/fa6";
import { IoMailOpenOutline } from "react-icons/io5";
import Spline from "@splinetool/react-spline";

function Social({
  children,
  link,
}: {
  children: React.ReactNode;
  link: string;
}) {
  return (
    <Link
      href={link}
      className="align-sub border-2 border-black dark:border-white rounded-3xl px-2 py-1 mx-1 md:mx-2 text-sm md:text-base items-center inline-flex gap-1"
    >
      {children}
    </Link>
  );
}

export default function About() {
  return (
    <div className="">
      <main
        data-aos="fade-up"
        className="px-2 sm:px-6 md:px-12 pt-6 sm:pt-0 h-full w-5/6 max-w-screen-3xl mx-auto flex flex-col lg:grid lg:grid-cols-2"
      >
        <div className="py-4 3xl:py-16 w-fit mx-auto ms:mx-0 md:mx-auto flex flex-col ms:flex-row md:block">
          <h1 className="my-6 ms:my-12 sm:my-12 2xl:my-16 text-5xl ms:text-6xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-8.5xl 4xl:text-9xl font-bold">
            Come <span className=" ml-10 3xl:ml-16 4xl:ml-24 block">meet us!</span>
          </h1>
          <Image
            src="/images/slideshow/2.webp"
            height="1000"
            width="1000"
            alt=""
            className="w-2/5 mx-auto right-0 md:right-auto -z-10 md:w-9/12 rounded-3xl -rotate-[4deg] relative ms:absolute md:relative ms:top-6 md:-top-6 aspect-[340/240] h-fit min-w-44 ms:min-w-0 md:min-w-[20rem] max-w-58 lg:max-w-none"
          />
          
        </div>
        <div className="lg:pt-12 3xl:pb-24 flex flex-col justify-center">
          <p className="my-6 2xl:my-16 text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl text-gray-800 dark:text-gray-200 mb-8 text-center max-w-screen-lg">
            Our journey is coming to its climax, and we are excited to share our
            story with you. Let&apos;s hope you take our learnings and forge
            your own path to a greater victory.
          </p>
          <article className=" text-gray-800 dark:text-gray-200 justify-evenly my-6 2xl:mt-16 md:child:w-4/5 child:max-w-64 flex flex-row lg:flex-col 2xl:flex-row flex-wrap items-center child:text-center child:px-4 md:child:px-0">
            <p className="text-lg 2xl:text-xl 3xl:text-2xl">
              4{" "}
              <span className="block text-lg 2xl:text-xl 4xl:text-2xl">
                iterations of our robot, the Wombat
              </span>
            </p>
            <p className="text-lg 2xl:text-xl 3xl:text-2xl">
              2{" "}
              <span className="block text-lg 2xl:text-xl 4xl:text-2xl">
                awards from official FTC competitions
              </span>
            </p>
            <p className="text-lg 2xl:textl 3xl:text-2xl hidden md:block">
              11{" "}
              <span className="block text-lg 2xl:text-xl 4xl:text-2xl">
                devoted team members
              </span>
            </p>
          </article>
        </div>
      </main>

      <div className="slider shadow-md overflow-hidden my-6">
        <div className="slide-track flex w-[2625px] sm:w-[3500px] 2xl:w-[5250px] animate-scrolling-short sm:animate-scrolling 2xl:animate-scrolling-long">
          {[...Array(14)].map((_, index) => (
            <div
              key={index}
              className="object-cover w-[187.5px] h-[140.625px] sm:w-fit sm:h-fit 2xl:w-[375px] 2xl:h-[281.25px]"
            >
              <Image
                src={`/images/slideshow/${(index % 7) + 1}.webp`}
                height="100"
                width="250"
                alt=""
                className="object-cover aspect-[250/187.5] h-full w-full"
              />
            </div>
          ))}
        </div>
      </div>
      <section className="w-4/5 max-w-screen-xl mx-auto my-12 md:mt-24">
        <div id="contact" data-aos="fade-up">
          <h2 className="font-semibold text-2xl ms:text-3xl md:text-4xl xl:text-5xl 3xl:text-6xl text-center">
            Get in touch with us!
          </h2>
          <p className="text-base md:text-lg 2xl:text-xl 2xl:leading-8 my-12">
            Our team would absolutely love to work and network with you! We want
            to portray STEM as a fun way for people to pick up new skills and
            learning, and by contacting us, we could go one step further. Shoot
            us a message at one of the addresses below:
          </p>
          <p className="font-semibold my-12 text-base md:text-lg text-center leading-8">
            Come contact us on{" "}
            <Social link="https://www.instagram.com/combat_wombats_ftc_aus/">
              <FaInstagram className="inline h-4 w-4" /> Instagram
            </Social>
            or maybe our{" "}
            <Social link="https://www.youtube.com/@CombatWombats23335">
              <FaYoutube className="inline h-4 w-4" /> Youtube
            </Social>
            or perhaps even send us some{" "}
            <Social link="mailto: combatwombatsftc@gmail.com">
              <IoMailOpenOutline className="inline h-4 w-4" /> Mail
            </Social>
          </p>
        </div>
        <div data-aos="fade-up">
          <h2 className="font-semibold text-2xl ms:text-3xl md:text-4xl xl:text-5xl 3xl:text-6xl text-center">
            Where are we?
          </h2>
          <p className="text-base md:text-lg 2xl:text-xl 2xl:leading-8 my-6 text-center">
            We&apos;re located at the 📍 Queensland Academy for Science
            Mathematics and Technology, <br />
            78 Bywong St, Toowong QLD 4066
          </p>
          <iframe
            title="Map of QASMT location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3539.426568003616!2d152.9770546!3d-27.4871063!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9150faae7bb8f1%3A0xf44ecb0f926ccf77!2sQueensland%20Academy%20for%20Science%20Mathematics%20and%20Technology!5e0!3m2!1sen!2sau!4v1712632340080!5m2!1sen!2sau"
            width="600"
            height="450"
            className="border-4 2xl:border-[6px] rounded-3xl border-black dark:border-white w-full h-64 md:h-96 mb-12"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div data-aos="fade-up">
          <h3 className="font-semibold text-xl ms:text-2xl md:text-3xl xl:text-4xl 3xl:text-5xl text-center">
            Get in touch with the website creator.
          </h3>
          <section
            id="developer"
            className="text-base md:text-lg 2xl:text-xl 2xl:leading-8 my-6 text-center"
          >
            <div className="flex justify-center items-center gap-2 ">
              <Image
                alt="Website Developer"
                src={"/icons/vinay.jfif"}
                width={100}
                height={100}
                className="w-10 h-10 object-cover rounded-full"
              />
              <p className="font-medium ms:font-semibold text-ms ms:text-base">
                Vinay Saravana Ruban
              </p>
            </div>
            <p className="text-base md:text-lg 2xl:text-xl text-left my-6">
              The website was developed using NextJS (TypeScript) + TailwindCSS,
              with scrolling animations through AOS JS. Docs were created using
              MarkDown, formatted through Gray Matter, with the use of KaTeX for
              LaTeX and PrismJS for syntax highlighting.
            </p>
            <p className="text-base md:text-lg 2xl:text-xl mt-6 font-bold">
              For any bugs, issues, copyright issues and enquiries, contact us
              through mail:
            </p>
            <Link href="mailto: combatwombatsftc@gmail.com">
              <button
                className={`xs:text-lg font-bold mt-6 py-3 px-6 rounded-3xl bg-combatgreen tracking-tighter hover:-translate-y-1 transition-all`}
                tabIndex={-1}
              >
                <IoMailOpenOutline className="inline w-6 h-6 align-middle child:stroke-[3rem]" />{" "}
                <span className="inline align-middle ml-2">combatwombats</span>
              </button>
            </Link>
          </section>
        </div>
      </section>
    </div>
  );
}
