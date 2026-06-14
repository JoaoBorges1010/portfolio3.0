import { themeColors } from "./theme";

export const site = {
  name: "João Borges",
  title: "Portfolio 3.0",
  contact: {
    phone: "+351 936457957",
    phoneFormatted: "+351 93 645 79 57",
    email: "joaoborgesbiz@gmail.com",
    location: "Lisbon, Portugal",
    locationShort: "Lisbon, PT",
  },
  social: {
    github: "https://github.com/JoaoBorges1010",
    linkedin: "https://www.linkedin.com/in/joaoborges1010",
  },
  about: {
    birthdate: "October, 1989",
    nationality: "Portuguese",
    bio: `I'm João Borges, a budding web developer with a passion for coding. My journey began with a love for computers and gaming, especially games with customizable interfaces. I honed my coding skills at Le Wagon and haven't looked back since. I thrive on learning and aspire to master the art of coding. My quick learning abilities, combined with a lifelong love for technology, make me an adaptable and enthusiastic developer. My dream is to turn my passion into a profession and create exceptional digital experiences. Let's connect and embark on this coding journey together!`,
    profileImage: "/assets/Borges.jpeg",
    resumePath: "/assets/JoaoBorgesCV.pdf",
  },
  hero: {
    typewriterWords: ["I'm a full stack web-developer", "<I Love to Code />"],
    typewriterDelay: 2000,
  },
  footer: {
    cta: "Lets work together",
  },
} as const;

export const DEFAULT_COLOR = themeColors[0].color;
export const DEFAULT_MODE = "Dark" as const;
export const DEFAULT_THEME_PREFERENCE = "System" as const;

export type ResolvedThemeMode = "Dark" | "Light";
export type ThemePreference = ResolvedThemeMode | "System";

/** @deprecated Use ThemePreference for storage; ResolvedThemeMode for applied theme */
export type ThemeMode = ResolvedThemeMode;
