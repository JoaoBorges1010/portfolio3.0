import React from "react";

interface ColorLogoProps {
  fill: string;
  width: number;
  height: number;
  stroke: string;
  className?: string;
  style?: any;
}

const ColorLogo = ({
  fill,
  width,
  height,
  stroke,
  className,
  style,
}: ColorLogoProps) => {
  return (
    <svg
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill={fill}
      stroke={stroke}
      strokeWidth={3}
      width={width}
      height={height}
      enableBackground="new 0 0 100 100"
      viewBox="0 0 100 100"
      id="sharingan"
    >
      <path d="M30.22 15.32c3.56-2.62 7.61-3.68 11.12-4.03-.54.31-1.06.64-1.55 1.01-2.59 1.91-4.53 4.53-5.6 7.56-.11.3-.06.64.13.91.18.26.49.42.81.43 4.46.04 8.52 2.11 11.14 5.68 2.75 3.73 3.47 8.58 1.93 12.96-.93 2.65-2.63 4.94-4.9 6.62-3.01 2.22-6.71 3.13-10.4 2.57-3.7-.56-6.96-2.52-9.17-5.54-1.66-2.25-2.6-4.92-2.72-7.73C21.01 29.53 22.6 20.93 30.22 15.32zM57.49 76.01c-1.12 2.56-2.96 4.71-5.34 6.22-5.39 3.11-13.64 6.03-22.3 2.24-4.05-1.77-7-4.75-9.05-7.62.53.31 1.09.59 1.65.84 2.96 1.29 6.19 1.66 9.35 1.06.32-.06.59-.27.72-.56.14-.29.12-.63-.04-.91-2.19-3.88-2.43-8.43-.66-12.49 1.86-4.25 5.69-7.3 10.26-8.15 2.76-.52 5.59-.2 8.18.93 3.43 1.5 6.07 4.24 7.43 7.72C59.06 68.78 58.99 72.59 57.49 76.01zM87.86 61.86c0-.62-.03-1.24-.1-1.85-.36-3.2-1.66-6.19-3.75-8.63-.19-.22-.47-.35-.76-.35-.03 0-.06 0-.09 0-.32.03-.61.21-.77.49-2.26 3.84-6.09 6.32-10.49 6.81-4.61.52-9.16-1.28-12.19-4.8-1.83-2.13-2.97-4.75-3.28-7.55-.42-3.72.64-7.37 2.97-10.29 2.33-2.92 5.67-4.76 9.38-5.18 2.78-.31 5.56.21 8.05 1.51 5.39 3.11 12.04 8.8 13.09 18.19C90.42 54.6 89.31 58.65 87.86 61.86z"></path>
    </svg>
  );
};

export default ColorLogo;
