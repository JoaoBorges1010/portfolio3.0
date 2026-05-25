"use client";

import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { projectsData } from "@/data/projects";
import Card from "@/features/portfolio/Card";
import Modal from "@/features/portfolio/Modal";
import { getProjectById } from "@/features/portfolio/utils";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const DEFAULT_ACTIVE_PROJECT = "project-5";

function GalleryFallback() {
  return (
    <div className="p-10 text-center text-gray-400">
      Unable to load the project gallery. Please refresh the page.
    </div>
  );
}

const ProjectGallery = () => {
  const [active, setActive] = useState(DEFAULT_ACTIVE_PROJECT);
  const [selectedId, setSelectedId] = useState("");

  const projects = useMemo(() => [...projectsData].reverse(), []);
  const selectedProject = selectedId ? getProjectById(selectedId) : undefined;

  return (
    <ErrorBoundary fallback={<GalleryFallback />}>
      <div className="w-full flex justify-center items-center md:overflow-x-auto no-scrollbar p-10">
        <div className="flex md:flex-row flex-col justify-center items-center md:min-w-max h-full gap-5 mx-auto px-4 md:px-0">
          {projects.map((project) => (
            <Card
              key={project.id}
              {...project}
              active={active}
              handleClick={setActive}
              onClick={() => setSelectedId(project.id)}
            />
          ))}
        </div>
      </div>
      <AnimatePresence initial={false} mode="wait">
        {selectedProject && (
          <Modal
            key={selectedProject.id}
            project={selectedProject}
            handleClose={() => setSelectedId("")}
          />
        )}
      </AnimatePresence>
    </ErrorBoundary>
  );
};

export default ProjectGallery;
