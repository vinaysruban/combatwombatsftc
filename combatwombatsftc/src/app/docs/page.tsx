import Link from "next/link";
import { sql } from "@vercel/postgres";
import path from "path";
import { promises as fs } from "fs";

async function getFiles() {
  const configDirectory = path.resolve(process.cwd(), "public/content");
  const pages: string[] = [];

  try {
    const files = await fs.readdir(configDirectory);
    for (const file of files) {
      pages.push(file);
    }
  } catch (err) {
    console.error(err);
  }

  return pages;
}

export default async function Page() {
  const pages = await getFiles();

  const list = pages.map((page) => {
    return (
      <li key={page.slice(0, -3)}>
        <Link href={`/docs/${page.slice(0, -3)}`}>{page.slice(0, -3)}</Link>
      </li>
    );
  });

  return (
    <section className="px-24 py-24 h-full">
      <h1 className="text-4xl font-bold">My Pages:</h1>
      <ul>{list}</ul>
    </section>
  );
}
