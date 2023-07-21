import {
  SiBootstrap,
  SiCss3,
  SiGithub,
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

const react = SiReact;
const javascript = SiJavascript;
const html = SiHtml5;
const rubyOnRails = SiRubyonrails;
const css = SiCss3;
const ruby = SiRuby;
const tailwind = SiTailwindcss;
const redux = SiRedux;
const typescript = SiTypescript;
export const github = SiGithub;
const bootstrap = SiBootstrap;
const postgresql = SiPostgresql;
const nextjs = SiNextdotjs;

export const projectsData = [
  {
    id: "project-1",
    title: "Daily Bites",
    skills: [ruby, rubyOnRails, css, html, javascript, bootstrap, postgresql],
    description: "Le wagon final meal project",
    details: [
      "Fullstack Meals web-app",
      "Meal search by ingredients",
      "Adding to favorites",
      "Profile page",
      "Reviews",
      "Weekly meal planner",
      "Ingredients missing list",
      "Map to nearby suppermarkets",
    ],
    image:
      "https://github.com/miguelgon97/DAILY_BITES/blob/master/app/assets/images/db.png?raw=true",
    link: "https://github.com/miguelgon97/DAILY_BITES",
    demo: "#",
  },
  {
    id: "project-2",
    title: "Weather App",
    description: "Small weather application using React and tailwind",
    skills: [react, javascript, html, tailwind],
    details: [
      "API data fetching and formatting",
      "Search for a Location",
      "Various React hooks",
    ],
    image: "/assets/WeatherApp1.png",
    link: "https://github.com/JoaoBorges1010/weather-app/tree/master",
  },
  {
    id: "project-3",
    title: "Posts app",
    description:
      "Simple CRUD application using React with ruby on rails and typescript",
    skills: [rubyOnRails, react, ruby, redux, tailwind, css, html, typescript],
    details: [
      "Ruby on Rails as the Backend",
      "react as front end",
      "Using redux toolkit to manage state",
      "first experience with typescript",
      "API creation and data fetching",
    ],
    image: "/assets/Posts4.png",
    link: "https://github.com/JoaoBorges1010/rails-react-crud",
  },
  {
    id: "project-4",
    title: "Books app",
    description: "a User has books, books have images! CRUD app randomizer",
    skills: [react, javascript, redux, tailwind, css, html],
    details: [
      "DB creation with different tables",
      "User, Books, images automatic creation",
      "Using redux toolkit to manage state",
      "Used Thunks for the user management",
      "API creation and data fetching",
    ],
    image: "/assets/Media3.png",
    link: "https://github.com/JoaoBorges1010/media",
  },
];
