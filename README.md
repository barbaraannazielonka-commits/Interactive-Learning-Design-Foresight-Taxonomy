# Interactive Learning Design & Foresight Taxonomy

**Author & Curator**: Barbara Anna Zielonka  
**Domain**: Evidence-Based Educational Trends, Cognitive Architecture, and Learning Foresight

An interactive research platform and foresight taxonomy synthesising 27 global educational trends across 10 strategic domains and 3 implementation horizons (Adopted, Accelerating, Frontier).

---

## 🚀 Cloudflare Pages Deployment Guide

This project is built with **Vite + React 19 + TypeScript + Tailwind CSS** and is pre-configured for instant zero-configuration deployment to **Cloudflare Pages**.

### 1. Push to GitHub
1. Create a new repository on GitHub (e.g., `educational-trends-taxonomy`).
2. In your exported project folder, initialize git and push:
```bash
git init
git add .
git commit -m "Initial commit of Interactive Learning Design & Foresight Taxonomy"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

### 2. Deploy on Cloudflare Pages
1. Go to your **[Cloudflare Dashboard](https://dash.cloudflare.com/)** → **Compute (Workers & Pages)** → **Create Application** → **Pages** → **Connect to Git**.
2. Select your GitHub repository.
3. In the **Build configuration** screen, enter:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (leave as default)
4. Under **Environment variables (advanced)**, optionally set:
   - `NODE_VERSION`: `20` (or `22`)
5. Click **Save and Deploy**.

> **Note on Routing & Refreshes**:  
> A pre-configured `public/_redirects` file (`/* /index.html 200`) is included in this repository. Cloudflare Pages automatically handles all client-side navigation without 404 errors on page reload.

---

## 💻 Local Development

To run the application locally on your computer:

```bash
# 1. Install dependencies
npm install

# 2. Start the local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) or [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build Test
To test the production build locally:
```bash
npm run build
npm run preview
```

---

## 📦 Project Structure

```
├── index.html                   # HTML entry point with meta tags & typography
├── package.json                 # Project dependencies & scripts
├── vite.config.ts               # Vite configuration with Tailwind CSS plugin
├── tsconfig.json                # TypeScript configuration
├── public/
│   ├── _redirects               # Cloudflare Pages SPA rewrite rules
│   └── robots.txt               # Web crawler indexing directives
├── src/
│   ├── App.tsx                  # Root application shell, theme & font size state
│   ├── main.tsx                 # React DOM mount
│   ├── index.css                # Global Tailwind CSS and font scaling rules
│   ├── types/                   # TypeScript interfaces (Trend, Category, Horizon, etc.)
│   ├── data/
│   │   ├── educationalTrends.ts # 27 curated educational trends across 10 categories
│   │   └── apaSources.ts        # Scholarly references with verified DOIs
│   └── components/
│       ├── Header.tsx           # Navigation, dark mode toggle, font size scaler
│       ├── HorizonRadar.tsx     # SVG radial maturity radar (3 horizons)
│       ├── ConstellationMap.tsx # Interactive node-link pedagogical network
│       ├── TrendsMatrix.tsx     # Filterable directory of trends
│       ├── CategoryRationaleView.tsx # 10 research domain foundations & spotlights
│       ├── ExperienceSynthesizer.tsx # Multi-trend syllabus & unit co-designer
│       ├── BibliographyView.tsx # Sources repository with direct DOIs
│       ├── TrendDetailDrawer.tsx# In-depth trend pedagogical profile drawer
│       └── SavedBriefModal.tsx  # Strategy brief exporter and bookmark deck
```
