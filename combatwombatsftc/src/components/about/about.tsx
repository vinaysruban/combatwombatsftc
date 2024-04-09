import GoBack from "@/utils/goBack";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="">
      <main className="px-2 sm:px-6 md:px-12 pt-6 sm:pt-12 h-full w-5/6 max-w-screen-3xl mx-auto">
        <h1 className="my-6 sm:my-12 2xl:my-16 text-3xl ms:text-4xl md:text-5xl xl:text-6xl 3xl:text-7xl font-bold text-center">
          Let&apos;s build together!
        </h1>
        <p className="my-6 sm:my-12 2xl:my-16 text-lg 2xl:text-xl text-gray-800 dark:text-gray-200 mb-8 text-center max-w-screen-lg mx-auto">
          Our journey is coming to it&apos;s climax, and we are excited to share
          our story with you. Let&apos;s hope you take our learnings and forge
          your own path to a greater victory.
        </p>
        <article className="my-6 sm:mt-12 2xl:mt-16 flex flex-col items-center sm:items-start sm:flex-row justify-evenly child:2/5 md:child:w-1/5 child:max-w-64 child:text-center child:px-4 md:child:px-0">
          <p className="text-base 2xl:text-xl sm:mb-6">
            4{" "}
            <span className="block text-sm 2xl:text-lg mb-4 sm:mb-8">
              iterations of our robot, the Wombat
            </span>
          </p>
          <p className="text-base 2xl:text-xl mb-4 sm:mb-8">
            2{" "}
            <span className="block text-sm 2xl:text-lg">
              awards from official FTC competitions
            </span>
          </p>
          <p className="text-base 2xl:text-xl mb-4 sm:mb-8 hidden md:block">
            11{" "}
            <span className="block text-sm 2xl:text-lg">
              devoted team members
            </span>
          </p>
        </article>
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
                className="object-cover w-full h-full aspect-[250/187.5]"
              />
            </div>
          ))}
        </div>
      </div>
      <section className="w-4/5 max-w-screen-xl mx-auto my-12 md:my-24">
        <h2 className="font-semibold text-2xl ms:text-3xl md:text-4xl xl:text-5xl 3xl:text-6xl text-center">
          Who are we?
        </h2>
        <p className="text-base md:text-lg 2xl:text-xl 2xl:leading-8 my-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus
          interdum arcu, at cursus arcu malesuada non. Phasellus eget sapien id
          lacus cursus bibendum commodo non dui. Sed luctus lacus non justo
          viverra condimentum. Donec venenatis commodo magna, aliquet convallis
          justo commodo vel. Mauris porta, nibh id vulputate mattis, tellus ex
          vehicula purus, sed ornare leo lacus vel lectus. Duis quis porta
          lorem. Nam nisl justo, tincidunt ac venenatis eget, aliquet at sem.
          Quisque faucibus finibus sapien, eu efficitur magna dignissim sed.
          Nullam in lectus nec metus blandit efficitur nec ut enim.
        </p>
        <h2 className="font-semibold text-2xl ms:text-3xl md:text-4xl xl:text-5xl 3xl:text-6xl text-center">
          Where are we?
        </h2>
        <p className="text-base md:text-lg 2xl:text-xl 2xl:leading-8 my-6 text-center">
          We're located at the 📍 Queensland Academy for Science Mathematics and
          Technology, <br />
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
        <h3 className="font-semibold text-xl ms:text-2xl md:text-3xl xl:text-4xl 3xl:text-5xl text-center">
          Get in touch with the website creator.
        </h3>
        <section id="developer" className="text-base md:text-lg 2xl:text-xl 2xl:leading-8 my-6 text-center">
          <div className="flex justify-center items-center gap-2 ">
            <Image
              alt="Website Developer"
              src={"/icons/vinay.jfif"}
              width={100}
              height={100}
              className="w-10 h-10 object-cover rounded-full"
            />
            <p className="font-medium ms:font-semibold text-ms ms:text-base">Vinay Saravana Ruban</p>
          </div>
          <p className="text-base md:text-lg 2xl:text-xl text-left my-6">
            The website was developed using NextJS (TypeScript) + TailwindCSS,
            with scrolling animations through AOS JS. Docs were created using
            MarkDown, formatted through Gray Matter, with the use of KaTeX for
            LaTeX and PrismJS for syntax highlighting.
          </p>
          <p className="text-base md:text-lg 2xl:text-xl mt-6 font-bold">For any bugs, issues, copyright issues and enquiries,</p>
          <Link href="/contact#developer">
            <button
              className={`xs:text-lg font-bold mt-6 py-3 px-6 rounded-3xl bg-combatgreen tracking-tighter hover:-translate-y-1 transition-all`}
            >
              Contact Me
            </button>
          </Link>
        </section>
      </section>
    </div>
  );
}
