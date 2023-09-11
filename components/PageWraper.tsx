"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import TransitionEffect from "./TransitionEffect";

interface PageWraperProps {
  children: React.ReactNode;
}

const PageWraper = ({ children }: PageWraperProps) => {
  const pathname = usePathname();
  // const [isTransitioning, setIsTransitioning] = useState(true);
  // const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // console.log(timeoutRef.current);

  // useEffect(() => {
  //   if (timeoutRef.current) {
  //     clearTimeout(timeoutRef.current);
  //   }

  //   setIsTransitioning(true);
  //   timeoutRef.current = setTimeout(() => {
  //     setIsTransitioning(false);
  //     window.scrollTo(0, 0);
  //   }, 1100);

  //   return () => {
  //     if (timeoutRef.current) {
  //       clearTimeout(timeoutRef.current);
  //     }
  //   };
  // }, [pathname]);

  return (
    <div>
      <AnimatePresence mode="wait" onExitComplete={() => console.log("exited")}>
        <Fragment key={pathname}>
          <TransitionEffect />
          {children}
        </Fragment>
      </AnimatePresence>
    </div>
  );
};

export default PageWraper;
