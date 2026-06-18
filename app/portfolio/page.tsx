import PageShell from "@/components/ui/PageShell";
import PageHero from "@/components/ui/PageHero";
import { AccentText } from "@/components/ui/AccentText";
import ProjectGallery from "@/features/portfolio/ProjectGallery";

export default function PortfolioPage() {
  return (
    <PageShell>
      <PageHero title="My" accent="projects" />
      <div className="p-10 lg:mx-20">
        <p className="text-center text-dark-text/60 dark:text-gray-400">
          Exciting web development projects{" "}
          <AccentText className="font-bold underline underline-offset-2">
            both full-stack or front-end
          </AccentText>{" "}
          reflecting my passion for creativity and problem-solving. Let&apos;s
          create something amazing together!
        </p>
      </div>
      <ProjectGallery />
    </PageShell>
  );
}
