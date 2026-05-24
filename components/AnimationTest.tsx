"use client";

import { useStateContext } from "@/contexts/ContextProvider";

const AnimationTest = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="block overflow-hidden items-center justify-center">
      <ul className="circles dark:bg-dark bg-basic-white -z-10">
        {Array.from({ length: 10 }).map((_, index) => (
          <li key={index} style={{ backgroundColor: currentColor }} />
        ))}
      </ul>
    </div>
  );
};

export default AnimationTest;
