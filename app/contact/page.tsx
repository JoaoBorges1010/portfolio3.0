import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { FaLocationDot } from "react-icons/fa6";

import { site } from "@/constants/site";
import PageShell from "@/components/ui/PageShell";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/ContactForm";
import ContactInfoCard from "@/features/contact/ContactInfoCard";
import { ContactFollowSection } from "@/features/contact/ContactFollowSection";
import { Container } from "@/components/ui/Container";
import { Grid12 } from "@/components/ui/Grid12";

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero title="Get" accent="in touch" />
      <Container className="mt-[32px] md:mt-[50px]">
        <div className="flex flex-col lg:flex-row mx-[-16px]">
          <ContactInfoCard icon={<FaPhoneAlt />} text={site.contact.phone} />
          <ContactInfoCard icon={<GrMail />} text={site.contact.email} />
          <ContactInfoCard icon={<FaLocationDot />} text={site.contact.location} />
        </div>
        <div className="h-[1px] w-[250px] dark:bg-light-gray bg-lighter-gray mt-[15px] mx-auto mb-[45px]" />
        <Grid12>
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
              <ContactFollowSection />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8 relative w-full min-h-[1px] px-[25px] sm:px-[15px]">
            <ContactForm />
          </div>
        </Grid12>
      </Container>
    </PageShell>
  );
}
