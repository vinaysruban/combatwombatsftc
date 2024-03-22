"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { useInView } from "react-intersection-observer";

export function Line() {
  return (
    <hr
      className={`h-1 rounded-xl border-0 w-0 my-6 bg-combatgreen after:content-[''] after:w-2 after:h-2 after:rounded-full after:bg-combatgreen after:absolute animation-line`}
    />
  );
}
