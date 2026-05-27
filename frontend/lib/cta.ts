/** Map CTA label text to the most appropriate in-app route. */
export function ctaHref(label: string, fallback = "/pricing"): string {
  const lower = label.toLowerCase();

  if (
    lower.includes("contact") ||
    lower.includes("demo") ||
    lower.includes("sales") ||
    lower.includes("talk to") ||
    lower.includes("rfp")
  ) {
    return "/contact";
  }

  if (lower.includes("pric") || lower.includes("start free") || lower.includes("create") || lower.includes("account")) {
    return "/pricing";
  }

  if (
    lower.includes("resource") ||
    lower.includes("guide") ||
    lower.includes("help") ||
    lower.includes("read")
  ) {
    return "/resources";
  }

  if (
    lower.includes("feature") ||
    lower.includes("tour") ||
    lower.includes("product") ||
    lower.includes("see ats") ||
    lower.includes("try interview")
  ) {
    return "/features";
  }

  if (lower.includes("ai") || lower.includes("model card")) {
    return "/ai";
  }

  if (lower.includes("job") || lower.includes("explor") || lower.includes("practic")) {
    return "/candidates";
  }

  if (lower.includes("campus") || lower.includes("college") || (lower.includes("analytics") && lower.includes("view"))) {
    return "/colleges";
  }

  if (lower.includes("employer") || lower.includes("hire")) {
    return "/employers";
  }

  return fallback;
}
