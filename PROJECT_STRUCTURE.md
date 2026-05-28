# CareerXel Platform - Project Structure

## Overview

This is a monorepo containing the CareerXel platform with separate backend and frontend applications.

```
careerxel-platform/
├── backend/                    # Node.js/Strapi backend API
├── frontend/                   # Next.js React frontend
├── package.json               # Root workspace config
└── README.md
```

---

## 🗂️ Root Directory Structure

| File/Folder | Purpose |
|---|---|
| `backend/` | Backend API server (Node.js + Strapi CMS) |
| `frontend/` | Frontend web app (Next.js 13+ with App Router) |
| `.gitignore` | Global ignore rules for git |
| `.vscode/` | Shared VS Code settings |
| `package.json` | Root workspace configuration |
| `README.md` | Project overview |

---

## 🔧 Backend Structure

```
backend/
├── config/                     # Configuration files
│   ├── admin.js               # Strapi admin config
│   ├── api.js                 # API configuration
│   ├── database.js            # Database setup
│   ├── middlewares.js         # Express middlewares
│   ├── plugins.js             # Plugin configuration
│   └── server.js              # Server configuration
├── database/                   # Database files
│   └── migrations/            # SQL migrations (ignored in git)
├── src/                        # Source code
│   ├── api/                   # API endpoints
│   │   ├── blog-post/         # Blog post resource
│   │   ├── lead/              # Lead capture
│   │   ├── newsletter-subscriber/
│   │   ├── page/              # Page content
│   │   └── testimonial/       # Testimonials
│   ├── components/            # Reusable CMS components
│   └── index.js              # Entry point
├── scripts/                    # Utility scripts
│   ├── seed-testimonials.js   # Seed testimonials
│   ├── publish-testimonials.js
│   └── debug-*.js
├── docs/                       # Documentation & examples
│   └── examples/              # Example data files
│       ├── blogPosts.example.json
│       ├── pricingContent.example.json
│       └── resourcesContent.example.json
├── public/uploads/            # Uploaded files (ignored in git)
├── .env.example              # Environment template
├── package.json              # Backend dependencies
└── .gitignore               # Backend-specific git rules

```

### Backend Configuration Files

