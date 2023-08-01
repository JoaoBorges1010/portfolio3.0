"use client";

import { useState } from "react";
import { SocialIcon } from "react-social-icons";

import { useStateContext } from "@/contexts/ContextProvider";

interface HoveredIconProps {
  link: string;
  className?: string;
  bgColor: string;
}

const HoveredIcon = ({ link, className, bgColor }: HoveredIconProps) => {
  const { currentMode, currentColor } = useStateContext();
  const [isHovered, setIsHovered] = useState(false);

  const handleHoverEnter = () => {
    setIsHovered(true);
  };

  const handleHoverLeave = () => {
    setIsHovered(false);
  };

  let color;
  // Check if the Background Color is transparent
  if (bgColor === "transparent") {
    // LightMode color on hover
    if (currentMode === "Light") {
      color = isHovered ? currentColor : "#383838";
      //DarkMode color on hover
    } else {
      color = isHovered ? currentColor : "#fffffc";
    }
  } else {
    // If the background color is not transparent
    // Set the color based on whether the current mode is Light and whether it's hovered or not
    color =
      currentMode === "Light" ? (isHovered ? "#fffffc" : "#383838") : "#fffffc";
  }

  return (
    <SocialIcon
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverLeave}
      style={{
        // Wanted to try this code with ternary operators
        backgroundColor:
          // If its hovered and bgColor is not transparent we use currentColor
          isHovered && bgColor !== "transparent"
            ? currentColor
            : // if is not hovered and the currentMode is Light and the bgColor is not transparent we use ligthergray color
            !isHovered && currentMode === "Light" && bgColor !== "transparent"
            ? "#f7f7f7"
            : // Otherwise we use the BgColor
              bgColor,
      }}
      url={link}
      target="blank"
      fgColor={color}
      bgColor="none"
      className={className}
    />
  );
};

export default HoveredIcon;
