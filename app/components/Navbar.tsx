import Link from "next/link";
import ThemeToggler from "./ThemeToggler";

const Navbar = () => {
  return (
    <nav className="w-full py-12">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <p className="text-3xl">Advait</p>
        </Link>
        <div>
          <ThemeToggler></ThemeToggler>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
