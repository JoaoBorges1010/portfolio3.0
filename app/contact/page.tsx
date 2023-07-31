"use client";

import ContactForm from "@/components/ContactForm";
import { useStateContext } from "@/contexts/ContextProvider";
import { motion } from "framer-motion";
import { useState } from "react";
import { SocialIcon } from "react-social-icons";

const Contact = () => {
  const { currentColor, currentMode } = useStateContext();
  const [isGithubHover, setIsGithubHover] = useState(false);
  const [isLinkedinHover, setIsLinkedinHover] = useState(false);

  const handleGithubEnter = () => {
    setIsGithubHover(true);
  };

  const handleGithubLeave = () => {
    setIsGithubHover(false);
  };

  const handleLinkedinEnter = () => {
    setIsLinkedinHover(true);
  };

  const handleLinkedinLeave = () => {
    setIsLinkedinHover(false);
  };

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="min-h-screen overflow-hidden  dark:bg-dark bg-basic-white text-dark-text pb-[2.9em] dark:text-basic-white">
        <div className="text-left md:text-center">
          <h3 className=" pt-[30px] pb-[75px] md:pt-[100px] md:pb-[50px] pl-[25px] font-header text-4xl md:text-7xl font-bold">
            Get{" "}
            <span
              style={{ color: currentColor }}
              className="tracking-normal capitalize"
            >
              in touch
            </span>
          </h3>
        </div>
        <div className="w-full mt-[32px] md:mt-[50px] px-4 mx-auto max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
          <div className="flex flex-col lg:flex-row mx-[-16px]">
            <div className="px-[25px] sm:px-4 relative w-full mb-8 lg:mb-0  min-h-[1px]">
              <div className="bg-light-gray mb-8 px-6 lg:px-8 pt-10 lg:pt-12 pb-[22px] lg:pb-[30px] relative flex ">
                <span
                  style={{ backgroundColor: currentColor }}
                  className="w-[54px] h-[54px] text-center leading-[54px] rounded-full text-[23px] text-basic-white absolute
                top-[-27px] left-0 right-0 mx-auto"
                >
                  ICON
                </span>
                <p className="font-medium text-xl mx-auto text-center dark:text-basic-white">
                  +351 936457957
                </p>
              </div>
            </div>
            <div className="px-[25px] sm:px-4 relative w-full mb-8 lg:mb-0  min-h-[1px]">
              <div className="bg-light-gray mb-8 px-6 lg:px-8 pt-10 lg:pt-12 pb-[22px] lg:pb-[30px] relative flex ">
                <span
                  style={{ backgroundColor: currentColor }}
                  className="w-[54px] h-[54px] text-center leading-[54px] rounded-full text-[23px] text-basic-white absolute
                top-[-27px] left-0 right-0 mx-auto"
                >
                  ICON
                </span>
                <p className="font-medium text-xl mx-auto text-center dark:text-basic-white">
                  Joaoborgesbiz@gmail.com
                </p>
              </div>
            </div>
            <div className="px-[25px] sm:px-4 relative w-full mb-8 lg:mb-0  min-h-[1px]">
              <div className="bg-light-gray px-6 lg:px-8 pt-10 lg:pt-12 pb-[22px] lg:pb-[30px] relative flex ">
                <span
                  style={{ backgroundColor: currentColor }}
                  className="w-[54px] h-[54px] text-center leading-[54px] rounded-full text-[23px] text-basic-white absolute
                top-[-27px] left-0 right-0 mx-auto"
                >
                  ICON
                </span>
                <p className="font-medium text-xl mx-auto text-center dark:text-basic-white">
                  Lisbon, Portugal
                </p>
              </div>
            </div>
          </div>
          <div className="h-[1px] w-[250px] bg-light-gray mt-[15px] mx-auto mb-[45px] "></div>
          <div className="grid grid-cols-12 mx-[-15px]">
            <div className="col-span-12 lg:col-span-4 flex flex-col relative w-full min-h-[1px] px-[25px] sm:px[15px]">
              <div className="order-2 lg:order-1">
                <h4 className="capitalize  font-semibold font-header text-[28px] leading-[28px] mb-0 ">
                  Send Me An Email
                </h4>
                <p className="mt-[10px] mx-0 mb-[25px] text-[16px] leading-[34px]">
                  Feel free to get in touch with me. I am always open to
                  discussing new projects or creative ideas.
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <h4 className="capitalize font-semibold font-header text-[28px] leading-[28px] mb-[18px]">
                  Follow me
                </h4>
                <ul className="lg:mb-0 flex p-0 mb-[3rem] ">
                  <li>
                    {" "}
                    <SocialIcon
                      onMouseEnter={handleGithubEnter}
                      onMouseLeave={handleGithubLeave}
                      style={{
                        backgroundColor: isGithubHover
                          ? currentColor
                          : "#383838",
                      }}
                      url="https://github.com/JoaoBorges1010"
                      target="blank"
                      fgColor={currentMode === "Light" ? "#292929" : "#fffffc"}
                      bgColor="none"
                      className="bg-light-gray rounded-full ease-in duration-300 mr-4"
                    />
                  </li>
                  <li>
                    {" "}
                    <SocialIcon
                      onMouseEnter={handleLinkedinEnter}
                      onMouseLeave={handleLinkedinLeave}
                      style={{
                        backgroundColor: isLinkedinHover
                          ? currentColor
                          : "#383838",
                      }}
                      url="https://www.linkedin.com/in/joaoborges1010"
                      target="blank"
                      fgColor={currentMode === "Light" ? "#292929" : "#fffffc"}
                      bgColor="none"
                      className="bg-light-gray rounded-full ease-in duration-300"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-8 relative w-full min-h-[1px] px-[25px] sm:px[15px]">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
