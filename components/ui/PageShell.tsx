"use client";

import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

interface PageShellProps {
  children: ReactNode;
  className?: string;
  fullHeight?: boolean;
}

const PageShell = ({
  children,
  className,
  fullHeight = false,
}: PageShellProps) => {
  return (
    <div
      className={cn(
        fullHeight
          ? "h-full dark:bg-dark bg-basic-white text-dark-text dark:text-basic-white"
          : "min-h-screen overflow-hidden dark:bg-dark bg-basic-white text-dark-text pb-[2.9em] dark:text-basic-white",
        className
      )}
    >
      {children}
    </div>
  );
};

export default PageShell;
