import getPostMetadata from "@/utils/getPosts";
import Link from "next/link";
import { Roboto_Mono } from "next/font/google";
import Internal from "./internal";

const roboto = Roboto_Mono({ subsets: ["latin"] });

function createSidebar(array: any[]) {
  return array.map((post) => {
    return (
      <Link
        href={`/docs/beta/${post.slug}`}
        key={post.slug}
        className={roboto.className}
      >
        <li className="border-l-2 border-black dark:border-white pl-2 hover:child:font-semibold ">
          <h1 className="text-xs md:text-sm lg:text-base 2xl:text-lg 4xl:text-xl transition-all">
            {post.title}
          </h1>
        </li>
      </Link>
    );
  });
}

export default function Sidebar() {
  const postMetadata = getPostMetadata();
  let quickstart: any[] = [];
  let tutorials: any[] = [];
  let guides: any[] = [];
  let miscellaneous: any[] = [];

  postMetadata.forEach((post: any) => {
    if (post.tags.includes("quickstart")) {
      quickstart.push(post);
    } else if (post.tags.includes("tutorial")) {
      tutorials.push(post);
    } else if (post.tags.includes("guide")) {
      guides.push(post);
    } else {
      miscellaneous.push(post)
    }
  });

  const quickstartSidebar = createSidebar(quickstart);
  const tutorialsSidebar = createSidebar(tutorials);
  const guidesSidebar = createSidebar(guides);
  const miscellaneousSidebar = createSidebar(miscellaneous);

  return (
    <Internal>
      <Link href={`/docs/beta/`}><h1 className="font-bold text-base hover:text-combatgreen transition-all">Welcome</h1></Link>
      <h1 className="font-bold text-base 2xl:text-lg 4xl:text-xl">Quickstart</h1>
      <ul className="flex flex-col gap-1 2xl:gap-2">{quickstartSidebar}</ul>
      <h1 className="font-bold text-base 2xl:text-lg 4xl:text-xl mt-4">Tutorials</h1>
      <ul className="flex flex-col gap-1 2xl:gap-2">{tutorialsSidebar}</ul>
      <h1 className="font-bold text-base 2xl:text-lg 4xl:text-xl mt-4">Guides</h1>
      <ul className="flex flex-col gap-1 2xl:gap-2">{guidesSidebar}</ul>
      <h1 className="font-bold text-base 2xl:text-lg 4xl:text-xl mt-4">Miscellaneous</h1>
      <ul className="flex flex-col gap-1 2xl:gap-2">{miscellaneousSidebar}</ul>
    </Internal>
  );
}
