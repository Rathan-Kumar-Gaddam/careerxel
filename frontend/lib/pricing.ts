import { getPage } from "./strapi";

export type PricingPlan = {
  name: string;
  tag?: string;
  monthly: string;
  annual: string;
  monthlyInr?: string;
  annualInr?: string;
  monthlyUsd?: string;
  annualUsd?: string;
  period: string;
  description: string;
  cta: string;
  featured?: boolean;
  featureGroups: { title: string; items: string[] }[];
};

export type PricingAudience = {
  id: string;
  label: string;
  plans: PricingPlan[];
};

export type PricingComparison = {
  title: string;
  subtitle: string;
  plans: { name: string; price: string; featured?: boolean }[];
  groups: { title: string; rows: { capability: string; values: string[] }[] }[];
};

export type PricingEnterprise = {
  eyebrow: string;
  headline: string;
  mutedHeadline: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  items: { tag: string; title: string; text: string }[];
};

export type PricingFaq = {
  question: string;
  answer: string;
};

export type PricingContent = {
  note: string;
  audiences: PricingAudience[];
  comparison: PricingComparison;
  enterprise: PricingEnterprise;
  faqs: PricingFaq[];
  finalCta: {
    eyebrow: string;
    headline: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
};

export type PricingPageContent = Awaited<ReturnType<typeof getPage>> & {
  pricingContent: PricingContent;
};

export const fallbackPricingContent: PricingContent = {
  note: "All plans. No card required. Cancel anytime. Data export included.",
  audiences: [
    {
      id: "individuals",
      label: "Individuals",
      plans: [
        {
          name: "Free",
          monthly: "$0",
          annual: "$0",
          monthlyInr: "₹0",
          annualInr: "₹0",
          monthlyUsd: "$0",
          annualUsd: "$0",
          period: "forever",
          description: "Everything a candidate needs. No card. No upsells.",
          cta: "Start free",
          featureGroups: [
            { title: "Core", items: ["Resume builder - 3 versions", "5 AI mock interviews / month", "Smart job matching - daily digest", "Career roadmaps - LMS SSO"] },
            { title: "Support", items: ["Email - 72h", "Public help center"] }
          ]
        },
        {
          name: "Plus",
          tag: "Popular",
          monthly: "$12",
          annual: "$9",
          monthlyInr: "₹999",
          annualInr: "₹749",
          monthlyUsd: "$12",
          annualUsd: "$9",
          period: "/ month",
          description: "For active job seekers running multiple tracks.",
          cta: "Try 14 days free",
          featured: true,
          featureGroups: [
            { title: "Core", items: ["Unlimited resume versions", "Unlimited AI mock interviews", "Per-role coaching playbooks", "Behavioral interview scripts", "Salary and comp benchmarks"] },
            { title: "Support", items: ["Email - 24h", "Live chat"] }
          ]
        },
        {
          name: "Pro",
          monthly: "$24",
          annual: "$19",
          monthlyInr: "₹1,999",
          annualInr: "₹1,599",
          monthlyUsd: "$24",
          annualUsd: "$19",
          period: "/ month",
          description: "For senior candidates and career switchers.",
          cta: "Start Pro",
          featureGroups: [
            { title: "Core", items: ["Everything in Plus", "1:1 human coach - 2 sessions / mo", "Live mock with hiring managers", "Resume revision - pro reviewers", "Interview replay analysis"] },
            { title: "Support", items: ["Priority email - 4h", "Dedicated coach"] }
          ]
        },
        {
          name: "Lifetime",
          tag: "Limited",
          monthly: "$199",
          annual: "$199",
          monthlyInr: "₹16,999",
          annualInr: "₹16,999",
          monthlyUsd: "$199",
          annualUsd: "$199",
          period: "one-time",
          description: "Pay once. Use forever. For new grads only.",
          cta: "Verify eligibility",
          featureGroups: [
            { title: "Core", items: ["Everything in Pro", "Lifetime access - no renewals", "Founders Slack - priority access", "Annual job-market report"] },
            { title: "Support", items: ["Email - 24h", "Quarterly office hours"] }
          ]
        }
      ]
    },
    {
      id: "employers",
      label: "Employers",
      plans: [
        {
          name: "Starter",
          monthly: "$0",
          annual: "$0",
          monthlyInr: "₹0",
          annualInr: "₹0",
          monthlyUsd: "$0",
          annualUsd: "$0",
          period: "forever",
          description: "For solo recruiters running their first hire.",
          cta: "Start free",
          featureGroups: [
            { title: "ATS", items: ["1 active job posting", "5 AI screenings / month", "Basic scorecards - 1 per job", "Public branded company page"] },
            { title: "Support", items: ["Email - 72h"] }
          ]
        },
        {
          name: "Growth",
          tag: "Popular",
          monthly: "$49",
          annual: "$39",
          monthlyInr: "₹5,299",
          annualInr: "₹4,199",
          monthlyUsd: "$49",
          annualUsd: "$39",
          period: "/ seat / month",
          description: "For growing teams hiring 5-50 a year.",
          cta: "Start 14-day trial",
          featured: true,
          featureGroups: [
            { title: "ATS", items: ["10 active jobs - custom stages", "250 AI screenings / month", "Bulk applicant actions", "Calendar and slot booking", "Mirror to 5 job boards"] },
            { title: "Support", items: ["Email - 24h", "Group onboarding"] }
          ]
        },
        {
          name: "Scale",
          monthly: "$129",
          annual: "$99",
          monthlyInr: "₹12,999",
          annualInr: "₹9,999",
          monthlyUsd: "$129",
          annualUsd: "$99",
          period: "/ seat / month",
          description: "For high-volume hiring, 50-500 a year.",
          cta: "Contact us",
          featureGroups: [
            { title: "ATS", items: ["Unlimited jobs and postings", "2,500 AI screenings / month", "Custom roles and permissions", "SSO - Okta - Azure - Google", "Data residency - IN - EU - US"] },
            { title: "Support", items: ["Email - chat - 4h", "Shared CSM"] }
          ]
        },
        {
          name: "Enterprise",
          monthly: "Custom",
          annual: "Custom",
          monthlyInr: "Custom",
          annualInr: "Custom",
          monthlyUsd: "Custom",
          annualUsd: "Custom",
          period: "annual contract",
          description: "Multi-country, regulated industries, BYOK.",
          cta: "Contact us",
          featureGroups: [
            { title: "ATS", items: ["Unlimited everything", "Private fine-tuned models", "Dedicated tenancy - VPC peering", "SAML - SCIM - BYOK", "Custom DPA - MSA - invoicing"] },
            { title: "Support", items: ["Named CSM - 1h SLA - 24/7"] }
          ]
        }
      ]
    },
    {
      id: "colleges",
      label: "Colleges",
      plans: [
        {
          name: "Pilot",
          tag: "Free",
          monthly: "$0",
          annual: "$0",
          monthlyInr: "₹0",
          annualInr: "₹0",
          monthlyUsd: "$0",
          annualUsd: "$0",
          period: "first cohort",
          description: "Free pilot for the first cohort. No card.",
          cta: "Apply for pilot",
          featureGroups: [
            { title: "Cohort", items: ["1 cohort - up to 200 students", "Bulk CSV onboarding", "Standard placement reports", "Faculty access - 5 seats"] },
            { title: "Support", items: ["Email - 72h", "Self-serve onboarding"] }
          ]
        },
        {
          name: "Department",
          tag: "Popular",
          monthly: "$3,990",
          annual: "$3,990",
          monthlyInr: "₹3,99,000",
          annualInr: "₹3,99,000",
          monthlyUsd: "$3,990",
          annualUsd: "$3,990",
          period: "/ cohort / year",
          description: "For one department - CSE, ECE, MBA.",
          cta: "Talk to placements",
          featured: true,
          featureGroups: [
            { title: "Cohort", items: ["Up to 500 students - 1 dept", "Per-student PDF reports", "Recruiter network access", "Custom placement dashboard", "NAAC / NIRF exports"] },
            { title: "Support", items: ["Email - 24h", "1:1 onboarding"] }
          ]
        },
        {
          name: "Campus",
          monthly: "$11,990",
          annual: "$11,990",
          monthlyInr: "₹11,99,000",
          annualInr: "₹11,99,000",
          monthlyUsd: "$11,990",
          annualUsd: "$11,990",
          period: "/ campus / year",
          description: "Full campus - all departments - all years.",
          cta: "Talk to placements",
          featureGroups: [
            { title: "Cohort", items: ["Unlimited students - all depts", "Cross-cohort benchmarks", "Faculty roles and permissions", "Branded placement portal", "API access - LMS sync"] },
            { title: "Support", items: ["Email - chat - 4h", "Dedicated CSM"] }
          ]
        },
        {
          name: "Group",
          monthly: "Custom",
          annual: "Custom",
          monthlyInr: "Custom",
          annualInr: "Custom",
          monthlyUsd: "Custom",
          annualUsd: "Custom",
          period: "annual",
          description: "For college groups - 5+ campuses.",
          cta: "Contact us",
          featureGroups: [
            { title: "Cohort", items: ["Unlimited campuses", "Group dashboards", "Cross-college benchmarks", "Shared recruiter network", "Custom branded white-label"] },
            { title: "Support", items: ["Named CSM - 1h SLA"] }
          ]
        }
      ]
    }
  ],
  comparison: {
    title: "Every feature.",
    subtitle: "Every tier. No fine print.",
    plans: [
      { name: "Starter", price: "$0" },
      { name: "Growth", price: "$49 /seat", featured: true },
      { name: "Scale", price: "$129 /seat" },
      { name: "Enterprise", price: "Custom" }
    ],
    groups: [
      {
        title: "Applicant tracking",
        rows: [
          { capability: "Active job postings", values: ["1", "10", "Unlimited", "Unlimited"] },
          { capability: "Custom pipeline stages", values: ["-", "Yes", "Yes", "Yes"] },
          { capability: "Bulk applicant actions", values: ["-", "Yes", "Yes", "Yes"] },
          { capability: "Calendars and slot booking", values: ["Basic", "Full", "Full + sync", "Full + sync"] },
          { capability: "Scorecards and feedback", values: ["1 per job", "5 per job", "Unlimited", "Unlimited"] }
        ]
      },
      {
        title: "AI mock interviews",
        rows: [
          { capability: "AI interviews per month", values: ["5", "250", "2,500", "Custom"] },
          { capability: "Per-role generation", values: ["Yes", "Yes", "Yes", "Yes"] },
          { capability: "Proctoring and recording", values: ["-", "Yes", "Yes", "Yes"] },
          { capability: "12-dimension scoring", values: ["Basic 4", "Yes", "Yes", "Yes"] },
          { capability: "Explainability traces", values: ["-", "Yes", "Yes", "Yes"] }
        ]
      },
      {
        title: "Security and support",
        rows: [
          { capability: "SOC 2 - Type II", values: ["Yes", "Yes", "Yes", "Yes"] },
          { capability: "Data residency - India - EU - US", values: ["-", "-", "Yes", "Yes"] },
          { capability: "Response time", values: ["72h email", "24h email", "4h email + chat", "1h - 24/7"] },
          { capability: "Dedicated CSM", values: ["-", "-", "Shared", "Named"] }
        ]
      }
    ]
  },
  enterprise: {
    eyebrow: "Enterprise",
    headline: "Bigger teams.",
    mutedHeadline: "Custom contracts.",
    description: "For 500+ seats, multi-country deployments, regulated industries, and college groups with 10+ campuses.",
    primaryCta: "Contact us",
    secondaryCta: "Request RFP template",
    items: [
      { tag: "Infra", title: "Dedicated tenancy", text: "Single-tenant DB, VPC peering, regional residency." },
      { tag: "Security", title: "SAML - SCIM - BYOK", text: "Bring your IdP. Bring your own keys. Quarterly pen tests." },
      { tag: "Models", title: "Private fine-tuning", text: "Your data trains your private models. Never pooled." },
      { tag: "Support", title: "Named CSM - 24/7", text: "Dedicated success manager, 1h SLA, on-call channel." },
      { tag: "Legal", title: "Custom DPA - MSA - invoicing", text: "Your paper or ours. Net-60 invoicing. Multi-year discount tiers available." }
    ]
  },
  faqs: [
    { question: "Is there really a free tier?", answer: "Yes. Forever. For individual candidates and 1-job employers, the platform is free with no card on file. The free tier does not time out into a paywall." },
    { question: "How does per-seat billing work?", answer: "Each seat is one recruiter or hiring-manager login. Read-only viewers are always free. You can add or remove seats any month." },
    { question: "What counts as an AI interview?", answer: "One completed AI mock or screening session per candidate per role. Re-tries by the same candidate within 7 days do not recount." },
    { question: "Do colleges pay per student?", answer: "No. Colleges are billed per cohort, annually. One flat fee covers every student, interview, and report." },
    { question: "Can I switch plans mid-cycle?", answer: "Upgrades pro-rate immediately. Downgrades take effect at the start of the next billing period." },
    { question: "What happens to my data if I leave?", answer: "You can export applicants, interviews, recordings, and reports as JSON, CSV, and MP4 at any time." }
  ],
  finalCta: {
    eyebrow: "Start free",
    headline: "Try it in your tab today.",
    description: "No card required. Cancel anytime. Data export included on every plan.",
    primaryCta: "Start free",
    secondaryCta: "Contact us"
  }
};

function isPricingContent(value: unknown): value is PricingContent {
  const content = value as PricingContent | undefined;
  return Boolean(content?.audiences?.length && content?.comparison?.plans?.length && content?.faqs?.length);
}

export async function getPricingPage(): Promise<PricingPageContent> {
  const page = await getPage("pricing");
  const cmsPricingContent = (page as any).pricingContent;

  if (!isPricingContent(cmsPricingContent)) {
    if (process.env.NODE_ENV !== "production") {
      throw new Error(
        "Pricing page is missing valid pricingContent from Strapi. Update the `pricing` page JSON in Strapi, or seed it from backend/pricingContent.example.json."
      );
    }

    return {
      ...page,
      pricingContent: fallbackPricingContent
    };
  }

  return {
    ...page,
    pricingContent: cmsPricingContent
  };
}
