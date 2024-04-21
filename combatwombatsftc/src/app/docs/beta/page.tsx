import "server-only";
import { redirect } from "next/navigation";
import Link from "next/link";
import getPostMetadata from "@/utils/getPosts";
import GoBack from "@/components/goBack";
import { Roboto_Mono } from "next/font/google";
import Image from "next/image";
import type { Metadata } from "next/";

export const metadata: Metadata = {
  title: "Robot Documentation",
  description:
    "Discover cutting-edge robotics programming and FIRST Tech Challenge (FTC) insights with the Combat Wombats. Access a wealth of pre-written documentation, coding blueprints, and technical guides designed specifically for FTC enthusiasts. Delve into advanced robotics strategies, innovative design concepts, and efficient coding methods. Elevate your skills and excel in FTC competitions with the Combat Wombats' exclusive resources and expertise. FTC #23335's Website",
};

const authors = [
  ["Vinay Saravana Ruban", "/icons/vinay.jfif"],
  ["Juan Santhosh", "/icons/juan.jfif"],
  ["Hugo Lawler", "/icons/hugo.webp"],
  ["Jack White", "/icons/jack.jfif"],
];

const authorList = authors.map((author) => {
  return (
    <span className="inline-flex items-center" key={author[0]}>
      <Image
        alt={"Icon"}
        height={100}
        width={100}
        src={author[1]}
        className="w-8 h-8 m-0 md:h-12 md:w-12 object-cover rounded-full"
      />
      <p className="ml-4 text-xs xs:text-sm ms:text-base m-0">{author[0]}</p>
    </span>
  );
});

const roboto = Roboto_Mono({ subsets: ["latin"] });

export default async function Page() {
  const mdstyles =
    "descendant:text-wrap descendant:break-words descendant-h1:text-2xl sm:descendant-h1:text-4xl md:descendant-h1:text-5xl lg:descendant-h1:text-6xl descendant-h1:font-bold descendant-h1:mt-8 descendant-h2:text-2xl 2xl:descendant-h2:text-3xl descendant-h2:font-extrabold descendant-h2:my-6 descendant-p:my-4 descendant-p:text-base 2xl:descendant-p:text-lg 3xl:descendant-p:text-xl descendant-img:my-8 descendant-ul:list-disc descendant-blockquote:max-w-small descendant-blockquote:italic descendant-blockquote:px-4 descendant-blockquote:border-l-4 descendant-blockquote:border-black dark:descendant-blockquote:border-white descendant-pre:text-base 2xl:descendant-pre:text-lg 3xl:descendant-pre:text-xl descendant-pre:bg-midbeige dark:descendant-pre:bg-mutegrey descendant-pre:pl-4 descendant-pre:py-2 descendant-pre:rounded-md descendant-pre:text-wrap descendant-h3:font-bold descendant-h3:text-lg";

  return (
    <section
      className={`px-6 md:px-12 py-2 sm:py-6 md:py-12 h-full w-full md:w-4/5 ${mdstyles} ${roboto.className} `}
    >
      <GoBack path="/docs/" />
      <header className="flex flex-col gap-12 my-12 xl:my-16 3xl:my-24 sm:w-5/6 mx-auto">
        <h1 className="text-center text-3xl xs:text-4xl ms:text-5xl md:text-6xl xl:text-7xl">
          Welcome to our FTC documentation
        </h1>
        <hr className="border-t-2 sm:border-t-4 md:border-t-8 border-black dark:border-white"></hr>
      </header>
      <main className="">
        <div className="flex flex-col items-center">
          <h2>Meet our authors:</h2>
          <div className="grid md:grid-cols-2 gap-4 gap-x-16 mb-12">
            {authorList}
          </div>
        </div>
        <ul className="flex flex-col gap-4">
          <li>
            <strong className="text-xl mb-4">Introduction to FTC:</strong>
            <br /> Learn about the FTC competition, its objectives, and how
            programming plays a crucial role in designing competitive robots.
          </li>
          <li>
            <strong className="text-xl mb-4">Programming Basics:</strong>
            <br /> Discover the fundamentals of FTC programming, including
            setting up your environment, understanding OpModes, and using Java
            for robot control.
          </li>
          <li>
            <strong className="text-xl mb-4">Resources and Guides:</strong>
            <br /> Access tutorials, guides, and sample code to help you learn
            and improve your programming techniques for FTC challenges.
          </li>
          <li>
            <strong className="text-xl mb-4">Community Support:</strong>
            <br /> Connect with other FTC programmers, ask questions, and share
            your experiences to foster a supportive and collaborative learning
            environment.
          </li>
        </ul>
        <div>
          <h2>Get started now:</h2>
          <div className="flex flex-col lg:flex-row gap-2">
            <Link
              href={"/docs/beta/0installation"}
              className="w-full sm:w-1/2 h-full max-w-medium"
            >
              <article className="w-full rounded-xl border-4 border-black dark:border-white px-4 py-4 flex flex-col justify-center">
                <h1 className="text-base md:text-xl lg:text-2xl 2xl:text-3xl font-semibold my-1 md:my-2 xl:my-3">
                  Installation
                </h1>
                <p className="my-1 md:my-2 lg:my-3 3xl:my-2 text-xs md:text-sm lg:text-base">
                  A simple installation guide for basic FTC resources.
                </p>
              </article>
            </Link>
          </div>
        </div>
      </main>
    </section>
  );
}
