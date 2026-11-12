# 02 — Page Specs

Section-by-section content for each page. "Data:" names the file in `src/data/` the section reads from (see [03-data-model.md](03-data-model.md)). Every page except `/contact` ends with the shared **closing CTA** from the footer.

---

## `/` Home

Goal: explain who he is, show proof, push to contact. Each section is a short teaser that links to its full page.

### 1. Hero
- **Availability badge:** "Available for freelance projects" (hidden when `profile.available` is false).
- **Name:** Sushil Yadav
- **Headline:** Full Stack Developer
- **Pitch** (1–2 lines): "I build full-stack web applications with React, Node.js and PostgreSQL, and add AI features like document chat, smart search and private local LLMs."
- **Stack line:** React · Node.js · TypeScript · PostgreSQL · Local LLMs / RAG
- **CTAs:** `Start a project →` (/contact) as primary, `View my work` (/work) as secondary.
- **Social icons:** GitHub, LinkedIn, Upwork.
- Data: `profile`, `socials`

### 2. Selected work
- Heading: "Selected work". Link: "All work →" (/work).
- The 2 featured projects as **large cards**: title, one-line summary, category, stack chips, year, and links to the case study, live demo and code.
- Data: `projects` where `featured: true`

### 3. What I do (services teaser)
- Heading: "What I can build for you". Link: "Services & process →" (/services).
- Four numbered items (01–04): title + one-line description + 3 example deliverables.
- Data: `services`

### 4. Why work with me (trust signals)
- 3–4 short points, each backed by a fact (no empty adjectives):
  - **End-to-end ownership:** "From database schema to deployed app. One person, no hand-offs."
  - **Real-world complexity:** "Role-based access, payments, multi-tenant data. Not just CRUD."
  - **Useful, private AI:** "RAG with source citations, and local LLMs when your data can't leave your servers."
  - **Clear communication:** "Weekly updates, documented code, clean handover."
- Data: `profile.highlights`

### 5. Experience snapshot
- Compact timeline: SDE, Local LLMs (Jul 2026 – present) · MERN Stack Developer, LBM Solutions (Feb – Jul 2026) · MCA, Chitkara University.
- Link: "More about me →" (/about).
- Data: `experience`, `education`

### 6. Testimonials *(hidden until data exists)*
- Renders only if `testimonials.length > 0`. Never ship placeholder quotes.
- Data: `testimonials`

---

## `/work` Work index

- **Intro:** "Work", with the project count and a one-line note ("Full-stack products and AI applications, built end to end.").
- **Project list:** one row or card per project showing title, category, primary stack, year, one-sentence summary and status (Live / In progress). Each links to `/work/:slug`.
- Sorted by `order`, featured first.
- **Category filter:** only once there are 6+ projects (later).
- Data: `projects`

---

## `/work/:slug` Case study

The most important page for converting clients. Structure (extends the reference site's case-study page):

1. **Header**
   - Eyebrow: `status · year · category` (e.g. "In progress · 2026 · AI application")
   - Title + one-line tagline
   - Buttons: `Live demo` (if `liveUrl`), `Source code` (if `repoUrl`)
   - Back link: "← All work"
2. **Meta panel:** Role · Timeline · Status · Stack (grouped by Frontend / Backend / Database / AI / Integrations)
3. **Cover visual:** screenshot or short demo GIF/video (asset slot; see design phase)
4. **The problem:** what users needed and why existing approaches fell short
5. **The solution:** what was built, in plain language a client understands
6. **Key features:** bullet list, each written as a user-facing benefit
7. **Architecture:** a diagram plus a short explanation (request flow, data model, auth, external services)
8. **Technical challenges:** 2–4 "Challenge → How I solved it" pairs. This is where engineering depth shows.
9. **Results / what I learned:** outcomes, numbers if real, next steps
10. **Screenshots gallery** (optional)
11. **Next project →** link to the next case study, so visitors don't dead-end
12. **CTA:** "Need something like this? Let's talk →" (/contact, with the project pre-filled in the form via `?ref=neurovault`)

Data: `projects` (looked up by slug; 404 if not found)

---

## `/services` Services

1. **Hero:** "Let's build your product together". Badge: available / not available. CTA: `Start a project →`.
2. **Services (01–04):** for each, a title, a "who it's for" line, a description, a **deliverables** list, **example projects** (linking to case studies) and the typical tech.
3. **How it works:** 4 steps:
   1. **Discovery:** short call to understand goals and scope
   2. **Proposal:** plan, timeline, and fixed or milestone-based price
   3. **Build:** weekly updates, working increments you can review
   4. **Handover:** deployment, documentation, support window
4. **Engagement models:** fixed-price (well-defined scope) / milestone-based / hourly (ongoing work or maintenance). No prices: "Quoted per project".
5. **FAQ:** 6–8 questions (see the data model), e.g. pricing, timelines, communication and time zones, tech choices, maintenance after launch, NDAs and code ownership.
6. **CTA**

Data: `services`, `process`, `faqs`

---

## `/about` About

1. **Intro:** photo + 2–3 short paragraphs. Who he is, what he builds and how he works (cares about how production systems work internally, prefers clear and maintainable architecture). First person, human tone.
2. **Experience timeline:** role, company, dates, 2–3 bullet achievements each.
3. **Education:** MCA, Chitkara University; BCA, 2021–2024.
4. **Skills:** grouped as Frontend / Backend / Databases / AI & LLM / Tools. Only list things he can discuss in an interview.
5. **Currently exploring:** distributed rate limiting, system design (horizontal scaling, load balancing). This signals growth without saying "aspiring".
6. **Resume:** "Download résumé (PDF)" button → `/resume.pdf`
7. **CTA**

Data: `profile`, `experience`, `education`, `skills`

---

## `/contact` Contact

1. **Heading:** "Let's work together". Subtext: "Tell me about your project. I usually reply within 24 hours."
2. **Enquiry form:**
   - Name *(required)*
   - Email *(required)*
   - Project type *(select: Full-stack web app / AI feature / API & integration / Automation or Chrome extension / Other)*
   - Budget range *(select, optional)*
   - Timeline *(select, optional)*
   - Message *(required)*
   - Hidden: `ref` from the query string (which case study they came from)
   - Honeypot field for spam
   - States: idle → submitting → success ("Thanks! I'll reply within 24 hours") / error (with an email fallback)
3. **Direct contact sidebar:** email (copy button), LinkedIn, Upwork, GitHub, time zone ("IST, UTC+5:30"), optional "Book a call" link (Cal.com/Calendly).
4. **No closing CTA** on this page.

Data: `profile`, `socials`, `services`

---

## `*` 404

- "This page doesn't exist." Links to Home, Work and Contact.

---

## Shared on every page

- Header nav, footer + closing CTA (described in [01-sitemap-and-routes.md](01-sitemap-and-routes.md))
- "Ask my AI assistant" launcher, bottom corner + ⌘K (see [09-portfolio-chatbot.md](09-portfolio-chatbot.md))
- Per-page `<title>`, meta description and Open Graph tags (see [04-architecture.md](04-architecture.md))
- Scroll to top on route change
