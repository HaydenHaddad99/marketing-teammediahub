# Team Media Hub — Agent Context & Project Brief

## Who I Am
- **Company:** Team Media Hub (DBA under Acquired Giant LLC)
- **Domain:** teammediahub.co
- **Email domain:** @teammediahub.co

---

## The Two Properties — Understand the Difference

### 1. Marketing Website (THIS workspace)
- **URL:** https://teammediahub.co
- **Purpose:** Public-facing landing page — describes the product, converts visitors, satisfies AWS Activate requirements
- **Hosted on:** Netlify (project: quiet-mermaid-496b55.netlify.app)
- **Managed via:** This VS Code workspace — you edit, build, and deploy from here
- **Deployment:** Netlify CLI (`netlify deploy --prod`) or drag-drop via Netlify dashboard

### 2. The SaaS App (SEPARATE — do not confuse)
- **URL:** https://app.teammediahub.co
- **Purpose:** The actual product — coaches and parents log in here to share team photos/videos
- **Hosted on:** AWS (CloudFront CDN)
- **DNS:** CNAME → d2u8ibdrwf4t7.cloudfront.net
- **NOT managed in this workspace** — this is a separate codebase/repo
- When linking from the marketing site to the app, always link to https://app.teammediahub.co

---

## DNS Setup (Important Context)
- **Registrar:** GoDaddy (domain purchased here)
- **DNS managed by:** Netlify DNS (nameservers: dns1-4.p04.nsone.net)
- **Records in Netlify DNS:**
  - `teammediahub.co` → Netlify (marketing site)
  - `www.teammediahub.co` → Netlify (redirects to primary)
  - `app.teammediahub.co` → d2u8ibdrwf4t7.cloudfront.net (AWS app — do not touch)

---

## Product Context

**What it does:** Team Media Hub is a private photo and video sharing platform built specifically for youth sports teams. Coaches and parents can upload, browse, and download team media — with no ads, no public feeds, and no social media exposure.

**Target users:**
- Youth sports coaches (primary — they create teams, invite parents)
- Sports parents (secondary — they join via team code, upload and view media)
- Athletic directors / team admins

**Core value props:**
- No social media. No ads. Just your team.
- Private by default — team memories stay with the team
- Simple for every parent on any device
- Reduces workload for coaches, not adds to it

**Stage:** Early access / beta

**Key CTAs (always use these):**
- Primary: "Join with Team Code" → https://app.teammediahub.co
- Secondary: "Coach Sign-in" → https://app.teammediahub.co

---

## Brand Guidelines

**Colors:**
- Background: `#0F1117` (dark navy)
- Gradient: `#00C8FF` (cyan) → `#00E87A` (green)
- Body text: `#FFFFFF`
- Muted text: `rgba(255,255,255,0.55)`
- Apply cyan-to-green gradient on headings, buttons, and accent elements

**Typography:**
- Font: Inter (Google Fonts)
- Headings: bold, large, gradient fill
- Body: light weight, white/muted

**Tone:** Friendly, trustworthy, simple. Not corporate. Not overly sporty. Parents and coaches should feel immediately at ease.

**Logo:** TMH monogram — dark rounded square icon with cyan-to-green gradient letterforms

**Tagline:** "A private place for your team's photos & videos"
**Subheadline:** "No social media. No ads. Just your team."

---

## Website Pages Plan

### Currently live:
- `/` — Homepage (hero, features, how it works, CTA)

### Pages to build next:
- `/about` — Company mission, story, values (pull from app.teammediahub.co/about content)
- `/pricing` — Plans for coaches/teams
- `/privacy` — Privacy policy (critical for trust with parents)
- `/terms` — Terms of service
- `/contact` — Contact form or email link

---

## Netlify Deployment Instructions

**Install Netlify CLI (if not already):**
```bash
npm install -g netlify-cli
netlify login
```

**Link this workspace to the Netlify project:**
```bash
netlify link
# Select: quiet-mermaid-496b55
```

**Deploy to production:**
```bash
netlify deploy --prod
```

**Preview deploy (test before going live):**
```bash
netlify deploy
```

**Check deploy status:**
```bash
netlify status
```

---

## Development Notes

- This is a **static site** — HTML, CSS, JS only (no backend framework needed unless we add one)
- Keep it a **single repo** — all marketing pages live here
- All internal links use relative paths (`/about`, `/pricing`)
- All links to the app use the full URL: `https://app.teammediahub.co`
- Mobile responsiveness is required — many parents are on phones
- Maintain dark theme throughout — must match the app's visual style
- AWS Activate requirement: every page must clearly describe the product and show the company stage (early access)

---

## AWS Activate Context
This website exists partly to satisfy AWS Activate application requirements:
- Site must be fully functional (all buttons/links work)
- Must clearly describe the product
- Must state the company stage (use "early access" or "request a demo" CTAs)
- Company email used everywhere must end in @teammediahub.co

---

## Quick Reference Links
- Marketing site: https://teammediahub.co
- App: https://app.teammediahub.co
- Netlify dashboard: https://app.netlify.com/projects/quiet-mermaid-496b55
- LinkedIn company page: Team Media Hub
