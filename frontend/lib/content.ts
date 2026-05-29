import {
  BarChart3,
  Bot,
  BriefcaseBusiness,
  Building2,
  CalendarCheck,
  FileText,
  GraduationCap,
  LineChart,
  Search,
  Sparkles,
  UsersRound
} from "lucide-react";

export type Feature = {
  title: string;
  text: string;
  tag: string;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  company?: string;
  displayOrder?: number;
};

export type PageContent = {
  slug: string;
  title: string;
  description: string;
  kicker: string;
  eyebrow: string;
  headline: string;
  mutedHeadline: string;
  primaryCta: string;
  secondaryCta: string;
  features: Feature[];
  testimonials?: Testimonial[];
  pricingContent?: unknown;
  resourcesContent?: unknown;
};

export interface NavItem {
  label: string;
  href: string;
  dropdownItems?: { label: string; href: string; description: string }[];
}

export const navItems: NavItem[] = [
  { label: "Features", href: "/features" },
  {
    label: "Solutions",
    href: "/candidates",
    dropdownItems: [
      { label: "For Candidates", href: "/candidates", description: "AI mock interviews & resume builder" },
      { label: "For Employers", href: "/employers", description: "Configurable ATS & AI screening" },
      { label: "For Colleges", href: "/colleges", description: "Placement dashboards & analytics" }
    ]
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Contact ", href: "/contact" }
];

export const homeContent = {
  hero: {
    kicker: "A career platform, reimagined.",
    eyebrow: "AI-native career platform",
    headline: "Hire smarter.",
    mutedHeadline: "Grow faster.",
    body:
      "One platform for candidates, employers, and colleges with AI mock interviews, full-stack ATS, and placement analytics that actually move the needle.",
    stats: [
      ["10K+", "Jobs"],
      ["50K+", "Candidates"],
      ["200+", "Colleges"],
      ["7", "Languages"]
    ]
  },
  logos: ["Helix", "Northwell", "Quanta", "Axiom", "Mercer&Co", "Riverbend U"],
  solutions: [
    {
      icon: UsersRound,
      title: "Candidates",
      text: "Create a profile, practice interviews, build resumes, and match with jobs faster.",
      href: "/candidates",
      tag: "Profile to offer"
    },
    {
      icon: BriefcaseBusiness,
      title: "Employers",
      text: "Source, screen, interview, and hire from one focused recruiter workspace.",
      href: "/employers",
      tag: "ATS plus AI"
    },
    {
      icon: GraduationCap,
      title: "Colleges",
      text: "Run placements with transparent dashboards, recruiter pipelines, and cohort analytics.",
      href: "/colleges",
      tag: "Campus ready"
    },
    {
      icon: Bot,
      title: "AI engine",
      text: "Interview intelligence, scoring rubrics, resume feedback, and career recommendations.",
      href: "/ai",
      tag: "Always on"
    }
  ],
  features: [
    { icon: Bot, title: "AI Mock Interviews", text: "Role-aware interviews with scoring, feedback, and next practice drills.", tag: "/INTERVIEW-ENGINE" },
    { icon: CalendarCheck, title: "Recruiter ATS", text: "Stages, slots, calendars, bulk uploads, and every applicant in context.", tag: "/PIPELINE" },
    { icon: FileText, title: "Resume Builder", text: "Adaptive resumes that retune for every role and recruiter signal.", tag: "/RESUME-OS" },
    { icon: Search, title: "Job Search", text: "Full-text discovery with smart matching beyond keywords.", tag: "/DISCOVERY" },
    { icon: Sparkles, title: "Career Roadmaps", text: "Role and skill paths from where candidates are to where they want to go.", tag: "/GROWTH" },
    { icon: BarChart3, title: "Placement Analytics", text: "Real numbers per college, cohort, recruiter, source, and period.", tag: "/ANALYTICS" }
  ],
  steps: [
    ["01", "Build your profile.", "AI parses your resume, fills your profile, and asks the right follow-up questions."],
    ["02", "Match and practice.", "Smart matching finds roles. Mock interviews score you and show what to fix."],
    ["03", "Get placed.", "Apply, interview, sign. Recruiters get recommendations they can trust."]
  ],
  numbers: [
    ["52K+", "Candidates onboarded"],
    ["10.4K", "Jobs posted"],
    ["340K", "Mock interviews"],
    ["214", "Partner colleges"]
  ],
  testimonials: []
};

export const pages: Record<string, PageContent> = {
  candidates: {
    slug: "candidates",
    title: "For Candidates",
    description: "Practice interviews, improve your resume, discover roles, and track every application.",
    kicker: "Your career command center.",
    eyebrow: "For candidates",
    headline: "Build proof.",
    mutedHeadline: "Win interviews.",
    primaryCta: "Start practicing",
    secondaryCta: "Explore jobs",
    features: [
      { title: "AI interview coach", text: "Practice technical, behavioral, and role-specific interviews with structured feedback.", tag: "/PRACTICE" },
      { title: "Resume intelligence", text: "Tune every resume for skills, impact, and recruiter scan patterns.", tag: "/RESUME" },
      { title: "Job matching", text: "Find roles by skills, growth goals, location, experience, and salary fit.", tag: "/MATCH" }
    ]
  },
  employers: {
    slug: "employers",
    title: "For Employers",
    description: "A modern ATS with AI screening, structured interviews, and faster hiring analytics.",
    kicker: "Hiring without pipeline drag.",
    eyebrow: "For employers",
    headline: "Screen faster.",
    mutedHeadline: "Hire better.",
    primaryCta: "Book a demo",
    secondaryCta: "See ATS",
    features: [
      { title: "Configurable ATS", text: "Manage openings, applicants, stages, interview panels, and offer flow.", tag: "/ATS" },
      { title: "AI scoring", text: "Use consistent rubrics and evidence-backed interview summaries.", tag: "/SCORING" },
      { title: "Hiring analytics", text: "Track time-to-hire, source mix, quality signals, and offer conversion.", tag: "/REPORTS" }
    ]
  },
  colleges: {
    slug: "colleges",
    title: "For Colleges",
    description: "Placement operations, student readiness, recruiter engagement, and cohort analytics.",
    kicker: "Campus placement, made visible.",
    eyebrow: "For colleges",
    headline: "Place students.",
    mutedHeadline: "Prove outcomes.",
    primaryCta: "Book a demo",
    secondaryCta: "Contact us",
    features: [
      { title: "Placement dashboard", text: "Measure readiness, applications, interviews, offers, and salary bands by cohort.", tag: "/DASHBOARD" },
      { title: "Recruiter workspace", text: "Coordinate company visits, shortlists, schedules, and final results.", tag: "/RECRUITERS" },
      { title: "Student readiness", text: "Use AI practice and resume tools before real campus interviews start.", tag: "/READINESS" }
    ]
  },
  features: {
    slug: "features",
    title: "Features",
    description: "Explore CareerXel features across AI interviews, ATS, resumes, search, and analytics.",
    kicker: "Everything connected.",
    eyebrow: "Product features",
    headline: "One platform.",
    mutedHeadline: "Every career workflow.",
    primaryCta: "Start free",
    secondaryCta: "See pricing",
    features: [
      { title: "AI mock interviews", text: "Practice, transcript, score, and improve with role-aware sessions.", tag: "/AI" },
      { title: "ATS and pipelines", text: "Run hiring stages from application to signed offer.", tag: "/ATS" },
      { title: "Analytics layer", text: "Understand outcomes across candidates, jobs, colleges, and recruiters.", tag: "/ANALYTICS" }
    ]
  },
  ai: {
    slug: "ai",
    title: "AI & Intelligence",
    description: "CareerXel AI powers interviews, scoring, resume feedback, and career recommendations.",
    kicker: "Practical AI for career decisions.",
    eyebrow: "AI and intelligence",
    headline: "Structured signals.",
    mutedHeadline: "Human decisions.",
    primaryCta: "Read model card",
    secondaryCta: "Try interview AI",
    features: [
      { title: "Interview intelligence", text: "Generate role-aligned questions and evaluate evidence in answers.", tag: "/INTERVIEWS" },
      { title: "Resume feedback", text: "Identify missing impact, skills, and role alignment.", tag: "/RESUMES" },
      { title: "Recommendation engine", text: "Guide next jobs, skills, and practice paths.", tag: "/MATCHING" }
    ]
  },
  pricing: {
    slug: "pricing",
    title: "Pricing",
    description: "Simple plans for candidates, hiring teams, and colleges.",
    kicker: "Start lean. Scale when ready.",
    eyebrow: "Pricing",
    headline: "Plans for every team.",
    mutedHeadline: "No surprise setup.",
    primaryCta: "Start free",
    secondaryCta: "Contact us",
    features: [
      { title: "Candidate", text: "Free profile, job search, resume basics, and starter AI practice.", tag: "/FREE" },
      { title: "Team", text: "ATS, interviews, scorecards, analytics, and recruiter collaboration.", tag: "/TEAM" },
      { title: "Campus", text: "Student readiness, placement operations, recruiter access, and reports.", tag: "/CAMPUS" }
    ]
  },
  resources: {
    slug: "resources",
    title: "Resources",
    description: "Guides, help articles, hiring insights, and career playbooks.",
    kicker: "Learn what moves outcomes.",
    eyebrow: "Resources",
    headline: "Guides for careers.",
    mutedHeadline: "Systems for hiring.",
    primaryCta: "Read guides",
    secondaryCta: "Visit help center",
    features: [
      { title: "Career guides", text: "Resume, interview, and job search playbooks for candidates.", tag: "/GUIDES" },
      { title: "Hiring notes", text: "Operational advice for recruiters and talent leaders.", tag: "/HIRING" },
      { title: "Campus playbooks", text: "Placement planning, reporting, and readiness frameworks.", tag: "/CAMPUS" }
    ]
  },
  about: {
    slug: "about",
    title: "About",
    description: "Learn about CareerXel and get in touch with the team.",
    kicker: "Built around better career outcomes.",
    eyebrow: "About CareerXel",
    headline: "Careers are systems.",
    mutedHeadline: "We make them clearer.",
    primaryCta: "Contact us",
    secondaryCta: "See resources",
    features: [
      { title: "Mission", text: "Make career readiness and hiring decisions more transparent.", tag: "/MISSION" },
      { title: "Teams served", text: "Candidates, recruiters, colleges, and placement leaders.", tag: "/AUDIENCE" },
      { title: "Contact us", text: "Talk to us about hiring, campus, or AI interview workflows.", tag: "/CONTACT" }
    ]
  }
};

export const dashboardMetrics = [
  ["TIME-TO-HIRE", "14d", "down 42%"],
  ["QUALIFIED", "68%", "up 11%"],
  ["OFFERS", "23", "this month"],
  ["PIPELINE", "412", "active"]
];

export const IconLine = LineChart;
