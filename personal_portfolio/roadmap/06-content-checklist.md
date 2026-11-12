# 06 — Content Checklist

## Must provide before launch

### Identity and links
- [ ] Professional photo (square, good light, plain background)
- [ ] Email for enquiries (ideally `hello@<domain>` after the domain is bought)
- [ ] LinkedIn URL
- [ ] Upwork profile URL. Fill the Upwork profile too, and link both ways.
- [ ] Domain name decision (e.g. `sushilyadav.dev`, `sushilyadav.in`, `sushil.dev`)
- [ ] Résumé PDF (one page, same positioning as the site)

### Experience
- [x] Roles and dates: MERN Stack Developer, LBM Solutions (Feb – Jul 2026); SDE, Local LLMs (Jul 2026 – present)
- [ ] Current employer name (or confirm it should stay unnamed), location, and one concrete result there
- [ ] LBM Solutions location and one concrete feature or module you shipped
- [ ] Confirm the stack used in the current role (Python? TypeScript? which models?)
- [ ] MCA years; BCA institution name
- [ ] The remaining tools you use but couldn't name yet, for `skills.js`

### Proof for the newer skills
Skills with no visible proof are weak on a portfolio. Ideally one small public project for each:
- [ ] A Chrome extension (even a small published one) → becomes a project card for service 04
- [ ] An automation or integration sample (sanitised; never company code or SAP details from work)
- [ ] A local-LLM demo, e.g. NeuroVault running on Ollama, or the portfolio chatbot itself

### Projects (most important)
- [ ] **Deploy NeuroVault and TIMS with live demo URLs.** Clients trust "Live demo" far more than "Source code". Provide demo login credentials per role if needed (e.g. a TIMS demo admin/trainer/student).
- [ ] Screenshots of each project: 3–5 key screens, desktop size
- [ ] Short screen-recording GIF/video for each (15–30 sec)
- [ ] Architecture diagram for NeuroVault (request → retrieval → LLM → answer)
- [ ] ER diagram for TIMS (the ~20-table schema is a strong selling point. Show it.)
- [ ] TIMS: confirm frontend stack and ORM; describe how Razorpay payments are verified
- [ ] One more real technical challenge per project, plus how you solved it
- [ ] Real outcomes (numbers only if true: documents processed, roles supported, tables, endpoints)
- [ ] Make both GitHub repos presentable: README with screenshots, setup steps and stack; no secrets committed
- [ ] (Nice) A third project. Even a small freelance job or useful open-source tool helps.

### Social proof (as it comes)
- [ ] Testimonial from the LBM Solutions mentor or a colleague (LinkedIn recommendation counts)
- [ ] First Upwork reviews. Add them as soon as they exist.

## ❌ Never put on the site

The agent profile contains personal job-search information. None of it belongs on a client-facing site:

| Exclude | Reason |
|---------|--------|
| Accenture / Infosys / Tech Mahindra recruitment details, test scores, interview outcomes | Irrelevant to clients; reads as job-hunting, not freelancing |
| "Aspiring" developer wording | Undermines client confidence |
| Atlassian or "dream company" ambitions | Signals he'll leave freelance work soon |
| No campus placement / career struggles | Private; not useful to clients |
| Salary, financial goals, city preferences for jobs | Private |
| Example payment amounts from TIMS (₹20,000 etc.) | Test data, meaningless out of context |
| "Intended" or planned features presented as done (e.g. Ollama support in NeuroVault, until it is actually built) | Only claim what is built; list planned work under "Next" |
| Employer's confidential details: internal system names, client names, SAP specifics, code | Describe the *kind* of work, never the employer's internals |
| Invented years of experience, client counts, fake testimonials, placeholder logos | Easy to check, and they destroy trust when caught |
| Learning sources (e.g. which YouTube course) | Fine for a blog post, not for positioning |

## 📏 Honesty guidelines for "decent experience"

The goal is to look **capable and credible**, not senior. Show experience through:
- **Shipped scope:** "~20-table relational schema with 4-role RBAC and payments" says more than "1+ years experience".
- **Real roles:** current SDE role (local LLMs) + MERN Stack Developer at LBM Solutions + independent products.
- **Engineering judgment:** challenge → solution write-ups in case studies, and phase-2 technical notes (e.g. rate limiting across multiple servers with Redis).
- **Professional process:** the 4-step process, clear FAQ and fast response time. Clients value reliability as much as skill.
