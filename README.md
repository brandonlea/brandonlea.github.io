# Brandon-Lea Price — Portfolio

Personal portfolio site for Brandon-Lea Price, a full-stack developer working across Laravel, React, and Python. Dark-mode, minimal, and built to be easy to keep up to date.

**Live site:** [brandonlea.github.io](https://brandonlea.github.io/)

![React](https://img.shields.io/badge/React-19-149eca?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646cff?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-blue)

## About

Built with Vite, React, TypeScript, and Tailwind CSS v4, with icons from lucide-react. The design is a minimal, engineering-focused dark theme with a blue accent, covering:

- **Hero** — headline, availability badge, and call-to-action buttons
- **About** — background, current focus, and certifications
- **Skills** — categorized by backend, frontend, databases & testing, and tooling
- **Projects** — featured work with live demo and repository links
- **Architecture** — engineering philosophy with a real code sample
- **Contact** — direct email + social links

## Getting started

Requires [Node.js](https://nodejs.org/) 18 or later.

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173` by default.

## Build

```bash
npm run build      # outputs a production build to dist/
npm run preview    # serve the production build locally
```

## Editing content

Everything on the site — name, links, skills, and projects — lives in one file:

```
src/data/portfolioData.ts
```

Update the values there and the whole site reflects the change; no component code needs to be touched for routine content edits.

## Project structure

```
src/
  data/
    portfolioData.ts     # all content + TypeScript types — edit this
  components/
    Header.tsx           # sticky nav with name + socials
    Hero.tsx              # headline, availability badge, CTAs
    About.tsx              # background, focus areas, certifications
    Skills.tsx               # categorized skill grid
    Projects.tsx              # featured project grid
    ProjectCard.tsx             # individual project card
    Architecture.tsx              # engineering philosophy + code sample
    Contact.tsx                    # email CTA + social links
    Footer.tsx
  App.tsx                 # page layout / section order
  index.css               # Tailwind v4 theme tokens + base styles
public/
  favicon.svg, favicon.ico, favicon-32.png, apple-touch-icon.png
  brandon-lea-price-cv.pdf   # downloadable résumé
```

## Deployment

This is a static site — `npm run build` outputs everything needed into `dist/`. It deploys automatically to GitHub Pages via the workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml): every push to `main` builds the site on a `windows-latest` runner and publishes `dist/` to Pages.

For this to work, the repository's Pages source needs to be set to **GitHub Actions**: Settings → Pages → Build and deployment → Source → "GitHub Actions".

The build output isn't tied to GitHub Pages, though — it works on any static host (Cloudflare Pages, Netlify, Vercel, etc.) with no configuration changes.

## License

MIT — feel free to use this as a starting point for your own portfolio.
