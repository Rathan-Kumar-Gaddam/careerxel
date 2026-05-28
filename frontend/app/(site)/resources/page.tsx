import type { Metadata } from "next";
import Link from "next/link";
import { ResourcesBlog } from "@/components/resources-blog";
import { ResourcesShelves } from "@/components/resources-shelves";
import { getCategoryFilters, getResourcesPage } from "@/lib/resources";

export async function generateMetadata(): Promise<Metadata> {
  const { page } = await getResourcesPage();
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: "/resources" },
    openGraph: {
      title: `${page.title} | CareerXel`,
      description: page.description,
      url: "/resources"
    }
  };
}

export default async function ResourcesPage() {
  const { blogPosts, resourcesContent } = await getResourcesPage();
  const categories = getCategoryFilters(blogPosts);

  return (
    <main className="relative page-resources">
      <section className="dark-mesh res-hero">
        <div className="container">
          <div className="serif-kicker">Field notes from the front lines.</div>
          <h1 className="display mt-24" style={{ maxWidth: 1100 }}>
            <span className="bone-grad">What we&apos;ve learned</span>
            <br />
            <span className="muted-weight">building this — in writing.</span>
          </h1>
          <p className="subhead">
            Long-form essays, working playbooks, public datasets, recorded webinars. No SEO sludge, no
            &quot;10 tips for your career.&quot; Things our partners actually read.
          </p>

          <div className="rule-label" style={{ marginTop: 64 }}>
            EDITOR&apos;S PICKS · WEEK 28
          </div>
          <div className="feat-grid">
            <article className="feat-card">
              <div className="head-art">
                <svg viewBox="0 0 600 340" style={{ width: "100%", height: "100%", position: "relative" }} aria-hidden="true">
                  <g stroke="rgba(74,139,255,0.4)" strokeWidth="1" fill="none">
                    <circle cx="300" cy="170" r="140" />
                    <circle cx="300" cy="170" r="100" />
                    <circle cx="300" cy="170" r="60" />
                  </g>
                  <g fill="#4A8BFF">
                    <circle cx="300" cy="30" r="4" />
                    <circle cx="440" cy="170" r="4" />
                    <circle cx="160" cy="170" r="4" />
                    <circle cx="300" cy="310" r="4" />
                    <circle cx="300" cy="170" r="6" fill="#2A5FD9" />
                  </g>
                  <g fontFamily="var(--font-mono)" fontSize="10" letterSpacing="0.1em" fill="#C2D8FF">
                    <text x="300" y="20" textAnchor="middle">
                      FAIRNESS
                    </text>
                    <text x="455" y="174" textAnchor="start">
                      CALIBRATION
                    </text>
                    <text x="145" y="174" textAnchor="end">
                      EXPLAINABILITY
                    </text>
                    <text x="300" y="328" textAnchor="middle">
                      OUTCOMES
                    </text>
                  </g>
                  <text x="300" y="174" textAnchor="middle" fontSize="22" fill="#C2D8FF">
                    CXL-V4
                  </text>
                </svg>
              </div>
              <div className="meta">
                <span className="pill amber">▢ ESSAY</span>
                <span className="pill">METHODOLOGY</span>
                <span className="pill">14 MIN READ</span>
              </div>
              <h3>How we calibrate the scoring engine — every month, against real outcomes</h3>
              <p>
                Most interview-AI vendors run a model and never look back. We started with the opposite
                assumption: any model that doesn&apos;t track its own predictions against real hires is
                going to drift. Here&apos;s the loop we built, the metrics we publish, and what we do when
                fairness regresses.
              </p>
              <div className="auth">
                <div className="av">PK</div>
                <div>
                  <div className="nm">Priya Khurana · CTO</div>
                  <div className="when">2026.05.02 · MAY</div>
                </div>
              </div>
            </article>

            <div className="side-feat">
              <Link className="side-card" href="#">
                <div className="meta">
                  <span className="pill amber">▢ DATASET</span>
                  <span className="pill">PUBLIC</span>
                </div>
                <h4>The 2026 Indian campus placement report — 47 colleges, 23k offers, open data</h4>
                <p>Year-over-year placement rates, package distributions, recruiter mix. Free for download.</p>
                <div className="when">▢ APR 2026 · CSV · XLSX · PDF</div>
              </Link>
              <Link className="side-card" href="#">
                <div className="meta">
                  <span className="pill">▢ PLAYBOOK</span>
                  <span className="pill">PRINT</span>
                </div>
                <h4>Bulk cohort onboarding in 5 days — the placement officer&apos;s checklist</h4>
                <p>The same checklist Riverbend used to onboard 412 students in a single afternoon.</p>
                <div className="when">▢ MAR 2026 · PDF · 12 PAGES</div>
              </Link>
              <Link className="side-card" href="#">
                <div className="meta">
                  <span className="pill amber">▢ WEBINAR</span>
                  <span className="pill">REPLAY</span>
                </div>
                <h4>Hiring through 2026 — what 340 employers told us</h4>
                <p>50-min recorded panel with talent leads from Stripe, Helix, Quanta. Slides included.</p>
                <div className="when">▢ FEB 2026 · 52 MIN · MP4</div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ResourcesBlog
        posts={blogPosts}
        categories={categories}
        blog={resourcesContent.blog}
        mode="preview"
      />
      <ResourcesShelves newsletter={resourcesContent.newsletter} />
    </main>
  );
}
