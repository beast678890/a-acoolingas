# A&A Cooling Distributors — Website (starter)

This repository is a production-ready starter scaffold for the A&A Cooling Distributors corporate website.

Tech highlights:
- Next.js 14 (App Router)
- Tailwind CSS 3
- Framer Motion, React Hook Form + Zod
- Sanity + Algolia placeholders
- Accessibility & SEO-first scaffolding

Quick start (PowerShell):

```powershell
cd "c:\Users\ADMIN\Downloads\distribution company\aacoolings-site"
npm install
npm run dev
```

Files to complete after scaffold:
- Sanity dataset import and schemas (sanity/)
- Algolia indexing and search front-end
- RFQ Wizard & Distributor portal
- Forms hooked to HubSpot + Slack
- Assets import (place `team` images into `public/team/`)

Deployment: AWS Lightsail + CloudFront. See `docs/deploy.md` (placeholder).

Publishing to GitHub and deploying on Netlify
--------------------------------------------------

1) Create a new GitHub repository (private or public) and push this folder as the repo root.

2) On Netlify, select "New site from Git" → connect your GitHub account → choose the repository.

3) Set build settings on Netlify:

	- Build command: `npm run build`
	- Publish directory: `.next`

4) Add Netlify environment variables (Site settings → Build & deploy → Environment):

	- NEXT_PUBLIC_SITE_URL = https://aacoolings.com
	- SANITY_PROJECT_ID = (your Sanity project id)
	- SANITY_DATASET = production

5) Trigger a deploy. If the site needs Sanity data to render pages, import the Sanity dataset first or provide preview data.

Notes on finalizing the site
- Replace `__REPLACE_WITH_PROJECT_ID__` in `sanity.json` and Netlify env with your real Sanity project id.
- After `npm install`, run `npx sanity start` from Studio folder or use the Sanity CLI to import the supplied dataset.
- The site uses ISR; Netlify will build a static SSR'ed app from Next.js (see Netlify docs for Next.js App Router support).

