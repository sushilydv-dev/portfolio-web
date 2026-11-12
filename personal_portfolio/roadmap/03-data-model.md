# 03 — Data Model

All site content lives in `src/data/` as plain JS modules that export arrays and objects. Components only render data. They never hard-code copy.

Why plain JS (not JSON or a CMS):
- Comments and `TODO`s can sit next to the content.
- Imports are tree-shaken and type-hinted by the editor.
- No backend or CMS to maintain. Updating content = edit a file, push, auto-deploy.

`TODO:` marks content Sushil still needs to supply (collected in [06-content-checklist.md](06-content-checklist.md)). Everything else below is drafted from his profile and is ready to use.

## Files

```
src/data/
├── profile.js        Identity, pitch, availability, highlights
├── socials.js        External profile links
├── navigation.js     Header + footer links
├── services.js       Service pillars
├── process.js        "How it works" steps
├── faqs.js           Services page FAQ
├── projects.js       Projects + full case-study content
├── experience.js     Work history
├── education.js      Degrees
├── skills.js         Grouped skills
├── testimonials.js   Empty until real ones exist
└── seo.js            Site-wide SEO defaults
```

---

## `profile.js`

```js
export const profile = {
  name: 'Sushil Yadav',
  role: 'Full Stack Developer',
  headline: 'Full Stack Developer: React, Node.js, PostgreSQL & AI applications',
  pitch:
    'I build full-stack web applications with React, Node.js and PostgreSQL, from database design to deployment, and add AI features like document chat, smart search and private, locally hosted LLMs.',
  stackLine: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Local LLMs / RAG'],
  location: 'India',
  timezone: 'Asia/Kolkata',        // used for the live local-time display
  email: 'TODO',                   // ideally hello@<your-domain>
  available: true,                 // toggles the "Available for freelance" badge site-wide
  responseTime: '24 hours',
  resumeUrl: '/resume.pdf',
  photo: 'TODO',                   // src/assets/images/profile.webp
  about: [
    "I'm a software engineer who works mainly in the JavaScript and TypeScript ecosystem: React on the front end, Node.js and Express on the back end, and PostgreSQL, MongoDB and Redis for data.",
    'I care about how production software actually works: clean API design, authentication and role-based access, relational data modelling, and what happens when an app has to scale beyond one server.',
    'Day to day I work as an SDE focused on local LLMs, building AI features that run on private infrastructure with Ollama, so sensitive data never leaves the company. I also build integrations, automations and Chrome extensions, including SAP integrations.',
  ],
  highlights: [
    { title: 'End-to-end ownership', text: 'From database schema to deployed app. One developer, no hand-offs.' },
    { title: 'Beyond CRUD', text: 'Role-based access, payment flows and multi-tenant data in real projects.' },
    { title: 'Useful, private AI', text: 'RAG with source citations, and local LLMs when your data can’t go to a third-party API.' },
    { title: 'Clear communication', text: 'Weekly updates, documented code and a clean handover.' },
  ],
  currentlyExploring: ['Distributed rate limiting', 'System design & horizontal scaling'],
}
```

## `socials.js`

```js
export const socials = [
  { id: 'github',   label: 'GitHub',   href: 'https://github.com/sushilydv-dev' },
  { id: 'linkedin', label: 'LinkedIn', href: 'TODO' },
  { id: 'upwork',   label: 'Upwork',   href: 'TODO' },
  { id: 'email',    label: 'Email',    href: 'mailto:TODO' },
]
```

## `navigation.js`

```js
export const mainNav = [
  { label: 'Work', to: '/work' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export const footerNav = [...mainNav, { label: 'Resume', to: '/resume.pdf', external: true }]

export const headerCta = { label: 'Hire me', to: '/contact' }
```

## `services.js`

