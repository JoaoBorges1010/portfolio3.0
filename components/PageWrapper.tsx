"use client";

import { Fragment } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import TransitionEffect from "./TransitionEffect";

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  const pathname = usePathname();

  return (
    <div>
      <AnimatePresence mode="wait">
        <Fragment key={pathname}>
          <TransitionEffect />
          {children}
        </Fragment>
      </AnimatePresence>
    </div>
  );
};

export default PageWrapper;
