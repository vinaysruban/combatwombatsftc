"use client";
import Image from "next/image";
import { normalise, checkWindow } from "@/utils/drift";
import { useState, useEffect } from "react";

export default function Header() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);
  const [transition, setTransition] = useState(150);
  const [picturesElements, setPicturesElements] = useState<JSX.Element>();
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  useEffect(() => {
    setTransition(a => a - 2)
    const picture = (
      <Image
        src="/images/slideshow/2.webp"
        height="1000"
        width="1000"
        alt=""
        className="w-2/5 mx-auto right-0 md:right-auto -z-10 md:w-9/12 rounded-3xl -rotate-[4deg] relative ms:absolute md:relative ms:top-6 md:-top-6 aspect-[340/240] h-fit min-w-44 ms:min-w-0 md:min-w-[20rem] max-w-58 lg:max-w-none brightness-75"
        style={{
          WebkitTransform: `translate3d(0,0,0) rotate(-6deg)`,
          transform: `translate3d(0,0,0) rotate(-6deg)`,
          transitionProperty: "all",
          transitionTimingFunction: "linear",
          transitionDuration: `${transition}ms`,
          top: `${checkWindow(
            -1.5,
            position.y,
            window.innerHeight,
            -1,
            10,
            "rem"
          )}`,
          left: `${checkWindow(
            1,
            position.x,
            window.innerWidth,
            1,
            15,
            "rem"
          )}`,
        }}
      />
    );
    setPicturesElements(picture);
  }, [position]);

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
  return loaded ? (
    <div className="py-4 3xl:py-16 w-fit mx-auto ms:mx-0 md:mx-auto flex flex-col ms:flex-row md:block">
      <h1 className="my-6 ms:my-12 sm:my-12 2xl:my-16 text-5xl ms:text-6xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-8.5xl 4xl:text-9xl font-bold">
        <span className="text-combatgreen">C</span>ome <span className=" ml-10 3xl:ml-16 4xl:ml-24 block">meet u<span className="text-combatgreen">s!</span></span>
      </h1>
      {picturesElements}
    </div>
  ) : (
    <div className="h-screen"></div>
  );
}
