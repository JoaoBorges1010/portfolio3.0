"use client";

import { motion } from "framer-motion";

import { useTheme } from "@/contexts/ContextProvider";

interface TransitionEffectProps {
  reducedMotion?: boolean;
}

const curtainTransition = {
  duration: 0.8,
  ease: "easeInOut" as const,
};

const TransitionEffect = ({ reducedMotion = false }: TransitionEffectProps) => {
  const { currentMode } = useTheme();

  if (reducedMotion) {
    return null;
  }

  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-[100] bg-dark pointer-events-none"
        initial={{
          x: "100%",
          width: "100%",
        }}
        animate={{
          x: "0%",
          width: "0%",
        }}
        exit={{ x: ["75%", "0%", "100%"], width: ["100%"] }}
        transition={curtainTransition}
      />
      <motion.div
        className={`fixed top-0 bottom-0 right-full w-screen h-screen z-[90] pointer-events-none ${
          currentMode === "Light" ? "bg-lighter-gray" : "bg-light-gray"
        }`}
        initial={{
          x: "100%",
          width: "100%",
        }}
        animate={{
          x: "0%",
          width: "0%",
        }}
        transition={{
          delay: 0.2,
          ...curtainTransition,
        }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-overlay accent-bg pointer-events-none"
        initial={{
          x: "100%",
          width: "100%",
        }}
        animate={{
          x: "0%",
          width: "0%",
        }}
        transition={{
          delay: 0.4,
          ...curtainTransition,
        }}
      />
    </>
  );
};

export default TransitionEffect;
