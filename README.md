# Portfolio Profesional | Gelver Villadiego

Portfolio profesional bilingue construido con Astro para presentar el perfil de Gelver Villadiego como Full Stack Developer, con foco en experiencia real en desarrollo web, backend, movil y despliegue.

## Objetivo

Este sitio funciona como landing portfolio de una sola pagina para:

- presentar el perfil profesional de forma clara
- destacar stack y experiencia en produccion
- mostrar proyectos protagonistas
- ofrecer contacto y descarga del CV
- permitir cambio de idioma ES/EN sin recargar la pagina

## Stack

- Astro
- TypeScript
- CSS global custom
- JavaScript vanilla para interacciones cliente

## Funcionalidades principales

- navbar sticky con scroll-spy
- menu movil
- toggle de idioma ES/EN con persistencia en `localStorage`
- hero con typing effect
- animaciones de reveal al hacer scroll
- secciones de about, skills, projects, experience y contact
- descarga del CV desde `public/`
- SEO base con Open Graph y Twitter Card

## Estructura del proyecto

```text
landing_portfolio/
├── public/
│   ├── favicon.svg
│   ├── og-cover.svg
│   └── Hoja_de_vida_Gelver_Villadiego.pdf
├── src/
│   ├── components/
│   ├── i18n/
│   ├── layouts/
│   ├── lib/
│   ├── pages/
│   └── styles/
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

## Requisitos

- Node.js 18 o superior
- npm

## Como levantarlo

### 1. Instalar dependencias

```bash
npm install
```

### 2. Correr en desarrollo

```bash
npm run dev
```

Astro levantara un servidor local y mostrara la URL en consola.

### 3. Generar build de produccion

```bash
npm run build
```

El resultado queda en `dist/`.

### 4. Previsualizar el build

```bash
npm run preview
```

## Scripts disponibles

- `npm run dev`: entorno local de desarrollo
- `npm run build`: compilacion estatica
- `npm run preview`: vista previa del build generado

## Donde editar contenido

- textos en espanol: `src/i18n/es.ts`
- textos en ingles: `src/i18n/en.ts`
- layout y SEO: `src/layouts/Layout.astro`
- estilos globales: `src/styles/global.css`
- secciones del sitio: `src/components/`

## Notas

- GitHub y LinkedIn estan como placeholders y deben actualizarse cuando tengas las URLs finales.
- El cambio de idioma se resuelve del lado del cliente y no requiere rutas separadas.
- El CV descargable se sirve desde `public/Hoja_de_vida_Gelver_Villadiego.pdf`.
