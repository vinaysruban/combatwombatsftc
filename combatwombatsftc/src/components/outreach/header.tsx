"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Position {
  direction: string;
  amount: number;
}

interface Picture {
  path: string;
  reponsive: string;
  rotation: number;
  vertical: Position;
  horizontal: Position;
  magnitude: number;
}

const pictures: Picture[] = [
  {
    path: "/images/help2.webp",
    reponsive:
      "w-[1.5em] h-[2em] right-[0] sm:right-[10%] lg:right-[20%] top-[-80%] ms:top-[-160%] sm:top-[-120%]",
    rotation: 12,
    vertical: {
      direction: "top",
      amount: -120,
    },
    horizontal: {
      direction: "right",
      amount: 20,
    },
    magnitude: 1,
  },
  {
    path: "/images/help.webp",
    reponsive:
      "w-[2em] h-[1.5em] left-[0] sm:left-[5%] lg:left-[20%] top-[-60%] ms:top-[-110%] sm:top-[-90%] lg:top-[-100%]",
    rotation: -12,
    vertical: {
      direction: "top",
      amount: -100,
    },
    horizontal: {
      direction: "left",
      amount: 20,
    },
    magnitude: 1.5,
  },
  {
    path: "/images/slideshow/3.webp",
    reponsive:
      "w-[3.5em] h-[2.25em] left-[20%] ms:left-[30%] sm:left-[40%] bottom-[-250%] ms:bottom-[-500%] sm:bottom-[-400%] md:bottom-[-350%]",
    rotation: 12,
    vertical: {
      direction: "bottom",
      amount: -350,
    },
    horizontal: {
      direction: "left",
      amount: 40,
    },
    magnitude: 0.9,
  },
];

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
  const [pictureChange, setPictureChange] = useState(0);
  const [picturesElements, setPicturesElements] = useState<JSX.Element[]>();

  useEffect(() => {
    const pictureMap = pictures.map((picture) => {
      return (
        <Image
          alt="outreach"
          src={picture.path}
          width={1000}
          height={1000}
          className={`object-cover absolute rounded-xl z-0 brightness-50 ${picture.reponsive}`}
          style={{
            WebkitTransform: `translate3d(0,0,0) rotate(${picture.rotation}deg)`,
            transform: `translate3d(0,0,0) rotate(${picture.rotation}deg)`,
            [picture.vertical.direction]: checkWindow(
              picture.vertical.amount,
              position.y,
              window.innerHeight,
              picture.vertical.direction === "top" ? -1 : 1,
              picture.magnitude
            ),
            [picture.horizontal.direction]: checkWindow(
              picture.horizontal.amount,
              position.x,
              window.innerWidth,
              picture.horizontal.direction === "left" ? 1 : -1,
              picture.magnitude
            ),
          }}
        />
      );
    });

    setPicturesElements(pictureMap);
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

  const checkWindow = (
    req: number,
    cursorPosition: number,
    windowWidth: number,
    direction: number,
    magnitude: number
  ): string => {
    if (window.innerWidth >= 1024) {
      return `${
        req * normalise(cursorPosition, windowWidth, direction, magnitude)
      }%`;
    }
    return "";
  };

  return loaded ? (
    <header
      data-aos="fade-up"
      className="mx-auto container py-36 3xl:py-64 4xl:py-80 sm:py-24 md:pt-36 xl:pt-48 3xl:pt-60 pb-24 md:pb-48 lg:pb-64 px-4"
    >
      <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl 3xl:text-9xl 4xl:text-10xl font-bold text-center z-10 relative">
        {picturesElements}
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
    </header>
  ) : (
    <div className="h-screen"></div>
  );
}
