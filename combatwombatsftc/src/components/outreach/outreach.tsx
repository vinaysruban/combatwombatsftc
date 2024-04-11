"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function normalise(
  n: number,
  max: number,
  direction: number,
  magnitude: number
): number {
  const result = (direction * (n - max / 2)) / (max / magnitude);
  const normalised = result / 10 + 1;
  console.log(result);
  return normalised;
}

export default function Outreach() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const image1Ref = useRef<HTMLElement>(null);
  const image2Ref = useRef<HTMLElement>(null);
  const image3Ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      if (image1Ref.current) {
        image1Ref.current.style.top = `${
          -120 * normalise(position.y, window.innerHeight, -1, 1)
        }%`;
        image1Ref.current.style.right = `${
          20 * normalise(position.x, window.innerWidth, -1, 1)
        }%`;
      }
      if (image2Ref.current) {
        image2Ref.current.style.top = `${
          -100 * normalise(position.y, window.innerHeight, -1, 1.5)
        }%`;
        image2Ref.current.style.left = `${
          20 * normalise(position.x, window.innerWidth, 1, 1.5)
        }%`;
      }
      if (image3Ref.current) {
        image3Ref.current.style.bottom = `${
          -350 * normalise(position.y, window.innerHeight, 1, 0.9)
        }%`;
        image3Ref.current.style.left = `${
          40 * normalise(position.x, window.innerWidth, 1, 0.9)
        }%`;
      }
    }
  }, [position]);

  return (
    <div className="">
      <main data-aos="fade-up" className="mx-auto container py-36 3xl:py-64 4xl:py-80 sm:py-24 md:pt-36 xl:pt-48 3xl:pt-60 pb-36 md:pb-64 px-4">
        <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl 3xl:text-9xl 4xl:text-10xl font-bold text-center z-10 relative">
          <Image
            ref={image1Ref as React.LegacyRef<HTMLImageElement>}
            alt="outreach"
            src="/images/help2.webp"
            width={1000}
            height={1000}
            className={`object-cover w-[1.5em] h-[2em] absolute right-[0] sm:right-[10%] lg:right-[20%] top-[-80%] ms:top-[-160%] sm:top-[-120%] rounded-xl rotate-12 z-0 brightness-50 saturate-150`}
          />
          <Image
            ref={image2Ref as React.LegacyRef<HTMLImageElement>}
            alt="outreach"
            src="/images/help.webp"
            width={1000}
            height={1000}
            className={`object-cover w-[2em] h-[1.5em] absolute left-[0] sm:left-[5%] lg:left-[20%] top-[-60%] ms:top-[-110%] sm:top-[-90%] lg:top-[-100%] rounded-xl -rotate-12 z-0 brightness-50`}
          />
          <Image
            ref={image3Ref as React.LegacyRef<HTMLImageElement>}
            alt="outreach"
            src="/images/slideshow/3.webp"
            width={1000}
            height={1000}
            className={`object-cover w-[3.5em] h-[2.25em] absolute left-[20%] ms:left-[30%] sm:left-[40%] bottom-[-250%] ms:bottom-[-500%] sm:bottom-[-400%] md:bottom-[-350%] rounded-xl rotate-12 z-0 brightness-50`}
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
      </main>
      <hr className="bg-waves-brown w-full h-24 xl:h-48 4xl:h-64 bg-cover mt-36 sm:mt-24 xl:mt-48" />
      <section className="py-12 sm:py-48 px-4 xl:px-6 3xl:px-12">
        <article data-aos="fade-up" className="sm:w-2/3 mb-24 md:mb-48 relative">
          <Image
            src="https://placehold.co/600x400"
            alt="robot"
            width={500}
            height={500}
            className="object-cover rounded-3xl rotate-12 w-[40%] my-8 mx-auto sm:w-44 md:w-52 lg:w-64 3xl:w-80 4xl:w-96 aspect-[2/3] relative sm:absolute top-[25%] lg:top-[20%] 3xl:top-[15%] 4xl:top-[10%] sm:left-[100%]"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl 3xl:text-8xl 4xl:text-9xl font-bold sm:w-4/5">
            <span className="text-combatgreen">i</span>ntroducing our robot to
            the publi<span className="text-combatgreen">c</span>
          </h1>
          <span className="flex items-center my-4">
            <Image
              src="/icons/theo.jfif"
              alt="Theo Sun"
              width={100}
              height={100}
              className="rounded-full object-cover w-10 h-10"
            />
            <p className="mx-2 font-bold">Theo Sun</p>
          </span>
          <p className="font-medium  3xl:text-lg my-4 italic">
            In his initiative &apos;Theo&apos;s Day Out&apos;, Theo Sun aimed to...
          </p>
          <p className="sm:w-4/5 3xl:w-1/2 md:text-lg 3xl:text-xl 4xl:text-2xl text- my-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            fermentum erat nulla, sed rhoncus augue scelerisque consequat. Donec
            ut egestas ipsum. Cras hendrerit facilisis velit, ut suscipit dui
            vehicula at. Sed ullamcorper ante mauris, eu iaculis tellus dictum
            vitae. Cras ultricies consequat risus nec interdum. Nam tristique
            vulputate neque ut luctus. Proin malesuada orci et lacus elementum,
            vitae consectetur velit sollicitudin.
          </p>
        </article>
        <article data-aos="fade-up" className="sm:w-2/3 ml-auto my-24 md:my-48 relative">
          <Image
            src="https://placehold.co/600x400"
            alt="robot"
            width={500}
            height={500}
            className="object-cover rounded-3xl -rotate-12 w-[40%] my-8 mx-auto sm:w-44 md:w-52 lg:w-64 3xl:w-80 4xl:w-96 aspect-[2/3] relative sm:absolute top-[25%] lg:top-[20%] 3xl:top-[15%] 4xl:top-[10%] sm:right-[100%]"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl 3xl:text-8xl 4xl:text-9xl font-bold sm:w-4/5 text-right ml-auto">
            <span className="text-combatgreen">s</span>howcasing and
            collaborating with FRC team
            <span className="text-combatgreen">s</span>
          </h1>
          <span className="flex items-center my-4 justify-end">
            <Image
              src="/icons/hugo.webp"
              alt="Theo Sun"
              width={100}
              height={100}
              className="rounded-full object-cover w-10 h-10"
            />
            <p className="mx-2 font-bold">Hugo Lawler</p>
          </span>
          <p className="font-medium 3xl:text-lg my-4 text-right ml-auto italic">
            In his initiative Hugo&apos;s initiative, he aimed to...
          </p>
          <p className="sm:w-4/5 3xl:w-1/2 md:text-lg 3xl:text-xl 4xl:text-2xl text- my-2 text-right ml-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            fermentum erat nulla, sed rhoncus augue scelerisque consequat. Donec
            ut egestas ipsum. Cras hendrerit facilisis velit, ut suscipit dui
            vehicula at. Sed ullamcorper ante mauris, eu iaculis tellus dictum
            vitae. Cras ultricies consequat risus nec interdum. Nam tristique
            vulputate neque ut luctus. Proin malesuada orci et lacus elementum,
            vitae consectetur velit sollicitudin.
          </p>
        </article>
        <article data-aos="fade-up" className="sm:w-2/3 my-24 md:my-48 relative">
          <Image
            src="https://placehold.co/600x400"
            alt="robot"
            width={500}
            height={500}
            className="object-cover rounded-3xl rotate-12 w-[40%] my-8 mx-auto sm:w-44 md:w-52 lg:w-64 3xl:w-80 4xl:w-96 aspect-[2/3] relative sm:absolute top-[25%] lg:top-[20%] 3xl:top-[15%] 4xl:top-[10%] sm:left-[100%]"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl 3xl:text-8xl 4xl:text-9xl font-bold sm:w-4/5">
            <span className="text-combatgreen">e</span>xhibiting our work on
            social medi<span className="text-combatgreen">a</span>
          </h1>
          <span className="flex items-center my-4">
            <Image
              src="/icons/shainthra.jfif"
              alt="Theo Sun"
              width={100}
              height={100}
              className="rounded-full object-cover w-10 h-10"
            />
            <p className="mx-2 font-bold">Shainthra Birabaharan</p>
          </span>
          <p className="font-medium  3xl:text-lg my-4 italic">
            To promote the team&apos;s ventures, Shainthra...
          </p>
          <p className="sm:w-4/5 3xl:w-1/2 md:text-lg 3xl:text-xl 4xl:text-2xl text- my-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            fermentum erat nulla, sed rhoncus augue scelerisque consequat. Donec
            ut egestas ipsum. Cras hendrerit facilisis velit, ut suscipit dui
            vehicula at. Sed ullamcorper ante mauris, eu iaculis tellus dictum
            vitae. Cras ultricies consequat risus nec interdum. Nam tristique
            vulputate neque ut luctus. Proin malesuada orci et lacus elementum,
            vitae consectetur velit sollicitudin.
          </p>
        </article>
      </section>
    </div>
  );
}
