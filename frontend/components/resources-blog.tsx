"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { RESOURCES_BLOG_PREVIEW_LIMIT, type ResourcesBlogSection } from "@/lib/resources";
import type { ResourceArticle, ResourceCategory } from "@/lib/resources-data";

function ChevronIcon() {
  return (
    <svg className="icon" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M5 10h10M11 6l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

type Props = {
  posts: ResourceArticle[];
  categories: ResourceCategory[];
  blog: ResourcesBlogSection;
  /** Preview on /resources: max 6 cards + view-all when there are more posts. */
  mode?: "preview" | "archive";
  totalCount?: number;
};

export function ResourcesBlog({ posts, categories, blog, mode = "archive", totalCount }: Props) {
  const [active, setActive] = useState<ResourceCategory>("All");
  const isPreview = mode === "preview";
  const isArchive = !isPreview;

  const filtered = useMemo(
    () => (active === "All" ? posts : posts.filter((article) => article.category === active)),
    [active, posts]
  );

  const displayed = isPreview
    ? filtered.slice(0, RESOURCES_BLOG_PREVIEW_LIMIT)
    : filtered;

  const showViewAll =
    isPreview &&
    posts.length > RESOURCES_BLOG_PREVIEW_LIMIT &&
    Boolean(blog.ctaHref) &&
    blog.ctaHref !== "#";

  const archiveTotal = totalCount ?? posts.length;
  const resultLabel =
    active === "All"
      ? archiveTotal === 1
        ? "1 article"
        : `${archiveTotal} articles`
      : filtered.length === 1
        ? "1 article"
        : `${filtered.length} articles`;

  return (
    <section
      className={`light section res-blog-section${isPreview ? " res-blog-preview" : " res-blog-archive-body"}`}
      id={isArchive ? "blog-archive" : undefined}
    >
      <div className="container">
        {isPreview ? (
          <>
            
            <div className="section-header">
              {/* <div className="eyebrow">{blog.eyebrow}</div> */}
              <h2 className="h-section" style={{ marginTop: 18 }}>
                {blog.headline}
                <br />
                <span className="muted-weight">{blog.mutedHeadline}</span>
              </h2>
            </div>
            {showViewAll ? (
              <p className="res-blog-preview-note">
                Showing {displayed.length} of {posts.length} articles
              </p>
            ) : null}
          </>
        ) : (
          <div className="res-blog-archive-toolbar">
            <div className="cat-bar res-blog-archive-cats" role="tablist" aria-label="Blog categories">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={active === cat}
                  className={`cat${active === cat ? " on" : ""}`}
                  onClick={() => setActive(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            <p className="res-blog-archive-count" aria-live="polite">
              {resultLabel}
              {active !== "All" ? ` · ${active}` : ""}
            </p>
          </div>
        )}

        {isPreview ? (
          <div className="cat-bar" role="tablist" aria-label="Blog categories">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={active === cat}
                className={`cat${active === cat ? " on" : ""}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        ) : null}

        {displayed.length > 0 ? (
          <div className="art-grid res-blog-art-grid">
            {displayed.map((article) => (
              <Link
                key={article.slug ?? `${article.glyph}-${article.title}`}
                className="art-card"
                href={article.href && article.href !== "#" ? article.href : "/resources/blog"}
              >
                <div className="thumb">
                  <div className="grid" />
                  <div className="glyph">{article.glyph}</div>
                  <span className="tag">{article.tag}</span>
                </div>
                <div className="art-card-body">
                  <h4>{article.title}</h4>
                  <p>{article.excerpt}</p>
                  <div className="row">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="res-blog-empty">
            <p className="res-blog-empty-title">No articles in this category yet.</p>
            <p className="res-blog-empty-copy">Try another filter, or check back soon.</p>
            <button type="button" className="btn btn-ghost" onClick={() => setActive("All")}>
              Show all articles
            </button>
          </div>
        )}

        {showViewAll ? (
          <div className="res-blog-cta">
            <Link className="btn btn-burnt" href={blog.ctaHref}>
              {blog.ctaLabel}
              <ChevronIcon />
            </Link>
          </div>
        ) : null}

        {isArchive ? (
          <div className="res-blog-archive-footer">
            <Link className="btn btn-ghost" href="/resources">
              ← Back to resources
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
