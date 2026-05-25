import type { ReactNode } from "react";

interface ThemeRootProps {
  children: ReactNode;
  className?: string;
}

const ThemeRoot = ({ children, className = "" }: ThemeRootProps) => {
  return <div className={className.trim()}>{children}</div>;
};

export default ThemeRoot;
