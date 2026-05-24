"use client";

import { FaPhoneAlt } from "react-icons/fa";
import { FaCakeCandles, FaFlag, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Button from "@/components/Button";
import { useStateContext } from "@/contexts/ContextProvider";
import AboutMetaRow from "@/features/about/AboutMetaRow";

const AboutIntro = () => {
  const { currentColor } = useStateContext();

  return (
    <section className="max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] px-4 mb-[100px] mx-auto">
      <div className="mx-[-15px] p-4 grid grid-cols-12">
        <div className="col-span-12 lg:col-span-5 px-4 mx-auto lg:mx-0 md:max-w-[450px] lg:max-w-[370px] xl:max-w-[450px]">
          <img
            src="/assets/Borges.jpeg"
            alt="Profile Photo"
            style={{ boxShadow: `0 0 10px ${currentColor}` }}
            className="w-full h-auto rounded-sm"
          />
        </div>
        <div className="col-span-12 lg:col-span-7">
          <div className="px-4 pt-10 lg:pt-4 xl:pt-10">
            <p className="text-[17px] leading-[34px] text-left">
              I&apos;m João Borges, a budding web developer with a passion for
              coding. My journey began with a love for computers and gaming,
              especially games with customizable interfaces. I honed my coding
              skills at Le Wagon and haven&apos;t looked back since. I thrive on
              learning and aspire to master the art of coding. My quick learning
              abilities, combined with a lifelong love for technology, make me an
              adaptable and enthusiastic developer. My dream is to turn my passion
              into a profession and create exceptional digital experiences.
              Let&apos;s connect and embark on this coding journey together!
            </p>
          </div>
          <div className="grid grid-cols-12 pt-4 whitespace-nowrap">
            <div className="flex col-span-12 md:col-span-6 px-[15px]">
              <ul className="mt-[9px] mb-[10px] sm:mb-[26px] mx-0 w-full">
                <AboutMetaRow
                  icon={<FaCakeCandles size={20} />}
                  label="Birthdate :"
                  value="October, 1989"
                />
                <AboutMetaRow
                  icon={<FaFlag size={20} />}
                  label="Nationality :"
                  value="Portuguese"
                />
                <AboutMetaRow
                  icon={<FaPhoneAlt size={20} />}
                  label="Phone :"
                  value="+351 93 645 79 57"
                />
              </ul>
            </div>
            <div className="flex col-span-12 md:col-span-6 px-[15px]">
              <ul className="mt-[9px] mb-[26px] w-full">
                <AboutMetaRow
                  icon={<FaLocationDot size={20} />}
                  label="Address :"
                  value="Lisbon, PT"
                />
                <AboutMetaRow
                  icon={<MdEmail size={20} />}
                  label="Email :"
                  value="joaoborgesbiz@gmail.com"
                />
              </ul>
            </div>
          </div>
          <a className="col-span-6" href="/assets/JoaoBorgesCV.pdf" download>
            <Button
              variant="primary"
              style={{ backgroundColor: currentColor }}
              className="ml-[15px]"
            >
              Download resume
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
