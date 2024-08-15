// app/posts/[id]/page.tsx
import { notFound } from "next/navigation";
import { getSortedPostsData } from "../../lib/posts";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
// import DOMPurify from 'dompurify';
// import * as DOMPurify from 'dompurify';
import { sanitize } from "../../lib/utils/sanitize";
import { remark } from "remark";
import html from "remark-html";
import Head from "next/head";

const postsDirectory = path.join(process.cwd(), "blogposts");

// Define the type for the params
interface Params {
  id: string;
}

export default async function Post({ params }: { params: Params }) {
  const fullPath = path.join(postsDirectory, `${params.id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  if (!matterResult) {
    notFound();
  }

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
    const sanitizedContent = sanitize(processedContent.toString());

  return (
    <div className="flex flex-col px-12 w-full h-screen overflow-auto bg-gray-100 dark:bg-gray-900">
        <h1 className="text-4xl font-semibold my-8">{matterResult.data.title}</h1>
        <div className="lg:w-3/5" dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
    </div>
    // <div>
    //   <Head>
    //     <title>{matterResult.data.title}</title>
    //   </Head>
    // </div>
  );
}
