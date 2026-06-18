"use client";

import type { Project } from "@/data/projects";
import { ProjectCard } from "@/features/portfolio/ProjectCard";
import { cn } from "@/lib/cn";

interface ProjectBentoGridProps {
  projects: Project[];
  featuredId: string;
  onDetails: (id: string) => void;
}

export function ProjectBentoGrid({
  projects,
  featuredId,
  onDetails,
}: ProjectBentoGridProps) {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-4 auto-rows-[minmax(200px,auto)] gap-4 md:gap-5 w-full max-w-6xl mx-auto"
    >
      {projects.map((project) => {
        const isFeatured = project.id === featuredId;

        return (
          <div
            key={project.id}
            className={cn(
              isFeatured && "md:col-span-2 md:row-span-2"
            )}
          >
            <ProjectCard
              project={project}
              featured={isFeatured}
              onDetails={onDetails}
            />
          </div>
        );
      })}
    </div>
  );
}
