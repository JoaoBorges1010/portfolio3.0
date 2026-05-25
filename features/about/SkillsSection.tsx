"use client";

import Skills from "@/components/Skills";
import { SectionHeading } from "@/components/ui/SectionHeading";

const SkillsSection = () => {
  return (
    <section className="h-full w-full p-10 flex flex-col justify-center items-center">
      <SectionHeading title="Skills" />
      <Skills />
    </section>
  );
};

export default SkillsSection;
