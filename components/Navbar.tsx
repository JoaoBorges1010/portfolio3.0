"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FiSettings } from "react-icons/fi";

import { useUI } from "@/contexts/ContextProvider";
import { links } from "@/constants";
import { NavIcon } from "@/components/NavIcon";
import { cn } from "@/lib/cn";
import { MenuButton } from "./menuButton";

const Navbar = () => {
  const { activeMenu, setActiveMenu, setThemeSettings } = useUI();
  const pathName = usePathname();

  return (
    <div className="fixed top-6 right-6 z-nav">
      <motion.nav
        initial={false}
        animate={activeMenu ? "open" : "closed"}
        className="relative p-5 z-nav"
      >
        <div
          className="cursor-pointer flex items-center justify-center absolute
             p-2 bg-light-gray text-basic-white top-1 right-1 z-10 w-[50px] h-[50px]"
          aria-label={activeMenu ? "Close menu" : "Open menu"}
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
          className="fixed bottom-auto top-6 right-6 bg-light-gray text-basic-white mb-4 pl-6 pt-8 pr-6 pb-8 overflow-hidden z-[2] shadow-custom"
        >
          {links.map(({ title, link, icon }) => (
            <motion.li
              className={cn(
                "cursor-pointer mt-2 mb-4 text-lg font-semibold uppercase",
                pathName === link ? "accent-text" : "text-basic-white"
              )}
              style={{
                pointerEvents: pathName === link ? "none" : "auto",
              }}
              onClick={() => setActiveMenu(false)}
              key={title}
            >
              <Link
                href={link}
                className="flex items-center gap-3 relative group hover:scale-105 ease-in-out duration-200"
              >
                <NavIcon icon={icon} />
                {title}
                <span className="h-[2px] inline-block w-0 absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 accent-bg">
                  &nbsp;
                </span>
              </Link>
            </motion.li>
          ))}
          <motion.li className="cursor-pointer mt-2 mb-4 text-lg font-semibold uppercase text-basic-white">
            <button
              type="button"
              aria-controls="appearance-panel"
              onClick={() => {
                setActiveMenu(false);
                setThemeSettings(true);
              }}
              className="w-full text-left flex items-center gap-3 relative group hover:scale-105 ease-in-out duration-200 text-lg font-semibold uppercase"
            >
              <FiSettings aria-hidden className="shrink-0" />
              appearance
              <span className="h-[2px] inline-block w-0 absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 accent-bg">
                &nbsp;
              </span>
            </button>
          </motion.li>
        </motion.ul>
      </motion.nav>
    </div>
  );
};

export default Navbar;
