"use client";

import { FiSettings } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

import { useStateContext } from "@/contexts/ContextProvider";
import { themeColors } from "@/constants";
import ColorLogo from "@/components/ColorLogo";
import { MdOutlineCancel } from "react-icons/md";

const ThemeSettings = () => {
  const {
    currentMode,
    currentColor,
    setColor,
    setMode,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

  const radioColorDark = currentMode === "Dark" ? "#292929" : "";
  const radioColorWhite = currentMode === "Light" ? "#fffffc" : "";

  return (
    <AnimatePresence>
      <div className={currentMode === "Dark" ? "dark" : ""}>
        <div className="fixed right-6 bottom-[10%] z-40">
          {!themeSettings && (
            <button
              type="button"
              onClick={() => setThemeSettings(!themeSettings)}
              style={{
                background: currentColor,
                borderRadius: "50%",
                animation: "spin 5s linear infinite",
              }}
              className="text-3xl text-basic-white p-3 hover:drop-shadow-xl hover:bg-basic-white"
            >
              <FiSettings />
            </button>
          )}

          {themeSettings && (
            <div className="bg-half-transparent z-40 w-screen h-screen fixed top-0 right-0">
              <motion.div
                initial={{ x: 500 }}
                animate={{
                  x: 0,
                  transition: {
                    duration: 0.5,
                    ease: "easeOut",
                  },
                }}
                className="float-right dark:bg-basic-white mt-20  bg-light-gray shadow-custom"
              >
                <button
                  type="button"
                  onClick={() => setThemeSettings(false)}
                  style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
                  className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
                >
                  <MdOutlineCancel />
                </button>
                <div className="flex-col z-[1000]  p-4">
                  <div
                    style={{ borderColor: currentColor }}
                    className="p-4 border-t-4 rounded-lg ml-4 mt-2"
                  >
                    <p className="font-semibold text-xl dark:text-light-gray text-basic-white ">
                      Theme Option
                    </p>
                    <div className="mt-4 flex items-center">
                      <input
                        type="radio"
                        id="light"
                        name="theme"
                        value="Light"
                        className="cursor-pointer invisible"
                        onChange={setMode}
                        checked={currentMode === "Light"}
                      />
                      <span
                        style={
                          currentMode === "Light"
                            ? {
                                backgroundColor: currentColor,
                                borderColor: currentColor,
                              }
                            : {
                                backgroundColor: radioColorWhite,
                                borderColor: currentColor,
                              }
                        }
                        className="cursor-pointer w-[17px] h-[17px] border-2 border-solid  rounded-full inline-block relative"
                      />
                      <label
                        htmlFor="light"
                        className="ml-2 text-md cursor-pointer dark:text-light-gray text-basic-white"
                      >
                        Light
                      </label>
                    </div>
                    <div className="mt-2 flex items-center">
                      <input
                        type="radio"
                        id="dark"
                        name="theme"
                        value="Dark"
                        onChange={setMode}
                        className="cursor-pointer invisible"
                        checked={currentMode === "Dark"}
                      />
                      <span
                        style={
                          currentMode === "Dark"
                            ? {
                                backgroundColor: currentColor,
                                borderColor: currentColor,
                              }
                            : {
                                backgroundColor: radioColorDark,
                                borderColor: currentColor,
                              }
                        }
                        className="cursor-pointer w-[17px] h-[17px] border-2 border-solid  rounded-full inline-block relative"
                      />
                      <label
                        htmlFor="dark"
                        className="ml-2 text-md cursor-pointer dark:text-light-gray text-basic-white"
                      >
                        Dark
                      </label>
                    </div>
                  </div>
                  <div
                    style={{ borderColor: currentColor }}
                    className="p-4 border-t-4 rounded-lg ml-4 mt-2"
                  >
                    <p
                      className={`font-semibold text-xl dark:text-light-gray text-basic-white`}
                    >
                      Theme Colors
                    </p>
                    <div className="grid grid-cols-3 gap-3">
                      {themeColors.map(({ color, name }) => (
                        <div
                          className="relative mt-2 cursor-pointer flex gap-5 items-center"
                          key={name}
                        >
                          <button
                            type="button"
                            style={
                              currentColor === color
                                ? {
                                    borderColor: color,
                                    width: "50px",
                                    height: "50px",
                                  }
                                : { borderColor: "black" }
                            }
                            className="h-10 w-10 rounded-full flex justify-center border-2
                        items-center cursor-pointer"
                            onClick={() => setColor(color)}
                          >
                            <ColorLogo
                              style={
                                currentColor === color
                                  ? { animation: "spin 5s linear infinite" }
                                  : {}
                              }
                              className="hover:animate-spin transition-all ease-in-out duration-300"
                              fill={
                                currentColor === color ? color : "transparent"
                              }
                              stroke={currentColor === color ? "black" : color}
                              width={currentColor === color ? 40 : 30}
                              height={currentColor === color ? 40 : 30}
                            />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default ThemeSettings;
