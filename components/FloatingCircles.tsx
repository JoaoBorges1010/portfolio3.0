"use client";

import { useTheme } from "@/contexts/ContextProvider";

const FloatingCircles = () => {
  const { currentColor } = useTheme();

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <ul className="circles dark:bg-dark bg-basic-white">
        {Array.from({ length: 10 }).map((_, index) => (
          <li key={index} style={{ backgroundColor: currentColor }} />
        ))}
      </ul>
    </div>
  );
};

export default FloatingCircles;
