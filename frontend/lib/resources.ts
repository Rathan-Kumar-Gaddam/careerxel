import { getPage } from "./strapi";
import {
  resourceArticles,
  type ResourceArticle,
  type ResourceCategory
} from "./resources-data";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export const RESOURCES_BLOG_PREVIEW_LIMIT = 6;
export const RESOURCES_BLOG_ARCHIVE_PATH = "/resources/blog";

export type ResourcesBlogSection = {
  ribbonMeta: string;
  eyebrow: string;
  headline: string;
  mutedHeadline: string;
  ctaLabel: string;
  ctaHref: string;
};

export type ResourcesNewsletterSection = {
  eyebrow: string;
  headline: string;
  mutedHeadline: string;
  description: string;
  stat: string;
  digestLabel: string;
  datasetLabel: string;
  webinarLabel: string;
  submitLabel: string;
  successLabel: string;
};

export type ResourcesContent = {
  blog: ResourcesBlogSection;
  newsletter: ResourcesNewsletterSection;
};

export const fallbackResourcesContent: ResourcesContent = {
  blog: {
    ribbonMeta: "FRESH · FIELD NOTES · ESSAYS",
    eyebrow: "BLOG",
    headline: "Read the latest.",
    mutedHeadline: "Skip the rest.",
    ctaLabel: "View all {count} articles",
    ctaHref: RESOURCES_BLOG_ARCHIVE_PATH
  },
  newsletter: {
    eyebrow: "NEWSLETTER",
    headline: "One email a month.",
    mutedHeadline: "No fluff. No promo.",
    description:
      "Field notes from our team, the latest essays, and the one chart from each placement report you'll actually want to read.",
    stat: "▢ 12,847 SUBSCRIBERS · 47% OPEN RATE",
    digestLabel: "Send me the monthly digest",
    datasetLabel: "Notify me when a new dataset is released",
    webinarLabel: "Webinar invites (1 per month, max)",
    submitLabel: "▢ SUBSCRIBE",
    successLabel: "✓ SUBSCRIBED"
  }
};

type StrapiBlogPost = {
  slug?: string;
  title?: string;
  excerpt?: string;
  category?: ResourceArticle["category"];
  tag?: string;
  glyph?: string;
  publishedDate?: string;
  readTime?: string;
  href?: string;
  sortOrder?: number;
};

function strapiHeaders(): HeadersInit | undefined {
  const token = process.env.STRAPI_API_TOKEN;
  return token ? { Authorization: `Bearer ${token}` } : undefined;
}

function readAttrs<T extends Record<string, unknown>>(row: unknown): T | null {
  if (!row || typeof row !== "object") return null;
  const record = row as { attributes?: T } & T;
  return (record.attributes ?? record) as T;
}

function normalizeBlogPosts(payload: unknown): ResourceArticle[] {
  const rows = (payload as { data?: unknown[] })?.data;
  if (!Array.isArray(rows) || rows.length === 0) return resourceArticles;

  const posts = rows
    .map((row, index) => {
      const attrs = readAttrs<StrapiBlogPost>(row);
      if (!attrs?.title || !attrs.category) return null;

      const glyph = attrs.glyph?.trim() || String(index + 1).padStart(2, "0");
      const tag =
        attrs.tag?.trim() ||
        `▢ ${attrs.category.toUpperCase().replace(" & ", " & ")}`;

      const post: ResourceArticle = {
        slug: attrs.slug,
        glyph,
        tag,
        category: attrs.category,
        title: attrs.title,
        excerpt: attrs.excerpt ?? "",
        date: attrs.publishedDate ?? "",
        readTime: attrs.readTime ?? "",
        href: attrs.href?.trim() || "#"
      };
      return post;
    })
    .filter((post): post is ResourceArticle => Boolean(post));

  return posts.length ? posts : resourceArticles;
}

export function formatBlogCtaLabel(count: number, template?: string): string {
  const base = template?.trim() || "View all {count} articles";

  if (base.includes("{count}")) {
    return base
      .replace("{count}", String(count))
      .replace(/\{articles\}/g, count === 1 ? "article" : "articles");
  }

  if (count === 1) return "View article";
  return `View all ${count} articles`;
}

function mergeResourcesContent(raw: unknown): ResourcesContent {
  if (!raw || typeof raw !== "object") return fallbackResourcesContent;
  const input = raw as Partial<ResourcesContent>;

  return {
    blog: { ...fallbackResourcesContent.blog, ...input.blog },
    newsletter: { ...fallbackResourcesContent.newsletter, ...input.newsletter }
  };
}

export async function getBlogPosts(): Promise<ResourceArticle[]> {
  try {
    const res = await fetch(
      `${STRAPI_URL}/api/blog-posts?sort[0]=sortOrder:asc&sort[1]=publishedDate:desc&pagination[pageSize]=100`,
      {
        next: { revalidate: 60 },
        headers: strapiHeaders()
      }
    );

    if (!res.ok) return resourceArticles;
    return normalizeBlogPosts(await res.json());
  } catch {
    return resourceArticles;
  }
}

export async function getResourcesPage() {
  const page = await getPage("resources");
  const blogPosts = await getBlogPosts();
  const resourcesContent = mergeResourcesContent(page.resourcesContent);
  const totalPosts = blogPosts.length;
  const showViewAll = totalPosts > RESOURCES_BLOG_PREVIEW_LIMIT;
  const ctaHref = resourcesContent.blog.ctaHref?.trim();
  const resolvedCtaHref =
    ctaHref && ctaHref !== "#" ? ctaHref : RESOURCES_BLOG_ARCHIVE_PATH;

  resourcesContent.blog = {
    ...resourcesContent.blog,
    ctaLabel: formatBlogCtaLabel(totalPosts, resourcesContent.blog.ctaLabel),
    ctaHref: showViewAll ? resolvedCtaHref : ""
  };

  return {
    page,
    blogPosts,
    resourcesContent,
    totalPosts
  };
}

export async function getResourcesBlogArchive() {
  const blogPosts = await getBlogPosts();
  const page = await getPage("resources");
  const resourcesContent = mergeResourcesContent(page.resourcesContent);

  return {
    blogPosts,
    categories: getCategoryFilters(blogPosts),
    blog: resourcesContent.blog
  };
}

export function getCategoryFilters(posts: ResourceArticle[]): ResourceCategory[] {
  const categories = new Set(posts.map((post) => post.category));
  const ordered: ResourceCategory[] = ["All"];

  const preferredOrder = [
    "Engineering",
    "Hiring",
    "Placements",
    "AI & Methodology",
    "Customer Stories",
    "Product"
  ] as const;

  for (const category of preferredOrder) {
    if (categories.has(category)) ordered.push(category);
  }

  for (const category of categories) {
    if (category !== "All" && !preferredOrder.includes(category as any)) {
      ordered.push(category);
    }
  }

  return ordered;
}
