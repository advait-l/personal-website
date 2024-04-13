import Link from "next/link";
import ThemeToggler from "./ThemeToggler";

const Navbar = () => {
  return (
    <nav className="w-3/4 bg-gray-100 dark:bg-gray-900/25 flex flex-row items-center justify-center">
      <div className="flex flex-row justify-between items-center w-3/4 py-8">
        <Link href="/">
          <p className="text-3xl">Advait</p>
        </Link>
        <div className="flex flex-row items-center gap-16 justify-between">
          <Link href="/portfolio">
            <p className="text-m">Portfolio</p>
          </Link>
          <Link href="/blog">
            <p className="text-m">Blog</p>
          </Link>
          <div>
            <ThemeToggler></ThemeToggler>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
