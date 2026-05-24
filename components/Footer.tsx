"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import { useStateContext } from "@/contexts/ContextProvider";
import HoveredIcon from "./HoveredIcon";

const Footer = () => {
  const { currentColor } = useStateContext();
  const pathName = usePathname();

  if (pathName !== "/") {
    return null;
  }

  return (
    <div className="invisible sm:visible bottom-0 mb-4 w-full dark:text-basic-white text-dark px-14 fixed flex justify-between items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.3 }}
        transition={{ duration: 1.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        className="flex mb-2 flex-col"
      >
        <p className="font-light text-sm mb-2">Lets work together</p>
        <a
          style={{ color: currentColor }}
          href="mailto:joaoborgesbiz@gmail.com"
          className="font-light text-sm mb-2"
        >
          joaoborgesbiz@gmail.com
        </a>
        <p className="font-light text-sm">+351 936457957</p>
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.3 }}
        transition={{ duration: 1.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        className="flex gap-2 justify-center items-center pt-14 pr-14"
      >
        <motion.div whileHover={{ y: -2, scale: 2 }} whileTap={{ scale: 0.9 }}>
          <HoveredIcon
            link="https://github.com/JoaoBorges1010"
            className="rounded-full ease-in duration-100"
            bgColor="transparent"
          />
        </motion.div>
        <motion.div whileHover={{ y: -2, scale: 2 }} whileTap={{ scale: 0.9 }}>
          <HoveredIcon
            link="https://www.linkedin.com/in/joaoborges1010"
            className="rounded-full ease-in duration-100"
            bgColor="transparent"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Footer;
