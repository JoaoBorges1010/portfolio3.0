"use client";

import Skills from "@/components/Skills";
import { useStateContext } from "@/contexts/ContextProvider";

const SkillsSection = () => {
  const { currentColor } = useStateContext();

  return (
    <section className="h-full w-full p-10 flex flex-col justify-center items-center">
      <div style={{ borderColor: currentColor }} className="border-b-2">
        <h1 className="font-header text-4xl font-bold">Skills</h1>
      </div>
      <Skills />
    </section>
  );
};

export default SkillsSection;
