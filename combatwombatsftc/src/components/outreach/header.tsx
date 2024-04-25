"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

function normalise(
  n: number,
  max: number,
  direction: number,
  magnitude: number
): number {
  const result = (direction * (n - max / 2)) / (max / magnitude);
  const normalised = result / 10 + 1;
  return normalised;
}

export default function Header() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    setLoaded(true);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);


  enum Window {
    Height,
    Width,
  }

  const checkWindow = (req: number, value: Window, valNormal: number, valMag: number): string => {
    let pos: number = 0;
    let win: number = 0;
    if (value === Window.Height) {
        pos = position.y;
        win = window.innerHeight;
    } else {
        pos = position.x;
        win = window.innerWidth;
    }

    if (window.innerWidth >= 1024) {
        return `${req * normalise(pos, win, valNormal, valMag)}%`;
    }
    return ''
  }


  return (
    loaded ? <header
      data-aos="fade-up"
      className="mx-auto container py-36 3xl:py-64 4xl:py-80 sm:py-24 md:pt-36 xl:pt-48 3xl:pt-60 pb-24 md:pb-48 lg:pb-64 px-4"
    >
      <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl 3xl:text-9xl 4xl:text-10xl font-bold text-center z-10 relative">
        <Image
          alt="outreach"
          src="/images/help2.webp"
          width={1000}
          height={1000}
          className={`object-cover w-[1.5em] h-[2em] absolute right-[0] sm:right-[10%] lg:right-[20%] top-[-80%] ms:top-[-160%] sm:top-[-120%] rounded-xl rotate-12 z-0 brightness-50 saturate-150`}
          style={{
            WebkitTransform: "translate3d(0,0,0) rotate(12deg)",
            transform: "translate3d(0,0,0) rotate(12deg)",
            top: checkWindow(-120, Window.Height, -1, 1),
            right: checkWindow(20, Window.Width, -1, 1),
          }}
        />
        <Image
          alt="outreach"
          src="/images/help.webp"
          width={1000}
          height={1000}
          className={`object-cover w-[2em] h-[1.5em] absolute left-[0] sm:left-[5%] lg:left-[20%] top-[-60%] ms:top-[-110%] sm:top-[-90%] lg:top-[-100%] rounded-xl -rotate-12 z-0 brightness-50`}
          style={{
            WebkitTransform: "translate3d(0,0,0) rotate(-12deg)",
            transform: "translate3d(0,0,0) rotate(-12deg)",
            top: checkWindow(-100, Window.Height, -1, 1.5),
            left: checkWindow(20, Window.Width, 1, 1.5),
          }}
        />
        <Image
          alt="outreach"
          src="/images/slideshow/3.webp"
          width={1000}
          height={1000}
          className={`object-cover w-[3.5em] h-[2.25em] absolute left-[20%] ms:left-[30%] sm:left-[40%] bottom-[-250%] ms:bottom-[-500%] sm:bottom-[-400%] md:bottom-[-350%] rounded-xl rotate-12 z-0 brightness-50`}
          style={{
            WebkitTransform: "translate3d(0,0,0)  rotate(12deg)",
            transform: "translate3d(0,0,0)  rotate(12deg)",
            bottom: checkWindow(-350, Window.Height, 1, 0.9),
            left: checkWindow(40, Window.Width, 1, 0.9),
          }}
        />
        <span className="z-10 relative">
          <span className="text-combatgreen">r</span>eaching ou
          <span className="text-combatgreen">t.</span>
        </span>
      </h1>
      <p className="text-center text-base ms:text-lg md:text-xl xl:text-2xl 3xl:text-3xl 4xl:text-4xl font-medium my-6 md:my-8 xl:my-10 3xl:my-12 relative z-10">
        We value{" "}
        <span className="text-combatgreen font-semibold">
          outreach within our community
        </span>{" "}
        as one of the essential parts of FTC.
      </p>
    </header> : <div className="h-screen"></div>
  );
}
