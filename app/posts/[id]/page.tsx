// app/posts/[id]/page.tsx
import { notFound } from 'next/navigation';
import { getSortedPostsData } from '../../lib/posts';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
// import DOMPurify from 'dompurify';
// import * as DOMPurify from 'dompurify';
import { sanitize } from '../../lib/utils/sanitize';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'blogposts');

// Define the type for the params
interface Params {
    id: string;
}

export default async function Post({ params } : { params: Params}) {
    const fullPath = path.join(postsDirectory, `${params.id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    if (!matterResult) {
        notFound();
    }

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const sanitizedContent = sanitize(processedContent.toString());

    return (
        <div className="flex flex-col p-16 w-full h-full border border-red-500">
            <h1 className="text-4xl font-semibold my-8">{matterResult.data.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
        </div>
    );
}
