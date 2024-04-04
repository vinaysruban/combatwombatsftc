import fs from "fs";
import matter from "gray-matter";
import { PageMetadata } from "@/components/types/PageMetadata";
import path from "path";

const getPostMetadata = (): PageMetadata[] => {
  const folder = path.join("/content/");
  const files = fs.readdirSync(folder);
  const markdownPages = files.filter((file) => file.endsWith(".md"));

  console.log(folder)

  const posts = markdownPages.map((fileName) => {
    const fileContents = fs.readFileSync(`/content/${fileName}`, "utf8");
    const result = matter(fileContents);
    return {
      title: result.data.title,
      description: result.data.description,
      date: result.data.date,
      tags: result.data.tags,
      slug: fileName.replace(".md", ""),
    };
  });

  console.log(posts);
  return posts;
};

export default getPostMetadata;
