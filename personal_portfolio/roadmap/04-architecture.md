# 04 — Architecture

## Tech stack

| Concern | Choice | Why |
|---------|--------|-----|
| Build tool | **Vite** (already set up) | Fast, simple, matches the existing project |
| UI | **React 19** + JavaScript (ES modules) | Sushil's main stack; no TypeScript, by his preference |
| Routing | **React Router v7** | Needed for `/work/:slug`, `/services` etc. Mature and well documented |
| Pre-rendering | **Static pre-render of every route at build time** | Search engines and link previews (LinkedIn, WhatsApp, Upwork) see real HTML, not an empty `<div id="root">` |
| Styling | **Tailwind CSS v4** (via `@tailwindcss/vite`) | Utility classes in JSX, no per-component stylesheets. The only CSS file is `src/styles/index.css`, which holds the fonts and design tokens (`@theme`) |
| Animation | **Framer Motion** (later, design phase) | He already knows it |
| Contact form | **Form service** (Web3Forms or Formspree) in v1 | No server needed; free tier is enough |
| Analytics | **Vercel Analytics** or **Plausible** | Privacy-friendly; tracks which pages lead to enquiries |
| Hosting | **Vercel** (or Netlify) | Free, auto-deploys from GitHub, preview URLs per branch, custom domain + HTTPS |
| Lint | **oxlint** (already set up) | — |

Kept out on purpose: TypeScript, CMS, state libraries (Redux/Zustand), UI kits and a backend server.

> **Later:** the portfolio AI assistant needs its own backend ([09-portfolio-chatbot.md](09-portfolio-chatbot.md)). Once that exists, the contact form moves onto the same Express API, replacing the form service.

## Pre-rendering approach

React Router v7 can pre-render a list of routes to static HTML at build time (`prerender` in framework mode). Every route is known in advance (static pages + one per project slug), so the whole site can ship as static files with client-side hydration.

Routes to pre-render: `/`, `/work`, `/services`, `/about`, `/contact`, and `/work/${slug}` for every entry in `projects.js`.

If framework mode feels like too much setup for v1, the fallback is plain React Router (library mode) as a normal SPA, with a hosting rewrite of `/* → /index.html`. Pre-rendering is then added before sharing the site widely. Either way, the folder structure below stays the same.

## Folder structure (target)

Evolves the current scaffold: the single-page `sections/` become per-page sections, and `pages/` + `routes` are added.

```
personal_portfolio/
├── public/
│   ├── resume.pdf
│   ├── og-image.png              # 1200×630 link-preview image
│   ├── favicon.svg / .ico
│   ├── robots.txt
│   └── sitemap.xml               # generated at build
├── roadmap/                      # these planning docs
├── src/
│   ├── main.jsx                  # entry: mounts router
│   ├── App.jsx                   # root layout: Header + <Outlet/> + Footer
│   ├── routes.jsx                # route table (single source of truth)
│   │
│   ├── pages/                    # one component per route, composes sections
│   │   ├── HomePage.jsx
│   │   ├── WorkPage.jsx
│   │   ├── ProjectPage.jsx
│   │   ├── ServicesPage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── ContactPage.jsx
│   │   └── NotFoundPage.jsx
│   │
│   ├── sections/                 # large page blocks, grouped by page
│   │   ├── home/                 # Hero, SelectedWork, ServicesTeaser, WhyMe, ExperienceSnapshot, Testimonials
│   │   ├── work/                 # ProjectList
│   │   ├── project/              # CaseStudyHeader, MetaPanel, CaseStudyBody, NextProject
│   │   ├── services/             # ServiceList, Process, Engagement, Faq
│   │   ├── about/                # Intro, Timeline, Education, SkillGroups
│   │   └── contact/              # ContactForm, ContactDetails
│   │
│   ├── components/
│   │   ├── layout/               # Header, MobileMenu, Footer, ClosingCta, SkipLink, ScrollToTop
│   │   ├── ui/                   # Button, Badge, Chip, SectionHeading, Container, Card, Accordion
│   │   └── seo/                  # Seo (per-page <title>/<meta>)
│   │
│   ├── features/
│   │   └── assistant/            # AI chat widget (see 09-portfolio-chatbot.md)
│   ├── data/                     # ALL content (see 03-data-model.md)
│   ├── hooks/                    # useLocalTime, useContactForm
│   ├── utils/                    # formatDate, getProjectBySlug, getNextProject
│   ├── assets/
│   │   ├── images/               # profile photo, projects/<slug>/…
│   │   └── fonts/                # dirtyline.woff2, chillax-variable.woff2 + their licences
│   └── styles/
│       └── index.css             # Tailwind entry: @import, @font-face, @theme tokens, base styles
├── .env.example                  # VITE_FORM_ACCESS_KEY=
└── vite.config.js
```

