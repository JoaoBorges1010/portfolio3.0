"use client";

import { FaPhoneAlt } from "react-icons/fa";
import { FaCakeCandles, FaFlag, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SiFuturelearn } from "react-icons/si";
import { delay, motion } from "framer-motion";

import Button from "@/components/Button";
import Skills from "@/components/Skills";
import { useStateContext } from "@/contexts/ContextProvider";
import Link from "next/link";
import { useEffect } from "react";

/**
 * Component for showing the details about the Person.
 */

const About = () => {
  const { currentMode, setCurrentMode, currentColor, setCurrentColor } =
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
      <div className="h-full dark:bg-dark bg-basic-white text-dark-text dark:text-basic-white">
        <div className="text-left md:text-center">
          <h3 className=" pt-[30px] pb-[75px] md:py-[100px] pl-[25px] font-header text-4xl md:text-7xl font-bold">
            About{" "}
            <span
              style={{ color: currentColor }}
              className="tracking-normal capitalize"
            >
              me
            </span>
          </h3>
        </div>
        {/* ABOUT SECTION */}
        <section className="max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] px-4 mb-[100px] mx-auto">
          <div className="mx-[-15px] p-4 grid grid-cols-12">
            <div className="col-span-12 lg:col-span-5 px-4 mx-auto lg:mx-0 md:max-w-[450px] lg:max-w-[370px] xl:max-w-[450px] ">
              <img
                src="/assets/Borges.jpeg"
                alt="Profile Photo"
                style={{ boxShadow: `0 0 10px ${currentColor}` }}
                className="w-full h-auto rounded-sm "
              />
            </div>
            <div className="col-span-12 lg:col-span-7">
              <div className="px-4 pt-10 lg:pt-4 xl:pt-10">
                <p className="text-[17px] leading-[34px] text-left">
                  I'm João Borges, a budding web developer with a passion for
                  coding. My journey began with a love for computers and gaming,
                  especially games with customizable interfaces. I honed my
                  coding skills at Le Wagon and haven't looked back since. I
                  thrive on learning and aspire to master the art of coding. My
                  quick learning abilities, combined with a lifelong love for
                  technology, make me an adaptable and enthusiastic developer.
                  My dream is to turn my passion into a profession and create
                  exceptional digital experiences. Let's connect and embark on
                  this coding journey together!
                </p>
              </div>
              <div className="grid grid-cols-12 px-[-15px] pt-4 whitespace-nowrap">
                <div className="flex col-span-12 md:col-span-6 px-[15px]">
                  <ul className=" mt-[9px] mb-[10px] sm:mb-[26px] mx-0 w-full">
                    <li>
                      {" "}
                      <p className="text-[17px] mb-[12px] font-semibold leading-[34px] flex items-center">
                        <span className=" pr-[10px] font-normal leading-[1px] dark:text-basic-white text-[#666]">
                          <FaCakeCandles size={20} />
                        </span>
                        <span className=" pr-[10px] font-normal leading-[1px] dark:text-basic-white text-[#666]">
                          Birthdate :
                        </span>
                        October, 1989
                      </p>
                    </li>
                    <li>
                      <p className="text-[17px] mb-[12px] font-semibold leading-[34px] flex items-center">
                        <span className=" pr-[10px] font-normal leading-[1px] dark:text-basic-white text-[#666]">
                          <FaFlag size={20} />
                        </span>
                        <span className=" pr-[10px] font-normal leading-[1px] dark:text-basic-white text-[#666]">
                          Nationality :
                        </span>
                        Portuguese
                      </p>
                    </li>
                    <li>
                      <p className="text-[17px] mb-[12px] mr-4  font-semibold leading-[34px] flex items-center">
                        <span className=" pr-[10px] font-normal leading-[1px] dark:text-basic-white text-[#666]">
                          <FaPhoneAlt size={20} />
                        </span>
                        <span className=" pr-[10px] font-normal leading-[1px] dark:text-basic-white text-[#666]">
                          Phone :
                        </span>
                        +351 93 645 79 57
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="flex col-span-12 md:col-span-6 px-[15px]">
                  <ul className="mt-[9px] mb-[26px] w-full">
                    <li>
                      <p className="text-[17px] mb-[12px] font-semibold leading-[34px] flex items-center">
                        <span className=" pr-[10px] font-normal leading-[1px] dark:text-basic-white text-[#666]">
                          <FaLocationDot size={20} />
                        </span>
                        <span className=" pr-[10px] font-normal leading-[1px] dark:text-basic-white text-[#666]">
                          Address :
                        </span>
                        Lisbon, PT
                      </p>
                    </li>
                    <li>
                      <p className="text-[17px] mb-[12px] font-semibold leading-[34px] flex items-center">
                        <span className=" pr-[10px] font-normal leading-[1px] dark:text-basic-white text-[#666]">
                          <SiFuturelearn size={20} />
                        </span>
                        <span className=" pr-[10px] font-normal leading-[1px] dark:text-basic-white text-[#666]">
                          Experience :
                        </span>
                        Rookie
                      </p>
                    </li>
                    <li>
                      <p className="text-[17px] mb-[12px]  font-semibold leading-[34px] flex items-center">
                        <span className=" pr-[10px] font-normal leading-[1px] dark:text-basic-white text-[#666]">
                          <MdEmail size={20} />
                        </span>
                        <span className=" pr-[10px] font-normal leading-[1px] dark:text-basic-white text-[#666]">
                          Email :
                        </span>
                        joaoborgesbiz@gmail.com
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <a
                className="col-span-6"
                href="/assets/JoaoBorgesCV.pdf"
                download={true}
              >
                <Button
                  style={{ backgroundColor: currentColor }}
                  className="rounded-none px-10 py-3 shadow-custom ml-[15px] text-basic-white uppercase font-semibold"
                >
                  Download resume
                </Button>
              </a>
            </div>
          </div>
        </section>
        {/* EDUCATION SECTION */}
        <section className="w-full h-full p-10 flex flex-col justify-center items-center dark:bg-light-gray bg-[#f7f7f7]">
          <div style={{ borderColor: currentColor }} className="border-b-2">
            <h1 className="font-header text-4xl font-bold">Education</h1>
          </div>
          <div className="my-10 shadow-custom p-10 rounded-sm relative flex flex-col bg-basic-white dark:bg-dark">
            <div
              style={{ backgroundColor: currentColor }}
              className=" absolute top-4 right-4 px-2 rounded-sm"
            >
              <p className="font-semibold text-normal text-basic-white ">
                01-2023
              </p>
            </div>
            <Link href="https://www.lewagon.com/" target="_blank">
              <h1 className="text-lg font-bold ">Le Wagon</h1>
            </Link>
            <h2 className="text-base mt-4 font-semibold uppercase ">
              full stack web-development
            </h2>
            <p className="text-sm font-normal mt-4 ">
              Le Wagon was a game-changer for me. In just a few weeks, I
              immersed myself in coding, building web applications from scratch
              alongside a global community. With expert guidance and a proven
              curriculum, I not only honed my coding skills but also gained the
              confidence to pursue my passion as a profession. It's been an
              incredible journey, fast-tracking my career and opening up
              countless opportunities.
            </p>
          </div>
        </section>
        {/* SKILLS SECTION */}
        <section className="h-full w-full p-10 flex flex-col justify-center items-center">
          <div style={{ borderColor: currentColor }} className="border-b-2">
            <h1 className="font-header text-4xl font-bold">Skills</h1>
          </div>
          <Skills />
        </section>
      </div>
    </div>
  );
};

export default About;
