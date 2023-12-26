import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "System Admin",
    icon: web,
  },
  {
    title: "DevOps Engineer",
    icon: backend,
  },
  {
    title: "Cloud Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "AWS",
    icon: backend,
  },
  {
    name: "K8s",
    icon: backend,
  },
  {
    name: "Terraform",
    icon: typescript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Dolphin Tech",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2015 - Dec 2015",
    points: [
      "Developing and maintaining web applications using Laravel and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "System Admin",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2016 - Oct 2018",
    points: [
      "Worked and experienced closely with virtualization platforms like KVM, Xen Hypervisor, and VMware.",
      "Implementation & migration of security devices and monitoring the network and servers.",
    ],
  },
  {
    title: "DevOps Engineer",
    company_name: "Ministry of Foreign Affairs of AFG",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Build and maintaining web applications using DevOps best practices",
      "Continously improving CICD pipelines and infrastructure using Terraform",
    ],
  },
  {
    title: "Cloud Engineer",
    company_name: "Adesso as a Service gmbH",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Present",
    points: [
      "Provisioning AWS infrastrucuture using Terraform and CloudFormation",
      "Build, Manage and maintain CICD workflows with bitbucket, gitlab and github actions",
      "Create, provision and maintain kubernetes resources in EKS for different customers",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Eprimo.de",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Fanki - Hanseatic Bank",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "FMP Forderungsmanagement Potsdam GmbH",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
