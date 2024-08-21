"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import MyImage from "../../public/profile-photo.jpg";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  return (
    <Link
      href={`/blog/${id}`}
      key={id}
      className="border border-gray-400 dark:border-gray-500 shadow-lg hover:bg-gray-200/75 dark:hover:bg-gray-800/25 hover:shadow-slate-600 dark:hover::shadow-slate-600 my-8 flex flex-col items-start w-full h-full justify-start md:flex-row"
    >
      <div className="relative w-full h-64 md:w-96 md:h-56 ">
        <Image
          src={thumbnail}
          alt="Description of the image"
          className=" border-gray-400 dark:border-gray-500"
          fill={true}
        />
      </div>
      <div className="w-full h-full flex flex-col items-start justify-between px-4 py-4">
        <small>{date}</small>
        <div className="flex flex-col ">
          <h1 className="text-2xl line-clamp-1 font-bold">{title}</h1>
          <p className="line-clamp-2 text-lg">{excerpt}</p>
        </div>
        <br />
        <button
          className="select-none z-10 w-auto rounded-lg mt-1 outline outline-2 outline-red-700 py-2 px-4 text-center align-middle text-xs font-semibold uppercase transition-all  "
          type="button"
          onClick={() => {
            router.push(`/blog/tags`);
          }}
        >
          {tag}
        </button>
      </div>
    </Link>
  );
};

export default BlogTile;
