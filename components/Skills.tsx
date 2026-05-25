"use client";

import Image from "next/image";
import { skills } from "@/constants";

const Skills = () => {
  return (
    <div className="my-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {skills.map(({ id, name, source }) => (
        <div
          key={id}
          className="col-span-1 p-4 gap-5 mx-2 sm:mx-6 my-2 flex flex-col items-center rounded-md dark:bg-dark bg-lighter-gray hover:scale-125 ease-out duration-300 hover:z-10 accent-glow"
        >
          <div>
            <Image src={source} alt={name} width={80} height={80} className="w-16 sm:w-20 h-auto" />
          </div>
          <h2 className="text-sm sm:text-base text-gray-400 font-medium uppercase">
            {name}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Skills;
