import Link from "next/link";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

interface IconButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  size?: "sm" | "md";
}

export function IconButton({
  href,
  children,
  className,
  size = "md",
}: IconButtonProps) {
  return (
    <div
      className={cn(
        "bg-dark rounded-full flex justify-center items-center cursor-pointer",
        "hover:scale-110 transition duration-300 ease-in shadow-custom",
        "sm:opacity-[0.9] opacity-[0.8]",
        size === "md" ? "sm:w-11 sm:h-11 w-10 h-10" : "w-10 h-10",
        className
      )}
    >
      <Link
        className="flex items-center justify-center w-full h-full"
        href={href}
        target="_blank"
      >
        {children}
      </Link>
    </div>
  );
}
