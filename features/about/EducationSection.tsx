"use client";

import Link from "next/link";

import { SectionHeading } from "@/components/ui/SectionHeading";

const EducationSection = () => {
  return (
    <section className="w-full h-full p-10 flex flex-col justify-center items-center dark:bg-light-gray bg-lighter-gray">
      <SectionHeading title="Education" />
      <div className="my-10 shadow-custom p-10 rounded-sm relative flex flex-col bg-basic-white dark:bg-dark">
        <div className="absolute top-4 right-4 px-2 rounded-sm accent-bg">
          <p className="font-semibold text-normal text-basic-white">01-2023</p>
        </div>
        <Link href="https://www.lewagon.com/" target="_blank">
          <h1 className="text-lg font-bold">Le Wagon</h1>
        </Link>
        <h2 className="text-base mt-4 font-semibold uppercase">
          full stack web-development
        </h2>
        <p className="text-sm font-normal mt-4">
          Le Wagon was a game-changer for me. In just a few weeks, I immersed
          myself in coding, building web applications from scratch alongside a
          global community. With expert guidance and a proven curriculum, I not
          only honed my coding skills but also gained the confidence to pursue my
          passion as a profession. It&apos;s been an incredible journey,
          fast-tracking my career and opening up countless opportunities.
        </p>
      </div>
    </section>
  );
};

export default EducationSection;
