"use client";

import { useRef, useState } from "react";
import Card from "./Card";

import { projectsData } from "@/data/projects";

const ProjectGallery = () => {
  const [active, setActive] = useState("project-5");
  const [selectedId, setSelectedId] = useState("");
  const [isMoved, setIsMoved] = useState(false);

  const rowRef = useRef<HTMLDivElement>(null);

  const handleClick = (direction: string) => {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const getSelected: any = (id: string) =>
    projectsData.find((elem) => elem.id === id);

  return (
    <div className="w-full flex md:justify-start justify-center items-center md:overflow-x-auto no-scrollbar p-10">
      <div className="flex md:flex-row  flex-col justify-start items-center w-full md:min-w-max h-full md:pl-[80px] gap-5">
        {projectsData
          .map(
            ({
              id,
              title,
              skills,
              description,
              details,
              image,
              link,
              demo,
            }) => (
              <Card
                id={id}
                key={id}
                title={title}
                skills={skills}
                description={description}
                details={details}
                image={image}
                link={link}
                demo={demo}
                active={active}
                handleClick={setActive}
                selectedId={selectedId}
                setSelectedId={setSelectedId}
                onClick={() => setSelectedId(id)}
              />
            )
          )
          .reverse()}
      </div>
    </div>
  );
};

export default ProjectGallery;
