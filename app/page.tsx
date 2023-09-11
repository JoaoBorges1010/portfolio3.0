"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";

import { useStateContext } from "@/contexts/ContextProvider";
import Button from "@/components/Button";

import AnimationTest from "../components/AnimationTest";

export default function Home() {
  const { currentMode, currentColor } = useStateContext();

  const [text, count] = useTypewriter({
    words: ["I'm a full stack web-developer", "<I Love to Code />"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="h-screen flex justify-center items-center">
        <AnimationTest />
        <div className="flex flex-col justify-center items-center">
          <h1
            className="dark:text-basic-white text-center text-dark font-header font-medium
              text-[35px] leading-[35px] sm:text-[45px] sm:leading-[45px] md:text-[60px] md:leading-[60px]
              lg:text-[90px] lg:leading-[90px]  xl:text-[130px] xl:leading-[130px]"
          >
            Hi ! I'm{" "}
            <span style={{ color: currentColor }} className="">
              João Borges
            </span>
          </h1>
          <span
            className="mt-10 text-center tracking-wider dark:text-basic-white text-dark font-light
           text-lg"
          >
            {text}
            <Cursor cursorColor={currentColor} />
          </span>
          <Button
            style={{ backgroundColor: currentColor }}
            className=" z-30 rounded-none shadow-custom mt-14 text-basic-white w-[300px] px-10 uppercase font-medium text-xl"
          >
            <a href="/about">More about me</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
