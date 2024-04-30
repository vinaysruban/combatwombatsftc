"use client";

import GoBack from "@/components/goBack";
import Link from "next/link";
import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";
import { useState } from "react";

const documents: string[] = [
  "523jcm976afn35d6kbm0p/How-To.dotx?rlkey=3losddsexsjzdusf2v71gdqaa&st=r3u3q1an&dl=0",
  "vamdughvfta4ogfuss0v7/1.-How-to-Make-Bolts-and-Nuts-Accessible-for-Fabrication.docx?rlkey=o72y0utenjsu5k5kvrdf8jppk&st=ab340o1e&dl=0",
  "uabwhndouyll3h9mlil8h/2.Making-things-go-in-the-middle-of-things.docx?rlkey=0612ekif3xo0ccdl6vrkgmnk2&st=ed6ofku0&dl=0",
  "wz0t0h0e1v6w9m5i2ejre/3.Projecting-a-surface.docx?rlkey=al35o69r5enuf3fvd8b2sasm1&st=eamyucgu&dl=0",
  "nbmzhjj32f96e4bdjzctu/4.-Connecting-2-Parts-Precisely.docx?rlkey=rocmgcf7pnlc1mzxzn962xvnd&st=dhf3fdtb&dl=0",
  "q6s4lo3045g4fa8ttj6qi/5.-Derive.docx?rlkey=wsoczidbfheehxx3z435fdtay&st=85gtz9pv&dl=0",
  "hydt0lhydt0epx7gbg4il/6.-Component-Errors.docx?rlkey=fgb06wr2ihka5upxq3osz8o53&st=za5y3k0o&dl=0",
  "4t8zncgx70nump789pdt1/7.Getting-a-model-ready-to-print.docx?rlkey=lvi35pjhg1z2yxdl19j5fdmoj&st=ngeqey0x&dl=0",
  "9mfgdmts0fxdvxvigw04r/8.-Spiral-Bevel-Gears.docx?rlkey=mvc5vjetoz6a9uewwvjzavoy5&st=awbxox6n&dl=0",
  "t6ca6j4p5fk0abtto3akx/9.-How-To-Import-Components-and-Keep-them-Aligned-to-Holes.docx?rlkey=0o8gk3nddnqk606epktps5ucp&st=luko0dcv&dl=0",
];
const documentTitles: string[] = [
  "0. How To Fusion",
  "1. How to Make Bolts and Nuts Accessible for Fabrication",
  "2. Making things go in the middle of things",
  "3. Projecting a surface",
  "4. Connecting 2 Parts Precisely",
  "5. Derive",
  "6. Component Errors",
  "7. Getting a model ready to print",
  "8. Spiral Bevel Gears",
  "9. How To Import Components and Keep them Aligned to Holes",
];

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

export default function Page() {
  const [currentPage, setCurrentPage] = useState(0);

  const updatePage = (direction: number) => {
    if (direction < 0) {
      let temp = mod(currentPage - 1, 10);
      setCurrentPage(temp);
      console.log(currentPage);
      return;
    } else if (direction > 0) {
      let temp = (currentPage + 1) % 10;
      setCurrentPage(temp);
      console.log(currentPage);
      return;
    } else {
      return;
    }
  };

  return (
    <div className="px-6 md:px-12 py-2 sm:py-6 md:py-12 h-full w-full md:w-4/5">
      <GoBack path="/docs" />
      <div className="flex flex-row justify-between my-6 items-center">
        <button onClick={() => updatePage(-1)}>
          <BsArrowBarLeft className="text-base ms:text-lg lg:text-xl xl:text-2xl 3xl:text-4xl ml-4" />
        </button>
        <h2 className="text-center text-sm sm:text-base lg:text-lg xl:text-xl 3xl:text-2xl font-bold">
          {documentTitles[currentPage]}
        </h2>
        <button onClick={() => updatePage(1)}>
          <BsArrowBarRight className="text-base ms:text-lg lg:text-xl xl:text-2xl 3xl:text-4xl mr-4" />
        </button>
      </div>
      <iframe
        className="w-full h-screen  border-black dark:border-white border-4 rounded-2xl my-6"
        aria-label="hello"
        src={`https://view.officeapps.live.com/op/embed.aspx?src=http://dl.dropboxusercontent.com/scl/fi/${documents[currentPage]}`}
      >
        This is an embedded
      </iframe>
      <div className="rounded-2xl px-3 pb-3 flex flex-col gap-4">
        <p className="font-bold text-2xl text-center">Quick Jump 🦵</p>
        <div className="bg-beige dark:bg-darkgrey flex flex-wrap flex-row gap-4">
          {documentTitles.map((document, index) => {
            return <button className="text-xs ms:text-sm sm:text-base 3xl:text-lg block bg-midbeige dark:bg-mutegrey rounded-lg py-1 px-3" key={index} onClick={() => setCurrentPage(index)}>{document}</button>
          })}
        </div>
      </div>
    </div>
  );
}
