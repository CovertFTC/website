# Covert Robotics — Team Website

Next.js (App Router, TypeScript) site for Covert Robotics (FIRST Tech Challenge),
statically exported and deployed to GitHub Pages via GitHub Actions.

The actual project lives in [`next-app/`](next-app) — see
[`next-app/README.md`](next-app/README.md) for how to run it locally and where
to edit content (team roster, sponsors, stats, etc.).

## Deploy

Push to `main` — [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
builds `next-app` and deploys the static export to GitHub Pages automatically.
No manual build/deploy steps needed.
