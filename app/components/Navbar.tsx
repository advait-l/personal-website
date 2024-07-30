"use client";

import Link from "next/link";
import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";
import { useState } from "react";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="flex flex-row items-center justify-between bg-gray-100 dark:bg-gray-900 py-8 px-16">
      <Link href="/">
        <Logo></Logo>
      </Link>
      <nav>
        <section className="MOBILE-MENU flex  lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-800 dark:bg-gray-200"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-800 dark:bg-gray-200"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-800 dark:bg-gray-200"></span>
          </div>

          <div
            className={
              isNavOpen
                ? "showMenuNav  bg-gray-100 dark:bg-gray-900 drop-shadow-lg"
                : "hideMenuNav"
            }
          >
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-800 dark:text-gray-200"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col w-full items-center justify-between min-h-[250px] ">
              <li className="my-8 uppercase">
                <Link href="/blog" onClick={() => setIsNavOpen(false)}>
                  Blog
                </Link>
              </li>
              <li className="my-8 uppercase">
                <Link href="/portfolio" onClick={() => setIsNavOpen(false)}>
                  Portfolio
                </Link>
              </li>
              <li className="my-8 uppercase">
                <Link href="/contact" onClick={() => setIsNavOpen(false)}>
                  Contact
                </Link>
              </li>
              <li className="my-8 uppercase">
                <ThemeToggler></ThemeToggler>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <ThemeToggler></ThemeToggler>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 50vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
};

export default Navbar;
