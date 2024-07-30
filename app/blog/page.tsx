import BlogTile from "../components/BlogTile";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";

export default function Blog() {
  const allPostsData = getSortedPostsData();
  return (
    <main className="flex flex-col items-start justify-start w-full h-screen p-8 lg:p-16 bg-gray-100 dark:bg-gray-900">
      <header className="text-4xl font-bold my-8">My Blog</header>
      <div className="w-full flex flex-col items-center lg:items-start">
        <ul className="flex flex-col items-center justify-center w-full lg:w-3/4">
          {allPostsData.map(({ id, title, excerpt, date }) => (
            <Link
              href={`/posts/${id}`}
              key={id}
              className="border border-gray-400 dark:border-gray-500 rounded-lg shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800/25 p-4 my-8 w-full flex flex-col items-start justify-between"
            >
              <li>
                <h1 className="text-xl">{title}</h1>
                <p>{excerpt}</p>
                <br />
                <small>{date}</small>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </main>
  );
}
