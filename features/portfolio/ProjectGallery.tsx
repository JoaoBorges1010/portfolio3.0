"use client";

import { useMemo, useState, startTransition } from "react";
import { AnimatePresence } from "framer-motion";

import Modal from "@/features/portfolio/Modal";
import { ProjectBentoGrid } from "@/features/portfolio/ProjectBentoGrid";
import {
  getFeaturedProjectId,
  getProjectById,
  getSortedProjects,
} from "@/features/portfolio/utils";
import { ErrorBoundary } from "@/components/ErrorBoundary";

function GalleryFallback() {
  return (
    <div className="p-10 text-center text-gray-400">
      Unable to load the project gallery. Please refresh the page.
    </div>
  );
}

const ProjectGallery = () => {
  const [selectedId, setSelectedId] = useState("");

  const projects = useMemo(() => getSortedProjects(), []);
  const featuredId = useMemo(() => getFeaturedProjectId(), []);
  const selectedProject = selectedId ? getProjectById(selectedId) : undefined;

  const handleDetails = (id: string) => {
    startTransition(() => {
      setSelectedId(id);
    });
  };

  const handleClose = () => {
    startTransition(() => {
      setSelectedId("");
    });
  };

  return (
    <ErrorBoundary fallback={<GalleryFallback />}>
      <div className="w-full p-6 md:p-10">
        <ProjectBentoGrid
          projects={projects}
          featuredId={featuredId}
          onDetails={handleDetails}
        />
      </div>
      <AnimatePresence initial={false} mode="wait">
        {selectedProject && (
          <Modal
            key={selectedProject.id}
            project={selectedProject}
            handleClose={handleClose}
          />
        )}
      </AnimatePresence>
    </ErrorBoundary>
  );
};

export default ProjectGallery;
