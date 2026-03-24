# MediaHub — Marketing Team Website

The main marketing website for the MediaHub platform, hosted on [Netlify](https://www.netlify.com/).

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Language:** TypeScript
- **Hosting:** Netlify (via `@netlify/plugin-nextjs`)

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, features, testimonials, and CTA |
| `/about` | About page — story, values, and team |
| `/contact` | Contact page — contact form (Netlify Forms) and contact details |

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

## Deployment

This site is deployed automatically to Netlify on every push to `main`. The build configuration is defined in [`netlify.toml`](./netlify.toml).

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Publish directory | `.next` |
| Node version | 20 |

### Contact Form

The contact form on `/contact` uses [Netlify Forms](https://docs.netlify.com/forms/setup/). No additional configuration is required — Netlify detects the `data-netlify="true"` attribute automatically during the build.

## Scripts

```bash
npm run dev    # Start development server
npm run build  # Production build
npm run start  # Start production server
npm run lint   # Run ESLint
```
