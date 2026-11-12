# 01 — Sitemap and Routes

## Sitemap

```
/                       Home
├── /work               All projects
│   ├── /work/neurovault    Case study
│   └── /work/tims          Case study
├── /services           What I offer, process, FAQ
├── /about              Story, experience, education, skills
├── /contact            Enquiry form + direct contact
├── /resume.pdf         Static file in public/
└── *                   404 page

Phase 2
├── /notes              Technical writing index
│   └── /notes/[slug]       Single note
Phase 3
├── /now                What I'm working on / learning right now
└── /uses               Dev setup and tools
```

## Route table

| Route | Page component | Data sources | Priority |
|-------|----------------|--------------|----------|
| `/` | `HomePage` | profile, services, projects (featured), experience, socials | MVP |
| `/work` | `WorkPage` | projects | MVP |
| `/work/:slug` | `ProjectPage` | projects (by slug) → 404 if not found | MVP |
| `/services` | `ServicesPage` | services, process, faqs | MVP |
| `/about` | `AboutPage` | profile, experience, education, skills | MVP |
| `/contact` | `ContactPage` | profile, socials, services (for the form's dropdown) | MVP |
| `*` | `NotFoundPage` | — | MVP |
| `/notes`, `/notes/:slug` | `NotesPage`, `NotePage` | Markdown files | Phase 2 |
| `/now`, `/uses` | `NowPage`, `UsesPage` | now, uses | Phase 3 |

## Primary navigation (header)

Order matches what a client wants to check, in sequence:

```
[Sushil Yadav]          Work   Services   About   Contact     [Hire me →]
```

- The **logo/name** links to `/`.
- **Hire me →** is a highlighted button linking to `/contact`. It is the single primary CTA in the header.
- On mobile, the links collapse into a menu button. "Hire me" stays visible.
- The current page link shows an active state.
- A **skip-to-content** link comes first, for accessibility (the reference site does this).

## Footer

```
Got an idea? Let's build it.          [Start a project →]   hello@<domain>

Work · Services · About · Contact · Resume
GitHub · LinkedIn · Upwork · Email
© 2026 Sushil Yadav · Based in India · Local time 14:32 IST
```

- The **closing CTA block** is part of the footer layout, so it appears on every page automatically (except `/contact`, where it is hidden).
- The **local time (IST)** helps international clients judge time-zone overlap.

## URL conventions

- Lowercase, hyphenated slugs (`/work/neurovault`, not `/work/NeuroVault`).
- No trailing slashes.
- Anchor IDs on home sections (`#services`, `#work`) so links can deep-link into them.
- `/resume.pdf` is a stable URL, so the same link works on Upwork and LinkedIn forever.
