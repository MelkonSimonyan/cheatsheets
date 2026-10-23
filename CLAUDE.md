# cheatsheets.melkonsimonyan.com: rules for Claude

Owner: Melkon Simonyan (freelance frontend/fullstack dev). He talks to Claude in Russian. Everything on the site and in the
repo (code, comments, README) is in English. The repo is public and part of his portfolio, so code quality matters.

## What this is
The public home of the **Frontend Interview Cheat Sheets** series: one page that lists every published post of the series
with a preview, a link to the LinkedIn post and a link to the printable A4 PDF. The owner puts the PDF links into the first
comment of each LinkedIn post, so this site is where those links point.

- URL: https://cheatsheets.melkonsimonyan.com/ (subdomain of the owner's personal site, whose main domain is a plain HTML stub).
- Posts, images and PDFs are produced in a SEPARATE project (the "LinkedIn cheat-sheet" project, folder `linkedin-posts`,
  one folder per sub-cycle with `out/NN-slug.png` and `out/NN-slug.pdf`). This repo never generates them, it only
  publishes copies of the finished files.
- The series: Web Fundamentals (7 posts), JavaScript (14), TypeScript (14), React (14), Next.js (14), Zustand (7),
  Forms/Zod/Yup (7). One post per day, published one after another. Nothing is announced ahead of time.

## Stack and decisions (do not change without asking)
- **Next.js (App Router) + TypeScript with static export** (`output: 'export'` in `next.config.mjs`). The build writes plain
  HTML/CSS/files to `out/`, which is uploaded to ordinary static hosting. No Node server, no API routes, no database.
- Server components by default. `"use client"` only for `PostModal` (popup with history handling). No client-side data fetching except the lazy `fetch` of a post's `.txt` in that popup (80 posts: texts are not inlined into the HTML).
- All content lives in ONE file: `src/data/cycles.ts` (typed by `src/data/types.ts`). Components only render it.
- Plain CSS in `src/app/globals.css` (no Tailwind, no CSS-in-JS). Fonts come from Google Fonts via `next/font/google` (downloaded at build time and self-hosted in `out/`, no runtime request to Google).
- Images use `next/image` with `unoptimized: true` (required for static export); previews are pre-resized WebP.
- Dependencies are deliberately few: next, react, react-dom, typescript and types. Do not add libraries without asking.
- History: the site was first prototyped in PHP; the owner switched to Next.js static export for the portfolio.
  There must be no PHP in this repo.

## Files
```
src/app/layout.tsx        root layout, Google fonts, metadata (title, description, Open Graph)
src/app/page.tsx          the single page: header, cycles, "next cycle" row, footer
src/app/globals.css       all styles (design tokens in :root)
src/app/icon.svg, apple-icon.png, favicon.ico   favicons (Next.js file convention)
public/og.png             Open Graph image 1200x630, referenced in layout.tsx
src/components/           CycleSection (group), PostCard, PostModal (client popup) and SoonCard
src/data/types.ts         Post, Cycle, Site types
src/data/cycles.ts        THE CONTENT. Edit this to add posts
src/lib.ts                small helpers (pad)
public/posts/<cycle>/     previews and texts: NN-slug.webp (WebP 600x750, 4:5) and NN-slug.txt (post text for the popup)
public/pdf/<cycle>/       PDFs: NN-slug.pdf. Created as posts are published
docs/                     screenshots for the README
```

## Content rules (implemented in the components, keep them)
- Every post listed in `cycles.ts` is rendered, whether or not it has a LinkedIn URL. The "LinkedIn" button (card and popup)
  is shown only when `linkedin` is not empty; with an empty `linkedin` the post is shown with the PDF link only.
- Add a post to `cycles.ts` only when it should be visible on the page; there is no hidden/draft state.
- Every cycle object in `cycles.ts` is rendered (an empty `posts` array shows a header with `0/N` and a "Coming soon" card).
- Exactly one "Coming soon" card after the last listed post until the cycle is complete. Never one per future post.
- The last listed post of a cycle gets the NEW badge. The group header shows `listed/total sheets`.
- There is no full-cycle PDF ("magazine"). Instead, every cycle ends with ONE closing post: a call to go through the
  cycle's topics once more, plus an announcement of the next cycle. It is an ordinary post (same files and the same
  `cycles.ts` entry as any other, with its own PDF), listed when it is ready, with `closing: true` and `n` = total + 1.
  It is NOT counted in `total` or in the `listed/total` counter (a finished 7-sheet cycle shows `7/7` while having 8
  posts), its card label is "Wrap-up" instead of `NN/total`, and it gets the NEW badge as the last listed post.
  No "Coming soon" card is shown for it.
