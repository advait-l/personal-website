import React from "react";
import Image from "next/image";

const BlogTile = () => {
  return (
    <div className="flex flex-col p-8 w-3/4  border border-green-500">
      <p>Blog Image</p>
      <p>Blog Title</p>
      <p>Blog Subtitle</p>
    </div>
  );
};

export default BlogTile;
