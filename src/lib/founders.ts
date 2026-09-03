import shehram from "@/assets/founder-shehram.jpg";
import murtaza from "@/assets/founder-murtaza.jpg";
import hussnain from "@/assets/founder-hussnain.jpg";

export type Founder = {
  name: string;
  role: string;
  image: string;
  email: string;
  whatsapp: string;
  linkedin: string;
  titles: string[];
  about: string[];
  skills: string[];
};

export const founders: Founder[] = [
  {
    name: "M. Shehram Mehmood",
    role: "Founder",
    titles: ["Founder", "Entrepreneur"],
    image: shehram,
    email: "Vyora.ai001@gmail.com",
    whatsapp: "https://wa.me/+923127641850",
    linkedin: "https://www.linkedin.com/in/m-shehram-6a706639b/",
    about: [
      "Founder of VYORA.AI focused on building scalable software products, researching emerging technologies, and turning ambitious ideas into practical systems.",
      "He works across the full stack, leads technical research, and is responsible for driving the company's long-term direction.",
    ],
    skills: [
      "Full Stack Developer",
      "Backend Development & API Integration",
      "Technical Research & Writing",
      "Entrepreneur",
    ],
  },
  {
    name: "Murtaza Raza",
    role: "Co-Founder",
    titles: ["Co-Founder", "Entrepreneur"],
    image: murtaza,
    email: "murtazaraza2286@gmail.com",
    whatsapp: "https://wa.me/+923091070382",
    linkedin: "https://www.linkedin.com/in/murtaza-raza-85365a397",
    about: [
      "Co-Founder focused on full-stack development, product experience, SEO, and building digital products that are both technically strong and easy for people to use.",
      "He works across JavaScript and Node.js systems while shaping how products grow and how users interact with them.",
    ],
    skills: [
      "Entrepreneur",
      "Full Stack Developer",
      "JavaScript & Node.js",
      "UI/UX & SEO",
    ],
  },
  {
    name: "Hussnain Zia Ullah",
    role: "Co-Founder",
    titles: ["Co-Founder", "Entrepreneur"],
    image: hussnain,
    email: "hussnainziya786@gmail.com",
    whatsapp: "https://wa.me/+923024740866",
    linkedin: "https://www.linkedin.com/in/hussnain-zia-ullah-22bb733a6",
    about: [
      "Hussnain Zia Ullah brings both technical depth and creative execution to VYORA.AI. With strong skills in programming and design, he focuses on building efficient systems and visually strong products.",
      "His ability to combine logic with creativity plays a key role in product development.",
    ],
    skills: [
      "3D Animation",
      "C++ & Python",
      "Mobile Application Development",
      "UI/UX & Visual Design",
      "Entrepreneurship",
    ],
  },
];
