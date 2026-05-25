"use client";

import { FaPhoneAlt } from "react-icons/fa";
import { FaCakeCandles, FaFlag, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Button from "@/components/Button";
import { site } from "@/constants/site";
import { Grid12 } from "@/components/ui/Grid12";
import { ProjectImage } from "@/components/ui/ProjectImage";
import AboutMetaRow from "@/features/about/AboutMetaRow";

const AboutIntro = () => {
  return (
    <section className="max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] px-4 mb-[100px] mx-auto">
      <Grid12 className="p-4">
        <div className="col-span-12 lg:col-span-5 px-4 mx-auto lg:mx-0 md:max-w-[450px] lg:max-w-[370px] xl:max-w-[450px]">
          <ProjectImage
            src={site.about.profileImage}
            alt="Profile Photo"
            width={450}
            height={600}
            className="w-full h-auto rounded-sm accent-glow"
          />
        </div>
        <div className="col-span-12 lg:col-span-7">
          <div className="px-4 pt-10 lg:pt-4 xl:pt-10">
            <p className="text-[17px] leading-[34px] text-left">{site.about.bio}</p>
          </div>
          <div className="grid grid-cols-12 pt-4">
            <div className="flex col-span-12 md:col-span-6 px-[15px]">
              <ul className="mt-[9px] mb-[10px] sm:mb-[26px] mx-0 w-full">
                <AboutMetaRow
                  icon={<FaCakeCandles size={20} />}
                  label="Birthdate :"
                  value={site.about.birthdate}
                />
                <AboutMetaRow
                  icon={<FaFlag size={20} />}
                  label="Nationality :"
                  value={site.about.nationality}
                />
                <AboutMetaRow
                  icon={<FaPhoneAlt size={20} />}
                  label="Phone :"
                  value={site.contact.phoneFormatted}
                />
              </ul>
            </div>
            <div className="flex col-span-12 md:col-span-6 px-[15px]">
              <ul className="mt-[9px] mb-[26px] w-full">
                <AboutMetaRow
                  icon={<FaLocationDot size={20} />}
                  label="Address :"
                  value={site.contact.locationShort}
                />
                <AboutMetaRow
                  icon={<MdEmail size={20} />}
                  label="Email :"
                  value={site.contact.email}
                />
              </ul>
            </div>
          </div>
          <a className="col-span-6" href={site.about.resumePath} download>
            <Button variant="primary" className="ml-[15px]">
              Download resume
            </Button>
          </a>
        </div>
      </Grid12>
    </section>
  );
};

export default AboutIntro;
