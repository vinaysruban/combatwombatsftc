"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

function chooseImage(mount: boolean, width: number) {}

export default function Robot() {
  const imageStyle = {
    position: "absolute",
    bottom: "0%",
    right: "0%",
  } as React.CSSProperties;

  const imagePropped = {} as React.CSSProperties;

  const [width, setWidth] = useState<number>(0);
  const [mount, setMount] = useState<boolean>(false);

  useEffect(() => {
    setMount(true);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    console.log(width);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return mount === false ? (
    <Image
      src="/robot2.png"
      alt="Wombat"
      width={580}
      height={0}
      style={imageStyle}
    />
  ) : width < 768 ? (
    <Image
      src="/robot2.png"
      alt="Wombat"
      width={500}
      height={0}
      className="mx-auto"
    />
  ) : width < 1024 ? (
    <Image
      src="/robot2.png"
      alt="Wombat"
      width={580}
      height={0}
      style={imagePropped}
      className="mx-auto"
    />
  ) : (
    <Image
      src="/robot2.png"
      alt="Wombat"
      width={580}
      height={0}
      style={imageStyle}
    />
  );
}
