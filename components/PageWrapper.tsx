"use client";

import { Fragment } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import TransitionEffect from "./TransitionEffect";
import { ErrorBoundary } from "@/components/ErrorBoundary";

interface PageWrapperProps {
  children: React.ReactNode;
}

function PageWrapperFallback() {
  return null;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  const pathname = usePathname();

  return (
    <ErrorBoundary fallback={<PageWrapperFallback />}>
      <div>
        <AnimatePresence mode="wait">
          <Fragment key={pathname}>
            <TransitionEffect />
            {children}
          </Fragment>
        </AnimatePresence>
      </div>
    </ErrorBoundary>
  );
};

export default PageWrapper;
