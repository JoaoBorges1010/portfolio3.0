"use client";

import PageShell from "@/components/ui/PageShell";
import { ErrorFallback } from "@/components/ui/ErrorFallback";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <PageShell className="flex flex-col items-center justify-center gap-4 p-8">
      <ErrorFallback
        title="Something went wrong"
        message={error.message || "An unexpected error occurred."}
        actionLabel="Try again"
        onAction={() => reset()}
      />
    </PageShell>
  );
}
