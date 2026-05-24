"use client";

import PageShell from "@/components/ui/PageShell";
import PageHero from "@/components/ui/PageHero";
import ProjectGallery from "@/features/portfolio/ProjectGallery";
import { useStateContext } from "@/contexts/ContextProvider";

const Portfolio = () => {
  const { currentColor } = useStateContext();

  return (
    <PageShell>
      <PageHero title="My" accent="projects" />
      <div className="p-10 lg:mx-20">
        <p className="text-center text-gray-400">
          Exciting web development projects{" "}
          <span
            style={{ color: currentColor }}
            className="font-bold underline underline-offset-2"
          >
            both full-stack or front-end
          </span>{" "}
          reflecting my passion for creativity and problem-solving. Let&apos;s
          create something amazing together!
        </p>
      </div>
      <ProjectGallery />
    </PageShell>
  );
};

export default Portfolio;
