"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { useInView } from "react-intersection-observer";

export function Line() {
  const [ref, inView, entry] = useInView();
  const [animated, setAnimated] = useState<boolean>();

  function checkView() {
    if (inView && !animated) {
      return "in-screen";
    } else if (inView && animated) {
      return "out-screen";
    } else {
      return "";
    }
  }

  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    if (inView) {
      sleep(3500).then(() => {
        setAnimated(true);
      });
    }
  }, [inView]);

  return (
    <hr
      ref={ref}
      className={`h-1 border-0 w-1/2 mx-auto mb-12 bg-combatgreen after:content-[''] after:w-2 after:h-2 after:rounded-full after:bg-combatgreen after:absolute after:-top-0.5 ${checkView()}`}
    />
  );
}
