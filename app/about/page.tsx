"use client";

import Button from "@/components/Button";
import { useStateContext } from "@/contexts/ContextProvider";
import Link from "next/link";

const About = () => {
  const { currentMode, currentColor } = useStateContext();
  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div
        className="h-full

        dark:bg-dark bg-basic-white text-dark-text dark:text-basic-white"
      >
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
        <div className="max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] px-4 mb-[100px] mx-auto">
          <div className="mx-[-15px] p-4 flex flex-col lg:flex-row">
            <div className="px-4 mx-auto lg:mx-0 md:max-w-[450px] lg:max-w-[370px] xl:max-w-[450px] ">
              <img
                src="/assets/profilePhoto.jpg"
                alt="Profile Photo"
                style={{ boxShadow: `0 0 10px ${currentColor}` }}
                className="w-full h-auto rounded-sm "
              />
            </div>
            <div className="flex flex-col">
              <div className="px-4 pt-10 lg:pt-4 xl:pt-20">
                <p className="text-[17px] leading-[34px] font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris rutrum varius eros, eget consectetur quam dictum
                  faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Mauris rutrum varius eros, eget consectetur quam dictum
                  faucibus. elit.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 px-4 pt-4">
                <div className="col-span-1 mt-4 gap-5">Birthdate</div>
                <div className="col-span-1 mt-4 gap-5">Nationality</div>
                <div className="col-span-1 mt-4 gap-5">Phone</div>
                <div className="col-span-1 mt-4 gap-5">Adress</div>
                <div className="col-span-1 mt-4 gap-5">Email</div>
                <div className="col-span-1 mt-4 gap-5">experience</div>
                <a className="col-span-1" href="#">
                  <Button
                    style={{ backgroundColor: currentColor }}
                    className="rounded-none px-10 py-3 shadow-custom mt-10 text-basic-white uppercase font-semibold"
                  >
                    Download my cv
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full p-10 flex flex-col justify-center items-center dark:bg-light-gray bg-[#f7f7f7]">
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
            <h1 className="text-lg font-bold ">Le Wagon</h1>
            <h2 className="text-base mt-4 font-semibold uppercase ">
              full stack web-development
            </h2>
            <p className="text-sm font-normal mt-4 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              rutrum varius eros, eget consectetur quam dictum faucibus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
