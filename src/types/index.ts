export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  image: string;
  lang: string;
  author: string;
  socialLinks: {
    text: string;
    href: string;
    icon?: string;
  }[];
  socialImage: string;
  canonicalURL?: string;
}

export interface SiteContent {
  hero: HeroProps;
  about: AboutProps;
  projects: ProjectProps[];
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary1: string;
  summary2: string;
  email: string;
}

export interface ProjectProps {
  name: string;
  summary: string;
  link?: string;
  code?: string;
  image?: any;
  technologies?: string[];
}

export interface AboutProps {
  description: string;
  image: string;
}

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}

export interface AnimatedTextProps {
  text: string;
}

export interface LogoProps {
  name: string;
}

export interface TechStackItem {
  name: string;
  icon: string;
  url: string;
}

export interface EmploymentItem {
  role: string;
  company: string;
  duration: string;
  description: string;
  technologies?: string[];
  responsibilities: string[];
  projects?: {
    name: string;
    description: string;
  }[];
}
export interface AboutMeItems {
  name: string;
  content: string[];
}