```js
export const services = [
  {
    id: 'web-apps',
    number: '01',
    title: 'Full-stack web applications',
    audience: 'For founders and businesses who need a working product, not just a landing page.',
    description:
      'Complete web apps built with React, Node.js/Express and PostgreSQL, including authentication, user roles, dashboards and deployment.',
    deliverables: [
      'Responsive React frontend',
      'REST API with authentication and role-based access',
      'PostgreSQL database design',
      'Deployed app + documented codebase',
    ],
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Sequelize'],
    exampleProjects: ['tims'],
  },
  {
    id: 'ai-features',
    number: '02',
    title: 'AI-powered features',
    audience: 'For teams who want to add AI to their product or internal tools, including ones that can’t send data to OpenAI.',
    description:
      'Chat with your documents, AI search over your knowledge base, and LLM features that cite their sources. Run on cloud APIs or on self-hosted local models for privacy.',
    deliverables: [
      'RAG pipeline (document ingestion, embeddings, retrieval)',
      'Vector database setup (Pinecone or pgvector)',
      'Cloud LLM integration (Gemini / OpenAI)',
      'Self-hosted local LLMs with Ollama',
      'Chat UI with source citations',
    ],
    stack: ['Node.js', 'Python', 'Ollama', 'Pinecone', 'Gemini API', 'OpenAI API', 'LangChain'],
    exampleProjects: ['neurovault'],
  },
  {
    id: 'apis-integrations',
    number: '03',
    title: 'APIs & enterprise integrations',
    audience: 'For businesses that need their systems to talk to each other: payments, ERPs, third-party services.',
    description:
      'Backend APIs and integrations such as payment gateways, SAP and third-party APIs, so your systems stay in sync without manual work.',
    deliverables: [
      'REST API design and documentation',
      'SAP integrations',
      'Payment integration (Razorpay)',
      'Third-party API integrations',
    ],
    stack: ['Node.js', 'Express', 'TypeScript', 'PostgreSQL', 'Redis', 'Razorpay', 'SAP'],
    exampleProjects: ['tims'],
  },
  {
    id: 'automation-extensions',
    number: '04',
    title: 'Automation & Chrome extensions',
    audience: 'For teams losing hours to repetitive browser and back-office work.',
    description:
      'Custom Chrome extensions, scripts and scheduled workflows that automate repetitive tasks and connect the tools your team already uses.',
    deliverables: [
      'Chrome extension (Manifest V3), ready for the Chrome Web Store',
      'Workflow automation and scheduled jobs',
      'Dockerised services, easy to deploy',
      'Documentation and handover',
    ],
    stack: ['JavaScript', 'TypeScript', 'Chrome Extensions API', 'Node.js', 'Python', 'Docker'],
    exampleProjects: [], // TODO: add a Chrome extension / automation project to projects.js
  },
]
```

## `process.js`

```js
export const process = [
  { step: 1, title: 'Discovery', text: 'A short call to understand your goals, users and scope.' },
  { step: 2, title: 'Proposal',  text: 'A clear plan with timeline and a fixed or milestone-based price.' },
  { step: 3, title: 'Build',     text: 'Weekly updates and working increments you can review as we go.' },
  { step: 4, title: 'Handover',  text: 'Deployment, documentation and a support window after launch.' },
]
```

## `faqs.js`

```js
export const faqs = [
  { q: 'How do you price projects?', a: 'Well-defined projects get a fixed price, larger ones are split into milestones, and ongoing work can be hourly. You get a quote after the discovery call.' },
  { q: 'How long does a typical project take?', a: 'It depends on scope. A focused feature or integration can take 1–2 weeks; a complete web application usually takes several weeks. The proposal includes a timeline.' },
  { q: 'How will we communicate?', a: 'Email, Upwork or a channel of your choice, with weekly progress updates. I work in IST (UTC+5:30) and can overlap with European and US mornings.' },
  { q: 'Which technologies do you use?', a: 'Mainly React, Node.js, Express, TypeScript and PostgreSQL, with Redis and Docker where they help. For AI features: Ollama for local models, plus Pinecone, Gemini and OpenAI APIs. I will suggest what fits your project rather than force a stack.' },
  { q: 'Can AI features run without sending our data to OpenAI?', a: 'Yes. I build with locally hosted open models (via Ollama) that run on your own servers, so documents and prompts stay inside your infrastructure.' },
  { q: 'Do I own the code?', a: 'Yes. On full payment, the code and all project assets are yours. Happy to sign an NDA.' },
  { q: 'Do you offer support after launch?', a: 'Yes. Every project includes a support window for fixes, and ongoing maintenance is available.' },
]
```

## `projects.js`

The most important file. Each project carries both its **card data** (used on Home and `/work`) and its **case-study content** (used on `/work/:slug`).

### Schema

```js
{
  slug: 'string',            // URL: /work/:slug
  title: 'string',
  tagline: 'string',         // one line for cards + case-study header
  category: 'string',        // 'AI application' | 'Web application' | ...
  status: 'live' | 'in-progress',
  year: 2026,
  featured: true,
  order: 1,
  role: 'string',
  timeline: 'string',
  stack: { frontend: [], backend: [], database: [], ai: [], integrations: [] },
  links: { live: 'url' | null, repo: 'url' | null },
  cover: 'path',             // screenshot/GIF in src/assets/images/projects/
  gallery: ['path'],
  caseStudy: {
    problem: 'string',
    solution: 'string',
    features: ['string'],
    architecture: { summary: 'string', diagram: 'path' | null, points: ['string'] },
    challenges: [{ title: 'string', solution: 'string' }],
    outcome: ['string'],
  },
}
```

