"use client";

import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { FaLocationDot } from "react-icons/fa6";

import PageShell from "@/components/ui/PageShell";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/ContactForm";
import HoveredIcon from "@/components/HoveredIcon";
import ContactInfoCard from "@/features/contact/ContactInfoCard";

const Contact = () => {
  return (
    <PageShell>
      <PageHero title="Get" accent="in touch" />
      <div className="w-full mt-[32px] md:mt-[50px] px-4 mx-auto max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
        <div className="flex flex-col lg:flex-row mx-[-16px]">
          <ContactInfoCard icon={<FaPhoneAlt />} text="+351 936457957" />
          <ContactInfoCard icon={<GrMail />} text="Joaoborgesbiz@gmail.com" />
          <ContactInfoCard icon={<FaLocationDot />} text="Lisbon, Portugal" />
        </div>
        <div className="h-[1px] w-[250px] dark:bg-light-gray bg-lighter-gray mt-[15px] mx-auto mb-[45px]" />
        <div className="grid grid-cols-12 mx-[-15px]">
          <div className="col-span-12 lg:col-span-4 flex flex-col relative w-full min-h-[1px] px-[25px] sm:px-[15px]">
            <div className="order-2 lg:order-1">
              <h4 className="capitalize font-semibold font-header text-[28px] leading-[28px] mb-0">
                Send Me An Email
              </h4>
              <p className="mt-[10px] mx-0 mb-[25px] text-[16px] leading-[34px]">
                Feel free to get in touch with me. I am always open to discussing
                new projects or creative ideas.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <h4 className="capitalize font-semibold font-header text-[28px] leading-[28px] mb-[18px]">
                Follow me
              </h4>
              <ul className="lg:mb-0 flex p-0 mb-[3rem]">
                <li>
                  <HoveredIcon
                    link="https://github.com/JoaoBorges1010"
                    className="bg-light-gray rounded-full ease-in duration-100 mr-4"
                    bgColor="#383838"
                  />
                </li>
                <li>
                  <HoveredIcon
                    link="https://www.linkedin.com/in/joaoborges1010"
                    className="bg-light-gray rounded-full ease-in duration-100 mr-4"
                    bgColor="#383838"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8 relative w-full min-h-[1px] px-[25px] sm:px-[15px]">
            <ContactForm />
          </div>
        </div>
      </div>
    </PageShell>
  );
};

export default Contact;
