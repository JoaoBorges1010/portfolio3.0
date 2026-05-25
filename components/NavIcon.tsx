import { BiSolidContact, BiSolidHome } from "react-icons/bi";
import { BsFillFileTextFill } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import type { NavIconKey } from "@/constants/navigation";

const iconMap = {
  home: BiSolidHome,
  about: BsFillFileTextFill,
  portfolio: MdWork,
  contact: BiSolidContact,
} as const;

interface NavIconProps {
  icon: NavIconKey;
}

export function NavIcon({ icon }: NavIconProps) {
  const Icon = iconMap[icon];
  return <Icon />;
}
