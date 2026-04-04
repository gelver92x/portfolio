export type TechKey =
  | "angular"
  | "react"
  | "javascript"
  | "typescript"
  | "nextjs"
  | "html"
  | "css"
  | "astro"
  | "nodejs"
  | "express"
  | "nestjs"
  | "restapi"
  | "flutter"
  | "cordova"
  | "sqlserver"
  | "sqlite"
  | "docker"
  | "azuredevops"
  | "linux"
  | "pm2"
  | "nginx"
  | "iis"
  | "vps"
  | "wireguard"
  | "git"
  | "vscode"
  | "ai"
  | "scrum";

interface TechMeta {
  accent: string;
  icon: string;
  label: string;
}

const icons = {
  code: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m9 8-4 4 4 4M15 8l4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  framework: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16M9 4v16M15 4v16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  server: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4" y="4.5" width="16" height="6" rx="2.2" stroke="currentColor" stroke-width="1.6"/><rect x="4" y="13.5" width="16" height="6" rx="2.2" stroke="currentColor" stroke-width="1.6"/><path d="M8 7.5h.01M8 16.5h.01" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>`,
  database: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><ellipse cx="12" cy="6.5" rx="6.5" ry="2.8" stroke="currentColor" stroke-width="1.6"/><path d="M5.5 6.5v10.3c0 1.55 2.9 2.8 6.5 2.8s6.5-1.25 6.5-2.8V6.5M5.5 11.7c0 1.55 2.9 2.8 6.5 2.8s6.5-1.25 6.5-2.8" stroke="currentColor" stroke-width="1.6"/></svg>`,
  mobile: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="7" y="3.5" width="10" height="17" rx="2.4" stroke="currentColor" stroke-width="1.6"/><path d="M10 6.5h4M11 17.5h2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  infra: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3.8 4.5 8v8L12 20.2 19.5 16V8L12 3.8Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="m8 10 4 2.2 4-2.2M12 12.2V17" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3.5c2.7 2 5.2 2.7 7 2.9v4.8c0 4.1-2.5 7-7 9.3-4.5-2.3-7-5.2-7-9.3V6.4c1.8-.2 4.3-.9 7-2.9Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="m9.6 12.3 1.7 1.8 3.2-3.6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  tool: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14.5 5.2a4.5 4.5 0 0 0-5.2 5.7L4.7 15.5a2.1 2.1 0 0 0 3 3l4.6-4.6a4.5 4.5 0 0 0 5.7-5.2l-2.2 2.2-2.8-.5-.5-2.8 2-2.4Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`
} as const;

export const techMeta: Record<TechKey, TechMeta> = {
  angular: { label: "Angular", accent: "#ef4444", icon: icons.framework },
  react: { label: "React", accent: "#38bdf8", icon: icons.framework },
  javascript: { label: "JavaScript", accent: "#facc15", icon: icons.code },
  typescript: { label: "TypeScript", accent: "#60a5fa", icon: icons.code },
  nextjs: { label: "Next.js", accent: "#e2e8f0", icon: icons.framework },
  html: { label: "HTML", accent: "#fb7185", icon: icons.code },
  css: { label: "CSS", accent: "#22d3ee", icon: icons.code },
  astro: { label: "Astro", accent: "#a855f7", icon: icons.framework },
  nodejs: { label: "Node.js", accent: "#4ade80", icon: icons.server },
  express: { label: "Express", accent: "#e5e7eb", icon: icons.server },
  nestjs: { label: "NestJS", accent: "#fb7185", icon: icons.server },
  restapi: { label: "REST APIs", accent: "#06b6d4", icon: icons.server },
  flutter: { label: "Flutter", accent: "#38bdf8", icon: icons.mobile },
  cordova: { label: "Apache Cordova", accent: "#94a3b8", icon: icons.mobile },
  sqlserver: { label: "SQL Server", accent: "#f87171", icon: icons.database },
  sqlite: { label: "SQLite", accent: "#818cf8", icon: icons.database },
  docker: { label: "Docker", accent: "#60a5fa", icon: icons.infra },
  azuredevops: { label: "Azure DevOps", accent: "#2563eb", icon: icons.infra },
  linux: { label: "Linux", accent: "#fbbf24", icon: icons.infra },
  pm2: { label: "PM2", accent: "#4ade80", icon: icons.infra },
  nginx: { label: "Nginx", accent: "#22c55e", icon: icons.infra },
  iis: { label: "IIS", accent: "#38bdf8", icon: icons.infra },
  vps: { label: "VPS", accent: "#8b5cf6", icon: icons.infra },
  wireguard: { label: "WireGuard", accent: "#06b6d4", icon: icons.shield },
  git: { label: "Git", accent: "#f97316", icon: icons.tool },
  vscode: { label: "VS Code", accent: "#3b82f6", icon: icons.tool },
  ai: { label: "AI-assisted dev", accent: "#a78bfa", icon: icons.tool },
  scrum: { label: "Scrum", accent: "#14b8a6", icon: icons.tool }
};

const fallbackTech: TechMeta = {
  label: "Technology",
  accent: "#8b5cf6",
  icon: icons.code
};

export function getTechMeta(key: string): TechMeta {
  return techMeta[key as TechKey] ?? fallbackTech;
}
