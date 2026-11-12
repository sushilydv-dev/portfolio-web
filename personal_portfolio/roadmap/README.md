# Portfolio Roadmap

Planning docs for **Sushil Yadav's** portfolio website. The site's job is to **win freelance clients**. It should also work as a strong link to send recruiters.

Design, colour schemes and animations are **out of scope for now** and will get their own doc later (`08-design-system.md`). These docs define *what* the site contains and *how* it is built, not how it looks.

## Documents

| # | File | What it answers |
|---|------|-----------------|
| 00 | [00-overview.md](00-overview.md) | Goals, audience, positioning, what we borrow from the reference sites |
| 01 | [01-sitemap-and-routes.md](01-sitemap-and-routes.md) | Every page, its URL, navigation and footer |
| 02 | [02-page-specs.md](02-page-specs.md) | Section-by-section content for every page |
| 03 | [03-data-model.md](03-data-model.md) | Shape of every data file, with Sushil's real content drafted in |
| 04 | [04-architecture.md](04-architecture.md) | Tech stack, folder structure, routing, SEO, contact form, deployment |
| 05 | [05-user-flows.md](05-user-flows.md) | How each type of visitor moves through the site and converts |
| 06 | [06-content-checklist.md](06-content-checklist.md) | What Sushil still needs to provide, and what must never go on the site |
| 07 | [07-build-plan.md](07-build-plan.md) | Phased milestones, from MVP to later extras |
| 08 | [08-design-system.md](08-design-system.md) | Theme, colours, typography, animations (in progress) |
| 09 | [09-portfolio-chatbot.md](09-portfolio-chatbot.md) | AI assistant that answers visitors' questions about Sushil: idea, architecture, flow |
| 10 | [10-mascot-character.md](10-mascot-character.md) | Animated fox kit that parkours across the page chasing the cursor: character, behaviour, engine, phases |

## Guiding principles

1. **Client-first.** Every page answers a client's question: *Can he build what I need? Has he done it before? How do I hire him?*
2. **Proof over claims.** Two deep case studies (NeuroVault and TIMS) beat ten shallow cards. Live demos and code links beat adjectives.
3. **Full-stack first, AI second.** Lead with "Full Stack Developer". AI/RAG is a differentiator, not the headline.
4. **Honest.** No invented years of experience, no fake testimonials, no inflated metrics. Early-career and credible beats senior-sounding and unbelievable.
5. **Content lives in data, not components.** All text is in `src/data/`, so updating the site never requires touching JSX.
6. **Fast and indexable.** Pages are pre-rendered to static HTML, use few dependencies and score well on Lighthouse.
