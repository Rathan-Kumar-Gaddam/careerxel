export const resourceCategories = [
  "All",
  "Engineering",
  "Hiring",
  "Placements",
  "AI & Methodology",
  "Customer Stories",
  "Product"
] as const;

export type ResourceCategory = (typeof resourceCategories)[number];

export type ResourceArticle = {
  slug?: string;
  glyph: string;
  tag: string;
  category: Exclude<ResourceCategory, "All">;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  href?: string;
};

export const resourceArticles: ResourceArticle[] = [
  {
    glyph: "01",
    tag: "▢ ENGINEERING",
    category: "Engineering",
    title: "Why we replaced our resume parser — twice — in 18 months",
    excerpt: "OCR is solved. Resumes are not. The story of three pipelines and one painful migration.",
    date: "2026.04.28",
    readTime: "9 MIN"
  },
  {
    glyph: "02",
    tag: "▢ HIRING",
    category: "Hiring",
    title: 'What 12,000 mock interviews taught us about the "communication" score',
    excerpt: "Our most controversial dimension — and what we changed when partners pushed back.",
    date: "2026.04.21",
    readTime: "11 MIN"
  },
  {
    glyph: "03",
    tag: "▢ PLACEMENTS",
    category: "Placements",
    title: "Riverbend went from 41% → 72% placement rate. Here's what they did differently",
    excerpt: "A long-form case study. With the actual CSVs we used. Open data.",
    date: "2026.04.14",
    readTime: "22 MIN"
  },
  {
    glyph: "04",
    tag: "▢ AI",
    category: "AI & Methodology",
    title: "Inside CXL-V4 — the model card, the methodology, the limits",
    excerpt: "Public model card. What it does, what it doesn't, what we'd do differently next.",
    date: "2026.04.07",
    readTime: "17 MIN"
  },
  {
    glyph: "05",
    tag: "▢ HIRING",
    category: "Hiring",
    title: "The recruiter's stage map — what every modern ATS gets wrong",
    excerpt: "Stage names matter. Here's how 340 partners actually structure their funnels.",
    date: "2026.03.31",
    readTime: "8 MIN"
  },
  {
    glyph: "06",
    tag: "▢ STORIES",
    category: "Customer Stories",
    title: "How Helix cut their time-to-offer from 38 days to 11",
    excerpt: "A long conversation with their head of talent. Nothing held back.",
    date: "2026.03.24",
    readTime: "13 MIN"
  },
  {
    glyph: "07",
    tag: "▢ PRODUCT",
    category: "Product",
    title: "The case for video-first interview replay",
    excerpt: "Why we shipped replay even when partners said they didn't need it. The data.",
    date: "2026.03.17",
    readTime: "10 MIN"
  },
  {
    glyph: "08",
    tag: "▢ AI",
    category: "AI & Methodology",
    title: "Fairness audits, in public, every quarter",
    excerpt: "What we measure, why we publish, and what the latest run actually said.",
    date: "2026.03.10",
    readTime: "15 MIN"
  },
  {
    glyph: "09",
    tag: "▢ ENGINEERING",
    category: "Engineering",
    title: "How we run 12k concurrent video interviews on shared infra",
    excerpt: "The architecture. The autoscaling story. The 3 a.m. incident that taught us better.",
    date: "2026.03.03",
    readTime: "19 MIN"
  }
];

export const resourceShelves = [
  {
    title: "Guides & playbooks",
    sub: "12 PUBLISHED · PDF + WEB",
    icon: "guides",
    items: [
      { badge: "PDF", name: "The cohort onboarding playbook", meta: "12 PAGES · MAR 2026" },
      { badge: "PDF", name: "Recruiter scorecard templates · Vol II", meta: "28 PAGES · FEB 2026" },
      { badge: "WEB", name: "Resume optimization · the long version", meta: "22 MIN READ · JAN 2026" },
      { badge: "PDF", name: "NAAC / NIRF reporting · field guide", meta: "36 PAGES · JAN 2026" },
      { badge: "WEB", name: "Mock-interview prep · 30-day program", meta: "DEC 2025" }
    ]
  },
  {
    title: "Docs & API",
    sub: "REFERENCE · CHANGELOG",
    icon: "docs",
    items: [
      { badge: "REF", name: "REST API reference", meta: "v3.4 · 240 ENDPOINTS" },
      { badge: "SDK", name: "SDKs · Node · Python · Ruby · Go", meta: "UPDATED 2026.05.04" },
      { badge: "HOOK", name: "Webhook reference · 47 events", meta: "UPDATED 2026.04.28" },
      { badge: "LOG", name: "Changelog · weekly", meta: "LATEST · 2026.05.06" },
      { badge: "SEC", name: "Security & compliance hub", meta: "SOC 2 · GDPR · DPDP" }
    ]
  },
  {
    title: "Webinars & talks",
    sub: "REPLAYS · UPCOMING",
    icon: "webinars",
    items: [
      { badge: "▶", name: "Hiring through 2026 — 340-employer panel", meta: "REPLAY · 52 MIN" },
      { badge: "▶", name: "Inside CXL-V4 with Priya Khurana", meta: "REPLAY · 38 MIN" },
      { badge: "▶", name: "Riverbend → 72%, the long version", meta: "REPLAY · 44 MIN" },
      { badge: "⊕", name: "Fairness audits in public · LIVE", meta: "UPCOMING · MAY 28" },
      { badge: "⊕", name: "College groups roundtable · LIVE", meta: "UPCOMING · JUN 04" }
    ]
  }
] as const;
