import fs from "fs";
import matter from "gray-matter";
import { PageMetadata } from "@/components/types/PageMetadata";

const getPostMetadata = (): PageMetadata[] => {
  const folder = "src/content/";
  const files = fs.readdirSync(folder);
  const markdownPages = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPages.map((fileName) => {
    const fileContents = fs.readFileSync(`src/content/${fileName}`, "utf8");
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
