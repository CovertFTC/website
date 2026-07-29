Covert Robotics team website — Next.js (App Router, TypeScript), statically
exported for GitHub Pages.

## Run locally

```sh
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

**All editable content lives in `src/data/`:**

- [`src/data/site.json`](src/data/site.json) — rarely-changing config:
  `teamNumber` (home hero + every footer), `email` (contact page + "Become a
  Sponsor" button), `socials` (link buttons on the contact page)
- [`src/data/members.json`](src/data/members.json) — the team cards
  (`initials`, `name`, `role`, optional `photo`). If `photo` is set (a path
  like `/team/jane.jpg`, image dropped in `public/team/`), it's shown instead
  of the initials
- [`src/data/sponsors.json`](src/data/sponsors.json) — sponsor slots on the
  sponsors page; while the list is empty the page shows "Your Logo Here"
  placeholders. Add entries like
  `{ "name": "ACME Corp", "logo": "/sponsor-acme.png", "url": "https://acme.com" }`
  (logo and url optional — drop logo images into `public/`)
- [`src/data/stats.json`](src/data/stats.json) — the animated counters on the
  mission page

Longer prose (mission text, page intros) lives directly in each page's
`src/app/**/page.tsx`.

## Structure

```
src/app/            # routes: / (home), /mission, /team, /sponsors, /contact
src/app/layout.tsx   # shared <head>, Header/Footer/RevealScripts wrapper
src/app/globals.css  # all styling; brand colors are CSS variables at the top
src/components/      # Header (nav), Footer, StatsGrid, TeamGrid, SponsorGrid,
                      # SocialLinks, RevealScripts (scroll reveals + counters)
src/data/            # editable content, see above
public/              # logo mark, icon, outreach photos, CNAME
```

## Build / deploy

```sh
pnpm build
```

`next.config.ts` sets `output: "export"`, so this produces a static `out/`
folder (no server needed). Pushing to `main` triggers
[`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml), which runs
this build and deploys `out/` to GitHub Pages automatically.
