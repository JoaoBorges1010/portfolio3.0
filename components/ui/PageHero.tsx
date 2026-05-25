"use client";

import { cn } from "@/lib/cn";

interface PageHeroProps {
  title: string;
  accent: string;
  centered?: boolean;
  className?: string;
  titleClassName?: string;
}

const PageHero = ({
  title,
  accent,
  centered = true,
  className,
  titleClassName,
}: PageHeroProps) => {
  return (
    <div className={cn(centered ? "text-left md:text-center" : "", className)}>
      <h3
        className={cn(
          "pt-[30px] pb-[75px] md:pt-[100px] md:pb-[50px] pl-[25px] font-header text-4xl md:text-7xl font-bold",
          titleClassName
        )}
      >
        {title}{" "}
        <span className="accent-text tracking-normal capitalize">{accent}</span>
      </h3>
    </div>
  );
};

export default PageHero;
