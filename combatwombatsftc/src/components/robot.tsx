"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

function chooseImage(mount: boolean, width: number) {}

export default function Robot() {
  const imageStyle = {
    position: "absolute",
    bottom: "-14.5rem",
    right: "-3rem",
    marginRight: "1rem",
  } as React.CSSProperties;

  const imageStyleXL = {
    position: "absolute",
    bottom: "-14rem",
    right: "-58rem",
    width: "68rem",
  } as React.CSSProperties;

  const imageStyleL = {
    position: "absolute",
    bottom: "-6rem",
    right: "-38rem",
    width: "46rem",
  } as React.CSSProperties;

  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    console.log(width);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width < 768 ? (
    <Image
      src="/robot2.png"
      alt="Wombat"
      width={500}
      height={0}
      priority={true}
      className="mx-auto"
    />
  ) : width < 1024 ? (
    <Image
      src="/robot2.png"
      alt="Wombat"
      width={580}
      height={0}
      priority={true}
      className="mx-auto"
    />
  ) : width > 2248 ? (
    <Image
      src="/robot2.png"
      alt="Wombat"
      width={580}
      height={0}
      priority={true}
      style={imageStyleXL}
    />
  ) : width > 1920 ? (
    <Image
      src="/robot2.png"
      alt="Wombat"
      width={580}
      height={0}
      priority={true}
      style={imageStyleL}
    />
  ) : (
    <Image
      src="/robot2.png"
      alt="Wombat"
      width={580}
      height={0}
      priority={true}
      style={imageStyle}
    />
  );
}
