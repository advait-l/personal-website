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
}

const BlogTile: React.FC<BlogTileProps> = ({
  id,
  title,
  excerpt,
  date,
  tag,
}) => {
  return (
    <Link
      href={`/blog/${id}`}
      key={id}
      className="border border-gray-400 dark:border-gray-500 shadow-lg hover:bg-gray-200/75 dark:hover:bg-gray-800/25 my-8 w-full h-full flex flex-col items-start justify-start md:flex-row"
    >
      <div className="relative w-full md:w-5/12 h-full">
        <Image
          src={MyImage}
          alt="Description of the image"
          className=" object-contain border-gray-400 dark:border-gray-500"
        />
      </div>
      <div className="w-full h-full flex flex-col items-start justify-between px-8 py-4">
        <small className="border border-gray-400 dark-border-gray-500 rounded-xl px-2 py-1">{tag}</small>
        <div className="flex flex-col my-2">
          <h1 className="text-xl font-semibold">{title}</h1>
          <p className="text-ellipsis">{excerpt}</p>
        </div>
        <br />
        <small>{date}</small>
      </div>
    </Link>
  );
};

export default BlogTile;
