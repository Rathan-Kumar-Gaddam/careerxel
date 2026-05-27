import type { MetadataRoute } from "next";
import { pages } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://careerxel.com";
  return [
    { url: base, lastModified: new Date() },
    ...Object.keys(pages).map((slug) => ({
      url: `${base}/${slug}`,
      lastModified: new Date()
    }))
  ];
}
