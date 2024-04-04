import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs";
import { Roboto_Mono } from "next/font/google";
import matter from "gray-matter";
import getPostMetadata from "@/utils/getPosts";
import GoBack from "@/utils/goBack";
import path from "path";

const roboto = Roboto_Mono({ subsets: ["latin"] });

const getPostContent = (slug: string) => {
  const folder = path.join("public/content/");
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export default async function Page(params: any) {
  const slug = params.params.page;
  const post = getPostContent(slug);

  const mdstyles =
    "descendant:text-wrap descendant:break-words child-h1:text-2xl sm:child-h1:text-4xl md:child-h1:text-6xl child-h1:font-bold child-h1:my-8 child-h2:text-2xl child-h2:font-bold child-h2:my-6 child-p:my-4 child-p:text-base descendant-img:my-8 child-ul:list-disc child-blockquote:max-w-small child-blockquote:italic child-blockquote:px-4 child-blockquote:border-l-4 child-blockquote:border-black dark:child-blockquote:border-white child-pre:bg-midbeige dark:child-pre:bg-mutegrey child-pre:pl-4 child-pre:py-2 child-pre:rounded-md child-pre:text-wrap";

  return (
    <section className={`px-2 sm:px-6 md:px-12 py-12 h-full w-4/5 max-w-screen-3xl mx-auto ${mdstyles} ${roboto.className} `}>
      <GoBack path="/docs" />
      <h1>{post.data.title}</h1>
      <hr className=" border-t-2 xl:border-t-4 mb-3 border-black dark:border-white"></hr>
      <span className="flex justify-between">
        <i>{post.data.date}</i>
        <p>{post.data.tags.join(" | ")}</p>
      </span>
      <MDXRemote source={post.content} />
      <code className="italic">postorig: {post.excerpt}</code>
      <code className="italic">origin:author-vsr:assume(code:200)</code>
    </section>
  );
}
