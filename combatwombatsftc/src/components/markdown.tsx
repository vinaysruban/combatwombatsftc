"use client";

import renderMathInElement from "katex/contrib/auto-render/auto-render.js";
import "katex/dist/katex.min.css"
import React, { useRef, useEffect } from "react";


export default function Markdown({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const katexTextRef = useRef(null);
  useEffect(() => {
    if (katexTextRef.current) {
      renderMathInElement(katexTextRef.current, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false },
          {left: '\\(', right: '\\)', display: false},
          {left: '\\[', right: '\\]', display: true}
      ],
      });
    }
  }, []);

 

  return <div ref={katexTextRef}>{children}</div>;
}
