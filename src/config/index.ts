import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "JIANGSUNG. — Web Developer",
  author: "Built with Astro.",
  description: "Jiang Sung, Web Developer from Cambodia",
  lang: "km,en",
  siteLogo: "/chungsiang-logo.png",
  navLinks: [
    { text: "Home", href: "/" },
    { text: "Experiences", href: "/experiences" },
    { text: "Journey", href: "/journey" },
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
      "Hey, I’m Jiang Sung — a web developer excited to create and innovate!",
    summary2: "Have a project in mind? Let's make it happen.",
    email: "rn.chungsiang@gmail.com",
  },
  projects: [
    {
      name: "Book Borrow Library App",
      summary:
        "A peer-to-peer book borrowing platform built during a 2025 hackathon. I focused on both frontend development and project architecture.",
      link: "https://bookswap.example.com",
      code: "https://github.com/ChungsiangRoeurn/Y-REPORTER",
      technologies: ["Next.js", "Tailwind CSS", "Shadcn"],
    },
    {
      name: "E-commerce Electronics Store",
      summary:
        "A collaborative project built with a friend. I focused on API integration and frontend UI development.",
      link: "https://yourwebsite.com",
      code: "https://github.com/yourname/quizgen",
      technologies: ["Next.js", "Shadcn", "Laravel", "MySQL"],
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
    url: "",
  },
  {
    name: "TypeScript",
    description: "A superset of JavaScript ",
    icon: "/tech/typescript.svg",
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "Reactjs",
    icon: "/tech/reactjs.svg",
    url: "www",
  },
  {
    name: "Nextjs",
    icon: "/tech/nextjs.svg",
    url: "www",
  },
  {
    name: "Docker",
    icon: "/tech/docker.svg",
    url: "www",
  },
  {
    name: "Nestjs",
    icon: "/tech/nestjs.svg",
    url: "www",
  },
  {
    name: "Prisma",
    icon: "/tech/prisma.svg",
    url: "www",
  },
  {
    name: "SQLite",
    icon: "/tech/sqlite.svg",
    url: "www",
  },
  {
    name: "Shadcn",
    icon: "/tech/shadcn.svg",
    url: "/tech/shadcn.svg",
  },
];
