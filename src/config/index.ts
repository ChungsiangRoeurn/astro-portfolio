import type {
  AboutMeItems,
  EmploymentItem,
  SiteConfig,
  SiteContent,
} from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Jaing-Sung Here",
  author: "Built with Astro.",
  image: "/chungsiang-logo.png",
  description: "JiangSung, Web Developer from Cambodia",
  lang: "km,en",
  siteLogo: "/chungsiang-logo.png",
  navLinks: [
    { text: "Home", href: "/" },
    { text: "Timeline", href: "/timeline" },
    { text: "Hobbies", href: "/hobbies" },
  ],

  socialLinks: [
    {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/chungsiang-roeurn/",
      icon: "/icons/linkedin.svg",
    },
    {
      text: "Github",
      href: "https://github.com/ChungsiangRoeurn",
      icon: "/icons/github.svg",
    },
    {
      text: "Facebook",
      href: "https://web.facebook.com/chungsiang.roeurn.79",
      icon: "/icons/facebook.svg",
    },
    {
      text: "Telegram",
      href: "https://t.me/rn_chungsiang",
      icon: "/icons/telegram.svg",
    },
  ],
  socialImage: "/icons/telegram.svg",
  canonicalURL: "https://chungsiang-roeurn.vercel.app/",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "CHUNGSIANG ROEURN.",
    specialty: "Web Developer",
    summary1:
      "Hey, I’m Jiang-Sung — a web developer excited to create and innovate!",
    summary2: "Have a project in mind? Let's make it happen.",
    email: "rn.chungsiang@gmail.com",
  },
  projects: [
    {
      name: "Book Borrow Library App",
      summary:
        "A peer-to-peer book borrowing platform built during a 2025 hackathon. I focused on both frontend development and project architecture.",
      link: "https://y-reporter.vercel.app/",
      code: "https://github.com/ChungsiangRoeurn/Y-REPORTER",
      technologies: ["NextJS", "Tailwind CSS", "ShadCN", "GoogleAPI"],
    },
    {
      name: "E-commerce Electronics Store",
      summary:
        "A collaborative project built with a friend. I focused on API integration and frontend UI development.",
      link: "https://yourwebsite.com",
      code: "https://github.com/yourname/quizgen",
      technologies: ["NextJS", "ShadCN", "Laravel", "MySQL"],
    },
  ],
  about: {
    description: `
      I am passionate about technology and love building digital products that solve real-world problems.

      I'm a student in the field of Computer Science, based in Cambodia 🇰🇭.

      Whether it's:
      - Personal websites to showcase your brand
      - Custom projects tailored to your needs
      - Web performance and optimization

      I focus on quality and functionality, collaborating closely with every client to bring their ideas to life.

      Ready to take your project to the next level? Let’s work together!
    `,
    image: "/chungsiang.png",
  },
};

export const techStack = [
  {
    name: "Astro",
    icon: "/tech/astro.svg",
    url: "https://astro.build/",
  },
  {
    name: "Tailwind",
    icon: "/tech/tailwind.svg",
    url: "https://tailwindcss.com",
  },
  {
    name: "Javascript",
    icon: "/tech/javascript.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    description: "A superset of JavaScript",
    icon: "/tech/typescript.svg",
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "ReactJS",
    icon: "/tech/reactjs.svg",
    url: "https://react.dev/",
  },
  {
    name: "NextJS",
    icon: "/tech/nextjs.svg",
    url: "https://nextjs.org/",
  },
  {
    name: "Shadcn",
    icon: "/tech/shadcn.svg",
    url: "https://ui.shadcn.com/",
  },
  {
    name: "Docker",
    icon: "/tech/docker.svg",
    url: "https://www.docker.com/",
  },
  {
    name: "NestJS",
    icon: "/tech/nestjs.svg",
    url: "https://nestjs.com/",
  },
  {
    name: "Prisma",
    icon: "/tech/prisma.svg",
    url: "https://www.prisma.io/",
  },
  {
    name: "SQLite",
    icon: "/tech/sqlite.svg",
    url: "https://www.sqlite.org/index.html",
  },
];
export const aboutMe: AboutMeItems[] = [
  {
    name: "ROEURN CHUNGSIANG,",
    content: [
      "A full-stack developer with a strong interest in modern web technologies, user experience, and clean design principles. I enjoy crafting responsive, high-performance applications that are both visually appealing and functionally robust.",

      "I'm currently pursuing a Bachelor's degree in Computer Science at the Royal University of Phnom Penh, where I actively engage in both academic learning and real-world projects. My journey began with frontend development, where I developed a solid foundation in building intuitive user interfaces using tools like React and Tailwind CSS. Over time, my curiosity and desire to understand the full development lifecycle led me to backend development. I now specialize in building scalable and secure RESTful APIs using NestJS and TypeScript. I'm passionate about problem-solving, system design, and creating software that improves lives. I continuously strive to improve my skills, collaborate with like-minded developers, and contribute to meaningful, production-ready applications that make a difference.",
    ],
  },
];

export const employmentItems: EmploymentItem[] = [
  {
    role: "Backend Developer",
    company: "CamCyber Digital Tech Team",
    duration: "Jun 2024 – Present",
    description:
      "Learning and building real-world backend projects through API development and system design.",
    responsibilities: [
      "Designed and implemented RESTful APIs using NestJS",
      "Worked with PostgreSQL and data modeling for backend services",
      "Tested APIs and endpoints using Postman for reliability and performance",
      "Collaborated with frontend developers to ensure seamless API integration",
    ],
    technologies: ["Angular", "NestJS", "TypeScript", "PostgreSQL", "Postman"],
  },
  {
    role: "Junior Frontend Developer",
    company: "dreamsLAB",
    duration: "Dec 2024 – Jun 2025",
    description:
      "Developed and maintained full-stack web applications for clients across multiple industries.",
    responsibilities: [
      "Developed dynamic landing pages using Next.js and TailwindCSS",
      "Integrated frontend applications with backend APIs using Honojs",
      "Collaborated with designers using Figma to ensure accurate UI/UX implementation",
      "Built and maintained reusable UI components using Shadcn/UI",
    ],
    technologies: [
      "NextJS",
      "TypeScript",
      "TailwindCSS",
      "ShadCN/UI",
      "HonoJS",
      "Figma",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "dreamsLAB",
    duration: "Aug 2024 – Nov 2024",
    description:
      "Completed a structured internship focused on building solid frontend foundations and real-world skills.",
    responsibilities: [
      "Assisted in building responsive components using React.js and TailwindCSS",
      "Learned Git workflows for version control and team collaboration",
      "Fixed minor UI bugs and improved cross-browser compatibility",
      "Participated in team meetings and code reviews to gain feedback and improve coding quality",
    ],
    technologies: ["ReactJS", "NextJS", "TypeScript", "TailwindCSS", "Git"],
  },
];