### Content

```js
export const projects = [
  {
    slug: 'neurovault',
    title: 'NeuroVault',
    tagline: 'AI knowledge assistant: upload documents, ask questions, get answers with sources.',
    category: 'AI application',
    status: 'in-progress',          // TODO: set to 'live' once deployed
    year: 2026,
    featured: true,
    order: 1,
    role: 'Solo: design, frontend, backend, AI pipeline',
    timeline: 'TODO',               // e.g. '2026 · ~3 months'
    stack: {
      frontend: ['React', 'Vite', 'Framer Motion'],
      backend: ['Node.js', 'Express', 'JWT'],
      database: ['PostgreSQL', 'Sequelize'],
      ai: ['RAG', 'Pinecone', 'Gemini API', 'Embeddings'],
      integrations: [],
    },
    links: { live: null /* TODO */, repo: 'https://github.com/sushilydv-dev/neurovault' },
    cover: 'TODO',
    gallery: [],
    caseStudy: {
      problem:
        "Teams keep knowledge spread across documents nobody can search properly. Generic chatbots can't answer questions about your own files, and when they try they can't show where an answer came from.",
      solution:
        'NeuroVault lets teams create workspaces, upload documents into a shared knowledge base and ask questions in plain language. Answers are generated only from the workspace’s own documents and include citations back to the source.',
      features: [
        'Workspaces with admin and member roles',
        'Join requests so admins control who gets access',
        'Document upload and knowledge-base management',
        'AI chat that answers from your documents',
        'Source citations on every answer',
        "Strict isolation: one workspace can never see another's data",
      ],
      architecture: {
        summary:
          'A React frontend talks to an Express REST API. PostgreSQL stores users, workspaces, memberships and document metadata; Pinecone stores document embeddings. Each question retrieves the most relevant chunks before the LLM generates an answer.',
        diagram: null, // TODO: architecture diagram
        points: [
          'JWT authentication with role-based authorization (admin / member)',
          'Per-workspace Pinecone namespaces (workspace_${id}) to isolate vector data between tenants',
          'Retrieval-augmented generation: embed question → retrieve context → generate answer with citations',
        ],
      },
      challenges: [
        {
          title: 'Keeping tenants’ data separate in a shared vector index',
          solution: 'Every workspace writes to and queries its own Pinecone namespace, so retrieval is scoped by design rather than by filtering after the fact.',
        },
        {
          title: 'Making AI answers trustworthy',
          solution: 'Retrieved chunks carry document metadata through the pipeline so each answer can cite its sources.',
        },
        // TODO: add one more real challenge Sushil hit (e.g. chunking strategy, upload processing)
      ],
      outcome: [
        'TODO: real outcome, e.g. "Answers questions across N documents with cited sources"',
        'Next: local-model support with Ollama / Llama',
      ],
    },
  },
  {
    slug: 'tims',
    title: 'TIMS',
    tagline: 'Training institute management system: students, trainers, batches, attendance and payments in one place.',
    category: 'Web application',
    status: 'in-progress',          // TODO: set to 'live' once deployed
    year: 2026,
    featured: true,
    order: 2,
    role: 'Solo: database design, backend API, frontend',
    timeline: 'TODO',
    stack: {
      frontend: ['React'],          // TODO: confirm
      backend: ['Node.js', 'Express', 'JWT'],
      database: ['PostgreSQL', 'Sequelize'], // TODO: confirm ORM
      ai: [],
      integrations: ['Razorpay'],
    },
    links: { live: null /* TODO */, repo: 'https://github.com/sushilydv-dev/TIMS' },
    cover: 'TODO',
    gallery: [],
    caseStudy: {
      problem:
        'Training institutes often run on spreadsheets and messaging apps: student records, batches, attendance, grades and fee payments all live in different places, with no clear control over who can see or change what.',
      solution:
        'TIMS centralises institute operations in one web app with four roles (Admin, HR, Trainer, Student), each with its own dashboard and permissions, plus online fee payments.',
      features: [
        'Four roles with separate permissions: Admin, HR, Trainer, Student',
        'Student and trainer management',
        'Training batches and scheduling',
        'Attendance tracking',
        'Grades, assessments and certificates',
        'Online fee payments via Razorpay',
      ],
      architecture: {
        summary:
          'An Express REST API over a normalised PostgreSQL schema of about 20 tables, with role-based access control enforced in middleware.',
        diagram: null, // TODO: ER diagram / architecture diagram
        points: [
          'RBAC: roles and permissions modelled in the database, checked by middleware on every route',
          'Relational schema of ~20 tables covering users, batches, enrolments, attendance, grades, payments',
          'Razorpay integration for fee payments with server-side verification',
        ],
      },
      challenges: [
        {
          title: 'Designing permissions for four very different roles',
          solution: 'Permissions are data, not hard-coded checks: a role-permission mapping in PostgreSQL drives reusable authorization middleware.',
        },
        {
          title: 'Handling payments safely',
          solution: 'TODO: describe how payments are created and verified (e.g. order creation on the server, signature verification before marking fees paid).',
        },
      ],
      outcome: [
        'TODO: real outcome',
      ],
    },
  },
]
```

