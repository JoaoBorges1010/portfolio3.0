"use client";

import type { ReactNode } from "react";

interface AboutMetaRowProps {
  icon: ReactNode;
  label: string;
  value: string;
}

const AboutMetaRow = ({ icon, label, value }: AboutMetaRowProps) => (
  <li>
    <p className="text-[17px] mb-[12px] font-semibold leading-[34px] flex items-center">
      <span className="pr-[10px] font-normal leading-[1px] dark:text-basic-white text-dark-text/60">
        {icon}
      </span>
      <span className="pr-[10px] font-normal leading-[1px] dark:text-basic-white text-dark-text/60">
        {label}
      </span>
      {value}
    </p>
  </li>
);

export default AboutMetaRow;
