import Image from "next/image";
import ThemeToggler from "./components/ThemeToggler";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-screen items-center justify-center">
      <Navbar />
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center w-3/4 h-full shadow-xl bg-gray-100 dark:bg-gray-900/25">
        <div className="h-3/4 w-3/4 flex flex-col items-start justify-start gap-8">
          <p className="text-md font-light">THIS IS ME</p>
          <div>
            <p className="text-6xl font-black drop-shadow-xl">Advait Lonkar</p>
            <p className="text-3xl font-normal">
              Software Enginner @{" "}
              <span className="font-semibold">Morgan Stanley</span>, Bangalore.
            </p>
          </div>
          <div>
            <p className="text-xl font-light">
              Welcome to my personal space for personal & professional growth.
            </p>
            <p className="text-xl font-light">
              Here you will find a mix of technical insights, some personal
              stories...
            </p>
            <p className="text-xl font-light">
              ... and various other topics that pique my interest.
            </p>
          </div>
          <button
            className="select-none rounded-lg bg-gradient-to-tr from-red-800 to-red-700 py-3 px-6 text-center align-middle text-xs font-semibold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 "
            type="button"
          >
            Check out my blog
          </button>
        </div>
      </div>
    </main>
  );
}
