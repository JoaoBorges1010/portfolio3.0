import type { IconType } from "react-icons";
import {
  SiBootstrap,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiRuby,
  SiRubyonrails,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const skillIconMap: Record<string, IconType> = {
  react: SiReact,
  javascript: SiJavascript,
  html: SiHtml5,
  rubyOnRails: SiRubyonrails,
  css: SiCss3,
  ruby: SiRuby,
  tailwind: SiTailwindcss,
  redux: SiRedux,
  typescript: SiTypescript,
  bootstrap: SiBootstrap,
  postgresql: SiPostgresql,
  nextjs: SiNextdotjs,
};

export function SkillIcon({
  skill,
  className,
  size = 30,
}: {
  skill: string;
  className?: string;
  size?: number;
}) {
  const Icon = skillIconMap[skill];
  if (!Icon) {
    return null;
  }
  return <Icon className={className ?? "text-gray-400"} size={size} />;
}

export function renderSkillIcons(skills: string[], size = 30) {
  return skills.map((skill) => (
    <SkillIcon key={skill} skill={skill} size={size} />
  ));
}
