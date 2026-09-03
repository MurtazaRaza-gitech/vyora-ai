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
      "Murtaza Raza plays a central role in shaping product experience and digital strategy at VYORA.AI. His expertise in SEO, UI/UX, and frontend systems ensures that every product is optimized not just for performance, but also for growth and usability.",
      "He focuses on how users interact with products and how those products scale over time.",
    ],
    skills: [
      "Frontend Development",
      "Technical Research & SEO",
      "Data Security & Control",
      "UI/UX Prototyping",
      "Entrepreneurship",
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
