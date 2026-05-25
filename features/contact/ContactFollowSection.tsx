"use client";

import { site } from "@/constants/site";
import HoveredIcon from "@/components/HoveredIcon";

export function ContactFollowSection() {
  return (
    <>
      <h4 className="capitalize font-semibold font-header text-[28px] leading-[28px] mb-[18px]">
        Follow me
      </h4>
      <ul className="lg:mb-0 flex p-0 mb-[3rem]">
        <li>
          <HoveredIcon
            link={site.social.github}
            className="bg-light-gray rounded-full ease-in duration-100 mr-4"
            bgColor="#383838"
          />
        </li>
        <li>
          <HoveredIcon
            link={site.social.linkedin}
            className="bg-light-gray rounded-full ease-in duration-100 mr-4"
            bgColor="#383838"
          />
        </li>
      </ul>
    </>
  );
}
