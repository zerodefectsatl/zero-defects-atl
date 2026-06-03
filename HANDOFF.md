# Handoff — Zero Defects ATL (view-transitions + on-page SEO)

Context handoff for continuing this work in Claude Code / a coding agent. Written 2026-05-30.

## TL;DR

Two workstreams shipped to production (zerodefectsatl.com via Vercel):

1. **Cross-document View Transitions** — slow page fall/rise + a shared logo morph on every route.
2. **On-page SEO** — Atlanta geo-targeting on Home + Services (title, meta, real H1, heading hierarchy, Services canonical/OG).

There is **one uncommitted change** on disk (Services OpenGraph/canonical) and **one open SEO bug** (`/faq` canonical). See "Immediate next steps."

## Repo / deploy facts

- **Stack:** Next.js 16 (App Router, JavaScript, ESM), React 19, Tailwind v4 (`@import "tailwindcss"` + `@theme inline` in `globals.css`, no `tailwind.config.js`). Package manager: npm.
- **Local path:** `C:\Users\bilba\OneDrive\Documents\Claude\Projects\zero-defects-atl` (OneDrive-synced — see Gotchas).
- **Remote:** `https://github.com/zerodefectsatl/zero-defects-atl.git`
- **Branch in progress:** `view-transitions`. Local `master` drifts behind `origin/master` — always `git fetch` and compare before editing.
- **Deploy:** Vercel auto-deploys `origin/master`. To ship from the `view-transitions` branch without switching branches:
  ```powershell
  git push origin HEAD:master
  ```
  This fast-forwards `master` (works because `origin/master` is an ancestor of `view-transitions`). Vercel builds in ~1–2 min.
- **Last deployed commit:** `a924541` — "On-page SEO: Atlanta geo targeting on Home + Services".

## What changed — files

### View Transitions
- `src/app/globals.css` — `@view-transition { navigation: auto }`, `::view-transition-old/new(root)` fall/rise keyframes (`zd-page-fall` / `zd-page-rise`, 950ms), and `::view-transition-group(zd-logo)`. Gated behind `prefers-reduced-motion`.
- `src/components/MorphLogo.js` — NEW. Fixed top-left logo (`zd-logo-clean.png`) carrying `view-transition-name: zd-logo`. The shared-element morph target.
- `src/app/page.js` (Home) — bento logo card carries `viewTransitionName: 'zd-logo'`.
- `src/components/Navbar.js` — logo switched to `zd-logo-clean.png` (square 48×48) and carries `zd-logo`. Used by gallery/process/reviews.
- `src/app/{zd-mentality,faq,our-process,services}/page.js` — render `<MorphLogo/>`.
- `src/app/gallery/page.js` — back-to-home changed from `next/link <Link>` to plain `<a href="/">` (see Gotchas), `next/link` import removed.

### On-page SEO
- `src/app/layout.js` — root `metadata` title + description (and OG/Twitter copies) now lead with "PPF & Ceramic Coating … Atlanta, GA".
- `src/app/page.js` (Home) — added `<h1 className="sr-only">` (keyword + geo); hero tagline demoted `<h1>`→`<p>` (styling is class-based, unchanged); four `bento-card__title` `<div>`s promoted to `<h2>`.
- `src/app/services/page.js` — `metadata` title + description add Atlanta; added `<h1 className="sr-only">` (page previously had no H1). **Plus an uncommitted edit** adding `alternates.canonical: '/services'`, `openGraph`, and `twitter` blocks.
- `src/app/globals.css` — appended `.sr-only` utility.

## Invariants — do not break

