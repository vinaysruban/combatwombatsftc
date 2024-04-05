import { MDXRemote } from "next-mdx-remote/rsc";
import { Roboto_Mono } from "next/font/google";
import getPostMetadata from "@/utils/getPosts";
import GoBack from "@/utils/goBack";
import Image from "next/image";

const roboto = Roboto_Mono({ subsets: ["latin"] });

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export default async function Page(params: any) {
  const slug = params.params.page;
  let response = await fetch(`http://localhost:3000/api/${slug}`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  let post = await response.json();
  console.log(post);

  const mdstyles =
    "descendant:text-wrap descendant:break-words child-h1:text-2xl sm:child-h1:text-4xl md:child-h1:text-6xl child-h1:font-bold child-h1:mt-8 child-h2:text-2xl child-h2:font-extrabold child-h2:my-6 child-p:my-4 child-p:text-base descendant-img:my-8 child-ul:list-disc child-blockquote:max-w-small child-blockquote:italic child-blockquote:px-4 child-blockquote:border-l-4 child-blockquote:border-black dark:child-blockquote:border-white child-pre:bg-midbeige dark:child-pre:bg-mutegrey child-pre:pl-4 child-pre:py-2 child-pre:rounded-md child-pre:text-wrap descendant-h3:font-bold descendant-h3:text-lg";

  return (
    <section
      className={`px-2 sm:px-6 md:px-12 py-12 h-full w-4/5 max-w-screen-3xl mx-auto ${mdstyles} ${roboto.className} `}
    >
      <GoBack path="/docs" />
      <h1>{post.data.title}</h1>
      <span className="flex items-center">
        <Image
          alt={"Icon"}
          height={100}
          width={100}
          src={post.data.image}
          className="w-8 h-8 md:h-16 md:w-16 object-cover rounded-full"
        />
        <p className="ml-4 text-xs xs:text-sm ms:text-base">{post.data.author}</p>
      </span>
      <hr className="border-t-2 sm:border-t-4 md:border-t-8 mb-3 border-black dark:border-white"></hr>
      <span className="flex justify-between flex-col md:flex-row">
        <i>{post.data.date}</i>
        <p>{post.data.tags.join(" | ")}</p>
      </span>
      <MDXRemote source={post.content} />
      <code className="italic">postorig: {post.excerpt}</code>
      <code className="italic">origin:author-vsr:assume(code:200)</code>
    </section>
  );
}
