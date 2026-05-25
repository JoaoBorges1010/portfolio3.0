"use client";

import { useState } from "react";
import { SocialIcon } from "react-social-icons";

import { useTheme } from "@/contexts/ContextProvider";
import {
  getSocialIconBackground,
  getSocialIconColor,
} from "@/lib/social-icon-styles";

interface HoveredIconProps {
  link: string;
  className?: string;
  bgColor: string;
}

const HoveredIcon = ({ link, className, bgColor }: HoveredIconProps) => {
  const { currentMode } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const color = getSocialIconColor(bgColor, currentMode, isHovered);
  const backgroundColor = getSocialIconBackground(
    bgColor,
    currentMode,
    isHovered
  );

  return (
    <SocialIcon
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ backgroundColor }}
      url={link}
      target="blank"
      fgColor={color}
      bgColor="none"
      className={className}
    />
  );
};

export default HoveredIcon;
