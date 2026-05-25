import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("site-container px-4 mx-auto", className)}>
      {children}
    </div>
  );
}
