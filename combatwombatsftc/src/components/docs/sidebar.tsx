import getPostMetadata from "@/utils/getPosts";
import Link from "next/link";
import { Roboto_Mono } from "next/font/google";

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
          <h1 className="sm:text-xs md:text-sm lg:text-base 2xl:text-lg transition-all">
            {post.title}
          </h1>
        </li>
      </Link>
    );
  });
}

export default function Sidebar() {
  const postMetadata = getPostMetadata();
  console.log(postMetadata);
  let quickstart: any[] = [];
  let tutorials: any[] = [];
  let miscellaneous: any[] = [];

  postMetadata.forEach((post: any) => {
    if (post.tags.includes("quickstart")) {
      quickstart.push(post);
    } else if (post.tags.includes("tutorial")) {
      tutorials.push(post);
    } else {
      miscellaneous.push(post);
    }
  });

  const quickstartSidebar = createSidebar(quickstart);
  const tutorialsSidebar = createSidebar(tutorials);
  const miscellaneousSidebar = createSidebar(miscellaneous);

  return (
    <section className="w-1/5 py-12 px-2 flex flex-col gap-2 2xl:gap-3">
      <Link href={`/docs/beta/`}><h1 className="font-bold text-base hover:text-combatgreen transition-all">Welcome</h1></Link>
      <h1 className="font-bold text-base">Quickstart</h1>
      <ul className="flex flex-col gap-1 2xl:gap-2">{quickstartSidebar}</ul>
      <h1 className="font-bold text-base mt-4">Tutorials</h1>
      <ul className="flex flex-col gap-1 2xl:gap-2">{tutorialsSidebar}</ul>
      <h1 className="font-bold text-base mt-4">Miscellaneous</h1>
      <ul className="flex flex-col gap-1 2xl:gap-2">{miscellaneousSidebar}</ul>
    </section>
  );
}
