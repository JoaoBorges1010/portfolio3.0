"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import { site } from "@/constants/site";
import HoveredIcon from "./HoveredIcon";

const Footer = () => {
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
        <p className="font-light text-sm mb-2">{site.footer.cta}</p>
        <a
          href={`mailto:${site.contact.email}`}
          className="font-light text-sm mb-2 accent-text"
        >
          {site.contact.email}
        </a>
        <p className="font-light text-sm">{site.contact.phone}</p>
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.3 }}
        transition={{ duration: 1.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        className="flex gap-2 justify-center items-center pt-14 pr-14"
      >
        <motion.div whileHover={{ y: -2, scale: 2 }} whileTap={{ scale: 0.9 }}>
          <HoveredIcon
            link={site.social.github}
            className="rounded-full ease-in duration-100"
            bgColor="transparent"
          />
        </motion.div>
        <motion.div whileHover={{ y: -2, scale: 2 }} whileTap={{ scale: 0.9 }}>
          <HoveredIcon
            link={site.social.linkedin}
            className="rounded-full ease-in duration-100"
            bgColor="transparent"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Footer;
