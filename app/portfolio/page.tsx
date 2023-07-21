"use client";

import ProjectGallery from "@/components/ProjectGallery";
import { useStateContext } from "@/contexts/ContextProvider";

const Portfolio = () => {
  const { currentMode, currentColor } = useStateContext();
  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="h-full  dark:bg-dark bg-basic-white text-dark-text pb-10 dark:text-basic-white">
        <div className="text-left md:text-center">
          <h3 className=" pt-[30px] pb-[75px] md:py-[100px] pl-[25px] font-header text-4xl md:text-7xl font-bold">
            My{" "}
            <span
              style={{ color: currentColor }}
              className="tracking-normal capitalize"
            >
              projects
            </span>
          </h3>
        </div>
        <ProjectGallery />
      </div>
    </div>
  );
};

export default Portfolio;
