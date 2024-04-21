"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({ subsets: ["latin"] });

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
    <div>
      <main
        data-aos="fade-up"
        className="mx-auto container py-36 3xl:py-64 4xl:py-80 sm:py-24 md:pt-36 xl:pt-48 3xl:pt-60 pb-24 md:pb-48 lg:pb-64 px-4"
      >
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
      <hr className="bg-waves-brown w-full h-24 xl:h-48 4xl:h-64 bg-cover mt-24 md:mt-0 xl:mt-0 3xl:mt-48 border-0" />
      <section className="pt-12 sm:pt-24 px-4 xl:px-6 3xl:px-12">
        <article
          data-aos="fade-up"
          className="sm:w-2/3 mb-24 md:mb-48 relative"
        >
          <Image
            src="/images/insta.png"
            alt="robot"
            width={500}
            height={500}
            className="object-cover rounded-3xl rotate-12 w-[40%] my-8 mx-auto sm:w-44 md:w-52 lg:w-64 3xl:w-80 4xl:w-96 aspect-[2/3] relative sm:absolute top-[25%] lg:top-[20%] 3xl:top-[15%] 4xl:top-[10%] sm:left-[100%] brightness-75"
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
            To establish a modern standing in our modern world, we needed to
            create a social media following. By doing so, we are able to
            establish a unique and individual team theme and culture. We also
            can further promote FIRST and enrichment in STEM to the wider online
            audience. By doing so, we have networked with multiple international
            teams, and we have been able to provide tips and guides to our
            fellow FTC teams. Not only that, but we have been able to provide
            exciting glimpses into our team&apos;s work to further motivate
            everybody to join in on the FIRST Fun!
          </p>
        </article>
        <article
          data-aos="fade-up"
          className="sm:w-2/3 ml-auto my-24 md:my-48 relative"
        >
          <Image
            src="/images/stpeters.jpg"
            alt="robot"
            width={500}
            height={500}
            className="object-cover rounded-3xl -rotate-[6deg] w-[50%] md:w-auto my-8 mx-auto sm:h-44 md:h-52 lg:h-64 3xl:h-80 4xl:h-96 aspect-[3/2] relative sm:absolute top-[25%] lg:top-[20%] 3xl:top-[15%] 4xl:top-[10%] sm:right-[85%] xl:right-[100%] brightness-75"
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
            In his initiative, Hugo aimed to...
          </p>
          <p className="sm:w-4/5 3xl:w-1/2 md:text-lg 3xl:text-xl 4xl:text-2xl text- my-2 text-right ml-auto">
            In robotics, we understand that community is key! And what better
            way is there than to network with our local Queensland FRC Team!? We
            were fortunate enough to visit St Peters Lutheran College&apos;s
            wonderful FRC team - the Rock Bots! By reaching out with them, we
            were able to further our understanding of the FIRST program in terms
            of FRC, and appreciate how we could further ourselves through wider
            collaboration.
          </p>
        </article>
        <article
          data-aos="fade-up"
          className="sm:w-2/3 my-24 md:my-48 relative"
        >
          <Image
            src="/images/comptemp.webp"
            alt="robot"
            width={500}
            height={500}
            className="object-cover rounded-3xl rotate-12 w-[40%] my-8 mx-auto sm:w-44 md:w-52 lg:w-64 3xl:w-80 4xl:w-96 aspect-[2/3] relative sm:absolute top-[25%] lg:top-[20%] 3xl:top-[15%] 4xl:top-[10%] sm:left-[100%] brightness-75"
          />
          {/*<h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl 3xl:text-8xl 4xl:text-9xl font-bold sm:w-4/5">
            <span className="text-combatgreen">i</span>ntroducing our robot to
            the publi<span className="text-combatgreen">c</span></h1>*/}
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl 3xl:text-8xl 4xl:text-9xl font-bold sm:w-4/5">
            <span className="text-combatgreen">m</span>ore of our work is comin
            <span className="text-combatgreen">g</span>
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
             Theo has an exciting upcoming initiative planned...
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
      <hr className="bg-waves-brown w-full h-24 xl:h-48 4xl:h-64 bg-cover border-0" />
      <footer data-aos="fade-up" className="px-8 py-12">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl my-8 text-center">
          <span className="text-combatgreen">L</span>et&apos;s reach out togethe
          <span className="text-combatgreen">r!</span>
        </h1>
        <p className="px-4 my-8 text-sm ms:text-base lg:text-lg 2xl:text-xl mx-auto text-center ms:max-w-96 sm:max-w-small lg:max-w-screen-sm">
          Engaging in outreach activities through FTC allows us to connect with
          our local community, inspire the next generation of innovators, and
          showcase the incredible work we do as a team. It&apos;s not just about
          winning competitions; it&apos;s about making a meaningful difference
          and leaving a lasting impact on those around us. If you want to
          collaborate with us or learn more about our outreach initiatives,
          we&apos;d love to hear from you!
          <i className="text-left my-8 block">- Hugo Lawler</i>
        </p>
        <div className="flex items-center sm:justify-center flex-col sm:flex-row">
          <Link href="/about#contact">
            <button className="xs:text-lg font-bold my-2 sm:my-0 mx-4 py-3 px-6 2xl:px-8 hover:bg-combatgreen rounded-3xl hover:-translate-y-1 transition-all border-combatgreen border-2 hover:text-white">
              Get in touch
            </button>
          </Link>
        </div>
      </footer>
    </div>
  );
}
