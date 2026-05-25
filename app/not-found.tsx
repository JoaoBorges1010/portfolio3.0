import PageShell from "@/components/ui/PageShell";
import { ErrorFallback } from "@/components/ui/ErrorFallback";

export default function NotFound() {
  return (
    <PageShell className="flex flex-col items-center justify-center gap-4 p-8">
      <ErrorFallback
        title="404"
        message="This page could not be found."
        actionLabel="Back to home"
        actionHref="/"
      />
    </PageShell>
  );
}
