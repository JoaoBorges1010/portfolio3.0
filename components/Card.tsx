"use client";

import { useStateContext } from "@/contexts/ContextProvider";
import { github } from "@/data/projects";

interface CardProps {
  id: string;
  title: string;
  skills: Array<string>;
  description: string;
  details: Array<string>;
  image: string;
  link: string;
  active: string;
  handleClick: (value: string) => void;
}

const Card = ({
  id,
  title,
  skills,
  description,
  details,
  image,
  link,
  active,
  handleClick,
}: CardProps) => {
  const { currentColor } = useStateContext();

  console.log(active);

  return (
    <div
      onClick={() => handleClick(id)}
      style={{ boxShadow: `0 0 10px ${currentColor}` }}
      className={`relative ${
        active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
      }
    flex items-center justify-center min-w-[170px] h-[420px] cursor-pointer rounded-[24px]`}
    >
      <div
        className="absolute bg-dark top-0 left-0 z-10 w-full
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
              text-[18px] tracking-[1px] absolute lg:bottom-[7rem] lg:-rotate-90 lg:origin-[0,0]
              leading-none z-20"
          >
            {title}
          </h3>
        </div>
      ) : (
        <>
          <div
            className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(122,122,122,0.5)]
            rounded-b-[24px] z-20"
          >
            <div className="absolute top-2 right-2">
              <div
                className="bg-dark sm:w-11 sm:h-11 w-10 h-10 rounded-full flex justify-center items-center
                cursor-pointer sm:opacity-[0.9] opacity-[0.8]"
              >
                <img
                  src={github}
                  alt="Source Code"
                  className="w-4/5 h-4/5 object-contain"
                />
              </div>
            </div>
            <h2
              className="font-bold sm:text-[32px] text-[24px] uppercase text-basic-white sm:mt-0
              -mt-[1rem]"
            >
              {title}
            </h2>
            <p
              className="text-basic-white sm:text-[14px] text-[12px] max-w-3xl sm:leading-[24px]
              leading-[18px] tracking-[1px]"
            >
              {description}
            </p>
            <div className="z-50">
              <button
                style={{ backgroundColor: currentColor }}
                className="flex justify-between sm:text-[16px] text-[14px] text-basic-white font-bold
              items-center py-5 pl-2 pr-3 whitespace-nowrap gap-1 sm:w-[138px] sm:h-[50px] w-[125px] h-[46px]
              rounded-[10px] sm:mt-[22px] mt-[16px] hover:opacity-70 hover:font-header transition duration-[0.2s]
              ease-in-out shadow-custom"
              >
                <img
                  src={github}
                  alt="Source Code"
                  className="sm:w-[34px] sm:h-[34px]
                  w-[30px] h-[30px] object-contain"
                />
                <a className="" href="www.google.com" target="_blank">
                  Live Demo
                </a>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
