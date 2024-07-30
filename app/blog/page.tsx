import BlogTile from "../components/BlogTile";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";

export default function Blog() {
  const allPostsData = getSortedPostsData();
  return (
    <div className="flex flex-col border w-full h-full p-16">
      <header className="text-4xl font-bold my-8">My Blog</header>
      <div className="w-full flex flex-col items-center">
        <ul className="border border-red-500 flex flex-col items-center justify-center w-3/4">
          {allPostsData.map(({ id, title, excerpt, date }) => (
            <Link
              href={`/posts/${id}`}
              key={id}
              className="border border-blue-500 p-4 my-8 w-full flex flex-col items-start justify-between"
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
    </div>
  );
}
