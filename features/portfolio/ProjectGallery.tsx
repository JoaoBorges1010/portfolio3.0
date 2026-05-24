"use client";

import { useState } from "react";
import { projectsData } from "@/data/projects";
import Card from "@/features/portfolio/Card";

const ProjectGallery = () => {
  const [active, setActive] = useState("project-5");
  const [selectedId, setSelectedId] = useState("");

  return (
    <div className="w-full flex md:justify-start justify-center items-center md:overflow-x-auto no-scrollbar p-10">
      <div className="flex md:flex-row flex-col justify-start items-center w-full md:min-w-max h-full md:pl-[80px] gap-5">
        {projectsData
          .map((project) => (
            <Card
              key={project.id}
              {...project}
              active={active}
              handleClick={setActive}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              onClick={() => setSelectedId(project.id)}
            />
          ))
          .reverse()}
      </div>
    </div>
  );
};

export default ProjectGallery;
