import { Roboto_Mono } from "next/font/google";
import Link from "next/link";

const roboto = Roboto_Mono({ subsets: ["latin"] });

export default function CTA() {
  return (
    <div data-aos="fade-up">
      <hr className=" bg-multi w-full h-min bg-cover aspect-[510/100] md:aspect-[1020/100] bg-center border-none" />
      <hr className=" bg-multi-rev w-full h-min bg-cover aspect-[510/100] md:aspect-[1020/100] bg-center border-none" />
      <section className="px-8 py-12">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl my-8 text-center">
          A message from our captain:
        </h1>
        <p className="px-4 my-8 text-sm ms:text-base lg:text-lg 2xl:text-xl mx-auto text-center ms:max-w-96 sm:max-w-small lg:max-w-screen-sm">
          We are committed to empowering aspiring engineers, problem solvers,
          and changemakers by fostering a culture of involvement, collaboration,
          and gracious professionalism. We cannot wait to see how we can play a
          small role in making a giant impact! Together, we strive to create a
          community where everybody can thrive and have a fair go.
          <i className="text-left my-8 block">- Hugo Lawler</i>
        </p>
        <div className="flex items-center sm:justify-center flex-col sm:flex-row" data-aos="zoom-in-down">
          <Link href="/about">
            <button className="text-slate-200 xs:text-lg font-bold my-2 sm:my-0 mx-4 py-3 px-6 2xl:px-8 bg-combatgreen rounded-3xl hover:-translate-y-1 transition-all">
              Get in touch
            </button>
          </Link>
          <Link href="/docs">
            <button
              className={`text-slate-200 xs:text-lg font-bold my-2 sm:my-0 mx-4 py-3 px-6 rounded-3xl bg-wombatbrown ${roboto.className} tracking-tighter hover:-translate-y-1 transition-all`}
            >
              View our docs
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
