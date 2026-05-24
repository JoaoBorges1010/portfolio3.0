"use client";

import { useStateContext } from "@/contexts/ContextProvider";
import type { ReactNode } from "react";

interface ThemeRootProps {
  children: ReactNode;
  className?: string;
}

const ThemeRoot = ({ children, className = "" }: ThemeRootProps) => {
  const { currentMode, currentColor, isHydrated } = useStateContext();

  return (
    <div
      className={`${currentMode === "Dark" ? "dark" : ""} ${className}`.trim()}
      style={
        isHydrated
          ? ({ ["--accent-color" as string]: currentColor } as React.CSSProperties)
          : undefined
      }
      suppressHydrationWarning
    >
      {children}
    </div>
  );
};

export default ThemeRoot;
