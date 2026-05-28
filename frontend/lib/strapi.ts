import { homeContent, pages, type PageContent, type Testimonial } from "./content";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

type StrapiPage = {
  slug: string;
  title: string;
  description: string;
  kicker: string;
  eyebrow: string;
  headline: string;
  mutedHeadline: string;
  primaryCta: string;
  secondaryCta: string;
  features?: { title: string; text: string; tag: string }[];
  testimonials?: unknown;
  pricingContent?: unknown;
  resourcesContent?: unknown;
};

function normalizeTestimonial(raw: unknown): Testimonial | null {
  if (!raw || typeof raw !== "object") return null;

  const attrs = (raw as any).attributes ?? raw;
  const name = typeof attrs.name === "string" ? attrs.name : "";
  const role = typeof attrs.role === "string" ? attrs.role : "";
  const quote = typeof attrs.quote === "string" ? attrs.quote : "";
  const company = typeof attrs.company === "string" ? attrs.company : undefined;
  const displayOrder = typeof attrs.displayOrder === "number" ? attrs.displayOrder : undefined;

  if (!name || !role || !quote) return null;
  return { name, role, quote, company, displayOrder };
}

function normalizeTestimonials(raw: unknown): Testimonial[] {
  if (!raw) return [];
  if (Array.isArray(raw)) {
    return raw.map(normalizeTestimonial).filter(Boolean) as Testimonial[];
  }

  if (typeof raw === "object" && raw !== null) {
    const data = Array.isArray((raw as any).data) ? (raw as any).data : [];
    return data.map((item: any) => normalizeTestimonial(item?.attributes ?? item)).filter(Boolean) as Testimonial[];
  }

  return [];
}

function sortTestimonials(testimonials: Testimonial[]): Testimonial[] {
  return [...testimonials].sort((a, b) => {
    const aOrder = a.displayOrder ?? Number.MAX_SAFE_INTEGER;
    const bOrder = b.displayOrder ?? Number.MAX_SAFE_INTEGER;
    return aOrder - bOrder;
  });
}

function getTestimonialPageSlug(raw: unknown): string {
  if (!raw || typeof raw !== "object") return "";
  const attrs = (raw as any).attributes ?? raw;
  const page = attrs.page?.data?.attributes ?? attrs.page?.attributes ?? attrs.page;
  return typeof page?.slug === "string" ? page.slug : "";
}

async function fetchTestimonialsForPage(pageSlug: string, token?: string): Promise<Testimonial[]> {
  try {
    const query = new URLSearchParams({ populate: "*" }).toString();

    const res = await fetch(`${STRAPI_URL}/api/testimonials?${query}`, {
      next: { revalidate: 60 },
      headers: token ? { Authorization: `Bearer ${token}` } : undefined
    });

    if (!res.ok) return [];
    const json = await res.json();
    const testimonials: unknown[] = Array.isArray((json as any)?.data) ? (json as any).data : [];
    return testimonials
      .filter((item: unknown) => pageSlug === "home" || getTestimonialPageSlug(item) === pageSlug)
      .map((item: any): Testimonial | null => normalizeTestimonial(item?.attributes ?? item))
      .filter((item: Testimonial | null): item is Testimonial => Boolean(item))
      .sort((a, b) => {
        const aOrder = a.displayOrder ?? Number.MAX_SAFE_INTEGER;
        const bOrder = b.displayOrder ?? Number.MAX_SAFE_INTEGER;
        return aOrder - bOrder;
      }) as Testimonial[];
  } catch {
    return [];
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const testimonials = await fetchTestimonialsForPage("home", process.env.STRAPI_API_TOKEN);
  return testimonials.length ? testimonials : sortTestimonials(homeContent.testimonials);
}

function normalize(data: unknown): PageContent | null {
  const result = (data as any)?.data;
  const record = Array.isArray(result) ? result[0] : result || data;
  const attrs: StrapiPage | undefined = record?.attributes ?? record;
  if (!attrs?.slug) return null;

  return {
    slug: attrs.slug,
    title: attrs.title,
    description: attrs.description,
    kicker: attrs.kicker,
    eyebrow: attrs.eyebrow,
    headline: attrs.headline,
    mutedHeadline: attrs.mutedHeadline,
    primaryCta: attrs.primaryCta,
    secondaryCta: attrs.secondaryCta,
    features: attrs.features?.length ? attrs.features : pages[attrs.slug]?.features ?? [],
    testimonials: sortTestimonials(normalizeTestimonials(attrs.testimonials)),
    pricingContent: attrs.pricingContent,
    resourcesContent: attrs.resourcesContent
  };
}

export async function getPage(slug: string): Promise<PageContent> {
  const homeFallback: PageContent = {
    slug: "home",
    title: "CareerXel",
    description: "AI-native career and recruitment platform. AI mock interviews, full-stack ATS, and placement analytics.",
    kicker: "",
    eyebrow: "",
    headline: "",
    mutedHeadline: "",
    primaryCta: "Start free",
    secondaryCta: "Book a demo",
    features: [],
    testimonials: homeContent.testimonials as Testimonial[]
  };

  const fallback = slug === "home" ? homeFallback : pages[slug] ?? pages.features;
  const token = process.env.STRAPI_API_TOKEN;

  try {
    const query = new URLSearchParams({
      "filters[slug][$eq]": slug,
      "populate[features]": "true",
      "populate[testimonials]": "true"
    }).toString();

    const res = await fetch(`${STRAPI_URL}/api/pages?${query}`, {
      next: { revalidate: 60 },
      headers: token ? { Authorization: `Bearer ${token}` } : undefined
    });

    if (!res.ok) return fallback;
    const cmsPage = normalize(await res.json());
    if (!cmsPage) return fallback;

    if (slug === "home" || !cmsPage.testimonials?.length) {
      const pageTestimonials = await fetchTestimonialsForPage(slug, token);
      if (pageTestimonials.length) cmsPage.testimonials = pageTestimonials;
    }

    return cmsPage;
  } catch {
    return fallback;
  }
}
