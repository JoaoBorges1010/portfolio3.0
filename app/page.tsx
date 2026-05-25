import PageShell from "@/components/ui/PageShell";
import TypewriterHero from "@/components/home/TypewriterHero";

export default function Home() {
  return (
    <PageShell fullHeight className="relative min-h-screen">
      <TypewriterHero />
    </PageShell>
  );
}
