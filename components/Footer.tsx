"use client";

import { motion } from "framer-motion";

import { useStateContext } from "@/contexts/ContextProvider";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  const { currentMode, currentColor } = useStateContext();

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="bottom-0 mb-4 w-full dark:text-basic-white text-dark px-14 fixed flex justify-between items-center">
        <div className="flex mb-2 flex-col">
          <p className="font-light text-sm mb-2">Lets work together</p>
          <a
            style={{ color: currentColor }}
            href="#"
            className="font-light text-sm mb-2"
          >
            joaoborgesbiz@gmail.com
          </a>
          <p className="font-light text-sm">+351 936457957</p>
        </div>
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.3,
          }}
          transition={{
            duration: 1.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          className="flex gap-2 justify-center items-center pt-14 pr-14"
        >
          <motion.div
            whileHover={{
              y: -2,
            }}
            whileTap={{ scale: 0.9 }}
          >
            <SocialIcon
              url="https://github.com/JoaoBorges1010"
              target="blank"
              fgColor={currentMode === "Light" ? "#292929" : "#fffffc"}
              bgColor="transparent"
            />
          </motion.div>
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
            <SocialIcon
              url="https://www.linkedin.com/in/joaoborges1010"
              target="blank"
              fgColor={currentMode === "Light" ? "#292929" : "#fffffc"}
              bgColor="transparent"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
