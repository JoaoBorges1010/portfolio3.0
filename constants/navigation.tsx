import { BiSolidContact, BiSolidHome } from "react-icons/bi";
import { MdWork } from "react-icons/md";
import { BsFillFileTextFill } from "react-icons/bs";

export const links = [
  {
    title: "home",
    link: "/",
    icon: <BiSolidHome />,
  },
  {
    title: "about",
    link: "/about",
    icon: <BsFillFileTextFill />,
  },
  {
    title: "portfolio",
    link: "/portfolio",
    icon: <MdWork />,
  },
  {
    title: "contact",
    link: "/contact",
    icon: <BiSolidContact />,
  },
];