- Group badge colours so far: Web Fundamentals `#72D76F` (WF), JavaScript `#D4F04C` (JS), TypeScript `#6FD3E6` (TS).
  For React, Next.js, Zustand and Forms pick from the palette below and ask the owner.
- React escapes text automatically; titles contain `&` ("HTTP & HTTPS") and that is fine.

## Design tokens (`:root` in globals.css)
`--bg #2F4858`, `--lime #D4F04C`, `--green #72D76F`, `--cyan #6FD3E6`, `--soft #C9D8DF`, `--mute #9DB3BE`.
Fonts: Inter (400, 600, 700, 800, 900), JetBrains Mono (500, 700) for numbers and tags. Cards are 4:5 like the images.
Grid: `auto-fill minmax(240px, 1fr)`, two columns under 560px. The look is the series cover look (dark slate + lime);
it matches `style.css` of the LinkedIn project. Do not redesign.

## How to add a post (the daily routine)
1. Take `out/NN-slug.png`, `out/NN-slug.pdf` and the post text (`NN-slug.txt`) from the LinkedIn project.
2. Thumbnail: resize the PNG to 600x750 and save as WebP quality ~82 into `public/posts/<cycle-folder>/NN-slug.webp`
   (`convert in.png -resize 600x750 -quality 82 out.webp`, or Pillow). Aim for about 50 KB.
   Put the text next to it as `public/posts/<cycle-folder>/NN-slug.txt`.
3. Copy the PDF to `public/pdf/<cycle-folder>/NN-slug.pdf` (same file name as in the LinkedIn project).
4. Add one entry to `posts` in `src/data/cycles.ts` (`thumb`, `text`, `pdf`) with an EMPTY `linkedin` (`""`) first: the
   post is already visible on the page, without the LinkedIn button. Push and wait for the green deploy BEFORE publishing
   on LinkedIn, so the PDF link in the first comment works the moment readers see the post.
   After publishing, put the real LinkedIn URL into `linkedin` and push again (that adds the LinkedIn button).
5. When a cycle ends: add its closing post (recap + announcement of the next cycle) as a normal post with `closing: true`, steps 1-4.
   When a new cycle starts: add the cycle object, and update `next`.
6. Run the full final check below, then upload the contents of `out/`.

## Checks before delivering (mandatory final check before EVERY deploy)
The owner asked for a complete final check before each deploy. Run all of it and report the result before saying the site
is ready to upload:
- `npm run typecheck` and `npm run build` pass with no warnings.
- Every `thumb`, `text` and `pdf` path in `cycles.ts` exists under `public/` and returns 200 from `npx serve out`;
  `og.png` and the favicons too.
- No PHP, no forbidden CTAs, analytics or third-party scripts (see Don'ts), no placeholder `linkedin` URLs
  (a not yet published post uses `""`).
- Check desktop and a ~390px wide screen (browser pane or Playwright): no horizontal scroll, nothing clipped.
- Do not deploy while any item fails; list the failures instead.

## Deployment
- Subdomain `cheatsheets.melkonsimonyan.com` points to its own folder on the owner's hosting, HTTPS on.
- Upload the CONTENTS of `out/` (with `trailingSlash: true` every route is a folder with `index.html`).
- Deploy: GitHub Actions (`.github/workflows/deploy.yml`) builds `out/` on the runner on push to `main` and uploads it
  with `appleboy/scp-action` over SSH (same action family as the owner's other projects) as a dedicated CloudPanel SSH
  user (name in the `SSH_USER` secret; key auth, never root). Target: `/home/cheatsheets/htdocs/cheatsheets.melkonsimonyan.com/`.
  Repository secrets: `SSH_HOST`, `SSH_PORT` (optional), `SSH_USER`, `SSH_PRIVATE_KEY`. Nothing is built or run on the
  server. Old files are not removed automatically (no `--delete`).
  History: SFTP with the FTP user failed (`EOF during negotiation`), FTPS was refused (`500 AUTH not understood`),
  rsync hung with no output.

## Don'ts
- No dates, no "Day N", no "learn in N days". Do not present upcoming posts as if they were ready.
- No "Follow me" / "Subscribe" / "Tell me in the comments" calls to action anywhere on the page (the owner dislikes them).
- Do not list posts whose files are not ready. Do not leave placeholder links in the public page: an unpublished post
  has an empty `linkedin`, not a fake URL.
- No analytics, cookies, tracking, or third-party scripts without asking.
- Do not rename the series: **Frontend Interview Cheat Sheets**. Sub-cycle names: Web Fundamentals, JavaScript, TypeScript,
  React, Next.js, Zustand, Forms (Zod, Yup).
- Do not commit `node_modules`, `.next` or `out`.

## Open items
- Decide whether "every day" in the page subtitle and Open Graph description is acceptable next to the "no dates" rule.
- Choose a licence for the code (the README says it is not specified yet).
