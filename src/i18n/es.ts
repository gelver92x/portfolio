import type { PortfolioDictionary } from "./types";

export const es: PortfolioDictionary = {
  seo: {
    title: "Gelver Villadiego | Full Stack Developer",
    description:
      "Portfolio profesional bilingüe de Gelver Villadiego. Full Stack Developer con experiencia en Angular, React, Node.js, SQL Server, Flutter y despliegues en producción."
  },
  nav: {
    about: "Sobre mí",
    skills: "Habilidades",
    projects: "Proyectos",
    experience: "Experiencia",
    contact: "Contacto",
    languageLabel: "Selector de idioma",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú"
  },
  hero: {
    greeting: "Hola, soy",
    name: "Gelver Villadiego",
    role: "Full Stack Developer",
    location: "Medellín, Colombia",
    tagline: "+4 años construyendo software en producción",
    summary:
      "Desarrollador Full Stack con experiencia remota en desarrollo y mantenimiento de aplicaciones web y móviles, APIs REST, despliegues y soporte técnico en entornos productivos.",
    typingLabel: "Foco técnico",
    typing: ["Angular", "React", "Node.js", "SQL Server", "Flutter"],
    ctaPrimary: "Ver proyectos",
    ctaSecondary: "Contáctame",
    scrollHint: "Explorar"
  },
  about: {
    eyebrow: "Perfil",
    title: "Construyo software útil, mantenible y listo para operar.",
    summary:
      "Desarrollador Full Stack con 4 años de experiencia remota en desarrollo y mantenimiento de aplicaciones web y móviles. Experiencia sólida en Angular, React, Node.js con Express, JavaScript, SQL Server y Flutter, participando en proyectos orientados a producto, soporte a producción y mejora continua. También he trabajado en despliegues, configuración de servidores, pipelines y soporte técnico remoto a clientes.",
    highlightsTitle: "Lo que aporto",
    stats: [
      { value: "4+", label: "Años de experiencia" },
      { value: "10+", label: "Tecnologías en producción" },
      { value: "100%", label: "Trabajo remoto" }
    ],
    highlights: [
      "Producción real",
      "Trabajo remoto",
      "Web + móvil",
      "DevOps y despliegue",
      "Soporte a clientes"
    ]
  },
  skills: {
    eyebrow: "Stack",
    title: "Tecnologías con experiencia aplicada en entornos reales",
    intro:
      "Experiencia distribuida entre frontend, backend, móvil, bases de datos e infraestructura ligera para productos que necesitan estabilidad operativa.",
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
        title: "Móvil",
        items: [
          { key: "flutter", label: "Flutter" },
          { key: "cordova", label: "Apache Cordova" }
        ]
      },
      {
        title: "Bases de datos",
        items: [
          { key: "sqlserver", label: "SQL Server" },
          { key: "sqlite", label: "SQLite" }
        ]
      },
      {
        title: "DevOps e Infraestructura",
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
        title: "Herramientas",
        items: [
          { key: "git", label: "Git" },
          { key: "vscode", label: "VS Code" },
          { key: "ai", label: "Desarrollo asistido por IA" },
          { key: "scrum", label: "Scrum" }
        ]
      }
    ]
  },
  projects: {
    eyebrow: "Proyectos",
    title: "Tres proyectos protagonistas",
    intro:
      "Conceptos pensados para demostrar criterio full stack, operación real y enfoque en problemas de negocio, sin depender de código privado de empresa.",
    items: [
      {
        icon: "⚙️",
        title: "Sistema Full Stack de Gestión Operativa",
        description:
          "Aplicación de negocio con roles, módulos operativos, dashboards y despliegue documentado para demostrar arquitectura completa de producto.",
        status: "Planificado",
        statusVariant: "planned",
        stack: ["angular", "nodejs", "express", "sqlserver", "docker", "pm2", "nginx"]
      },
      {
        icon: "📱",
        title: "App Móvil Offline-First para Trabajo de Campo",
        description:
          "Aplicación móvil para captura de novedades, formularios y sincronización offline/online, orientada a equipos operativos en terreno.",
        status: "Planificado",
        statusVariant: "planned",
        stack: ["flutter", "sqlite", "nodejs", "express"]
      },
      {
        icon: "🛡️",
        title: "API Backend de Grado Producción",
        description:
          "API con autenticación, roles, health checks, tareas programadas y despliegue reproducible para evidenciar madurez técnica en backend.",
        status: "Planificado",
        statusVariant: "planned",
        stack: ["nodejs", "nestjs", "sqlserver", "docker", "azuredevops", "linux"]
      }
    ]
  },
  experience: {
    eyebrow: "Trayectoria",
    title: "Experiencia real en desarrollo, soporte y despliegue",
    intro:
      "Mi experiencia se ha construido sobre mantenimiento de productos en producción, evolución continua y soporte remoto a clientes en contextos empresariales.",
    jobs: [
      {
        period: "2022 - 2026",
        company: "Software Solutions Technologies",
        role: "Ingeniero de Desarrollo",
        bullets: [
          "Desarrollé y mantuve aplicaciones web con Angular, React, Node.js y SQL Server en producción.",
          "Construí y consumí APIs REST para módulos de negocio e integración de servicios.",
          "Implementé mejoras funcionales y correctivas priorizando rendimiento, estabilidad y mantenibilidad.",
          "Participé en despliegues con PM2, Nginx, IIS y VPS sobre Linux y Windows.",
          "Administré publicación y mantenimiento de apps móviles e híbridas en Android.",
          "Configuré pipelines con Azure DevOps para apoyar procesos de despliegue y actualización.",
          "Brindé soporte técnico remoto a clientes con RustDesk, AnyDesk y VNC Viewer.",
          "Gestioné conectividad segura con WireGuard y VPS en Vultr, Linode y AWS."
        ]
      }
    ],
    educationTitle: "Formación",
    education: [
      {
        period: "2021 - 2022",
        institution: "Universidad del Norte",
        degree: "Desarrollador Web"
      },
      {
        period: "2014 - 2020",
        institution: "Universidad de Córdoba",
        degree: "Ingeniero de Sistemas"
      }
    ]
  },
  contact: {
    eyebrow: "Contacto",
    title: "Trabajemos juntos",
    intro:
      "Disponible para oportunidades remotas o híbridas donde pueda aportar desarrollo full stack, backend orientado a producto o mantenimiento de sistemas en producción.",
    availability: "Abierto a roles Full Stack, Backend y Software Developer.",
    panelSummary:
      "Full Stack Developer orientado a producto, mantenimiento de software real y entregas sostenibles en equipos distribuidos.",
    cvCta: "Descargar CV",
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
        value: "(57) 304 403 6922",
        href: "https://wa.me/573044036922"
      },
      {
        kind: "github",
        label: "GitHub",
        value: "Perfil en actualización",
        href: "#"
      },
      {
        kind: "linkedin",
        label: "LinkedIn",
        value: "Perfil en actualización",
        href: "#"
      },
      {
        kind: "location",
        label: "Ubicación",
        value: "Medellín, Colombia"
      }
    ]
  },
  footer: {
    madeWith: "Hecho con Astro y foco en claridad técnica.",
    rights: "Portfolio profesional bilingüe."
  }
};
