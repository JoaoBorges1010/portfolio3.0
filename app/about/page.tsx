import PageShell from "@/components/ui/PageShell";
import PageHero from "@/components/ui/PageHero";
import AboutIntro from "@/features/about/AboutIntro";
import EducationSection from "@/features/about/EducationSection";
import SkillsSection from "@/features/about/SkillsSection";

export default function AboutPage() {
  return (
    <PageShell fullHeight>
      <PageHero title="About" accent="me" titleClassName="md:py-[100px] md:pb-[75px]" />
      <AboutIntro />
      <EducationSection />
      <SkillsSection />
    </PageShell>
  );
}
