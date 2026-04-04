import type { PortfolioDictionary } from "./types";

export const en: PortfolioDictionary = {
  seo: {
    title: "Gelver Villadiego | Full Stack Developer",
    description:
      "Bilingual professional portfolio for Gelver Villadiego. Full Stack Developer with experience in Angular, React, Node.js, SQL Server, Flutter and production deployments."
  },
  nav: {
    about: "About",
    skills: "Skills",
    projects: "Projects",
    experience: "Experience",
    contact: "Contact",
    languageLabel: "Language switcher",
    openMenu: "Open menu",
    closeMenu: "Close menu"
  },
  hero: {
    greeting: "Hi, I'm",
    name: "Gelver Villadiego",
    role: "Full Stack Developer",
    location: "Medellin, Colombia",
    tagline: "+4 years building production software",
    summary:
      "Full Stack Developer with remote experience building and maintaining web and mobile applications, REST APIs, deployments and technical support across production environments.",
    typingLabel: "Core stack",
    typing: ["Angular", "React", "Node.js", "SQL Server", "Flutter"],
    ctaPrimary: "View projects",
    ctaSecondary: "Contact me",
    scrollHint: "Explore"
  },
  about: {
    eyebrow: "Profile",
    title: "I build useful, maintainable software that is ready to operate.",
    summary:
      "Full Stack Developer with 4 years of remote experience in web and mobile application development and maintenance. Strong background in Angular, React, Node.js with Express, JavaScript, SQL Server and Flutter, contributing to product-oriented projects, production support and continuous improvement. I have also worked on deployments, server configuration, pipelines and remote client support.",
    highlightsTitle: "What I bring",
    stats: [
      { value: "4+", label: "Years of experience" },
      { value: "10+", label: "Production technologies" },
      { value: "100%", label: "Remote work" }
    ],
    highlights: [
      "Real production work",
      "Remote collaboration",
      "Web + mobile delivery",
      "DevOps and deployment",
      "Client support"
    ]
  },
  skills: {
    eyebrow: "Stack",
    title: "Technologies applied in real-world environments",
    intro:
      "Experience distributed across frontend, backend, mobile, databases and lightweight infrastructure for products that need operational stability.",
    categories: [
      {
        title: "Frontend",
        items: [
          { key: "angular", label: "Angular" },
          { key: "react", label: "React" },
          { key: "javascript", label: "JavaScript" },
          { key: "typescript", label: "TypeScript" },
          { key: "nextjs", label: "Next.js" },
          { key: "html", label: "HTML" },
          { key: "css", label: "CSS" },
          { key: "astro", label: "Astro" }
        ]
      },
      {
        title: "Backend",
        items: [
          { key: "nodejs", label: "Node.js" },
          { key: "express", label: "Express" },
          { key: "nestjs", label: "NestJS" },
          { key: "restapi", label: "REST APIs" }
        ]
      },
      {
        title: "Mobile",
        items: [
          { key: "flutter", label: "Flutter" },
          { key: "cordova", label: "Apache Cordova" }
        ]
      },
      {
        title: "Databases",
        items: [
          { key: "sqlserver", label: "SQL Server" },
          { key: "sqlite", label: "SQLite" }
        ]
      },
      {
        title: "DevOps & Infrastructure",
        items: [
          { key: "docker", label: "Docker" },
          { key: "azuredevops", label: "Azure DevOps" },
          { key: "linux", label: "Linux" },
          { key: "pm2", label: "PM2" },
          { key: "nginx", label: "Nginx" },
          { key: "iis", label: "IIS" },
          { key: "vps", label: "VPS" },
          { key: "wireguard", label: "WireGuard" }
        ]
      },
      {
        title: "Tools",
        items: [
          { key: "git", label: "Git" },
          { key: "vscode", label: "VS Code" },
          { key: "ai", label: "AI-assisted dev" },
          { key: "scrum", label: "Scrum" }
        ]
      }
    ]
  },
  projects: {
    eyebrow: "Projects",
    title: "Three flagship projects",
    intro:
      "Concepts designed to demonstrate full stack judgment, operational maturity and business problem solving without depending on private company code.",
    items: [
      {
        icon: "⚙️",
        title: "Full Stack Operations Management System",
        description:
          "Business application with roles, operational modules, dashboards and documented deployment to showcase complete product architecture.",
        status: "Planned",
        statusVariant: "planned",
        stack: ["angular", "nodejs", "express", "sqlserver", "docker", "pm2", "nginx"]
      },
      {
        icon: "📱",
        title: "Offline-First Mobile App for Field Work",
        description:
          "Mobile application for issue capture, forms and offline/online synchronization, focused on operational teams working on-site.",
        status: "Planned",
        statusVariant: "planned",
        stack: ["flutter", "sqlite", "nodejs", "express"]
      },
      {
        icon: "🛡️",
        title: "Production-Grade Backend API",
        description:
          "API with authentication, roles, health checks, scheduled tasks and reproducible deployment to highlight backend technical maturity.",
        status: "Planned",
        statusVariant: "planned",
        stack: ["nodejs", "nestjs", "sqlserver", "docker", "azuredevops", "linux"]
      }
    ]
  },
  experience: {
    eyebrow: "Experience",
    title: "Hands-on experience in development, support and deployments",
    intro:
      "My experience has been built on maintaining production products, driving continuous improvement and supporting clients remotely in business environments.",
    jobs: [
      {
        period: "2022 - 2026",
        company: "Software Solutions Technologies",
        role: "Development Engineer",
        bullets: [
          "Developed and maintained production web applications using Angular, React, Node.js and SQL Server.",
          "Built and consumed REST APIs for business modules and service integrations.",
          "Implemented functional and corrective improvements prioritizing performance, stability and maintainability.",
          "Worked on deployments with PM2, Nginx, IIS and VPS environments across Linux and Windows.",
          "Managed publication and maintenance of mobile and hybrid Android applications.",
          "Configured Azure DevOps pipelines to support deployment and update workflows.",
          "Provided remote technical support to clients using RustDesk, AnyDesk and VNC Viewer.",
          "Handled secure connectivity through WireGuard and VPS providers such as Vultr, Linode and AWS."
        ]
      }
    ],
    educationTitle: "Education",
    education: [
      {
        period: "2021 - 2022",
        institution: "Universidad del Norte",
        degree: "Web Developer Program"
      },
      {
        period: "2014 - 2020",
        institution: "Universidad de Cordoba",
        degree: "Systems Engineer"
      }
    ]
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's work together",
    intro:
      "Available for remote or hybrid opportunities where I can contribute to full stack delivery, product-oriented backend work or maintenance of production systems.",
    availability: "Open to Full Stack, Backend and Software Developer roles.",
    panelSummary:
      "Product-oriented Full Stack Developer focused on real software maintenance and sustainable delivery within distributed teams.",
    cvCta: "Download resume",
    items: [
      {
        kind: "email",
        label: "Email",
        value: "gelvervilladiego@gmail.com",
        href: "mailto:gelvervilladiego@gmail.com"
      },
      {
        kind: "whatsapp",
        label: "WhatsApp",
        value: "+57 304 403 6922",
        href: "https://wa.me/573044036922"
      },
      {
        kind: "github",
        label: "GitHub",
        value: "Profile coming soon",
        href: "#"
      },
      {
        kind: "linkedin",
        label: "LinkedIn",
        value: "Profile coming soon",
        href: "#"
      },
      {
        kind: "location",
        label: "Location",
        value: "Medellin, Colombia"
      }
    ]
  },
  footer: {
    madeWith: "Built with Astro and a focus on technical clarity.",
    rights: "Bilingual professional portfolio."
  }
};
