# 10 — Mascot Character

A small animated fox kit that lives on the page. It uses the page's elements as platforms to chase the mouse cursor and never quite catches it. It is **pure decoration**: it doesn't link to the chatbot, show info or affect navigation.

Build it **after** the design phase (`08-design-system.md`). Its platforms depend on the final layout and its colours on the final palette.

---

## 1. Character

### Concept
- **What:** a small upright fox kit (a young fox) with pointy ears and a big bushy tail.
- **Vibe:** cute, balanced rather than babyish.
- **Personality:** clumsy and determined. It looks capable, then fumbles, and never gives up.
- **The joke:** it chases the cursor across the page, gets close, grabs, and its paws close on nothing. It tumbles, shakes it off, and tries again. It never catches the cursor.
- **Working name:** "Kit" (internal only; never shown on the site, since it's pure decoration).

### Design rules
| Rule | Detail |
|------|--------|
| Size on screen | **40–48px tall** on desktop, ~36px on mobile |
| Proportions | Chibi: big round head ≈ 45–50% of height, short chubby body, stubby limbs; big fluffy tail with a cream tip |
| Silhouette | Must read at 40px as a solid shape. Pointy ears + bushy tail are the identity. No thin details |
| Face | Big eyes set low on the face with two shine dots each, soft blush on both cheeks, cat-style "w" mouth, cream cheek mask |
| Limbs | Clear arms with paws (for grabbing, hanging, climbing) and legs (for jumping, sliding, landing) |
| Style | **Smooth vector**, flat colours, maybe one soft shade; no outlines thinner than ~1.5px at final size |
| Colour | Classic orange red-fox colourway with a cream belly and tail tip. The site is light-theme only, so it only needs to contrast with light backgrounds |
| Original | An original character. Don't base it on an existing fox character from games, films or brands |

### What carries the personality (secondary motion)
- **Ears:** perk up when it spots the cursor, flatten on a miss, flop when it lands hard.
- **Tail:** swings for balance while falling and running, puffs up after a scare (a big fall), flicks after it recovers.
- **Face:** 18 defined expressions (see §3), each built from eyes, brows, mouth, blush and a small effect.

---

## 2. Behaviour

### Core loop
```
spot cursor → plan a route across platforms → run / jump / climb along it
  → get within reach → lunge and grab
  → paws pass through the cursor (miss)
  → tumble and fall to the nearest platform below → shake it off
  → look for the cursor again → repeat
```

### Behaviour rules
| Rule | Behaviour |
|------|-----------|
| Chase | Moves toward the cursor using only platforms (tagged elements + screen edges). Never flies while chasing |
| Never touch | When the cursor is within reach (~1.5 body lengths), it lunges. On contact its paws pass through, a small "whiff" puff plays, and it falls. **It can never end up holding or sitting on the cursor** |
| Cursor in empty air | Goes to the platform closest below the cursor, then jumps up at it (and misses) |
| Cursor unreachable | Gets as close as it can, sits and watches. Tries a big jump every few seconds, which usually fails comically |
| Cooldown | After a miss, waits ~1–2 s (shake-off animation) before chasing again, so it never looks frantic |
| Cursor still | After ~10 s with no mouse movement it sits on the nearest edge and swings its legs. After ~30 s it curls down and sleeps |
| Wake up | Moving the mouse wakes it with an ear-twitch, a stretch, then the chase resumes |
| Cursor leaves window | Sits and looks toward where the cursor left |
| Clumsy moments | Now and then (≈1 in 8 landings) it trips on landing or slips off a ledge and catches itself. Random but rare |

### Scrolling
The fox lives **in the page** (page coordinates), so it scrolls away with the content like everything else.

When scrolling stops (~150 ms with no scroll) and the fox is off-screen:

| You scrolled… | Fox is… | Re-entry |
|--------------|---------|----------|
| Down | Above the screen | **Floats in from the top on a leaf parachute**, swaying like a falling leaf, lands on the nearest visible platform and tosses the leaf away |
| Up | Below the screen | **Leaps up from the bottom edge**, catches the nearest ledge and pulls itself up |

- Re-entry spot: the platform nearest the cursor's horizontal position, or the centre if the cursor isn't on the page.
- If the visible screen has no platforms, it lands on the bottom edge of the screen.
- If you're still scrolling, it waits. It never re-enters mid-scroll.

### Moves (what the route can use)
| Move | When | Notes |
|------|------|-------|
| Walk / run | Along a platform | Walks for short distances, runs for long ones |
| Jump up | To a higher platform within jump height | Arc check, see §4 |
| Jump across | Over a gap to a platform at similar height | |
| Drop down | Off an edge to a lower platform | Hard landing if the fall is large |
| Ledge grab | Jump falls just short of a platform's top edge | Paws catch the edge → hang → pull up |
| Hang | On a ledge | Can shimmy sideways a little, or drop |
| Climb up | From hang to standing on the platform | |
| Wall slide | Against a tall element's side while falling | Slows the fall, then optionally wall-jumps off |

---

## 3. Animation list

**Drawn and animated in code. No animation tool, no artist, no runtime library.**

- The fox is an SVG made of separate parts: tail, two arms, two legs, body, head, two ears, and a face layer.
- Each part rotates around its own joint (shoulder, hip, neck, tail base, ear base). A **pose** is just a set of numbers: body position, lean, squash/stretch, and the angle of every limb.
- Each animation is a small function `pose(t)` that returns those numbers for time `t`. The renderer eases between poses, so switching animations never snaps.
- Expressions are swapped, not animated. Each is a named preset built from five parts:
  - **Eyes:** `open`, `happy`, `sparkle`, `heart`, `wide`, `squeeze`, `dizzy`, `half`, `closed`, `teary`
  - **Brows:** `none`, `up`, `det`, `worry`, `angry`
  - **Mouth:** `smile` (w), `grin`, `o`, `small`, `flat`, `frown`, `wobble`, `yawn`, `blep`, `smug`
  - **Blush:** 0–1
  - **Effect:** `sweat`, `anger`, `stars`
- The 18 presets: Neutral, Happy, Joy, Excited, Love, Surprised, Curious, Determined, Worried, Oops, Ouch, Dizzy, Sleepy, Asleep, Sad, Grumpy, Smug, Blep.
- Pop-up emotes float above its head for a moment: `!`, `?`, ♪, a heart, a sparkle.
- The physics engine sets position; the animation sets the limbs. They share one pose object.

**Live preview of every animation:** [Kit Animation Sheet](mascot-preview/kit-animation-sheet.html) (open it in a browser). It shows each animation looping, all 18 expressions, actual-size checks on light and dark pages, and three colourways. All 32 animations below are done there and are the starting point for the real code.

| # | Animation | Loop? | Notes |
|---|-----------|-------|-------|
| 1 | Idle | ✔ | Breathing, occasional ear twitch, tail sway |
| 2 | Walk | ✔ | |
| 3 | Run | ✔ | Ears back, tail streaming |
| 4 | Jump (take-off) | ✗ | Crouch → spring |
| 5 | Fall | ✔ | Arms flail, ears up, tail swings for balance |
| 6 | Land (soft) | ✗ | |
| 7 | Land (hard) | ✗ | Squash, ears flop, tail puffs |
| 8 | Ledge grab | ✗ | Paws catch the edge |
| 9 | Hang | ✔ | Legs dangle and kick a bit |
| 10 | Climb up | ✗ | |
| 11 | Wall slide | ✔ | |
| 12 | Lunge | ✗ | Wide eyes, paws out |
| 13 | Miss | ✗ | Paws close on nothing, "whiff" puff |
| 14 | Tumble | ✔ | Spinning fall after a miss |
| 15 | Shake off | ✗ | Head shake, tail flick, determined look |
| 16 | Sit / leg swing | ✔ | Sitting on an edge |
| 17 | Sleep | ✔ | Curled down, tail on the ground, slow breathing, floating z's |
| 18 | Wake + stretch | ✗ | Forward stretch and a yawn |
| 19 | Leaf parachute | ✔ | Scroll re-entry from top; floats down on a leaf, tosses it on landing |
| 20 | Trip | ✗ | Rare clumsy moment, then a sheepish look |
| 21 | Leap up | ✗ | Scroll re-entry from below; leaps up and catches a ledge |
| 22 | Pounce | ✗ | Fox-style: butt wiggle, high leap, nose-first dive, pops back out |

**Personality animations** (random idle variations and reactions, so it never feels like a loop):

| # | Animation | When it plays |
|---|-----------|---------------|
| 23 | Wave | First arrival on the site; landing on the Contact page |
| 24 | Head tilt | Hovering a project card (`?` pops up) |
| 25 | Happy dance | Random happy moment; after the contact form is sent |
| 26 | Tail chase | Long idle: chases its own tail until it's dizzy |
| 27 | Sneeze | Rare random moment |
| 28 | Groom | Idle variation: licks a paw and washes its face |
| 29 | Slow blink | Sitting near a still cursor: "I trust you" (heart pops up) |
| 30 | Sniff around | Wandering on phones; idle on a long platform |
| 31 | Celebrate | Contact form sent |
| 32 | Sulk | After 3+ misses in a row: turns away and pouts, then gets over it |

Idle picks one personality animation at random every 8–15 s, never the same one twice in a row.

Effects are tiny SVG particles drawn by the same layer: landing dust, the "whiff" ring on a miss, and z's while asleep.

---

## 4. How it works

### 4.1 Platforms
- Elements opt in with an attribute: `<h2 data-platform>`, `<article data-platform>`, images, section dividers, buttons in the hero.
- **Not platforms:** the sticky header, the contact form, tiny inline elements, anything under ~60px wide.
- Each platform comes from `getBoundingClientRect()` + scroll offset (page coordinates):
  - **top edge** → floor
  - **left/right edges** → walls (for slides) and ledge-grab points at the top corners
- Screen bottom edge = an extra floor, used only for re-entry and as a last resort.
- **Refreshed** on: resize (`ResizeObserver`), DOM changes (`MutationObserver`, throttled), route change, image load, and once after page animations finish. Never every frame.
- Elements that are hidden, transparent, or off the visible screen ±1 screen-height are ignored.

### 4.2 Physics
- Hand-written, no library. Gravity, run speed, jump speed, max fall speed, simple rectangle collision against platform tops (one-way platforms: it can jump up through them and land on top).
- Fixed timestep (60 updates/s) inside `requestAnimationFrame`.
- Game-feel tweaks: short "coyote time" (can still jump just after leaving an edge), jump buffering, squash on land.
- If the platform it's standing on moves (animation, layout shift), it moves along with it. If the platform disappears, it falls.

### 4.3 Route planning (the "brain")
1. Build a **graph**: nodes = platforms, edges = moves (walk off, jump up, jump across, drop down, ledge grab).
2. An edge exists only if the fox can physically make it. Check the jump arc against max jump height and distance, and that nothing blocks the path.
3. **A\*** search from the current platform to the **target platform** (the reachable one closest below the cursor).
4. Follow the route one move at a time. Re-plan if:
   - the cursor moves to a different target platform (throttled to ~4×/s)
   - the layout changes
   - a move fails (e.g. it misses a jump)
5. The graph is only rebuilt when platforms change, not every frame.

### 4.4 Behaviour state machine
```
           ┌──────── mouse moves ────────┐
           ▼                             │
 ┌────────────┐  route found  ┌──────────┴─┐ in reach ┌───────┐
 │   IDLE     │──────────────▶│   CHASE    │─────────▶│ LUNGE │
 └────┬───────┘               │(walk/run/  │          └───┬───┘
      │ 10 s still            │ jump/climb)│              │ always
      ▼                       └────────────┘              ▼
 ┌────────────┐                     ▲              ┌──────────┐
 │    SIT     │                     │ cooldown     │   MISS   │
 └────┬───────┘                     │ done         │ → TUMBLE │
      │ 30 s still            ┌─────┴──────┐       └────┬─────┘
      ▼                       │ SHAKE OFF  │◀───────────┘ lands
 ┌────────────┐               └────────────┘
 │   SLEEP    │── mouse moves ──▶ WAKE ──▶ IDLE
 └────────────┘

 Any state + off-screen after scroll ──▶ RE-ENTER (drop in / leap up) ──▶ IDLE
```

### 4.5 Rendering
- One small inline `<svg>` holding the fox parts, moved with CSS `transform`, in a fixed layer above the page.
- Each frame only updates a handful of `transform` attributes; the face markup changes only when the expression changes.
- `pointer-events: none` and `aria-hidden="true"`, so it can never block a click and is invisible to screen readers.
- Fox colours are CSS variables (`--fox-body`, `--fox-cream`, …), so they can follow the site theme. Total size: a few KB, no dependencies.

---

## 5. Performance, accessibility and mobile

| Concern | Rule |
|---------|------|
| Page load | Loaded **last**: after the page is idle (`requestIdleCallback`), with dynamic `import()`. Must not affect Lighthouse scores or first paint |
| Paused when | Tab hidden, asleep, the fox is off-screen and the user is scrolling, or turned off |
| Frame budget | Engine update < 1 ms per frame; no layout reads inside the frame loop (platform rects are cached) |
| Reduced motion | If the user's system has "reduce motion" on, **don't load it at all** |
| Off switch | Small toggle in the footer ("Hide fox" / "Show fox"); choice remembered in `localStorage` |
| Never in the way | Not on top of the open mobile menu, the contact form, or modals. Platforms are never inside those |
| Touch devices | No cursor, so no chase. It wanders between visible platforms, reacts to scrolling with the re-entry moves, and naps. Smaller size |
| Very small screens (< 360px) | Off |

---

## 6. Folder structure

```
src/features/mascot/
├── index.js                 # lazy entry: checks reduced-motion / toggle, then boots the engine
├── MascotLayer.jsx          # fixed layer + canvas, mounted once in the app layout
├── engine/
│   ├── loop.js              # fixed-timestep requestAnimationFrame loop, pause/resume
│   ├── physics.js           # gravity, movement, collision with platforms
│   ├── platforms.js         # finds [data-platform] elements, caches rects, observers
│   ├── graph.js             # builds the move graph between platforms
│   ├── pathfinding.js       # A* over the graph
│   ├── brain.js             # behaviour state machine (idle, chase, lunge, miss, sleep…)
│   ├── scrollReentry.js     # off-screen detection + drop-in / leap-up
│   └── config.js            # all tunable numbers: speeds, jump height, timers, sizes
├── render/
│   ├── foxSvg.js            # the fox parts (SVG markup) and joint positions
│   ├── rig.js               # pose → transforms; expression → face markup
│   ├── animations.js        # one pose(t) function per animation (from the preview)
│   └── particles.js         # dust, miss "whiff", sleep z's
└── debug/
    └── DebugOverlay.jsx     # ?mascotDebug=1: draws platforms, graph edges, current route, state name
```

The **debug overlay** is essential. Most bugs will be "why did it jump there?", and you can only answer that by seeing the graph.

---

## 7. Build phases

The fox and all its animations already exist in the [preview](mascot-preview/kit-animation-sheet.html). Phase 5 moves that code into `render/` and connects it to the engine.

| Phase | Scope | Result | Time (part-time) |
|-------|-------|--------|------------------|
| 1 | Layer, loop, physics, platforms from `data-platform`, walking toward the cursor's x | A box that falls, lands on headings and cards, walks toward the cursor | 2–3 days |
| 2 | Jumping, move graph, A\*, route following, debug overlay | Box reaches any reachable platform near the cursor | 1–1.5 weeks |
| 3 | Ledge grab, hang, climb, wall slide; moving/vanishing platforms | Full movement | ~1 week |
| 4 | Lunge → miss → tumble → shake-off loop, sit/sleep/wake, scroll re-entry, touch-device mode, clumsy trips | Full behaviour | 3–5 days |
| 5 | Port the fox, its 32 animations and 18 expressions from the preview, connect them to the brain's states, tune game feel | The real fox | 3–5 days |
| 6 | Toggle, reduced motion, lazy loading, pause rules, Lighthouse check | Ship it | 2–3 days |

**Total:** about 3–5 weeks part-time; no separate art budget. A shippable "simple" version (walk, jump, fall, miss loop) is possible after Phases 1, 2, 4 and 5.

**Bonus:** a blog post / case study like "Teaching a fox to parkour across my website" (route planning on the DOM) is strong content for Phase 4 of the site roadmap.

---

## 8. Open decisions

- [ ] Approve the fox design and animations in the preview, or list changes
- [ ] Final colours (in the design phase); check contrast against the light theme
- [ ] Which elements get `data-platform` on each page (once layouts are final)
- [ ] Should it appear on every page, or only Home and Work?
- [ ] Which personality animations to keep for launch (all 10, or a smaller set)
