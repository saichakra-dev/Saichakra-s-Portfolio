import { BiLogoCss3, BiLogoReact, BiLogoNodejs } from "react-icons/bi";
import { TbBrandNextjs, TbApi, TbDatabase } from "react-icons/tb";
import { SiThemoviedatabase, SiExpress } from "react-icons/si";

const ProjectsData = [
  {
    id: "1",
    name: "Cytilitics - AI Vehicle Analytics",
    image: "./citylitics.png",
    icons: [BiLogoReact, BiLogoNodejs, BiLogoCss3],
    description:
      "AI-powered application that analyzes vehicle images captured at checkpoints using Google Generative AI and Cloudinary, extracting details like type, registration number, and services.",
    github: "https://github.com/saichakra-dev/Builder-Frontend.git",
    demo: "https://cytilitics.vercel.app",
  },
  {
    id: "2",
    name: "Hospital Management System",
    image: "./srujana_hospital.png",
    icons: [
      BiLogoReact,
      BiLogoNodejs,
      BiLogoCss3,
      TbBrandNextjs,
      TbApi,
      TbDatabase,
      SiThemoviedatabase,
      SiExpress,
    ],
    description:
      "A MERN-based application for Srujana Nursing Home, allowing admin to manage patient records and billing through a dashboard, and patients to view details via a user-friendly frontend.",
    github: "https://github.com/saichakra-dev/Hospital-Application.git",
    demo: "https://srujananursinghome.vercel.app/",
  },
  {
    id: "3",
    name: "Image Processing Web Application",
    image: "./image_processing.png",
    icons: [BiLogoReact, BiLogoNodejs, BiLogoCss3],
    description:
      "Real-time image processing app allowing users to upload images, adjust brightness, contrast, and rotate them with support for format conversion and downloads.",
    github: "https://github.com/saichakra-dev/image-processing-app",
    demo: "https://image-processing-application-2e4f.vercel.app/",
  },
  {
    id: "4",
    name: "Hackathon Platform",
    image: "./Hackathon.png",
    icons: [BiLogoReact, BiLogoNodejs],
    description:
      "A platform for hosting hackathons, with features for user registration, challenge creation, and image storage via AWS S3, built with Next.js and Tailwind CSS.",
    github: "https://github.com/saichakra-dev/hackathon-platform",
    demo: "https://hackathon-webapp.vercel.app",
  },
  {
    id: "5",
    name: "Moviecritic",
    image: "./movicritic.png",
    icons: [BiLogoReact, BiLogoNodejs, BiLogoCss3],
    description:
      "A movie review website with features for user registration, challenge creation, and image storage via AWS S3, built with Next.js and Tailwind CSS.",
    github: "https://github.com/saichakra-dev/Moviecritic.git",
    demo: "https://moviecritic-rust.vercel.app/",
  },
  {
    id: "6",
    name: "Weather dashboard",
    image: "./weaather.png",
    icons: [BiLogoReact, BiLogoNodejs, BiLogoCss3],
    description:
      "A weather dashboard with features for user registration, challenge creation, and image storage via AWS S3, built with Next.js and Tailwind CSS.",
    github: "https://github.com/saichakra-dev/weather-dashboard",
    demo: "https://weather-dashboard-saichakra.vercel.app/",
  },
];

export default ProjectsData;
