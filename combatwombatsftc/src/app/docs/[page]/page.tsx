import "server-only";

import { MDXRemote } from "next-mdx-remote/rsc";
import { Roboto_Mono } from "next/font/google";
import getPostMetadata from "@/utils/getPosts";
import GoBack from "@/components/goBack";
import Image from "next/image";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import type { Metadata, ResolvingMetadata } from "next";
import Markdown from "@/components/markdown";
import PrismProvider from "@/components/prismprovider";

export async function generateMetadata(
  params: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.params.page;
  const post = await getPostContent(slug);

  return {
    title: post.title,
    description: post.description
  };
}

const roboto = Roboto_Mono({ subsets: ["latin"] });

const getPostContent = async (slug: string) => {
  const folder = path.join(process.cwd(), "/src/content/");
  const file = `${folder}${slug}.mdx`;
  try {
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return {
      slug,
      content: matterResult.content,
      ...(matterResult.data as {
        title: string;
        author: string;
        image: string;
        description: string;
        date: string;
        tags: string[];
        latex: boolean;
      }),
    };
  } catch (e) {
    throw new Error("Post not found: " + e);
  }
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export default async function Page(params: any) {
  const slug = params.params.page;
  const post = await getPostContent(slug);

  if (post.latex === undefined) {
    post.latex = false;
  }

  const mdstyles =
    "descendant:text-wrap descendant:break-words descendant-h1:text-2xl sm:descendant-h1:text-4xl md:descendant-h1:text-6xl descendant-h1:font-bold descendant-h1:mt-8 descendant-h2:text-2xl 2xl:descendant-h2:text-3xl descendant-h2:font-extrabold descendant-h2:my-6 descendant-p:my-4 descendant-p:text-base 2xl:descendant-p:text-lg 3xl:descendant-p:text-xl descendant-img:my-8 descendant-ul:list-disc descendant-blockquote:max-w-small descendant-blockquote:italic descendant-blockquote:px-4 descendant-blockquote:border-l-4 descendant-blockquote:border-black dark:descendant-blockquote:border-white descendant-pre:text-base 2xl:descendant-pre:text-lg 3xl:descendant-pre:text-xl descendant-pre:bg-midbeige dark:descendant-pre:bg-mutegrey descendant-pre:pl-4 descendant-pre:py-2 descendant-pre:rounded-md descendant-pre:text-wrap descendant-h3:font-bold descendant-h3:text-lg descendant-a:underline descendant-a:font-semibold descendant-a:text-wombatbrown";

  return (
    <section
      className={`px-6 md:px-12 py-2 sm:py-6 md:py-12 h-full w-full md:w-4/5 ${mdstyles} ${roboto.className} `}
    >
      <PrismProvider />
      <GoBack path="/docs" />
      <header>
        <h1>{post.title}</h1>
        <span className="flex items-center">
          <Image
            alt={"Icon"}
            height={100}
            width={100}
            src={post.image}
            className="w-8 h-8 md:h-12 md:w-12 object-cover rounded-full"
          />
          <p className="ml-4 text-xs xs:text-sm ms:text-base">{post.author}</p>
        </span>
        <hr className="border-t-2 sm:border-t-4 md:border-t-8 mb-3 border-black dark:border-white"></hr>
        <span className="flex justify-between flex-col md:flex-row">
          <i>{post.date}</i>
          <p className="m-0">{post.tags.join(" | ")}</p>
        </span>
      </header>
      <main>
        {post.latex ? (
          <Markdown>
            <MDXRemote source={post.content} />
          </Markdown>
        ) : (
          <MDXRemote source={post.content} />
        )}
        <code className="italic">Code may be used for competition purposes.</code>
      </main>
    </section>
  );
}
