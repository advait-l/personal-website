import BlogTile from "../components/BlogTile";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";

export default function Blog() {
  const allPostsData = getSortedPostsData();
  return (
    <main className="flex flex-col items-start justify-start w-full h-full p-8 lg:p-16 bg-gray-100 dark:bg-gray-900">
      <header className="text-4xl font-bold my-8">My Blog</header>
      <div className="w-full flex flex-col items-center lg:items-start">
        <ul className="flex flex-col items-center justify-center w-full lg:w-3/5">
          {allPostsData.map(({ id, title, excerpt, date, tag }) => (
            <BlogTile
              key={id} // Add key here for list rendering
              id={id}
              title={title}
              excerpt={excerpt}
              date={date}
              tag={tag}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}