- **config/** - Strapi configuration
- **.env.example** - Template for environment variables (`.env` is ignored)
- **database/migrations/** - SQL migration files (ignored in git)

### What's Ignored

- `node_modules/` - Dependencies
- `.env` - Secret keys
- `.strapi/` - Strapi temp files
- `.strapi-updater.json` - Auto-generated
- `database/migrations/` - Local database changes

---

## 🎨 Frontend Structure

```
frontend/
├── app/                       # Next.js App Router
│   ├── (site)/               # Main site routes
│   │   ├── page.tsx          # Home page (/)
│   │   ├── candidates/       # /candidates
│   │   │   └── page.tsx
│   │   ├── employers/        # /employers
│   │   │   └── page.tsx
│   │   ├── features/         # /features
│   │   │   └── page.tsx
│   │   ├── pricing/          # /pricing
│   │   │   └── page.tsx
│   │   ├── resources/        # /resources
│   │   │   ├── page.tsx
│   │   │   └── blog/
│   │   ├── contact/          # /contact
│   │   │   └── page.tsx
│   │   └── [slug]/           # Dynamic routes
│   │       └── page.tsx
│   ├── api/                  # API routes
│   │   ├── contact/          # Contact form endpoint
│   │   ├── newsletter/       # Newsletter signup
│   │   └── testimonials/     # Testimonials endpoint
│   ├── globals.css           # Global styles & design tokens
│   ├── layout.tsx            # Root layout
│   ├── error.tsx             # Error boundary
│   ├── not-found.tsx         # 404 page
│   ├── robots.ts             # robots.txt
│   └── sitemap.ts            # sitemap.xml
├── components/               # Reusable React components
│   ├── contact-form.tsx      # Contact form
│   ├── footer.tsx            # Footer
│   ├── nav.tsx               # Navigation
│   ├── pricing-content.tsx   # Pricing display
│   ├── resources-blog.tsx    # Blog listing
│   ├── resources-newsletter.tsx
│   ├── resources-shelves.tsx # Featured resources
│   └── ui.tsx                # Utility components
├── lib/                       # Utility functions & content
│   ├── content.ts            # Centralized content & navItems
│   ├── cta.ts                # CTA routing logic
│   ├── pricing.ts            # Pricing types & data
│   ├── resources.ts          # Resources utilities
│   ├── resources-data.ts     # Resources content
│   └── strapi.ts             # Strapi API client
├── scripts/                   # Build scripts
│   └── fix-ribbons.mjs        # CSS ribbon fixer
├── .env.local                 # Local environment (ignored)
├── next.config.mjs           # Next.js config
├── tailwind.config.ts        # Tailwind CSS config
├── postcss.config.mjs        # PostCSS config
├── tsconfig.json             # TypeScript config
├── package.json              # Dependencies
└── .gitignore               # Git ignore rules

```

### Frontend Key Files

- **globals.css** - Design tokens (colors, spacing, components)
- **lib/content.ts** - Centralized navigation & content
- **components/ui.tsx** - Reusable UI utilities (Container, Eyebrow, etc.)
- **app/(site)/** - All main pages

### Page Structure Pattern

All pages follow a consistent structure for easy maintenance:

```tsx
// 1. Metadata export
export const metadata: Metadata = { ... }

// 2. Component with numbered sections
export default function PageName() {
  return (
    <main className="relative">
      {/* 00 HERO */}
      <section>...</section>
      
      {/* 01 SECTION_NAME */}
      <section>...</section>
      
      [more sections...]
    </main>
  )
}
```

### What's Ignored

- `node_modules/` - Dependencies
- `.next/` - Build output
- `.env.local` - Local secrets
- `tsconfig.tsbuildinfo` - TypeScript cache

---

## 📦 Key Files Explained

### .gitignore

**Root `.gitignore`** covers:
- Node dependencies and lock files
- Build outputs (`.next/`, `dist/`, `build/`)
- Environment files (`.env`, `.env.*` except `.env.example`)
- IDE and OS files (`.vscode/`, `.idea/`, `.DS_Store`)
- Backend-specific files (Strapi temp files, migrations)

**Backend `.gitignore`** covers backend-specific rules:
- Environment files
- Strapi auto-generated files
- Build artifacts

### Environment Variables

**Backend (.env.example)**
```
DATABASE_URL=
JWT_SECRET=
STRAPI_ADMIN_JWT_SECRET=
```

**Frontend (.env.local is ignored)**
```
NEXT_PUBLIC_API_URL=http://localhost:3000
```

---

## 🧹 Cleanup Summary

### Issues Fixed

✅ **Updated `.gitignore` files**
- Backend now ignores `.strapi-updater.json`, `.env`, migrations
- Root now ignores `tsconfig.tsbuildinfo` and frontend-specific files

✅ **Organized Example Files**
- Moved example JSON files to `backend/docs/examples/`
- Created documentation for examples

✅ **Removed Clutter**
- Example files no longer at backend root

### File Organization

| Before | After |
|---|---|
| `backend/*.example.json` (3 files) | `backend/docs/examples/*.example.json` |
| Scattered `.gitignore` rules | Comprehensive root + backend `.gitignore` |
| No documentation | `backend/docs/README.md` |

---

## 🚀 Development Commands

### Backend
```bash
cd backend
npm install
npm run develop  # Start Strapi
```

### Frontend
```bash
cd frontend
npm install
npm run dev      # Start Next.js dev server
```

---

## 📝 Notes

- All pages follow consistent structure with numbered sections
- Centralized content in `frontend/lib/content.ts`
- Design system in `frontend/app/globals.css`
- Example files are version-controlled for reference
- Production data comes from Strapi CMS
