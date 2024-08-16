import React from "react";
import Image from "next/image";
import Link from "next/link";
import MyImage from "../../public/profile-photo.jpg";

interface BlogTileProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  thumbnail: string;
}

const BlogTile: React.FC<BlogTileProps> = ({
  id,
  title,
  excerpt,
  date,
  tag,
  thumbnail
}) => {
  return (
    <Link
      href={`/blog/${id}`}
      key={id}
      className="border border-gray-400 dark:border-gray-500 shadow-lg hover:bg-gray-200/75 dark:hover:bg-gray-800/25 hover:shadow-slate-600 dark:hover::shadow-slate-600 my-8 flex flex-col items-start w-full justify-start md:flex-row"
    >
      <div className="relative w-full h-64 md:w-96 md:h-56 ">
        <Image
          src={thumbnail}
          alt="Description of the image"
          className=" border-gray-400 dark:border-gray-500"
          fill={true}
        />
      </div>
      <div className="w-full h-full flex flex-col items-start justify-between px-8 py-4">
        <button
          className="select-none w-auto rounded-lg bg-gradient-to-tr from-red-800 to-red-700 py-2 px-4 text-center align-middle text-xs font-semibold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 "
          type="button"
        >
          {tag}
        </button>
        <div className="flex flex-col my-2">
          <h1 className="text-2xl line-clamp-1 font-bold">{title}</h1>
          <p className="line-clamp-2 text-lg">{excerpt}</p>
        </div>
        <br />
        <small>{date}</small>
      </div>
    </Link>
  );
};

export default BlogTile;
