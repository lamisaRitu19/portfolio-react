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
    iconBg: "#ffffff",
    date: "Oct 2019 - Oct 2020",
  },
  {
    title: "Frontend Developer Intern",
    company_name: "TechTrioZ Solutions",
    icon: techtrioz,
    iconBg: "#ffffff",
    date: "Oct 2020 - Dec 2020",
  },
  {
    title: "Software Developer Intern",
    company_name: "TechTrioZ Solutions",
    icon: techtrioz,
    iconBg: "#ffffff",
    date: "Jun 2023 - Sep 2023",
  },
  {
    title: "Junior Software Developer",
    company_name: "TechTrioZ Solutions",
    icon: techtrioz,
    iconBg: "#ffffff",
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

export { navlinks, experiences, technologies };
