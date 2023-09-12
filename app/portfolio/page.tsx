"use client";

import ProjectGallery from "@/components/ProjectGallery";
import TransitionEffect from "@/components/TransitionEffect";
import { useStateContext } from "@/contexts/ContextProvider";
import { useEffect } from "react";

const Portfolio = () => {
  const { currentColor, setCurrentColor, setCurrentMode, currentMode } =
    useStateContext();

  useEffect(() => {
    const renderedColor = localStorage.getItem("colorMode");
    const renderedTheme = localStorage.getItem("themeMode");

    if (renderedColor && renderedTheme) {
      setCurrentMode(renderedTheme as string);
      setCurrentColor(renderedColor as string);
    } else {
      setCurrentMode(currentMode);
      setCurrentColor(currentColor);
    }
  }, []);

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="min-h-screen overflow-hidden  dark:bg-dark bg-basic-white text-dark-text pb-[2.9em] dark:text-basic-white">
        <div className="text-left md:text-center">
          <h3 className=" pt-[30px] pb-[75px] md:pt-[100px] md:pb-[50px] pl-[25px] font-header text-4xl md:text-7xl font-bold">
            My{" "}
            <span
              style={{ color: currentColor }}
              className="tracking-normal capitalize"
            >
              projects
            </span>
          </h3>
        </div>
        <div className=" p-10 lg:mx-20">
          <p className="text-center text-gray-400">
            Exciting web development projects{" "}
            <span
              style={{ color: currentColor }}
              className="font-bold underline underline-offset-2"
            >
              both full-stack or front-end
            </span>{" "}
            reflecting my passion for creativity and problem-solving. Let's
            create something amazing together!
          </p>
        </div>
        <ProjectGallery />
      </div>
    </div>
  );
};

export default Portfolio;
