import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";
import { Roboto_Mono } from 'next/font/google'
import { capitalizeFirstLetter } from "@/utils/utils";

const roboto = Roboto_Mono({ subsets: ['latin'] })

function getContent(page: string) {
  const configDirectory = path.resolve(process.cwd(), "public/content");
  const file = `${page}.md`;
  try {
    return fs.readFileSync(path.join(configDirectory, file), "utf8");
  } catch (error) {
    console.error(error);
    return "# Sorry, we don't have that yet.\nContact us and we'll see what we can do. <br />```Error 404```";
  }
}

export default async function Page({ params }: { params: { page: string } }) {
  const page = params.page;
  const content = getContent(page);
  const mdstyles =
    "descendant:text-wrap descendant:break-words child-h1:text-2xl sm:child-h1:text-4xl md:child-h1:text-6xl child-h1:font-bold child-h1:my-8 child-h2:text-2xl child-h2:font-bold child-h2:my-6 child-p:my-4 child-p:text-md descendant-img:my-8 child-ul:list-disc child-blockquote:max-w-small child-blockquote:italic child-blockquote:px-4 child-blockquote:border-l-4 child-blockquote:border-black dark:child-blockquote:border-white child-pre:bg-midbeige dark:child-pre:bg-mutegrey child-pre:pl-4 child-pre:py-2 child-pre:rounded-md child-pre:text-wrap";

  return (
    <section className={roboto.className}>
      <section className={`px-2 sm:px-6 md:px-12 py-12 h-full w-4/5 max-w-screen-3xl mx-auto ${mdstyles} `}>
        <h1>{capitalizeFirstLetter(page.split('%')[0].replace(/-/g, ' ') + ".")}</h1>
        <hr className=" border-t-2 mb-3 border-black dark:border-white"></hr>
        <i>{page.split('%')[1]}</i>
        <MDXRemote source={content} />
        <code className="italic">Page Slug: {params.page}</code>
        <code className="italic">Page Name:test:01:cred:(insert:code:200)</code>
      </section>
    </section>
  );
}
