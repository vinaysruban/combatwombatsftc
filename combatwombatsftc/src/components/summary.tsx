export default function Summary() {
  return (
    <section className=" bg-midbeige dark:bg-mutegrey px-12 py-16 ">
      {/*<video width="1024px" muted loop preload="none" className="rounded-3xl mx-auto">
        <source src="/tem.mp4" type="video/mp4" />
        Your browser does not support the video tag.
  </video>*/}
      <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl my-8">
        No{" "}
        <span className="text-darkgreen font-bold">
          more <span className="text-combatgreen font-bold">video</span> only
          robot
        </span>
      </h1>
      <p className="font-medium md:text-xl 2xl:text-2xl max-w-screen-lg">
        Yappity yappity yap. you gotta talk about the robot here juan. engage
        the audeince
      </p>
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
