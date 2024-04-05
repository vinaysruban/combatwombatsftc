import fs from "fs";
import matter from "gray-matter";
import path from "path";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;
  const folder = path.join(process.cwd(), "/src/content/");
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return Response.json(matterResult);
}
