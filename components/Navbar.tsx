"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, Variants } from "framer-motion";

import { useStateContext } from "@/contexts/ContextProvider";
import { links } from "@/constants";
import { MenuButton } from "./menuButton";

const Navbar = () => {
  const { currentColor, activeMenu, setActiveMenu } = useStateContext();

  const pathName = usePathname();

  return (
    <div className=" fixed top-6 right-6 z-50">
      <motion.nav
        initial={false}
        animate={activeMenu ? "open" : "closed"}
        className=" relative p-5 z-50"
      >
        <div
          className="cursor-pointer  flex items-center justify-center absolute
             p-2 bg-light-gray text-basic-white top-1 right-1 z-10 w-[50px] h-[50px]"
        >
          <MenuButton
            isOpen={activeMenu}
            onClick={() => setActiveMenu(!activeMenu)}
            strokeWidth={activeMenu ? "0.7" : "0.4"}
            color="#fffffc"
            transition={{ ease: "easeOut", duration: 1 }}
            width="43"
            height="17"
            circleWidth="6"
            circleHeight="6"
          />
        </div>
        <motion.ul
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% )",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.5,
                delayChildren: 0.3,
                staggerChildren: 0.05,
              },
            },
            closed: {
              clipPath: "inset(5% 5% 100% 100%  )",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.5,
              },
            },
          }}
          className="fixed  bottom-auto top-6 right-6
            bg-light-gray text-basic-white
             mb-4 pl-6 pt-8 pr-6  pb-8 overflow-hidden z-[2] shadow-custom"
        >
          {links.map(({ title, link, icon }) => (
            <motion.li
              style={{
                color: pathName === link ? currentColor : "#fffffc",
                pointerEvents: pathName === link ? "none" : "auto",
              }}
              className="cursor-pointer mt-2 mb-4 text-lg  font-semibold uppercase"
              onClick={() => setActiveMenu(false)}
              key={title}
            >
              <Link
                href={link}
                className="flex items-center gap-3  relative group hover:scale-105 ease-in-out duration-200"
              >
                {icon}
                {title}
                <span
                  style={{ backgroundColor: currentColor }}
                  className="h-[2px] inline-block w-0 absolute left-0 -bottom-0.5
                  group-hover:w-full transition-[width] ease duration-300"
                >
                  &nbsp;
                </span>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.nav>
    </div>
  );
};

export default Navbar;
