import Link from "next/link";
import getPostMetadata from "@/utils/getPosts";
import GoBack from "@/utils/goBack";

export default async function Page() {
  const postMetadata = getPostMetadata();
  console.log(postMetadata);

  const list = postMetadata.map((post) => {
    return (
      <Link href={`/docs/${post.slug}`} key={post.slug}>
        <li
          
          className="border-2 2xl:border-4 border-black dark:border-white px-3 py-2 rounded-xl"
        >
          <h1 className="text-xl lg:text-2xl 2xl:text-3xl 4xl:text-4xl font-semibold my-2 md:my-3 xl:my-4">{post.title}</h1>
          <p className="my-2 md:my-3 xl:my-4">{post.date}</p>
          <p className="my-2 md:my-3 xl:my-4">{post.description}</p>
        </li>
      </Link>
    );
  });

  const mdstyles =
    "descendant:text-wrap descendant:break-words child-h1:text-2xl sm:child-h1:text-4xl md:child-h1:text-6xl child-h1:font-bold child-h1:my-8 child-h2:text-2xl child-h2:font-bold child-h2:my-6 child-p:my-4 child-p:text-base descendant-img:my-8 child-blockquote:max-w-small child-blockquote:italic child-blockquote:px-4 child-blockquote:border-l-4 child-blockquote:border-black dark:child-blockquote:border-white child-pre:bg-midbeige dark:child-pre:bg-mutegrey child-pre:pl-4 child-pre:py-2 child-pre:rounded-md child-pre:text-wrap";

  return (
    <section
      className={`px-2 sm:px-6 md:px-12 py-12 h-full w-4/5 max-w-screen-3xl mx-auto ${mdstyles}`}
    >
      <GoBack path="../" />
      <h1 className="">Our Docs</h1>
      <hr className=" border-t-2 2xl:border-t-4 mb-3 border-black dark:border-white"></hr>
      <p className="font-semibold">
        Check out our extensive (soon) documentation to get you started
      </p>
      <ul className="flex flex-col gap-2 2xl:gap-6">{list}</ul>
    </section>
  );
}
