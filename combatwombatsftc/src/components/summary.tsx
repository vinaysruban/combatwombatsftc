import Link from "next/link";
import Image from "next/image";

export default function Summary() {
  return (
    <div data-aos="fade-up" className="">
      <section className="px-12 py-0 bg-[url('/images/circ.svg')] bg-[length:50%_50%] bg-[120%_100%] transition-all hover:bg-[left_122.5%_bottom_-0.5%] bg-no-repeat">
        <h1 className="font-bold text-4xl ms:text-6xl md:text-7xl xl:text-8xl 3xl:text-9xl my-8 text-center">
          Meet the{" "}
          <span className="text-combatgreen combat font-bold">
            &apos;Wombat&apos;!
          </span>
        </h1>
        <p className="font-medium text-lg md:text-xl xl:text-2xl 3xl:text-3xl max-w-screen-lg 2xl:max-w-screen-xl 4xl:max-w-screen-3xl text-center mx-auto my-12">
          In the past year as a rookie team, we have re-iterated our robot 🤖
          design four times and have looked at many different approaches. But
          now, we&apos;re setting our sights 👀 to our newest design, SEPv2, a
          paragon which is the culmination of all our learnings 📚,
          demonstrating our devotion, dedication and motivation 🤞.
        </p>
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
