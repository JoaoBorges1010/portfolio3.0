"use client";

import { FaInfoCircle } from "react-icons/fa";
import { MouseEventHandler } from "react";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";

import type { Project } from "@/data/projects";
import Button from "@/components/Button";
import { IconButton } from "@/components/ui/IconButton";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { cn } from "@/lib/cn";

interface CardProps extends Project {
  active: string;
  handleClick: (value: string) => void;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Card = ({
  id,
  title,
  description,
  image,
  active,
  link,
  handleClick,
  onClick,
}: CardProps) => {
  return (
    <div
      onClick={() => handleClick(id)}
      className={cn(
        "relative flex items-center justify-center md:min-w-[170px] w-full h-[420px]",
        "cursor-pointer rounded-md transition-all duration-200 ease-in-out accent-glow overflow-hidden",
        active === id ? "md:w-[400px]" : "md:w-[170px] h-[60px] md:h-[420px]"
      )}
    >
      <div className="absolute dark:bg-dark bg-lighter-gray top-0 left-0 z-10 w-full h-full opacity-[0.5] rounded-md" />
      <ProjectImage
        src={image}
        alt={title}
        className="absolute w-full h-full object-cover rounded-md"
      />
      {active !== id ? (
        <div className="flex items-center justify-start pr-[4.5rem]">
          <h3 className="font-bold text-basic-white uppercase w-[200px] h-[30px] whitespace-nowrap sm:text-[27px] text-[18px] tracking-[1px] absolute md:bottom-[7rem] md:-rotate-90 md:origin-[0,0] leading-none z-20">
            {title}
          </h3>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(122,122,122,0.5)] rounded-b-md z-20"
        >
          <div className="absolute top-2 right-2">
            <IconButton
              href={link}
              className="dark:bg-dark bg-lighter-gray hover:scale-100"
            >
              <SiGithub size={35} />
            </IconButton>
          </div>
          <h2 className="font-bold sm:text-[32px] text-[24px] uppercase text-basic-white sm:mt-0 -mt-[1rem]">
            {title}
          </h2>
          <p className="text-basic-white capitalize sm:text-[14px] text-[12px] max-w-3xl sm:leading-[24px] leading-[18px] tracking-[1px]">
            {description}
          </p>
          <div className="z-50">
            <Button type="button" variant="action" onClick={onClick}>
              <FaInfoCircle className="sm:w-[34px] sm:h-[34px] w-[30px] h-[30px] object-contain" />
              <span>Details</span>
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Card;
