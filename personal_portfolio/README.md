# Personal Portfolio

A personal portfolio website built with [React](https://react.dev/) and [Vite](https://vite.dev/).

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build     # production build in dist/
npm run preview   # preview the production build
npm run lint      # lint with oxlint
```

## Project structure

```
├── public/                  # Static files served as-is (favicon, robots.txt, resume.pdf)
├── src/
│   ├── assets/
│   │   ├── fonts/           # Dirtyline + Chillax (woff2) and their licences
│   │   └── images/
│   ├── components/
│   │   ├── layout/          # Navbar.jsx, Footer.jsx
│   │   └── ui/              # Container.jsx, SectionHeading.jsx
│   ├── sections/            # Hero, About, Skills, Projects, Experience, Contact
│   ├── data/                # Site content (profile, projects, skills, experience, socials)
│   ├── hooks/               # Custom React hooks
│   ├── utils/               # Helper functions
│   ├── styles/index.css     # Tailwind entry: fonts and design tokens
│   ├── App.jsx              # Page composition
│   └── main.jsx             # Entry point
├── roadmap/                 # Planning docs
├── index.html
└── vite.config.js
```

## Styling

Styling uses [Tailwind CSS v4](https://tailwindcss.com/) classes directly in the JSX. There are no per-component stylesheets. `src/styles/index.css` holds the only CSS: the `@font-face` rules and the design tokens in `@theme` (for example `font-display`, `text-ink`, `bg-paper`, `text-accent`).

| Class | Font |
|-------|------|
| `font-display` | Dirtyline (hero name, big headings) |
| `font-sans` (default) | Chillax |
| `font-mono` | System monospace |

**Font licence note:** the Chillax licence (ITF FFL) forbids sharing the font files through a public repository. Keep the GitHub repo private.

## Editing content

All text content lives in `src/data/`. Update those files to change what appears on the site; components don't need to be touched.

Imports can use the `@/` alias for `src/`, e.g. `import { profile } from '@/data/profile'`.
