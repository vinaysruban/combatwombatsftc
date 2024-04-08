import GoBack from "@/utils/goBack";
import Image from "next/image";

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
          <p className="text-base 2xl:text-xl text-gray-700 sm:mb-6 sheen">
            4{" "}
            <span className="block text-sm 2xl:text-lg mb-4 sm:mb-8">
              iterations of our robot, the Wombat
            </span>
          </p>
          <p className="text-base 2xl:text-xl text-gray-700 mb-4 sm:mb-8">
            2{" "}
            <span className="block text-sm 2xl:text-lg">
              awards from official FTC competitions
            </span>
          </p>
          <p className="text-base 2xl:text-xl text-gray-700 mb-4 sm:mb-8 hidden md:block">
            11{" "}
            <span className="block text-sm 2xl:text-lg">
              devoted team members
            </span>
          </p>
        </article>
      </main>
      <div className="slider shadow-md overflow-hidden my-6">
        <div
          className="slide-track flex w-[2625px] sm:w-[3500px] 2xl:w-[7000px] animate-scrolling-short sm:animate-scrolling 2xl:animate-scrolling-long"
        >
          {[...Array(14)].map((_, index) => (
            <div key={index} className="object-cover w-[187.5px] h-[140.625px] sm:w-fit sm:h-fit 2xl:w-[500px] 2xl:h-[375px]">
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
    </div>
  );
}
