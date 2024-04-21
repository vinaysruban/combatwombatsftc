import fs from "fs";
import matter from "gray-matter";
import { PageMetadata } from "@/components/types/PageMetadata";
import path from "path";

const getPostMetadata = (): PageMetadata[] => {
  const folder = path.join(process.cwd(), "/src/content/");
  const files = fs.readdirSync(folder);
  const markdownPages = files.filter((file) => file.endsWith(".mdx"));

  const posts = markdownPages.map((fileName) => {
    const fileContents = fs.readFileSync(path.join(process.cwd(), `src/content/${fileName}`), "utf8");
    const result = matter(fileContents);
    return {
      title: result.data.title,
      author: result.data.author,
      image: result.data.image,
      description: result.data.description,
      date: result.data.date,
      tags: result.data.tags,
      latex: result.data.latex,
      slug: fileName.replace(".mdx", ""),
    };
  });

  return posts;
};

export default getPostMetadata;
