import type { TechKey } from "../lib/tech";

export interface SeoContent {
  title: string;
  description: string;
}

export interface NavContent {
  about: string;
  skills: string;
  projects: string;
  experience: string;
  contact: string;
  languageLabel: string;
  openMenu: string;
  closeMenu: string;
}

export interface HeroContent {
  greeting: string;
  name: string;
  role: string;
  location: string;
  tagline: string;
  summary: string;
  typingLabel: string;
  typing: string[];
  ctaPrimary: string;
  ctaSecondary: string;
  scrollHint: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface AboutContent {
  eyebrow: string;
  title: string;
  summary: string;
  highlightsTitle: string;
  stats: StatItem[];
  highlights: string[];
}

export interface SkillItem {
  key: TechKey;
  label: string;
}

export interface SkillCategory {
  title: string;
  items: SkillItem[];
}

export interface SkillsContent {
  eyebrow: string;
  title: string;
  intro: string;
  categories: SkillCategory[];
}

export interface ProjectItem {
  icon: string;
  title: string;
  description: string;
  status: string;
  statusVariant: "planned" | "active";
  stack: TechKey[];
}

export interface ProjectsContent {
  eyebrow: string;
  title: string;
  intro: string;
  items: ProjectItem[];
}

export interface ExperienceJob {
  period: string;
  company: string;
  role: string;
  bullets: string[];
}

export interface EducationItem {
  period: string;
  institution: string;
  degree: string;
}

export interface ExperienceContent {
  eyebrow: string;
  title: string;
  intro: string;
  jobs: ExperienceJob[];
  educationTitle: string;
  education: EducationItem[];
}

export interface ContactItem {
  kind: "email" | "whatsapp" | "github" | "linkedin" | "location";
  label: string;
  value: string;
  href?: string;
}

export interface ContactContent {
  eyebrow: string;
  title: string;
  intro: string;
  availability: string;
  panelSummary: string;
  cvCta: string;
  items: ContactItem[];
}

export interface FooterContent {
  madeWith: string;
  rights: string;
}

export interface PortfolioDictionary {
  seo: SeoContent;
  nav: NavContent;
  hero: HeroContent;
  about: AboutContent;
  skills: SkillsContent;
  projects: ProjectsContent;
  experience: ExperienceContent;
  contact: ContactContent;
  footer: FooterContent;
}
