"use client";

import { useStateContext } from "@/contexts/ContextProvider";

const Contact = () => {
  const { currentColor, currentMode } = useStateContext();
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
            <div className="px-4 relative w-full mb-8 min-h-[1px]">
              <div className="bg-light-gray mb-8 px-8 pt-12 pb-8 relative flex ">
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
            <div className="px-4 relative w-full mb-8 min-h-[1px]">
              <div className="bg-light-gray mb-8 px-8 pt-12 pb-8 relative flex ">
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
            <div className="px-4 relative w-full mb-8 min-h-[1px]">
              <div className="bg-light-gray mb-8 px-8 pt-12 pb-8 relative flex ">
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
