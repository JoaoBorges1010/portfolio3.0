"use client";

import { useStateContext } from "@/contexts/ContextProvider";

const AnimationTest = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="  block overflow-hidden items-center justify-center">
        <ul className="circles dark:bg-dark bg-basic-white -z-10">
          <li style={{ backgroundColor: currentColor }}></li>
          <li style={{ backgroundColor: currentColor }}></li>
          <li style={{ backgroundColor: currentColor }}></li>
          <li style={{ backgroundColor: currentColor }}></li>
          <li style={{ backgroundColor: currentColor }}></li>
          <li style={{ backgroundColor: currentColor }}></li>
          <li style={{ backgroundColor: currentColor }}></li>
          <li style={{ backgroundColor: currentColor }}></li>
          <li style={{ backgroundColor: currentColor }}></li>
          <li style={{ backgroundColor: currentColor }}></li>
        </ul>
      </div>
    </div>
  );
};

export default AnimationTest;
