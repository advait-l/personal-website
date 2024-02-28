// components/Navbar.js

import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-center items-center">
      <ul className="flex flex-row justify-center items-center">
        <li className="px-4 cursor-pointer capitalize py-6 text-4xl">About</li>
        <li>Blog</li>
        <li>Contact</li>
        <li>
          <ThemeSwitcher></ThemeSwitcher>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
