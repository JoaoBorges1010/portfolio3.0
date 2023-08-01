"use client";

import { FaInfoCircle } from "react-icons/fa";
import { IconType } from "react-icons";
import { MouseEventHandler } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { useStateContext } from "@/contexts/ContextProvider";
import { github as Icon } from "@/data/projects";
import { projectsData } from "@/data/projects";
import Modal from "./Modal";

interface CardProps {
  id: string;
  title: string;
  skills: Array<IconType>;
  description: string;
  details: Array<string>;
  image: string;
  link: string;
  demo?: string;
  active: string;
  selectedId: string;
  setSelectedId: (value: string) => void;
  handleClick: (value: string) => void;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Card = ({
  id,
  title,
  description,
  image,
  active,
  handleClick,
  onClick,
  selectedId,
  setSelectedId,
}: CardProps) => {
  const { currentColor } = useStateContext();

  const getSelected: any = (id: string) =>
    projectsData.find((elem) => elem.id === id);

  return (
    <div
      onClick={() => handleClick(id)}
      style={{ boxShadow: `0 0 10px ${currentColor}` }}
      className={`relative ${
        active === id ? " md:w-[400px]" : "md:w-[170px] h-[60px] md:h-[420px]"
      }
    flex items-center justify-center md:min-w-[170px] w-full h-[420px] cursor-pointer rounded-md transition-all duration-200 ease-in-out`}
    >
      <div
        className="absolute dark:bg-dark bg-lighter-gray top-0 left-0 z-10 w-full
      h-full opacity-[0.5] rounded-[24px]"
      ></div>
      <img
        src={image}
        alt={title}
        className="absolute w-full h-full object-cover rounded-[24px]"
      />
      {active !== id ? (
        <div className="flex items-center justify-start pr-[4.5rem]">
          <h3
            className="font-bold text-basic-white uppercase w-[200px] h-[30px] whitespace-nowrap sm:text-[27px]
              text-[18px] tracking-[1px] absolute md:bottom-[7rem] md:-rotate-90 md:origin-[0,0]
              leading-none z-20"
          >
            {title}
          </h3>
        </div>
      ) : (
        <>
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(122,122,122,0.5)]
            rounded-b-md z-20"
          >
            <div className="absolute top-2 right-2">
              <div
                className="dark:bg-dark bg-lighter-gray sm:w-11 sm:h-11 w-10 h-10 rounded-full flex justify-center items-center
                cursor-pointer sm:opacity-[0.9] opacity-[0.8]"
              >
                <Icon className="w-4/5 h-4/5" />
              </div>
            </div>
            <h2
              className="font-bold sm:text-[32px] text-[24px] uppercase text-basic-white sm:mt-0
              -mt-[1rem]"
            >
              {title}
            </h2>
            <p
              className="text-basic-white capitalize sm:text-[14px] text-[12px] max-w-3xl sm:leading-[24px]
              leading-[18px] tracking-[1px]"
            >
              {description}
            </p>
            <div className="z-50">
              <button
                onClick={onClick}
                style={{ backgroundColor: currentColor }}
                className="flex justify-between sm:text-[16px] text-[14px] text-basic-white font-bold
              items-center py-5 pl-2 pr-3 whitespace-nowrap gap-1 sm:w-[138px] sm:h-[50px] w-[125px] h-[46px]
              rounded-[10px] sm:mt-[22px] mt-[16px] hover:opacity-70 hover:uppercase hover:scale-110 transition duration-300
              ease-in shadow-custom"
              >
                <FaInfoCircle
                  className="sm:w-[34px] sm:h-[34px]
                  w-[30px] h-[30px] object-contain"
                />
                <h1>Details</h1>
              </button>
            </div>
          </motion.div>
          <AnimatePresence
            initial={false}
            mode="wait"
            onExitComplete={() => null}
          >
            {selectedId && (
              <Modal
                key={selectedId}
                id={selectedId}
                title={getSelected(selectedId).title}
                skills={getSelected(selectedId).skills}
                description={getSelected(selectedId).description}
                details={getSelected(selectedId).details}
                image={getSelected(selectedId).image}
                link={getSelected(selectedId).link}
                demo={getSelected(selectedId).demo}
                handleClose={() => setSelectedId("")}
              />
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
};

export default Card;
