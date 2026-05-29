import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BarChart3, CheckCircle2, Sparkles } from "lucide-react";
import { pages } from "@/lib/content";
import { ctaHref } from "@/lib/cta";
import { getPage } from "@/lib/strapi";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return Object.keys(pages)
    .filter((slug) => slug !== "candidates" && slug !== "employers" && slug !== "resources")
    .map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/${slug}` },
    openGraph: {
      title: `${page.title} | CareerXel`,
      description: page.description,
      url: `/${slug}`
    }
  };
}

export default async function DynamicPage({ params }: Props) {
  const { slug } = await params;
  if (!pages[slug]) notFound();
  const page = await getPage(slug);
  const primaryHref = ctaHref(page.primaryCta, "/pricing");
  const secondaryHref = ctaHref(page.secondaryCta, "/resources");
  const showSecondary = slug !== "about";

  return (
    <main className="relative">
      {/* 00 HERO */}
      <section className="dark-mesh hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="serif-kicker">{page.kicker}</div>
              {/* <div className="eyebrow">{page.eyebrow}</div> */}
              <h1 className="display">
                <span className="bone-grad">{page.headline}</span><br />
                <span className="muted-weight">{page.mutedHeadline}</span>
              </h1>
              <p className="lead">{page.description}</p>
              <div className="hero-cta">
                <Link className="btn btn-primary" href={primaryHref}>{page.primaryCta}</Link>
                {showSecondary && slug !== "colleges" && <Link className="btn btn-ghost" href={secondaryHref}>{page.secondaryCta}</Link>}
              </div>
            </div>
            
            {/* Mockup */}
            <div className="hero-mock-wrap">
              <div className="mock hero-mock-inner">
                <div className="mock-bar">
                  <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.1em", color: "var(--d-3)", marginLeft: "auto" }}>CANDIDATE.OS</span>
                </div>
                <div className="mockui">
                  <div className="row">
                    <span className="pill" style={{ color: "var(--amber)", borderColor: "rgba(74,139,255,0.35)" }}>DASHBOARD</span>
                    <span className="pill">JOBS</span>
                    <span className="pill">INTERVIEWS</span>
                  </div>
                  <div className="row">
                    <div className="kpi">
                      <div className="lab">PROFILE</div>
                      <div className="val">87%</div>
                      <div className="delta">▲ COMPLETE</div>
                    </div>
                    <div className="kpi">
                      <div className="lab">MATCHES</div>
                      <div className="val">12</div>
                      <div className="delta">▲ 4 NEW</div>
                    </div>
                  </div>
                  <div className="chart">
                    <div className="chart-title" style={{ display: "flex", justifyContent: "space-between" }}>
                      <span>Application velocity</span>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.1em", color: "var(--d-3)" }}>30D</span>
                    </div>
                    <svg className="chart-svg" viewBox="0 0 200 80" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="ag1" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="#4A8BFF" stopOpacity="0.4"/>
                          <stop offset="100%" stopColor="#4A8BFF" stopOpacity="0"/>
                        </linearGradient>
                      </defs>
                      <path d="M0 60 L20 50 L40 55 L60 35 L80 40 L100 25 L120 30 L140 18 L160 22 L180 12 L200 16 L200 80 L0 80 Z" fill="url(#ag1)"/>
                      <path d="M0 60 L20 50 L40 55 L60 35 L80 40 L100 25 L120 30 L140 18 L160 22 L180 12 L200 16" stroke="#4A8BFF" strokeWidth="1.5" fill="none"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 01 CAPABILITIES */}
      <section className="light section">
        <div className="container">
          <div className="dynamic-feature-grid">
            {page.features.map((feature, index) => {
              const Icon = index === 0 ? Sparkles : index === 1 ? CheckCircle2 : BarChart3;
              return (
                <article key={feature.title} className="card-l dynamic-feature-card">
                  <div>
                    <Icon className="icon dynamic-feature-icon" />
                    <div className="mono dynamic-feature-tag">{feature.tag}</div>
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 02 OPERATING MODEL */}
      <section className="dark-mesh section">
        <div className="container">
          <div className="dynamic-model-grid">
            <div className="section-intro">
              {/* <div className="eyebrow">See it in motion</div> */}
              <h2 className="h-section">
                Every signal connected to <br /><span className="muted-weight">the next decision.</span>
              </h2>
              <p className="subhead">
                CareerXel keeps candidates, recruiters, and placement teams aligned across profiles, interviews, applications, schedules, offers, and outcome reporting.
              </p>
            </div>
            <div className="card-d dynamic-metric-panel">
              <div className="dynamic-metric-grid">
                {["Readiness", "Pipeline", "Interviews", "Offers"].map((label, index) => (
                  <div key={label} className="card-d dynamic-metric-card">
                    <div className="mono dynamic-metric-label">{label}</div>
                    <div className="dynamic-metric-bar">
                      <div style={{ width: `${82 - index * 12}%` }} />
                    </div>
                    <div className="dynamic-metric-value">{82 - index * 12}%</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 CTA */}
      <section className="cta-mesh section-edge" style={{ position: "relative", overflow: "hidden" }}>
        <div className="container cta-band">
          <div className="cta-copy">
            {/* <div className="eyebrow">{page.eyebrow}</div> */}
            <h2 className="display" style={{ fontSize: "clamp(48px, 6.5vw, 80px)" }}>
              <span className="bone-grad">Bring CareerXel into</span>{" "}
              <span className="muted-weight">your workflow.</span>
            </h2>
            <p className="lead lead--center">Start free today — upgrade when your team is ready.</p>
            <div className="hero-cta hero-cta--center">
              {slug === "colleges" ? (
                <Link className="btn btn-primary" href="/contact">Contact us</Link>
              ) : (
                <>
                  <Link className="btn btn-primary" href={primaryHref}>{page.primaryCta}</Link>
                  {showSecondary && <Link className="btn btn-ghost" href={secondaryHref}>{page.secondaryCta}</Link>}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
