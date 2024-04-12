import Image from "next/image";
import ThemeToggler from "./components/ThemeToggler";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start mx-96">
      <Navbar />
      <h2>
        Hi I am Advait Lonkar.
      </h2>
    </main>
  );
}
