"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

import TransitionEffect from "./TransitionEffect";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface PageWrapperProps {
  children: React.ReactNode;
}

function PageWrapperFallback() {
  return null;
}

const contentEnter = {
  initial: { opacity: 0, y: 8 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.5, duration: 0.4, ease: "easeOut" },
  },
};

const contentEnterReduced = {
  initial: { opacity: 1, y: 0 },
  animate: { opacity: 1, y: 0 },
};

const PageWrapper = ({ children }: PageWrapperProps) => {
  const pathname = usePathname();
  const prefersReducedMotion = usePrefersReducedMotion();
  const contentMotion = prefersReducedMotion ? contentEnterReduced : contentEnter;

  return (
    <ErrorBoundary fallback={<PageWrapperFallback />}>
      <AnimatePresence mode="wait">
        <motion.div key={pathname}>
          <TransitionEffect reducedMotion={prefersReducedMotion} />
          <motion.main
            initial={contentMotion.initial}
            animate={contentMotion.animate}
          >
            {children}
          </motion.main>
        </motion.div>
      </AnimatePresence>
    </ErrorBoundary>
  );
};

export default PageWrapper;
