import Link from "next/link";
import Image from "next/image";

export default function Summary() {
  return (
    <div data-aos="fade-up" className="">
      <section className="px-4 md:px-16 my-36 3xl:my-48 4xl:my-56 5xl:my-72 flex flex-col xl:flex-row gap-16 xl:gap-0">
        <div className="">
          <Image
            src="/images/slideshow/3.webp"
            className="mx-auto xl:mx-0 rotate-12 md:rotate-[18deg] xl:rotate-0 relative md:absolute w-64 sm:w-96 md:w-80 xl:w-medium 2xl:w-xmoderate 3xl:w-large 4xl:w-moderate 5xl:w-[64rem] aspect-auto md:left-[54%] lg:left-[60%] xl:-left-4 md:-top-20 lg:-top-10 xl:top-10 rounded-3xl pulse"
            width={500}
            height={500}
            alt="Robot"
          />
          <div className="hidden xl:block absolute top-8 3xl:top-[1.75rem] left-[33.5rem] 2xl:left-[37.5rem] 3xl:left-[45.5rem] 4xl:left-[55.5rem] 5xl:left-[61rem] animate-pulseUpgrade ani h-8 3xl:h-10 5xl:h-12 w-8 3xl:w-10 5xl:w-12 bg-combatgreen rounded-full"></div>
        </div>
        <div className="py-2 md:py-0 mx-auto xl:mr-0 xl:ml-auto max-w-screen-md xl:max-w-full 2xl:mr-4 3xl:mr-8 4xl:mr-12 flex flex-col gap-4 justify-center 3xl:mt-6 5xl:mt-24 4xl:min-h-xmoderate">
          <h1 className="text-center md:text-left xl:text-right font-bold text-5xl ms:text-6xl md:text-7xl lg:text-8xl xl:text-8xl 2xl:text-8.5xl 3xl:text-9xl 4xl:text-10xl">
            Meet the <br /> <span className="ml-0 md:ml-8 xl:ml-0">&apos;Wombat&apos;!</span>
          </h1>
          <p className="text-center xl:text-right text-xl 2xl:text-2xl 3xl:text-3xl xl:w-5/12 ml-auto 4xl:text-3.5xl xl:max-w-screen-5xl">
            In the past year as a rookie team, we have re-iterated our robot
            design four times and have looked at many different approaches. But
            now, we&apos;re setting our sights to our newest design, SEPv2, a
            paragon which is the culmination of all our learnings, demonstrating
            our devotion, dedication and motivation.
          </p>
          <div className="buttons w-fit mx-auto xl:mr-0 xl:ml-auto mt-6">
            <Link href={"/docs"}>
              <button className="blob-btn px-12 py-4 2xl:px-[4rem] 2xl:py-[1.5rem] rounded-full font-bold text-xl md:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl text-wombatbrown before:border-2 before:border-solid before:border-wombatbrown">
                Learn More
                <span className="blob-btn__inner dark:bg-darkgrey">
                  <span className="blob-btn__blobs child:bg-wombatbrown">
                    <span className="blob-btn__blob"></span>
                    <span className="blob-btn__blob"></span>
                    <span className="blob-btn__blob"></span>
                    <span className="blob-btn__blob"></span>
                  </span>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="px-12 py-0 bg-[url('/images/circ.sg')] bg-[length:50%_50%] bg-[120%_100%] transition-all hover:bg-[left_122.5%_bottom_-0.5%] bg-no-repeat hidden">
        <div className="flex flex-row">
          <p className="font-medium text-lg md:text-xl xl:text-2xl 3xl:text-3xl max-w-screen-lg 2xl:max-w-screen-xl 4xl:max-w-screen-3xl mx-auto my-12">
            <span className="text-10xl font-serif">‘‘</span>In the past year as
            a rookie team, we have re-iterated our robot 🤖 design four times
            and have looked at many different approaches. But now, we&apos;re
            setting our sights 👀 to our newest design, SEPv2, a paragon which
            is the culmination of all our learnings 📚, demonstrating our
            devotion, dedication and motivation 🤞.
          </p>
        </div>
        <div className="flex flex-row justify-center items-center">
          <h1 className="font-bold text-4xl ms:text-6xl md:text-xl xl:text-6xl 3xl:text-xl my-8">
            Meet the{" "}
            <span className="text-wombatbrown womat font-bold">
              &apos;Wombat&apos;!
            </span>
          </h1>
          <div className="buttons w-fit mx-auto">
            <Link href={"/docs"}>
              <button className="blob-btn font-bold text-lg md:text-xl xl:text-2xl 3xl:text-3xl text-wombatbrown before:border-2 before:border-solid before:border-wombatbrown">
                Learn More
                <span className="blob-btn__inner dark:bg-darkgrey">
                  <span className="blob-btn__blobs child:bg-wombatbrown">
                    <span className="blob-btn__blob"></span>
                    <span className="blob-btn__blob"></span>
                    <span className="blob-btn__blob"></span>
                    <span className="blob-btn__blob"></span>
                  </span>
                </span>
              </button>
            </Link>
          </div>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="hidden"
        >
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                result="blur"
                stdDeviation="10"
              ></feGaussianBlur>
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
                result="goo"
              ></feColorMatrix>
              <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
            </filter>
          </defs>
        </svg>
      </section>
    </div>
  );
}
