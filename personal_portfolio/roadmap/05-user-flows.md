# 05 — User Flows

Conversion = a visitor **submits the contact form**, **emails**, or **clicks through to Upwork / LinkedIn**. Every flow below ends at one of these.

## Flow 1: Client from Upwork / LinkedIn (most common)

Arrives already somewhat interested and checks whether he's legit.

```
Upwork profile link
   └─▶ Home
         ├─ Hero: "Full Stack Developer" + "Available" badge     → understands the offer (5 sec)
         ├─ Selected work: NeuroVault card                       → clicks
         │     └─▶ /work/neurovault
         │           ├─ Problem / Solution / Architecture         → sees real depth
         │           ├─ Live demo / Source code                   → verifies it's real
         │           └─ "Need something like this? Let's talk →"
         │                 └─▶ /contact?ref=neurovault  ✅ submits form
         └─ (or) header "Hire me" at any point ─────────────────▶ /contact ✅
```

**Design requirement:** the case study must end with a CTA *and* a "Next project →" link. No dead ends.

## Flow 2: Client from Google / shared link

Doesn't know him yet and needs convincing about services and process.

```
Search / shared link
   └─▶ Home or /services
         ├─ Services: finds their need (web app / AI / integration)
         ├─ Example project link on the service              → /work/:slug (proof)
         ├─ How it works: 4 steps                            → reduces "what happens next?" anxiety
         ├─ FAQ: pricing, ownership, communication           → removes objections
         └─ "Start a project →" ─────────────────────────────▶ /contact ✅
```

## Flow 3: Recruiter / hiring manager

Has 1–2 minutes and wants stack, experience and résumé.

```
Job application / LinkedIn
   └─▶ Home
         ├─ Hero stack line + Experience snapshot
         └─▶ /about
               ├─ Experience timeline, Education, Skills
               ├─ Download résumé ─────────────────────────▶ /resume.pdf ✅
               └─ GitHub link ─────────────────────────────▶ github.com/sushilydv-dev ✅
```

## Flow 4: Returning visitor / ready to talk

```
Any page ─▶ header "Hire me" or footer email (copy button) ─▶ ✅
```

## CTA map

Every page has at least one path to contact:

| Page | Primary CTA | Secondary CTA |
|------|-------------|---------------|
| Home (hero) | Start a project → `/contact` | View my work → `/work` |
| Home (each section) | — | "All work →", "Services & process →", "More about me →" |
| Work index | Project rows → `/work/:slug` | Closing CTA |
| Case study | Let's talk → `/contact?ref=:slug` | Live demo, Source, Next project |
| Services | Start a project → `/contact` | Example case-study links |
| About | Download résumé | Closing CTA |
| Contact | Submit form | Email, LinkedIn, Upwork, Book a call |
| Every page | Header "Hire me" | Footer closing CTA + email |

## Contact form state machine

```
 idle ──submit──▶ validating ──invalid──▶ idle (inline field errors)
                     │
                   valid
                     ▼
                submitting ──fail──▶ error ("Something went wrong. Email me at …") ──retry──▶ submitting
                     │
                  success
                     ▼
               success ("Thanks, I'll reply within 24 hours.")  + analytics event
```

## What to measure (analytics)

| Metric | Why |
|--------|-----|
| Contact form submissions (by `ref`) | Main conversion; shows which case study sells best |
| Case-study views | Which project draws interest |
| "Hire me" / CTA clicks by location | Which CTAs work |
| Résumé downloads | Recruiter interest |
| Traffic source (Upwork / LinkedIn / Google / direct) | Where to invest effort |
