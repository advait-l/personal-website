"use client";

import { useRouter } from "next/navigation";
import { Canvas, extend } from "@react-three/fiber";
import { Center, OrbitControls, Text3D } from "@react-three/drei";
import MyFont from "../public/fonts/Roboto Medium_Regular.json";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex flex-col w-full min-h-screen h-auto items-center justify-start select-none">
      {/* Hero Section */}
      <div className="flex flex-row items-start justify-center w-full h-auto min-h-screen shadow-xl bg-gray-100 dark:bg-gray-900">
        <div className="h-full w-full text-center md:text-left flex flex-col items-center md:items-start justify-start gap-8 p-8 md:p-16">
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
            onClick={() => {
              router.push("/blog");
            }}
          >
            Check out my blog
          </button>
        </div>
        <div className="w-2/3 h-96 p-8 md:p-16">
          <Canvas
            shadows
            className="bg-gray-100 dark:bg-gray-900"
            camera={{
              position: [0, -2, 5],
            }}
          >
            <ambientLight color={"red"} intensity={10} />
            <Center top middle>
              <Text3D font={MyFont}>Advait Lonkar</Text3D>
            </Center>
            <OrbitControls />
          </Canvas>
        </div>
      </div>
    </main>
  );
}
