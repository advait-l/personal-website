'use client';

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";

const ThemeToggler = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      onClick={toggleTheme}
      className={`
       relative w-12 h-6 flex items-center dark:bg-[#363537] bg-blue-300 cursor-pointer rounded-full p-1`}>
      <MoonIcon className="fill-white w-[15px] h-[15px]"></MoonIcon>
      <div
        id="toggleBtnTheme"
        className={` bg-white
        absolute  w-4 h-4 rounded-full shadow-customShadow-md ${
            resolvedTheme === "dark"
            ? " transition-transform translate-x-0"
            : " transition-transform translate-x-6"
        }`}></div>
      <SunIcon className="fill-white ml-auto w-[15px] h-[15px]"></SunIcon>
    </div>
  );
};

export default ThemeToggler;