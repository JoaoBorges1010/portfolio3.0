export type NavIconKey = "home" | "about" | "portfolio" | "contact";

export interface NavLink {
  title: string;
  link: string;
  icon: NavIconKey;
}

export const links: NavLink[] = [
  { title: "home", link: "/", icon: "home" },
  { title: "about", link: "/about", icon: "about" },
  { title: "portfolio", link: "/portfolio", icon: "portfolio" },
  { title: "contact", link: "/contact", icon: "contact" },
];
