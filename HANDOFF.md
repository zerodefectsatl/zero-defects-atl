# Zero Defects ATL — Developer Handoff

_Last updated: June 3, 2026_

## TL;DR
Active work is the **editorial homepage redesign** on branch **`classic-home`**. It is fully committed and runs locally. The live site (`master` → Vercel → zerodefectsatl.com) is **untouched**. Push `classic-home` for a Vercel preview; merge to `master` to go live.

---

## Tech stack
- **Next.js 16.2.6** (App Router, JavaScript) + **Turbopack**
- **React 19.2.4**
- **Tailwind CSS v4** (`@import "tailwindcss"` + `@theme inline` in `globals.css`; no `tailwind.config.js`)
- Fonts: all **Manrope** via `next/font/google`, aliased to `--font-bebas-neue`, `--font-barlow-body`, `--font-barlow-cond` (Bebas Neue is NOT actually loaded)
- Email: Resend (`src/app/api/contact/route.js`)
- Deploy: **Vercel** (production branch = `master`) → https://zerodefectsatl.com
- Remote: `https://github.com/zerodefectsatl/zero-defects-atl.git`

## Branches
| Branch | Purpose |
|--------|---------|
| `master` | Production / live (Vercel auto-deploys) |
| `classic-home` | **Editorial homepage redesign — current work** (ahead of master) |
| `view-transitions` | Parked: cross-document View Transitions (slow fall/rise page transitions + logo morph) for the bento homepage |
| `bento-redesign` | Earlier bento dashboard homepage |

---

## What's on `classic-home` (the editorial homepage)
`src/app/page.js` is a long-scroll editorial homepage. Section order:

**Hero → Statement → Services → Gallery (Our Work) → Stats bar → Reviews → Process → About Us → Contact → Footer**

Key pieces:
- **Hero** (`HeroSlider` photo carousel): wordmark bottom-left, left-aligned with the navbar logo. "ZERO" solid brand blue, "DEFECTS" neon-yellow **outline**, both with a dark extrude (`.zd-hero-wordmark` in `globals.css`).
- **Navbar** (`src/components/Navbar.js`): three minimal **hover-reveal lines** top-right on desktop (≥768px) — Ceramic Coating / PPF / Paint Correction — anchoring to `/#ceramic-coating`, `/#ppf`, `/#paint-correction`. Collapses to a hamburger menu below 768px. Lines are neon-yellow (`.zd-nav-line`).
- **Services**: card layout, all detail kept (CSU/CCI tiers, warranties, pricing, XPEL packages). Cards have ids `#ceramic-coating`, `#ppf`, `#paint-correction` (`.zd-svc-card2`, `.zd-coat-*`, `.zd-ppf-*`, `.zd-pkg-*`).
- **Process**: horizontal 4-step timeline with an animated **light sweep** across a dotted line; collapses vertical on mobile (`.zd-timeline`, `@keyframes zd-sweep`).
- **About Us**: built from `ZD_About_Draft.md` — two-column body + pull-quote + credentials panel + service-area line + tagline. Years = **17+** (reconciled with hero stats). (`.zd-about-*`)
- **Contact**: `public/videos/lambo.mp4` video background (via `LazyVideo`) with a 55%-opacity dark overlay; contact icons are inline brand-blue SVGs (not emoji).

## Brand tokens
- Background: `#080808` / `#0e1216`
- Primary blue: `#1a8fff`
- Accent yellow (brightened this session): **`#f5ff36`** (was `#eaff00`)
- **No green** — `#00e5a0` was fully purged; blue→yellow gradient *text* was switched to a blue-only gradient to avoid a green midpoint.

## Routes (all build clean — 23 static pages)
`/`, `/services`, `/ceramic-coating`, `/paint-protection-film`, `/paint-correction`, `/gallery` (has a lightbox), `/our-process`, `/faq`, `/zd-mentality`, `/reviews`, `/service-areas/[city]`, `/api/contact`.

---

## Running locally
```powershell
npm install
npm run dev          # dev server w/ hot reload  → http://localhost:3000
# or, production build:
npm run build
npm run start
```
- Run the **dev server in its own terminal tab**; run git in a **separate tab** (using the server's tab for git kills the server).
- If the port is stuck or the server jams: `taskkill /IM node.exe /F`, then relaunch.

## Deploy
- Push a branch → Vercel builds a **preview** deployment automatically.
- `git push -u origin classic-home` → preview URL (`…-git-classic-home-….vercel.app`).
- Merge `classic-home` → `master` to publish to the live domain.

---

## ⚠️ OneDrive + Git gotchas (important)
The repo lives in **OneDrive**, which breaks git operations run from non-Windows tooling:
- **Run ALL git commands from PowerShell (Windows).** Git run from the sandbox/agent sees a truncated `.git/HEAD` and will create junk commits on a phantom branch.
- If a commit fails with `Unable to create '...index.lock'` or `...HEAD.lock'`:
  ```powershell
  Remove-Item .git\index.lock -Force -ErrorAction SilentlyContinue
  Remove-Item .git\HEAD.lock  -Force -ErrorAction SilentlyContinue
  ```
  then re-run the commit.
- CRLF warnings ("LF will be replaced by CRLF") on commit are harmless.
- Config/doc files (`AGENTS.md`, etc.) may show as modified due to line-ending noise — don't worry about them.

## Suggested next steps
1. `git push -u origin classic-home` → review the Vercel preview.
2. Decide: merge `classic-home` → `master` to make the editorial homepage live.
3. Optional: revisit the `view-transitions` branch (slow page transitions + logo morph) if you want that motion on the live homepage.
4. Optional: compress `public/videos/lambo.mp4` (~11.8 MB) if the contact section loads slowly.
