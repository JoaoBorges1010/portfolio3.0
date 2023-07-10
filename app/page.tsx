"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";

import { useStateContext } from "@/contexts/ContextProvider";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import AnimationTest from "../components/AnimationTest";
import Link from "next/link";

export default function Home() {
  const { currentMode, currentColor } = useStateContext();

  const router = useRouter();

  const [text, count] = useTypewriter({
    words: ["I'm a full stack web-developer", "<I Love to Code />"],
    loop: true,
    delaySpeed: 2000,
  });

  // NOT WORKING CHECKING SOLUTION
  // useEffect(() => {
  //   const currentThemeColor = localStorage.getItem('colorMode');
  //   const currentThemeMode = localStorage.getItem('themeMode');
  //   if (currentThemeColor && currentThemeMode) {
  //     setCurrentColor(currentThemeColor);
  //     setCurrentMode(currentThemeMode);
  //   }
  // }, []);

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="h-screen flex justify-center items-center">
        <AnimationTest />
        <div className="flex flex-col justify-center items-center">
          <h1 className="dark:text-basic-white text-center text-dark font-header font-medium text-8xl">
            Hi ! I'm{" "}
            <span style={{ color: currentColor }} className="">
              João Borges
            </span>
          </h1>
          <span
            className="mt-10 text-center tracking-wider dark:text-basic-white text-dark font-bold
           text-lg"
          >
            {text}
            <Cursor cursorColor={currentColor} />
          </span>
          <Button
            style={{ backgroundColor: currentColor }}
            className=" z-30 rounded-none shadow-custom tracking-widest mt-14 text-basic-white w-[300px] px-10 uppercase font-semibold text-xl"
          >
            <Link href="/about">More about me</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
