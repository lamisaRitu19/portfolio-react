import {
  iub,
  techtrioz,
  html,
  css,
  js,
  react,
  redux,
  tailwind,
  node,
  git,
  figma,
  famiPlasma,
  imageGallery,
  preAdvisingPortal,
  geniusCar,
} from "../assets/index";

const navlinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Receiptionist (Student On Duty)",
    company_name: "Independent University, Bangladesh",
    icon: iub,
    iconBg: "#f0f0f0",
    date: "Oct 2019 - Oct 2020",
  },
  {
    title: "Frontend Developer Intern",
    company_name: "TechTrioZ Solutions",
    icon: techtrioz,
    iconBg: "#f0f0f0",
    date: "Oct 2020 - Dec 2020",
  },
  {
    title: "Software Developer Intern",
    company_name: "TechTrioZ Solutions",
    icon: techtrioz,
    iconBg: "#f0f0f0",
    date: "Jun 2023 - Sep 2023",
  },
  {
    title: "Junior Software Developer",
    company_name: "TechTrioZ Solutions",
    icon: techtrioz,
    iconBg: "#f0f0f0",
    date: "Oct 2023 - Nov 2023",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: js,
  },
  {
    name: "React JS",
    icon: react,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: tailwind,
  },
  {
    name: "Vue JS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: node,
  },
  {
    name: "Express JS",
    icon: node,
  },
  {
    name: "Firebase",
    icon: node,
  },
  {
    name: "MongoDB",
    icon: node,
  },
  {
    name: "C++",
    icon: node,
  },
  {
    name: "Python",
    icon: node,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
];

const projects = [
  {
    id: "project-1",
    name: "FamiPlasma",
    description: "A comic characters list app that displays Marvel characters.",
    image: famiPlasma,
    repo: "https://github.com/shaqdeff/KomiKult",
    demo: "https://shaqdeff.github.io/KomiKult/",
  },
  {
    id: "project-2",
    name: "Image Gallery",
    description:
      "A leaderboard list app that displays scores submitted by different players.",
    image: imageGallery,
    repo: "https://github.com/shaqdeff/Leaderboard",
    demo: "https://shaqdeff.github.io/Leaderboard/",
  },
  {
    id: "project-3",
    name: "Pre-Advising Portal",
    description: "This is a single-page calculator app built with React",
    image: preAdvisingPortal,
    repo: "https://github.com/shaqdeff/Math-Magicians",
    demo: "https://inspiring-medovik-37d3b3.netlify.app/",
  },
  {
    id: "project-4",
    name: "Genius Car",
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    image: geniusCar,
    repo: "https://github.com/shaqdeff/Movie-Metro",
    demo: "https://movie-metro.netlify.app/",
  },
];

export { navlinks, experiences, technologies, projects };