> Add a third project when one exists. Best candidates: the **portfolio AI assistant** ([09-portfolio-chatbot.md](09-portfolio-chatbot.md)), a published **Chrome extension** (gives service 04 its proof), or a small freelance job. Two strong projects is acceptable for launch; three or more is better.

## `experience.js`

```js
export const experience = [
  {
    company: 'TODO',                // current employer name
    role: 'Software Development Engineer: Local LLMs',
    start: '2026-07',
    end: null,                      // null = Present
    location: 'TODO',
    points: [
      'Build AI features on self-hosted local LLMs (Ollama), keeping company data on private infrastructure',
      'Develop integrations and automations, including SAP integrations',
      'TODO: one concrete result (e.g. a tool shipped, a process automated, time saved)',
    ],
    stack: ['Ollama', 'Local LLMs', 'Python', 'TypeScript', 'Node.js', 'SAP'], // TODO: confirm
  },
  {
    company: 'LBM Solutions',
    role: 'MERN Stack Developer',
    start: '2026-02',
    end: '2026-07',
    location: 'TODO',
    points: [
      'Built React frontends and Node.js/Express REST APIs with MongoDB',
      'Integrated frontend features with backend APIs',
      'TODO: one specific feature or module you shipped',
    ],
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
  },
]
```

## `education.js`

```js
export const education = [
  { degree: 'Master of Computer Applications (MCA)', institution: 'Chitkara University', period: 'TODO' },
  { degree: 'Bachelor of Computer Applications (BCA)', institution: 'TODO', period: '2021 – 2024' },
]
```

## `skills.js`

Only skills he can discuss confidently in an interview or client call.

```js
export const skills = [
  { group: 'Languages',            items: ['JavaScript', 'TypeScript', 'Python', 'SQL'] },
  { group: 'Frontend',             items: ['React', 'Tailwind CSS', 'HTML', 'CSS', 'Vite', 'Framer Motion'] },
  { group: 'Backend',              items: ['Node.js', 'Express', 'REST APIs', 'JWT auth', 'RBAC'] },
  { group: 'Databases & caching',  items: ['PostgreSQL', 'MongoDB', 'Redis', 'Sequelize'] },
  { group: 'AI & LLM',             items: ['Ollama', 'Local LLMs', 'RAG', 'Pinecone', 'Gemini API', 'OpenAI API', 'LangChain', 'Embeddings'] },
  { group: 'Integrations & automation', items: ['SAP integrations', 'Third-party APIs', 'Chrome extensions', 'Workflow automation', 'Razorpay'] },
  { group: 'DevOps & tools',       items: ['Docker', 'Git', 'GitHub', 'VS Code', 'npm'] },
]
// TODO: add the other tools you use but couldn't name yet. Keep only what you'd be comfortable being asked about.
```

## `testimonials.js`

```js
// Leave empty until there are real testimonials (Upwork reviews, internship mentor, colleagues).
// The section is hidden automatically while this array is empty.
export const testimonials = [
  // { quote: '', name: '', title: '', company: '', source: 'Upwork' | 'LinkedIn', url: '' },
]
```

## `seo.js`

```js
export const seo = {
  siteName: 'Sushil Yadav',
  siteUrl: 'TODO',   // e.g. https://sushilyadav.dev
  defaultTitle: 'Sushil Yadav: Full Stack Developer (React, Node.js, PostgreSQL)',
  titleTemplate: '%s · Sushil Yadav',
  defaultDescription:
    'Freelance full-stack developer building web applications with React, Node.js and PostgreSQL, plus AI features like RAG, document chat and private local LLMs.',
  ogImage: '/og-image.png',
}
```
