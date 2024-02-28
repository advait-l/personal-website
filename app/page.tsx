import Image from "next/image";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Navbar />
        <h1>Advait Lonkar</h1>
        {/* Add your home page content here */}
      </div>
    </main>
  );
}
