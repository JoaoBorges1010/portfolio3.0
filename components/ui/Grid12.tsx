import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

interface Grid12Props {
  children: ReactNode;
  className?: string;
}

export function Grid12({ children, className }: Grid12Props) {
  return (
    <div className={cn("grid grid-cols-12 mx-[-15px]", className)}>
      {children}
    </div>
  );
}