- **Exactly one element per page may carry `view-transition-name: 'zd-logo'`.** Two on a page makes the browser skip the whole transition. Pages with `<Navbar/>` (gallery/process/reviews) get it from the Navbar; all others use `<MorphLogo/>`. A page must render one or the other, never both.
- **Intra-site navigation must use plain `<a href>`, not `next/link <Link>`.** MPA view transitions only fire on full-document navigations; `<Link>` does a client-side soft nav and silently skips the fall/rise. If a transition "doesn't play" on a route, check for a `<Link>` first.
- **View transitions only render in a production build** (`npm run build && npm run start`) on real navigations — `npm run dev` won't show them reliably.
- Bento grid rules in `CLAUDE.md`/`AGENTS.md` still apply (CSS Grid only, logo card z-index 2 over hero z-index 1, explicit min-heights, don't restructure the grid).

## Gotchas (environment)

- **OneDrive locks `.git`.** Git from a sandbox leaves stale `.git/index.lock`, `HEAD.lock`, `objects/maintenance.lock`, and `tmp_obj_*` that can't be removed there. Run git from **PowerShell**. If a command reports `index.lock: File exists`:
  ```powershell
  Remove-Item .git\index.lock, .git\HEAD.lock, .git\objects\maintenance.lock -Force -ErrorAction SilentlyContinue
  ```
- **PowerShell has no `&&`** — run git commands one per line (or use `;`).
- **OneDrive line-ending churn** — `git status` shows ~30 unrelated files as modified; they're CRLF/parallel-session noise. Stage specific files explicitly; never `git add -A` here.
- **`next build` may OOM (bus error) in a constrained sandbox** — build locally. Syntax can be sanity-checked with `npx esbuild <file> --loader:.js=jsx --outfile=/dev/null`.
- **Vercel edge cache** can serve a stale route briefly after deploy; append a `?v=` query to bust it when verifying.

## Immediate next steps

- [ ] **Commit + deploy the pending Services OG/canonical change** (currently uncommitted on disk):
  ```powershell
  git add src/app/services/page.js
  git commit -m "Services: own canonical, OpenGraph & Twitter metadata"
  git push origin HEAD:master
  ```
- [ ] **Fix `/faq` canonical.** `src/app/faq/page.js` has no `alternates.canonical`, so it inherits the homepage canonical (`/`) — tells Google it's a duplicate of Home. Add `alternates: { canonical: '/faq' }` to its `metadata` (and ideally its own `openGraph`/`twitter`, same pattern as Services). All other routes already set their own canonical.

## SEO backlog (optional, lower priority)

- Home is a deliberately minimal bento → content-thin for a competitive commercial term. Consider one visible, on-brand geo sentence (service + metro cluster: Braselton, Buford, Gainesville, Cumming, Atlanta) somewhere crawlable. `/services` is the stronger money-page target for "ppf ceramic coating atlanta ga".
- Run the same on-page pass (keyword H1, geo title/meta, own OG) on `/gallery`, `/our-process`, `/zd-mentality`.
- `/services` and `/our-process` both exist as routes serving similar process content — confirm no cannibalization; `/process` and `/reviews` also exist from a parallel session.
- Schema is strong already (`layout.js` ships LocalBusiness/AutoBodyShop + FAQPage JSON-LD with reviews, geo, `areaServed` incl. Atlanta) — leave it.

## Verifying live

```
# cache-busted fetch of a route to confirm new title/meta/H1/canonical
https://zerodefectsatl.com/services?v=check
```
Look for: page-specific `<title>`, meta description, the `sr-only` H1 as the page's first heading, and `canonical` pointing at the route (not `/`).

## ⚠️ zd-mentality is staged locally — COMMIT, do not regenerate (2026-05-30)

`src/app/zd-mentality/page.js` is fully rewritten in the working tree and **not yet committed**. `origin/master` still holds the OLD dark/yellow version, so committing the working copy IS the intended change. It already contains:

- The **About** section (Chris Kessler story — 17+ years, Road Atlanta, credentials, exotics) merged directly after the philosophy / Four Absolutes, with a bridge line ("…that someone is Chris Kessler").
- **Light restyle**: white background, black body text, every `#eaff00` yellow swapped to brand blue `#1a8fff`.
- The word **"Zero"** in the H1 uses `<span className="zd-zero-outline">` — double blue traced outline, transparent fill.

Do NOT regenerate or re-style this page. Just commit the existing file as-is to avoid a duplicate/divergent rewrite.

`globals.css` already defines `.zd-zero-outline` AND `.sr-only` on `origin/master` — do not add them again. The working copy already matches origin (an accidental duplicate was removed). Years figure is **17+** site-wide (not 20+).

Local `HEAD` may be detached/broken (`git rev-parse HEAD` → "Needed a single revision") from OneDrive `.git` lock churn — re-checkout the branch and clear `.git/*.lock` before committing.
