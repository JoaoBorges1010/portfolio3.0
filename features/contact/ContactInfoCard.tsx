"use client";

import type { ReactNode } from "react";
import { useStateContext } from "@/contexts/ContextProvider";

interface ContactInfoCardProps {
  icon: ReactNode;
  text: string;
}

const ContactInfoCard = ({ icon, text }: ContactInfoCardProps) => {
  const { currentColor } = useStateContext();

  return (
    <div className="px-[25px] sm:px-4 relative w-full mb-8 lg:mb-0 min-h-[1px]">
      <div className="dark:bg-light-gray bg-lighter-gray mb-8 px-6 lg:px-8 pt-10 lg:pt-12 pb-[22px] lg:pb-[30px] relative flex">
        <span
          style={{ backgroundColor: currentColor }}
          className="w-[54px] h-[54px] flex justify-center items-center text-center leading-[54px] rounded-full text-[23px] text-basic-white absolute top-[-27px] left-0 right-0 mx-auto"
        >
          {icon}
        </span>
        <p className="font-medium text-xl mx-auto text-center dark:text-basic-white">
          {text}
        </p>
      </div>
    </div>
  );
};

export default ContactInfoCard;
