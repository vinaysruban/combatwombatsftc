"use client"

import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [count, setCount] = useState(false);

  const tankToggle = () => {
    setCount(!count);
    console.log(count);
  };

  return (
    <div className={count ? "bg-wombatbig" : "bg-none"}>
      <section className="pl-12 py-24">
        <h1 className="font-bold text-5xl md:text-8xl">
          Meet the <br />
          <span className="combat">Combat Wombats</span>
        </h1>
        <article className="font-medium mt-8 ml-2 md:text-xl">
          {/* Yap <u>summary</u> about us. u know we <strong>cool</strong> and
          whatnot. please support us. make this one short.
          <br />
          Some parts gonna be{" "}
          <span className="text-combatgreen font-bold">green</span> and some
          gonna be <span className="text-wombatbrown font-bold">brown</span> */}
          We're an Australian team of <span className="text-combatgreen font-bold">driven</span> and <span className="text-wombatbrown font-bold">dedicated</span> STEM students 
          aiming to become <br /> future <span className="text-wombatbrown font-bold">change-makers</span> and <span className="text-combatgreen font-bold">innovators</span> in the world of engineering.
        </article>
      </section>
      <section className="flex flex-col items-center mx-auto text-lg font-semibold pb-11">
        <span>
          Thank you to these people for
          supporting us:
        </span>
        <ul className="flex justify-start child:mx-12 mt-12">
          <li>
            <Image src="/sitelogo.png" alt="QASMT" height="150" width="150" />
          </li>
		  <li>
            <Image src="/sitelogo.png" alt="QASMT" height="150" width="150" />
          </li>
		  <li>
            <Image src="/sitelogo.png" alt="QASMT" height="150" width="150" />
          </li>
		  <li>
            <Image src="/sitelogo.png" alt="QASMT" height="150" width="150" />
          </li>
        </ul>
      </section>
      <button className=" border-solid border-yellow-600" onClick={tankToggle}>
        Press this toggle the expeimetna thing pls give advice and give change
        of iamge
      </button>
    </div>
  );
}
