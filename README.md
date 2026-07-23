# Covert Robotics — Team Website

Static website for Covert Robotics (FIRST Tech Challenge). Plain HTML/CSS/JS — no build step, ready for GitHub Pages.

## Run locally

Just open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
```

## Deploy to GitHub Pages

1. Create a GitHub repo (e.g. `covert-robotics-website`) and push this folder:

   ```sh
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo>.git
   git push -u origin main
   ```

2. On GitHub: **Settings → Pages → Source: Deploy from a branch → Branch: `main` / root → Save**.

3. The site goes live at `https://<your-username>.github.io/<repo>/` within a minute or two.

> Tip: name the repo `<your-username>.github.io` (or your org's `<org>.github.io`) to serve it at the root URL. A custom domain can be added under Settings → Pages.

## Editing content

**All editable content lives in one file: [`data/site.js`](data/site.js).** It's a plain JSON object — edit it and refresh:

- `teamNumber` — shows in the home hero and every footer
- `email` — contact page + "Become a Sponsor" button
- `stats` — the animated counters on the mission page
- `members` — the team cards (initials, name, role)
- `socials` — the link buttons on the contact page
- `sponsors` — sponsor slots on the sponsors page; while the list is empty the page
  shows "Your Logo Here" placeholders. Add entries like
  `{ "name": "ACME Corp", "logo": "assets/sponsor-acme.png", "url": "https://acme.com" }`
  (logo and url optional — drop logo images into `assets/`)

The JSON lives in a `.js` file (assigned to `window.SITE_DATA`) instead of a `.json`
file so the site still works when `index.html` is opened directly from disk —
browsers block `fetch()` of local `.json` files over `file://`.

Longer prose (mission text, page intros) stays in the HTML pages.

## Structure

```
index.html      # home: hero, field report photo, links to the other pages
mission.html    # mission, stats, what is FTC, outreach photo gallery
team.html       # member cards
sponsors.html   # where funding goes, sponsor logos, become-a-sponsor CTA
contact.html    # email + socials
data/site.js    # ← ALL editable content (team number, email, members, stats, …)
css/style.css   # all styling; brand colors are CSS variables at the top
js/main.js      # renders data/site.js content + nav, reveals, counters
assets/         # logo mark (mark.svg), icon, outreach photos
```
