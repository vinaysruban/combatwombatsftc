import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";


function getContent(page: string) {
  const configDirectory = path.resolve(process.cwd(), "public/content");
  const file = `${page}.md`;
  try {
    return fs.readFileSync(path.join(configDirectory, file), "utf8");
  } catch (error) {
    console.error(error);
    return "# Sorry, we don't have that yet.\nContact us and we'll see what we can do. <br />```Error 404```"
  }
}

export default async function Page({ params }: { params: { page: string } }) {
  const page = params.page;
  const content = getContent(page);
  const mdstyles = 'child-h1:text-4xl child-h1:font-bold child-h1:my-8 child-h2:text-2xl child-h2:font-bold child-h2:my-6 child-p:my-4 child-p:text-md descendant-img:my-8 child-ul:list-disc child-blockquote:max-w-small child-blockquote:italic child-blockquote:px-4 child-blockquote:border-l-4 child-blockquote:border-black dark:child-blockquote:border-white child-pre:bg-midbeige dark:child-pre:bg-mutegrey child-pre:pl-4 child-pre:py-2 child-pre:rounded-md child-pre:text-wrap'

  return (
      <section className={`px-24 py-24 h-full ${mdstyles}`}>
        <MDXRemote source={content} />
        <code className="italic">My Page: {params.page}</code>
      </section>
  );
}