Each component is a single `Component.jsx` file styled with Tailwind classes. No CSS Modules or per-component stylesheets.

### Fonts
| Token | Font | Used for |
|-------|------|----------|
| `font-display` | Dirtyline 36daysoftype 2022 | The name in the hero, very large headings only |
| `font-sans` (default) | Chillax (variable, weights 200–700) | All other text |
| `font-mono` | System monospace (placeholder for the 3rd font) | Labels, tags, dates |

Both fonts are self-hosted from `src/assets/fonts/`; Vite fingerprints and bundles them. Licences: Dirtyline's own licence allows desktop and web, commercial use; Chillax uses the ITF Free Font License, which allows self-hosting but **forbids redistributing the files through a public repository**, so the GitHub repo must stay private.

### Layering rules
- `pages/` → may import `sections/`, `components/`, `data/`, `utils/`.
- `sections/` → may import `components/`, `data/`, `utils/`, `hooks/`.
- `components/ui/` → **no** imports from `data/`. These are pure, reusable building blocks driven by props.
- `data/` → imports nothing except assets.

## Routing

```jsx
// src/routes.jsx (shape)
[
  {
    element: <App />,                    // layout: Header + Outlet + Footer
    errorElement: <NotFoundPage />,
    children: [
      { index: true,            element: <HomePage /> },
      { path: 'work',           element: <WorkPage /> },
      { path: 'work/:slug',     element: <ProjectPage /> },
      { path: 'services',       element: <ServicesPage /> },
      { path: 'about',          element: <AboutPage /> },
      { path: 'contact',        element: <ContactPage /> },
      { path: '*',              element: <NotFoundPage /> },
    ],
  },
]
```

- `ProjectPage` looks up the slug with `getProjectBySlug(slug)` and renders `NotFoundPage` if it is missing.
- `ScrollToTop` resets scroll on navigation; hash links (`/#services`) scroll to the anchor.

## Data flow

```
src/data/*.js  ──import──▶  pages/  ──props──▶  sections/  ──props──▶  components/ui/
                               │
                               └── utils/ (getProjectBySlug, getNextProject, featured filters)
```

There is no global state and no data fetching at runtime. All content is bundled at build time. The only runtime network call is the contact form submit.

## SEO and sharing

- **`<Seo>` component per page:** uses React 19's built-in hoisting of `<title>` / `<meta>`, so no extra library is needed.
  - Home: `seo.defaultTitle`
  - Project: `"NeuroVault: AI knowledge assistant · Sushil Yadav"`, with the description from `tagline` and `og:image` from the project cover
- **Open Graph + Twitter card tags** on every page, so links shared on LinkedIn, WhatsApp and Upwork show a proper preview.
- **JSON-LD `Person` schema** on Home (name, jobTitle, url, sameAs: GitHub/LinkedIn).
- **`sitemap.xml` + `robots.txt`** generated from the route list.
- **Canonical URLs** on every page.
- Semantic HTML: one `<h1>` per page, landmark elements (`header`, `main`, `nav`, `footer`), alt text on every image.

## Contact form flow

```
User fills form ─▶ client-side validation ─▶ honeypot check ─▶ POST to form service
       ▲                                                            │
       │                                    success ◀───────────────┤
       └──── error message + "email me directly" fallback ◀─────────┘ failure
```

- The access key goes in `VITE_FORM_ACCESS_KEY` (in `.env`, git-ignored; shipped as `.env.example`). Form-service keys are public by design. Protection comes from the service's domain allow-list.
- The `ref` query param (e.g. `/contact?ref=neurovault`) is sent as a hidden field, so he knows which case study led to the enquiry.
- Analytics event on successful submit = the site's main conversion metric.

## Performance and quality targets

- Lighthouse ≥ 95 on Performance, Accessibility, Best Practices and SEO (mobile).
- Images in WebP/AVIF with explicit `width`/`height`, and `loading="lazy"` below the fold.
- Routes code-split with `lazy()` where the bundle grows (case studies, contact form).
- Works without JavaScript for reading content (thanks to pre-rendering).
- Keyboard navigable; visible focus states; `prefers-reduced-motion` respected (design phase).

## Deployment

1. Push the repo to GitHub (`sushilydv-dev/portfolio`). Public, since it doubles as a code sample.
2. Import it into Vercel. Build: `npm run build`, output: `dist/` (or `build/client` in framework mode).
3. Add env var `VITE_FORM_ACCESS_KEY`.
4. Connect a custom domain (e.g. `sushilyadav.dev` or `sushilyadav.in`) and set up an email alias `hello@<domain>`.
5. Every push to `main` deploys; every PR gets a preview URL.
