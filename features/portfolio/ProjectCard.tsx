"use client";

import { FaInfoCircle } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

import type { Project } from "@/data/projects";
import Button from "@/components/Button";
import { IconButton } from "@/components/ui/IconButton";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { SkillIcon } from "@/lib/skill-icons";
import { cn } from "@/lib/cn";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  onDetails: (id: string) => void;
}

export function ProjectCard({
  project,
  featured = false,
  onDetails,
}: ProjectCardProps) {
  const { id, title, description, image, link, skills } = project;
  const previewSkills = skills.slice(0, 3);

  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-md border border-light-gray/20 bg-dark/40 transition-all duration-200",
        "hover:border-[var(--accent-color)] hover:shadow-[0_0_12px_var(--accent-color)]",
        featured ? "min-h-[280px] md:min-h-[360px]" : "min-h-[200px]"
      )}
    >
      <div className="relative h-32 md:h-40 shrink-0 overflow-hidden">
        <ProjectImage
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-dark/40" />
        {featured && (
          <span
            className="absolute top-3 left-3 rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-basic-white accent-bg"
          >
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4 gap-2">
        <div className="flex items-start justify-between gap-2">
          <h3
            className={cn(
              "font-bold text-basic-white uppercase leading-tight",
              featured ? "text-xl md:text-2xl" : "text-base md:text-lg"
            )}
          >
            {title}
          </h3>
          <IconButton
            href={link}
            className="shrink-0 dark:bg-dark bg-lighter-gray hover:scale-100"
            aria-label={`${title} on GitHub`}
          >
            <SiGithub size={22} />
          </IconButton>
        </div>

        <p className="text-basic-white/80 text-xs sm:text-sm line-clamp-2">
          {description}
        </p>

        <div className="flex gap-2 mt-1">
          {previewSkills.map((skill) => (
            <SkillIcon key={skill} skill={skill} size={22} />
          ))}
        </div>

        <div className="mt-auto pt-2">
          <Button
            type="button"
            variant="action"
            onClick={() => onDetails(id)}
            className="text-sm"
          >
            <FaInfoCircle className="w-5 h-5" />
            <span>Details</span>
          </Button>
        </div>
      </div>
    </article>
  );
}
