import PageShell from "@/components/ui/PageShell";

export default function PortfolioLoading() {
  return (
    <PageShell className="min-h-[40vh] flex items-center justify-center">
      <p className="font-header text-xl animate-pulse">Loading portfolio...</p>
    </PageShell>
  );
}
