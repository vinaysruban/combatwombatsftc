import Link from "next/link";

export default function Summary() {
  return (
    <section className=" bg-midbeige dark:bg-mutegrey px-12 py-16 bg-scatter bg-contain bg-right transition-all hover:bg-[right_-1rem_top_1rem] bg-no-repeat">
      <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl my-8">
        Meet the the <span className="text-combatgreen font-bold">&apos;Wombats&apos;</span>
      </h1>
      <p className="font-medium md:text-xl 2xl:text-2xl max-w-screen-lg">
        In the past year as a rookie team, we have re-iterated our robot 🤖 design four times and{" "}
        have looked at many different approaches.
        But now, we&apos;re setting our optics 👀 to the SEPv2 testbed, which is the amalgamation of{" "}
        all our learnings 📚, and will epitomise our team&apos;s devotion, dedication and motivation 🤞.
      </p>
      <Link href={"/docs"}>
        <div className="buttons mt-6">
          <button className="blob-btn font-bold md:text:md xl:text-xl 2xl:text-2xl text-wombatbrown before:border-2 before:border-solid before:border-wombatbrown">
            Learn More
            <span className="blob-btn__inner dark:bg-mutegrey">
              <span className="blob-btn__blobs child:bg-wombatbrown">
                <span className="blob-btn__blob"></span>
                <span className="blob-btn__blob"></span>
                <span className="blob-btn__blob"></span>
                <span className="blob-btn__blob"></span>
              </span>
            </span>
          </button>
        </div>
      </Link>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="hidden">
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
  );
}
