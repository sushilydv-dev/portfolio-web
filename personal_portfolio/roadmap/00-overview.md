# 00 — Overview

## Goal

Build a portfolio that turns visitors into **freelance enquiries**. The secondary goal is to be a credible link to put on Upwork, LinkedIn, GitHub and job applications.

Success looks like:
- A client can understand what Sushil offers within **5 seconds** of landing.
- A client can see **proof** (a case study, live demo or code) within **2 clicks**.
- A client can **start a conversation** from any page in **1 click**.

## Audiences (in priority order)

| Audience | What they want to know | Where they should end up |
|----------|------------------------|--------------------------|
| **Freelance clients** (startup founders, small businesses, agencies, Upwork clients) | Can he build my web app or AI feature? Is he reliable? How do we start? | `/contact` (enquiry form) |
| **Recruiters / hiring managers** | Stack, real projects, experience, education | `/resume.pdf`, `/about`, GitHub |
| **Other developers** | How things were built | Case studies, GitHub, Notes (phase 2) |

## Positioning

**Headline identity:** Full Stack Developer: JavaScript · React · Node.js · Express · PostgreSQL · AI Applications

**One-line pitch (draft):**
> I build full-stack web applications with React, Node.js and PostgreSQL, from database design to deployment. I also add AI features like document chat, RAG search and private, locally hosted LLMs.

**Experience to lead with:**
- **SDE: Local LLMs** (Jul 2026 – present): local LLMs with Ollama, integrations (including SAP), automation
- **MERN Stack Developer, LBM Solutions** (Feb 2026 – Jul 2026)

**Four service pillars:**
1. **Full-stack web applications:** React frontends, Node/Express backends, PostgreSQL.
2. **AI-powered features:** RAG / document assistants, vector search, and **self-hosted local LLMs** for clients who can't send data to OpenAI. His current role makes this a real differentiator.
3. **APIs & enterprise integrations:** REST APIs, SAP, payments (Razorpay) and third-party services.
4. **Automation & Chrome extensions:** browser extensions, scripts and scheduled workflows.

**Tone:** direct, practical, engineer-to-client. Prefer "I build", not "aspiring" or "passionate learner". Show depth through *how* things were built (RBAC, multi-tenant isolation, payment flows), not adjectives.

### Positioning rules
- Never position him as a data analyst or data scientist.
- Lead with full-stack. AI comes second, with NeuroVault and the current local-LLM role as the proof. "Private / local AI" is the sharpest niche angle.
- Don't use the word "aspiring" anywhere public. To a client it means "not ready yet".
- Don't claim a number of years of experience. Show internship + current role + shipped projects instead (see [06-content-checklist.md](06-content-checklist.md)).

## Reference analysis: bhattrahul.in

What the reference site does, and what we take from it:

| Reference pattern | Adopt? | Notes |
|---|---|---|
| Homepage = short teasers of each area, each linking to a full page | ✅ Yes | Homepage stays scannable; depth lives on subpages |
| "Available for freelance projects" badge in hero | ✅ Yes | Strong signal for clients; driven by a single `available` flag |
| "Selected work" list → `/work` index → `/work/[slug]` detail | ✅ Yes | Core of our proof strategy |
| Case study page: eyebrow (status · year · category), metadata (role, year, status, stack), Why / What it does / tech sections, source links | ✅ Yes | We extend it with *Problem → Solution → Architecture → Challenges → Outcome* |
| Numbered services (01–04) + `/services` page with deliverables, "How it works" 4-step process, FAQ | ✅ Yes | The process + FAQ answer client objections before they ask |
| Same closing CTA on every page ("Got an idea? Let's build it.") | ✅ Yes | Every page ends with a path to contact |
| Footer with secondary links (Resume, Now, Uses) | ✅ Partly | Resume in v1; Now/Uses in phase 3 |
| Writing / blog | ⏳ Phase 2 | Short technical notes, e.g. "Why in-memory rate limiting breaks across servers" |
| Photography section | ❌ No | Not relevant |
| "Ask about Rahul" ⌘K panel | ✅ Yes, upgraded | An AI assistant that answers from the site's content, a live demo of his RAG skills. See [09-portfolio-chatbot.md](09-portfolio-chatbot.md) |
| Category filter on `/work` | ⏳ Later | Only worth it once there are 6+ projects |

## Common patterns from other portfolios that convert

From freelance-portfolio guides (Webflow, Fueler, Wethos, MiddleHost):
- A clear headline that states **who you help and with what**.
- **2–6 projects with context:** problem, your role, stack and result.
- **Case studies** that tie work to the client problem it solved.
- A short, human **About**. Clients hire people.
- **Social proof** (testimonials, client logos) as it becomes available. The section stays hidden until real data exists.
- A **contact route on every page** with low friction (form + email + optional booking link).
