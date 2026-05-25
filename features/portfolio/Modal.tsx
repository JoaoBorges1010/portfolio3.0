"use client";

import type { Project } from "@/data/projects";
import { renderSkillIcons } from "@/lib/skill-icons";
import Button from "@/components/Button";
import { IconButton } from "@/components/ui/IconButton";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { BsPlayCircle } from "react-icons/bs";
import { SiGithub } from "react-icons/si";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  project: Project;
  handleClose: () => void;
}

const dropIn = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: { y: "100vh", opacity: 0 },
};

const Modal = ({ project, handleClose }: ModalProps) => {
  const { title, skills, description, details, image, link, demo } = project;

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleClose}
      className="z-modal fixed top-0 left-0 w-full h-full flex justify-center items-center bg-dark/90 backdrop-blur-sm"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="z-modal fixed drop-shadow-md border border-light-gray top-[50%] left-[50%] h-[90vh] w-[90vw] sm:h-auto md:max-h-[90vh] sm:w-[90vw] sm:max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-md bg-dark p-[25px] focus:outline-none overflow-y-auto no-scrollbar accent-glow">
          <ProjectImage
            src={image}
            alt={title}
            width={450}
            height={300}
            className="w-full h-[30vh] object-cover"
          />
          <div className="flex mt-4 mb-6 flex-row gap-3">
            {renderSkillIcons(skills)}
          </div>
          <div className="flex flex-col">
            <h1 className="text-left font-bold">{title}</h1>
            <p className="text-basic-white sm:text-[14px] text-[12px] max-w-3xl sm:leading-[24px] leading-[18px] tracking-[1px]">
              {description}
            </p>
            <ul className="ml-8 my-4 capitalize font-extralight text-gray-300">
              {details.map((detail) => (
                <li key={detail} className="mb-1">
                  <span className="font-bold accent-text">{"<"}</span>
                  {detail}
                  <span className="font-bold accent-text">{" />"}</span>
                </li>
              ))}
            </ul>
            {demo ? (
              <div className="flex justify-between items-center sm:mt-[22px] mt-[16px]">
                <Link href={demo} target="_blank">
                  <Button variant="action" className="sm:mt-0 mt-0">
                    <BsPlayCircle className="sm:w-[34px] sm:h-[34px] w-[30px] h-[30px] animate-ping-slow object-contain" />
                    <span>Live Demo</span>
                  </Button>
                </Link>
                <IconButton href={link}>
                  <SiGithub size={35} />
                </IconButton>
              </div>
            ) : (
              <Link href={link} target="_blank">
                <Button variant="action" className="sm:w-[160px] w-[150px]">
                  <SiGithub className="sm:w-[34px] sm:h-[34px] w-[30px] h-[30px] object-contain" />
                  <span>Source code</span>
                </Button>
              </Link>
            )}
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="text-gray-400 hover:text-basic-white absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:outline-none"
            aria-label="Close modal"
          >
            <IoMdClose />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
