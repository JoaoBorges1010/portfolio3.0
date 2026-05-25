import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

interface AccentTextProps {
  children: ReactNode;
  as?: "span" | "p";
  className?: string;
}

export function AccentText({
  children,
  as: Component = "span",
  className,
}: AccentTextProps) {
  return (
    <Component className={cn("accent-text", className)}>{children}</Component>
  );
}
