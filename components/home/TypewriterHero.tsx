"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import Link from "next/link";
import Button from "@/components/Button";
import AnimationTest from "@/components/AnimationTest";
import { useStateContext } from "@/contexts/ContextProvider";

const TypewriterHero = () => {
  const { currentColor } = useStateContext();

  const [text] = useTypewriter({
    words: ["I'm a full stack web-developer", "<I Love to Code />"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex justify-center items-center">
      <AnimationTest />
      <div className="flex flex-col justify-center items-center">
        <h1
          className="dark:text-basic-white text-center text-dark font-header font-medium
              text-[35px] leading-[35px] sm:text-[45px] sm:leading-[45px] md:text-[60px] md:leading-[60px]
              lg:text-[90px] lg:leading-[90px] xl:text-[130px] xl:leading-[130px]"
        >
          Hi ! I&apos;m{" "}
          <span style={{ color: currentColor }}>João Borges</span>
        </h1>
        <span
          className="mt-10 text-center tracking-wider dark:text-basic-white text-dark font-light text-lg"
          suppressHydrationWarning
        >
          {text}
          <Cursor cursorColor={currentColor} />
        </span>
        <Button
          variant="primary"
          style={{ backgroundColor: currentColor }}
          className="z-30 mt-14 w-[300px] font-medium text-xl"
        >
          <Link href="/about">More about me</Link>
        </Button>
      </div>
    </div>
  );
};

export default TypewriterHero;
