# Zero Defects ATL — Project Master Reference
**Domain:** zerodefectsatl.com | **Handle:** @zerodefectsatl | **Location:** Braselton, GA 30517
**Generated:** May 2026

---

## SECTION 1 — PROJECT ARTIFACTS (10 Files)

All artifacts were built in Claude chat and transferred to laptop via Quick Share.
Store in `zero-defects-atl/_legacy/` during Next.js migration.

| # | Artifact Name | Type | Description | Maps To (Next.js) |
|---|---|---|---|---|
| 1 | Zerodefects homepage | HTML | Main site homepage with hero carousel, services, brand | `src/app/page.js` |
| 2 | Zerodefects gallery | HTML | Portfolio/gallery page with lightbox | `src/app/gallery/page.js` |
| 3 | ZD Aviation homepage | HTML | Aviation vertical landing page | `src/app/aviation/page.js` |
| 4 | ZD Logo | PNG | Brand logo asset | `public/images/zd-logo.png` |
| 5 | Project 2015 Ferrari | HTML | Individual project showcase page | `src/app/projects/ferrari-2015/page.js` |
| 6 | Project Monteray | HTML | Individual project showcase page (boat) | `src/app/projects/monteray/page.js` |
| 7 | Project 1969 Chevy | HTML | Individual project showcase page | `src/app/projects/chevy-1969/page.js` |
| 8 | Project Tesla | HTML | Individual project showcase page | `src/app/projects/tesla/page.js` |
| 9 | Project BMW Z8 | HTML | Individual project showcase page | `src/app/projects/bmw-z8/page.js` |
| 10 | Project Audi Q7 | HTML | Individual project showcase page | `src/app/projects/audi-q7/page.js` |

---

## SECTION 2 — TECH STACK

| Item | Choice |
|---|---|
| Framework | Next.js (App Router) |
| Language | JavaScript |
| Styling | Tailwind CSS + CSS Modules |
| IDE | VS Code |
| Version Control | GitHub (not yet initialized) |
| Hosting | Vercel (planned) |
| Domain Registrar | GoDaddy |
| DNS | To be repointed to Vercel after deploy |

### Next.js Project Structure
```
zero-defects-atl/
├── _legacy/                  ← all 10 downloaded artifacts go here
├── src/
│   ├── app/
│   │   ├── layout.js
│   │   ├── page.js           ← homepage
│   │   ├── gallery/page.js
│   │   ├── aviation/page.js
│   │   ├── services/page.js
│   │   ├── contact/page.js
│   │   └── projects/
│   │       ├── ferrari-2015/page.js
│   │       ├── monteray/page.js
│   │       ├── chevy-1969/page.js
│   │       ├── tesla/page.js
│   │       ├── bmw-z8/page.js
│   │       └── audi-q7/page.js
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── ServiceCard.js
│   │   ├── GalleryGrid.js
│   │   └── Footer.js
│   └── styles/
│       ├── globals.css
│       └── components/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── gallery/
│   │   └── logos/
└── tailwind.config.js        ← brand colors go here
```

### Brand Colors (to be confirmed with hex values)
```js
// tailwind.config.js
colors: {
  'zd-blue':  '#______',   // ← confirm hex
  'zd-green': '#______',   // ← confirm hex
  'zd-dark':  '#0a0a0a',
}
```

---

## SECTION 3 — SETUP CHECKLIST

### Phase 1 — Local Setup
- [ ] Open `zero-defects-atl` folder in VS Code
- [ ] Move all 10 artifacts into `_legacy/` subfolder
- [ ] Run `npx create-next-app@latest .` in VS Code terminal
- [ ] Confirm dev server runs: `npm run dev` → localhost:3000
- [ ] Confirm hex brand colors and add to `tailwind.config.js`

### Phase 2 — GitHub
- [ ] `git init` in project folder
- [ ] `git add .` and `git commit -m "initial scaffold"`
- [ ] Create repo on github.com → `zero-defects-atl`
- [ ] Push local project to GitHub

### Phase 3 — Build (migrate legacy HTML → Next.js components)
- [ ] Homepage (`page.js`) from legacy homepage HTML
- [ ] Gallery page from legacy gallery HTML
- [ ] Aviation page from legacy aviation HTML
- [ ] 6 project pages from legacy project HTMLs
- [ ] Shared Navbar component
- [ ] Shared Footer component
- [ ] Contact/Quote form page

### Phase 4 — Deploy
- [ ] Connect GitHub repo to Vercel
- [ ] Verify build passes on Vercel
- [ ] Add custom domain `zerodefectsatl.com` in Vercel
- [ ] Update GoDaddy DNS:
  - A record → `76.76.21.21` (Vercel)
  - CNAME `www` → `cname.vercel-dns.com`
- [ ] Confirm SSL certificate active
- [ ] Test live site on zerodefectsatl.com

---

## SECTION 4 — RELATED CONVERSATION HISTORY

| Chat Title | Date | Relevance |
|---|---|---|
| Kessler's zero defects domain migration and IDE selection | May 11, 2026 | **Current chat** — project formation, stack selection, DNS plan |
| ZD (main build chat) | May 10, 2026 | Homepage, gallery, aviation, all project pages built here |
| Desktop pairing without verification code | May 11, 2026 | Claude desktop/mobile pairing issue |
| Zero defects project guidance | May 7, 2026 | GBP analysis, competitor research, 14-day action plan |
| Passive income ideas using AI | Apr 23, 2026 | ZD eBook, local SEO service concept |
| Car photo rendering creation | May 9, 2026 | Wheel swap rendering attempt (C6 Z06) |
| AI Investing | May 8, 2026 | Options plays, NET/DDOG/ZS earnings analysis |
| Summer family travel planning | May 8, 2026 | Blue Ridge Memorial Day trip + summer plans |
| Gravesite pressure washing | May 9, 2026 | Lead gen site concept (separate project) |
| Electric drift kart pricing | May 9, 2026 | ETM E-Drift Kart research |
| QQQ day trading dashboard | Apr 27, 2026 | Options flow dashboard — decided not to pursue |
| Granting Yaz access | May 7, 2026 | Claude project sharing — requires Team plan |
| Video upload capability | May 7, 2026 | Videos not supported in Claude.ai |

---

## SECTION 5 — PENDING ITEMS

| Item | Status |
|---|---|
| Confirm brand hex color codes | ⏳ Pending |
| Initialize GitHub repo | ⏳ Pending |
| Run Next.js scaffold in VS Code | ⏳ Pending |
| Provide actual car photos for gallery | ⏳ Pending |
| DNS repoint GoDaddy → Vercel | ⏳ After deploy |
| ZD eBook (ceramic coatings) | 📋 Planned |
| ZD Marine brand concept | 📋 Planned |

---

*Document generated by Claude | Zero Defects ATL Project | May 2026*
