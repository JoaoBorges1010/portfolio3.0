import { motion } from "framer-motion";

import { useStateContext } from "@/contexts/ContextProvider";

const TransitionEffect = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-[100] bg-dark"
        initial={{
          x: "100%",
          width: "100%",
        }}
        animate={{
          x: "0%",
          width: "0%",
        }}
        exit={{ x: ["75%", "0%", "100%"], width: ["100%"] }}
        onAnimationStart={() => console.log("Animation started")}
        onAnimationComplete={() => console.log("animation completed")}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={`fixed top-0 bottom-0 right-full w-screen h-screen z-[90] ${
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
          duration: 0.8,
          ease: "easeInOut",
        }}
      />
      <motion.div
        style={{ backgroundColor: currentColor }}
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-[80]"
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
          duration: 0.8,
          ease: "easeInOut",
        }}
      />
    </>
  );
};

export default TransitionEffect;
