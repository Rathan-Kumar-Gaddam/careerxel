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

  return (
    <main className="relative">
      {/* 00 HERO */}
      <section className="dark-mesh hero">
        <div className="container">
          <div className="sx-ribbon">
            <span className="idx"><span className="num">00</span><span className="slash">/</span><span className="name">{page.eyebrow}</span></span>
            <span className="ribbon-meta">CAREERXEL.COM · 2026</span>
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="serif-kicker">{page.kicker}</div>
              <div className="eyebrow">{page.eyebrow}</div>
              <h1 className="display">
                <span className="bone-grad">{page.headline}</span><br />
                <span className="muted-weight">{page.mutedHeadline}</span>
              </h1>
              <p className="lead">{page.description}</p>
              <div className="hero-cta">
                <Link className="btn btn-primary" href={primaryHref}>{page.primaryCta}</Link>
                <Link className="btn btn-ghost" href={secondaryHref}>{page.secondaryCta}</Link>
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
          <div className="sx-ribbon">
            <span className="idx"><span className="num">01</span><span className="slash">/</span><span className="name">Capabilities</span></span>
            <span className="ribbon-meta">{page.title} · PRODUCT DEPTH</span>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {page.features.map((feature, index) => {
              const Icon = index === 0 ? Sparkles : index === 1 ? CheckCircle2 : BarChart3;
              return (
                <article key={feature.title} className="card-l" style={{ padding: "28px", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "220px" }}>
                  <div>
                    <Icon className="icon" style={{ width: "24px", height: "24px", strokeWidth: "1.5", color: "var(--amber)" }} />
                    <div className="mono" style={{ marginTop: "16px", color: "var(--l-2)", border: "1px solid var(--border-l)", borderRadius: "999px", padding: "4px 8px", display: "inline-flex", fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase" }}>{feature.tag}</div>
                    <h3 style={{ marginTop: "16px", fontSize: "20px", fontWeight: 500, letterSpacing: "-0.015em", color: "var(--l-1)" }}>{feature.title}</h3>
                    <p style={{ marginTop: "8px", fontSize: "14px", color: "var(--l-2)", lineHeight: "1.55" }}>{feature.text}</p>
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
          <div className="sx-ribbon">
            <span className="idx"><span className="num">02</span><span className="slash">/</span><span className="name">Operating model</span></span>
            <span className="ribbon-meta">Signals · Dashboards · Outcomes</span>
          </div>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div className="section-intro">
              <div className="eyebrow">See it in motion</div>
              <h2 className="h-section">
                Every signal connected to <br /><span className="muted-weight">the next decision.</span>
              </h2>
              <p className="subhead">
                CareerXel keeps candidates, recruiters, and placement teams aligned across profiles, interviews, applications, schedules, offers, and outcome reporting.
              </p>
            </div>
            <div className="card-d shadow-glow" style={{ padding: "18px" }}>
              <div className="grid gap-3.5 sm:grid-cols-2">
                {["Readiness", "Pipeline", "Interviews", "Offers"].map((label, index) => (
                  <div key={label} className="card-d" style={{ padding: "18px", background: "var(--surface-2)" }}>
                    <div className="mono" style={{ color: "var(--d-3)", fontSize: "9px" }}>{label}</div>
                    <div className="bar" style={{ height: "4px", background: "var(--surface-3)", borderRadius: "2px", marginTop: "12px" }}>
                      <div style={{ height: "100%", borderRadius: "2px", background: "var(--amber)", width: `${82 - index * 12}%` }} />
                    </div>
                    <div style={{ marginTop: "14px", fontSize: "22px", fontWeight: 500, color: "var(--d-1)" }}>{82 - index * 12}%</div>
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
          <div className="sx-ribbon">
            <span className="idx"><span className="num">03</span><span className="slash">/</span><span className="name">GET STARTED</span></span>
            <span className="ribbon-meta">NO CARD · NO COMMITMENT</span>
          </div>
          <div className="cta-copy">
            <div className="eyebrow">{page.eyebrow}</div>
            <h2 className="display" style={{ fontSize: "clamp(48px, 6.5vw, 80px)" }}>
              <span className="bone-grad">Bring CareerXel into</span>{" "}
              <span className="muted-weight">your workflow.</span>
            </h2>
            <p className="lead lead--center">Start free today — upgrade when your team is ready.</p>
            <div className="hero-cta hero-cta--center">
              <Link className="btn btn-primary" href={primaryHref}>{page.primaryCta}</Link>
              <Link className="btn btn-ghost" href="/contact">Contact us</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
