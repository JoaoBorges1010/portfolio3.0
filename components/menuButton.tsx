"use client";

import { motion, Transition, SVGMotionProps } from "framer-motion";

interface Props extends SVGMotionProps<any> {
  isOpen?: boolean;
  color?: string;
  strokeWidth?: string | number;
  transition?: Transition;
  lineProps?: any;
  className?: string;
  circleWidth?: string | number;
  circleHeight?: string | number;
  onClick: () => void;
}

const MenuButton = ({
  isOpen = true,
  width = 24,
  height = 24,
  strokeWidth = 1,
  color = "#000",
  transition = null,
  lineProps = null,
  className,
  circleWidth,
  circleHeight,
  onClick,
  ...props
}: Props) => {
  const variant = isOpen ? "opened" : "closed";

  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: 410,
      translateY: 2,
    },
  };

  const center = {
    closed: {
      pathLength: 1,
      rotate: 0,
      opacity: 1,
    },
    opened: {
      rotate: 120,
      opacity: 0,
    },
  };

  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: -410,
      translateY: -2,
    },
  };

  const circle = {
    closed: { pathLength: 0, opacity: 0 },

    opened: {
      fill: "transparent",
      pathLength: 1,
      opacity: 1,
    },
  };

  lineProps = {
    stroke: color,
    strokeWidth: strokeWidth as number,
    vectorEffect: "non-scalling-stroke",
    initial: "closed",
    animate: variant,
    transition,
    ...lineProps,
  };

  const unitHeight = 4;
  const unitWidth = (unitHeight * (width as number)) / (height as number);

  return (
    <motion.svg
      className={className}
      onClick={onClick}
      viewBox={`0 0 ${unitWidth} ${unitHeight}`}
      overflow="visible"
      preserveAspectRatio="none"
      {...props}
    >
      <motion.circle
        cx="5"
        cy="2"
        r={circleWidth}
        variants={circle}
        {...lineProps}
      />
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="0"
        y2="0"
        variants={top}
        {...lineProps}
      />
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="2"
        y2="2"
        variants={center}
        {...lineProps}
      />

      <motion.line
        x1="0"
        x2={unitWidth}
        y1="4"
        y2="4"
        variants={bottom}
        {...lineProps}
      />
    </motion.svg>
  );
};

export { MenuButton };
