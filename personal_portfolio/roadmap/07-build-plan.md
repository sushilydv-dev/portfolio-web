# 07 — Build Plan

Each phase ends with something deployable. Don't wait for "perfect" before going live: a clean MVP with two strong case studies beats an unfinished, animated site.

## Phase 0: Content and assets (in parallel with Phase 1)
- [ ] Work through the **must provide** list in [06-content-checklist.md](06-content-checklist.md)
- [ ] Deploy NeuroVault and TIMS demos (biggest single impact on client trust)
- [ ] Clean up both GitHub READMEs

## Phase 1: Foundation
- [ ] Install React Router v7; create `routes.jsx`, `App.jsx` layout and empty page components
- [ ] Restructure `src/` to match the target tree in [04-architecture.md](04-architecture.md)
- [ ] Create all `src/data/*.js` files from [03-data-model.md](03-data-model.md)
- [ ] Header (with mobile menu + Hire me), Footer (with closing CTA + local time), SkipLink, ScrollToTop
- [ ] `ui/` building blocks: Button, Badge, Chip, SectionHeading, Container, Card, Accordion
- [ ] `Seo` component + default meta

## Phase 2: MVP pages → **launch**
- [ ] Home: Hero, Selected work, Services teaser, Why me, Experience snapshot
- [ ] Work index
- [ ] Case study template, filled for NeuroVault and TIMS
- [ ] Services: list, How it works, engagement models, FAQ
- [ ] About: intro, timeline, education, skills, résumé link
- [ ] Contact: form wired to the form service (validation, honeypot, states), direct-contact sidebar
- [ ] 404 page
- [ ] Pre-render all routes; generate `sitemap.xml` and `robots.txt`; add OG image
- [ ] Analytics + contact-submit event
- [ ] Accessibility and Lighthouse pass (≥ 95)
- [ ] Deploy to Vercel with the custom domain
- [ ] Link the site from Upwork, LinkedIn, the GitHub profile README and the résumé

## Phase 3: Design pass *(separate discussion)*
- [ ] `08-design-system.md`: colour palette, typography, spacing (light theme only)
- [ ] Component visual styling
- [ ] Framer Motion animations: page transitions, scroll reveals, hover states, with reduced-motion support

## Phase 4: Growth
- [ ] `/notes`: technical writing from Markdown files. First post ideas:
  - "Why in-memory rate limiting breaks behind a load balancer (and how Redis fixes it)"
  - "Isolating tenant data in Pinecone with namespaces"
  - "Designing RBAC for four roles in PostgreSQL"
- [ ] Testimonials section, once real ones exist
- [ ] More projects, plus a `/work` category filter at 6+ projects

## Phase 5: Portfolio AI assistant
Full spec: [09-portfolio-chatbot.md](09-portfolio-chatbot.md). Can move up to straight after launch, since it's the strongest live proof of the AI service.
- [ ] `portfolio-assistant-api` repo: Express + PostgreSQL/pgvector + Redis
- [ ] Ingestion script over `src/data/` (+ notes)
- [ ] Chat endpoint with streaming, guardrails and rate limiting
- [ ] Chat widget on the site (⌘K + floating launcher), lazy-loaded
- [ ] Lead handoff to `/contact`; move the contact form onto the same API
- [ ] Eval set of ~30 questions; run it before every prompt or model change

## Phase 6: Extras
- [ ] `/now` and `/uses` pages
- [ ] Mascot fox. Full spec and its own phases: [10-mascot-character.md](10-mascot-character.md). Needs the design phase done first.

## Definition of done (every page)
- Content comes from `src/data/`, with no hard-coded copy
- Has a unique `<title>` + description + OG tags
- Has a path to `/contact`
- Responsive at 360px, 768px and 1280px
- Keyboard accessible, images have alt text
- `npm run lint` and `npm run build` pass
