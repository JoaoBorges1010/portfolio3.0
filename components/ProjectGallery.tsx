"use client";

import { useState } from "react";
import Card from "./Card";

import { projectsData } from "@/data/projects";

const ProjectGallery = () => {
  const [active, setActive] = useState("project-2");

  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-10">
      <div className="flex lg:flex-row flex-col w-full xl:max-w-[1140px] min-h-[70vh] gap-5">
        {projectsData.map(
          ({ id, title, skills, description, details, image, link }) => (
            <Card
              id={id}
              key={id}
              title={title}
              skills={skills}
              description={description}
              details={details}
              image={image}
              link={link}
              active={active}
              handleClick={setActive}
            />
          )
        )}
      </div>
    </div>
  );
};

export default ProjectGallery;
