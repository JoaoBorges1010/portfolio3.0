import Link from "next/link";
import { cn } from "@/lib/cn";

interface ErrorFallbackProps {
  title: string;
  message: string;
  actionLabel?: string;
  actionHref?: string;
  onAction?: () => void;
}

export function ErrorFallback({
  title,
  message,
  actionLabel = "Go home",
  actionHref = "/",
  onAction,
}: ErrorFallbackProps) {
  return (
    <>
      <h2 className="font-header text-3xl font-bold">{title}</h2>
      <p className="text-center max-w-md text-sm opacity-80">{message}</p>
      {onAction ? (
        <button
          type="button"
          onClick={onAction}
          className={cn(
            "px-6 py-3 bg-light-gray text-basic-white uppercase font-semibold",
            "hover:opacity-80 transition"
          )}
        >
          {actionLabel}
        </button>
      ) : (
        <Link
          href={actionHref}
          className={cn(
            "px-6 py-3 bg-light-gray text-basic-white uppercase font-semibold",
            "hover:opacity-80 transition"
          )}
        >
          {actionLabel}
        </Link>
      )}
    </>
  );
}
