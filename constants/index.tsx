import { BiSolidContact, BiSolidHome } from "react-icons/bi";
import { MdWork } from "react-icons/md";
import { BsFillFileTextFill } from "react-icons/bs";

export const themeColors = [
  {
    name: "orange-theme",
    color: "#ff5722",
  },
  {
    name: "red-theme",
    color: "#d90429",
  },
  {
    name: "green-theme",
    color: "#4caf50",
  },
  {
    name: "blue-theme",
    color: "#2196f3",
  },
  {
    name: "pink-theme",
    color: "#f72585",
  },
  {
    name: "brown-theme",
    color: "#795548",
  },
  {
    name: "yellow-theme",
    color: "#ffc107",
  },
  {
    name: "gray-theme",
    color: "#607d8b",
  },
  {
    name: "purple-theme",
    color: "#9C27B0",
  },
  {
    name: "teal-theme",
    color: "#009688",
  },
  {
    name: "cyan-theme",
    color: "#00bcd4",
  },
  {
    name: "deepPurple-theme",
    color: "#673AB7",
  },
];

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
    link: "",
    icon: <MdWork />,
  },
  {
    title: "contact",
    link: "",
    icon: <BiSolidContact />,
  },
];
