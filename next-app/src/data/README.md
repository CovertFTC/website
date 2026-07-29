# Editing site content

Plain JSON can't have comments, so this file explains what's in each one.
Edit, save, and (if running `pnpm dev`) the site updates automatically.

## `site.json`

Rarely-changing config:

```json
{
  "teamName": "Covert Robotics",
  "teamNumber": "36702",
  "email": "covertrobotics1@gmail.com",
  "socials": [{ "label": "Instagram", "url": "https://instagram.com/" }]
}
```

- `teamNumber` — shown in the home hero and every page footer
- `email` — contact page + the "Become a Sponsor" button
- `socials` — the link buttons on the contact page; add/remove/reorder freely

## `members.json`

The team cards on `/team`. One object per person:

```json
{ "initials": "A1", "name": "Member Name", "role": "Team Captain", "photo": "/team/jane.jpg" }
```

- `initials` — shown as a placeholder graphic if there's no `photo`
- `photo` — **optional**. To add one: drop the image file into
  `next-app/public/team/`, then set `photo` to `/team/<filename>` (the leading
  `/` matters — it's a site-root path, not a relative one). Omit `photo`
  entirely to keep showing the initials.

## `sponsors.json`

Sponsor logos on `/sponsors`. Empty array `[]` shows "Your Logo Here"
placeholders. Add entries like:

```json
{ "name": "ACME Corp", "logo": "/sponsor-acme.png", "url": "https://acme.com" }
```

- `logo` and `url` are both optional. No `logo` → shows the sponsor's name as
  text instead of an image. Drop logo image files into `next-app/public/`.

## `stats.json`

The animated counters on `/mission`:

```json
{ "label": "Team Members", "value": 5 }
```

Add, remove, or edit entries freely — the counters grid adjusts automatically.
