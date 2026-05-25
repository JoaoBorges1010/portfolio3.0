import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  title: string;
  className?: string;
}

export function SectionHeading({ title, className }: SectionHeadingProps) {
  return (
    <div className={cn("border-b-2 accent-border", className)}>
      <h1 className="font-header text-4xl font-bold">{title}</h1>
    </div>
  );
}
