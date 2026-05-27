import type { Metadata } from "next";
import Link from "next/link";

import { homeContent, type Testimonial } from "@/lib/content";

export const metadata: Metadata = {
  title: "CareerXel — Hire smarter. Grow faster.",
  description: "AI-native career and recruitment platform. AI mock interviews, full-stack ATS, and placement analytics.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "CareerXel — Hire smarter. Grow faster.",
    description: "AI-native career and recruitment platform. AI mock interviews, full-stack ATS, and placement analytics.",
    url: "/"
  }
};

export default function HomePage() {
  const testimonials: Testimonial[] = homeContent.testimonials;

  return (
    <main className="relative">
      {/* 00 HERO */}
      <section className="dark-mesh hero">
        <div className="container">
          <div className="sx-ribbon">
            <span className="idx"><span className="num">00</span><span className="slash">/</span><span className="name">OVERVIEW</span></span>
            <span className="ribbon-meta">CAREERXEL.COM · 2026</span>
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="serif-kicker">A career platform, reimagined.</div>
              <div className="eyebrow">AI-NATIVE CAREER PLATFORM</div>
              <h1 className="display">
                <span className="bone-grad">Hire smarter.</span><br />
                <span className="muted-weight">Grow faster.</span>
              </h1>
              <p className="lead">
                One platform for candidates, employers, and colleges — with AI mock interviews, full-stack ATS, and placement analytics that actually move the needle.
              </p>
              <div className="hero-cta">
                <Link className="btn btn-primary" href="/pricing">Start free
                  <svg className="icon" viewBox="0 0 20 20" stroke="currentColor" fill="none"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 10h10M11 6l4 4-4 4"/></svg>
                </Link>
                <Link className="btn btn-ghost" href="/contact">Book a demo</Link>
              </div>
              <div className="micro-stats">
                <div><strong>10K+</strong> JOBS</div>
                <div><strong>50K+</strong> CANDIDATES</div>
                <div><strong>200+</strong> COLLEGES</div>
                <div><strong>7</strong> LANGUAGES</div>
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
                  <div className="row" style={{ gap: "6px" }}>
                    <div className="pipe-col">
                      <div className="h"><span>APPLIED</span><span className="ct">8</span></div>
                      <div className="pipe-card"><div className="nm">Stripe</div><div className="ro">SR FRONTEND</div></div>
                      <div className="pipe-card"><div className="nm">Linear</div><div className="ro">DESIGN ENG</div></div>
                    </div>
                    <div className="pipe-col">
                      <div className="h"><span>INTERVIEW</span><span className="ct">3</span></div>
                      <div className="pipe-card"><div className="nm">Vercel</div><div className="ro">PLATFORM</div></div>
                    </div>
                    <div className="pipe-col">
                      <div className="h"><span>OFFER</span><span className="ct">1</span></div>
                      <div className="pipe-card" style={{ borderColor: "rgba(74,139,255,0.4)" }}><div className="nm" style={{ color: "var(--amber)" }}>Figma</div><div className="ro">PRODUCT ENG</div></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating fragments */}
              <div className="frag frag-pos-1" style={{ pointerEvents: "none" }}>
                <div className="mono" style={{ color: "var(--amber)", marginBottom: "4px" }}>▢ ADVISOR</div>
                <div style={{ fontSize: "12px", color: "var(--d-1)", maxWidth: "160px" }}>Let's review your week →</div>
              </div>
              <div className="frag frag-pos-2" style={{ pointerEvents: "none" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <svg width="22" height="22" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="14" stroke="rgba(180,210,255,0.12)" strokeWidth="3" fill="none"/>
                    <circle cx="18" cy="18" r="14" stroke="#4A8BFF" strokeWidth="3" fill="none" strokeDasharray="76 88" strokeLinecap="round" transform="rotate(-90 18 18)"/>
                  </svg>
                  <div>
                    <div className="mono" style={{ color: "var(--d-3)" }}>PROFILE</div>
                    <div style={{ fontSize: "13px", fontWeight: 500 }}>87% complete</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGO STRIP */}
      <div className="logos">
        <div className="container logos-inner">
          <div className="eyebrow lab">TRUSTED BY TEAMS AT</div>
          <div className="row">
            <span className="wm">Helix</span>
            <span className="wm serif">Northwell</span>
            <span className="wm italic">Quanta</span>
            <span className="wm mono">▢ AXIOM</span>
            <span className="wm">Mercer&amp;Co</span>
            <span className="wm serif">Riverbend U</span>
          </div>
        </div>
      </div>

      {/* 01 SOLUTIONS */}
      <section className="light section">
        <div className="container">
          <div className="rule-label" style={{ marginBottom: "48px" }}>SOLUTIONS</div>
          <div className="sx-ribbon">
            <span className="idx"><span className="num">01</span><span className="slash">/</span><span className="name">SOLUTIONS</span></span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase" }}>FOUR AUDIENCES · ONE PLATFORM</span>
          </div>
          <div className="eyebrow" style={{ marginBottom: "18px" }}>BUILT FOR FOUR AUDIENCES</div>
          <h2 className="h-section">
            One platform.<br />
            <span className="muted-weight">Four ways to win.</span>
          </h2>
          <div className="aud-grid">
            <Link className="card-l aud-card" href="/candidates">
              <div className="top">
                <div className="icbox" style={{ width: "36px", height: "36px", border: "1px solid var(--border-l)", borderRadius: "8px", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--l-1)" }}>
                  <svg className="icon" viewBox="0 0 20 20" stroke="currentColor" fill="none"><circle cx="10" cy="7" r="3" strokeWidth="1.5"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 17c1.5-3 4-4 7-4s5.5 1 7 4"/></svg>
                </div>
                <h3>For Candidates</h3>
                <p>AI-built profiles, smart matching, mock interviews, and learning roadmaps.</p>
              </div>
              <div className="bottom">
                <span className="learn">Learn more →</span>
                <span className="tag">/CANDIDATES</span>
              </div>
            </Link>
            <Link className="card-l aud-card" href="/employers">
              <div className="top">
                <div className="icbox" style={{ width: "36px", height: "36px", border: "1px solid var(--border-l)", borderRadius: "8px", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--l-1)" }}>
                  <svg className="icon" viewBox="0 0 20 20" stroke="currentColor" fill="none"><rect x="3" y="6" width="14" height="11" rx="1.5" strokeWidth="1.5"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/></svg>
                </div>
                <h3>For Employers</h3>
                <p>Full-stack ATS plus AI mock interviews, proctoring, and hire recommendations.</p>
              </div>
              <div className="bottom">
                <span className="learn">Learn more →</span>
                <span className="tag">/EMPLOYERS</span>
              </div>
            </Link>
            <Link className="card-l aud-card" href="/colleges">
              <div className="top">
                <div className="icbox" style={{ width: "36px", height: "36px", border: "1px solid var(--border-l)", borderRadius: "8px", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--l-1)" }}>
                  <svg className="icon" viewBox="0 0 20 20" stroke="currentColor" fill="none"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 8l8-4 8 4-8 4-8-4z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 10v4c0 1.5 2.5 3 5 3s5-1.5 5-3v-4"/></svg>
                </div>
                <h3>For Colleges</h3>
                <p>Bulk onboarding, placement tracking, and per-student PDF interview reports.</p>
              </div>
              <div className="bottom">
                <span className="learn">Learn more →</span>
                <span className="tag">/COLLEGES</span>
              </div>
            </Link>
            <Link className="card-l aud-card" href="/colleges">
              <div className="top">
                <div className="icbox" style={{ width: "36px", height: "36px", border: "1px solid var(--border-l)", borderRadius: "8px", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--l-1)" }}>
                  <svg className="icon" viewBox="0 0 20 20" stroke="currentColor" fill="none"><rect x="2" y="4" width="6" height="6" rx="1" strokeWidth="1.5"/><rect x="12" y="4" width="6" height="6" rx="1" strokeWidth="1.5"/><rect x="2" y="12" width="6" height="6" rx="1" strokeWidth="1.5"/><rect x="12" y="12" width="6" height="6" rx="1" strokeWidth="1.5"/></svg>
                </div>
                <h3>For College Groups</h3>
                <p>Aggregated views, cross-college benchmarks, and group-wide placement trends.</p>
              </div>
              <div className="bottom">
                <span className="learn">Learn more →</span>
                <span className="tag">/GROUPS</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 02 CAPABILITIES BENTO */}
      <section className="dark-mesh section">
        <div className="container">
          <div className="sx-ribbon">
            <span className="idx"><span className="num">02</span><span className="slash">/</span><span className="name">CAPABILITIES</span></span>
            <span className="ribbon-meta">SIX MODULES · ONE GRAPH</span>
          </div>
          <div className="eyebrow" style={{ marginBottom: "18px" }}>CAPABILITIES</div>
          <h2 className="h-section">
            Everything you need.<br />
            <span className="muted-weight">Nothing you don't.</span>
          </h2>

          <div className="bento">
            {/* AI mock interviews */}
            <div className="card-d tile tile-2x2">
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div className="icbox">
                  <svg className="icon" viewBox="0 0 20 20" stroke="currentColor" fill="none"><circle cx="10" cy="10" r="7" strokeWidth="1.5"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 10l2 2 4-4"/></svg>
                </div>
                <h4 style={{ fontSize: "26px" }}>AI Mock Interviews</h4>
                <p style={{ maxWidth: "380px" }}>Generated per role, scored on technical &amp; communication, with proctoring and hire recommendations.</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <div style={{ background: "var(--surface-2)", border: "1px solid var(--border-d)", borderRadius: "10px", padding: "12px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--d-3)", marginBottom: "8px" }}>
                    <span>SESSION 04 · LIVE</span><span style={{ color: "var(--amber)" }}>28:14</span>
                  </div>
                  <div style={{ fontSize: "13px", color: "var(--d-2)", marginBottom: "10px" }}>Walk me through how you'd design a rate limiter for a public API…</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--d-2)" }}><span>TECHNICAL</span><span>82</span></div>
                    <div style={{ height: "4px", background: "var(--surface-3)", borderRadius: "2px" }}><div style={{ height: "100%", width: "82%", background: "var(--amber)", borderRadius: "2px" }}></div></div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--d-2)" }}><span>COMMUNICATION</span><span>74</span></div>
                    <div style={{ height: "4px", background: "var(--surface-3)", borderRadius: "2px" }}><div style={{ height: "100%", width: "74%", background: "var(--burnt)", borderRadius: "2px" }}></div></div>
                  </div>
                </div>
                <span className="tag">/INTERVIEW-ENGINE</span>
              </div>
            </div>

            {/* Recruiter ATS */}
            <div className="card-d tile tile-2x1">
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div className="icbox">
                  <svg className="icon" viewBox="0 0 20 20" stroke="currentColor" fill="none"><rect x="3" y="4" width="14" height="13" rx="1.5" strokeWidth="1.5"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8h14M7 4v3"/></svg>
                </div>
                <h4>Recruiter ATS</h4>
                <p>Stages, slots, calendars, bulk uploads — every applicant in context.</p>
              </div>
              <div style={{ display: "flex", gap: "6px" }}>
                <div style={{ flex: 1, background: "var(--surface-2)", border: "1px solid var(--border-d)", borderRadius: "6px", padding: "6px" }}>
                  <div className="mono" style={{ color: "var(--d-3)", fontSize: "9px" }}>APPLIED 248</div>
                </div>
                <div style={{ flex: 1, background: "var(--surface-2)", border: "1px solid var(--border-d)", borderRadius: "6px", padding: "6px" }}>
                  <div className="mono" style={{ color: "var(--d-3)", fontSize: "9px" }}>SCREEN 87</div>
                </div>
                <div style={{ flex: 1, background: "var(--surface-2)", border: "1px solid rgba(74,139,255,0.4)", borderRadius: "6px", padding: "6px" }}>
                  <div className="mono" style={{ color: "var(--amber)", fontSize: "9px" }}>OFFER 12</div>
                </div>
              </div>
            </div>

            {/* 1x1 standard tiles */}
            <div className="card-d tile">
              <div className="icbox">
                <svg className="icon" viewBox="0 0 20 20" stroke="currentColor" fill="none">
                  <rect x="4" y="3" width="12" height="14" rx="1.5" strokeWidth="1.5"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 7h6M7 10h6M7 13h4"/>
                </svg>
              </div>
              <div><h4>Resume Builder</h4><p>Adaptive resumes that retune for every role.</p></div>
              <span className="tag">/RESUME-OS</span>
            </div>
            <div className="card-d tile">
              <div className="icbox">
                <svg className="icon" viewBox="0 0 20 20" stroke="currentColor" fill="none">
                  <circle cx="9" cy="9" r="5" strokeWidth="1.5"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 13l4 4"/>
                </svg>
              </div>
              <div><h4>Job Search</h4><p>Full-text search with smart matching beyond keywords.</p></div>
              <span className="tag">/DISCOVERY</span>
            </div>
            <div className="card-d tile">
              <div className="icbox">
                <svg className="icon" viewBox="0 0 20 20" stroke="currentColor" fill="none">
                  <circle cx="5" cy="5" r="2" strokeWidth="1.5"/>
                  <circle cx="15" cy="10" r="2" strokeWidth="1.5"/>
                  <circle cx="5" cy="15" r="2" strokeWidth="1.5"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 5h6M13 10h-6M7 15h6"/>
                </svg>
              </div>
              <div><h4>Career Roadmaps</h4><p>Role and skill paths from where you are to where you're going.</p></div>
              <span className="tag">/GROWTH</span>
            </div>
            <div className="card-d tile">
              <div className="icbox">
                <svg className="icon" viewBox="0 0 20 20" stroke="currentColor" fill="none">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 17h14M5 13v4M9 9v8M13 11v6M17 5v12"/>
                </svg>
              </div>
              <div><h4>Placement Analytics</h4><p>Real numbers per college, per cohort, per period.</p></div>
              <span className="tag">/ANALYTICS</span>
            </div>
          </div>
        </div>
      </section>

      {/* 03 PRODUCT DEPTH */}
      <section className="dark-mesh section" style={{ position: "relative" }}>
        <div className="container">
          <div className="sx-ribbon">
            <span className="idx"><span className="num">03</span><span className="slash">/</span><span className="name">PRODUCT</span></span>
            <span className="ribbon-meta">FROM FIRST CLICK TO FINAL HIRE</span>
          </div>
          <div className="section-intro">
            <div className="eyebrow">SEE IT IN MOTION</div>
            <h2 className="h-section" style={{ maxWidth: "920px" }}>
            From the candidate's first click<br />
            <span className="muted-weight">to the recruiter's final hire.</span>
            </h2>
          </div>

          <div className="product-mock mock">
            <div className="mock-bar">
              <span className="dot"></span><span className="dot"></span><span className="dot"></span>
              <span className="mono" style={{ color: "var(--d-3)", marginLeft: "auto" }}>RECRUITER.OS / ANALYTICS</span>
            </div>
            <div className="mockui">
              <div className="row">
                <div className="kpi"><div className="lab">TIME-TO-HIRE</div><div className="val">14d</div><div className="delta">▼ 42%</div></div>
                <div className="kpi"><div className="lab">QUALIFIED</div><div className="val">68%</div><div className="delta">▲ 11%</div></div>
                <div className="kpi"><div className="lab">OFFERS</div><div className="val">23</div><div className="delta">▲ THIS MONTH</div></div>
                <div className="kpi"><div className="lab">PIPELINE</div><div className="val">412</div><div className="delta">▲ ACTIVE</div></div>
              </div>
              <div className="row" style={{ flex: 1 }}>
                <div className="chart" style={{ flex: 2 }}>
                  <div className="chart-title" style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>Hire velocity — last 6 months</span>
                    <span className="mono" style={{ color: "var(--d-3)", fontSize: "9px" }}>AMBER · OFFERS / GRAY · APPLIES</span>
                  </div>
                  <svg className="chart-svg" viewBox="0 0 400 120" preserveAspectRatio="none">
                    <g stroke="rgba(180,210,255,0.06)" strokeWidth="1">
                      <line x1="0" x2="400" y1="30" y2="30"/><line x1="0" x2="400" y1="60" y2="60"/><line x1="0" x2="400" y1="90" y2="90"/>
                    </g>
                    <path d="M10 90 L70 75 L130 80 L190 55 L250 60 L310 40 L370 30" stroke="#4A8BFF" strokeWidth="1.8" fill="none"/>
                    <path d="M10 100 L70 95 L130 88 L190 92 L250 78 L310 70 L370 65" stroke="#A0AAC0" strokeWidth="1.4" fill="none" strokeDasharray="3 3"/>
                    <g fill="#4A8BFF">
                      <circle cx="10" cy="90" r="2"/><circle cx="70" cy="75" r="2"/><circle cx="130" cy="80" r="2"/><circle cx="190" cy="55" r="2"/><circle cx="250" cy="60" r="2"/><circle cx="310" cy="40" r="2"/><circle cx="370" cy="30" r="2"/>
                    </g>
                  </svg>
                </div>
                <div className="chart" style={{ flex: 1 }}>
                  <div className="chart-title">Top sources</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1, justifyContent: "center" }}>
                    <div><div className="mono" style={{ fontSize: "9px", color: "var(--d-2)", marginBottom: "3px" }}>REFERRAL · 142</div><div style={{ height: "5px", background: "var(--surface-3)", borderRadius: "3px" }}><div style={{ height: "100%", width: "80%", background: "var(--amber)", borderRadius: "3px" }}></div></div></div>
                    <div><div className="mono" style={{ fontSize: "9px", color: "var(--d-2)", marginBottom: "3px" }}>DIRECT · 96</div><div style={{ height: "5px", background: "var(--surface-3)", borderRadius: "3px" }}><div style={{ height: "100%", width: "55%", background: "var(--burnt)", borderRadius: "3px" }}></div></div></div>
                    <div><div className="mono" style={{ fontSize: "9px", color: "var(--d-2)", marginBottom: "3px" }}>COLLEGE · 78</div><div style={{ height: "5px", background: "var(--surface-3)", borderRadius: "3px" }}><div style={{ height: "100%", width: "42%", background: "#A0AAC0", borderRadius: "3px" }}></div></div></div>
                    <div><div className="mono" style={{ fontSize: "9px", color: "var(--d-2)", marginBottom: "3px" }}>JOB-BOARD · 54</div><div style={{ height: "5px", background: "var(--surface-3)", borderRadius: "3px" }}><div style={{ height: "100%", width: "30%", background: "#6B7590", borderRadius: "3px" }}></div></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="feat-row">
            <div className="ft">
              <div className="top">
                <svg className="icon" style={{ color: "var(--d-1)" }} viewBox="0 0 20 20" stroke="currentColor" fill="none"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5h4v4H3zM10 5h7M10 9h7M3 12h4v4H3zM10 12h7M10 16h5"/></svg>
                <span className="lab">PIPELINE</span>
              </div>
              <h5>Stages, slots, signed offers.</h5>
              <p>Every stage configurable. Every slot tracked. Bulk invites included.</p>
            </div>
            <div className="ft">
              <div className="top">
                <svg className="icon" style={{ color: "var(--d-1)" }} viewBox="0 0 20 20" stroke="currentColor" fill="none"><circle cx="10" cy="10" r="7" strokeWidth="1.5"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 6v4l3 2"/></svg>
                <span className="lab">INTERVIEWS</span>
              </div>
              <h5>AI scoring, 24/7.</h5>
              <p>Identity-verified, proctored, recorded — with hire recommendations.</p>
            </div>
            <div className="ft">
              <div className="top">
                <svg className="icon" style={{ color: "var(--d-1)" }} viewBox="0 0 20 20" stroke="currentColor" fill="none"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 17h14M6 14V8M10 14V5M14 14v-7"/></svg>
                <span className="lab">ANALYTICS</span>
              </div>
              <h5>Numbers leadership reads.</h5>
              <p>Hire velocity, source mix, time-to-hire, placement rates by cohort.</p>
            </div>
          </div>
        </div>

        {/* Floating fragment */}
        <div className="frag" style={{ left: "4%", bottom: "8%", transform: "rotate(-3deg)", maxWidth: "220px", pointerEvents: "none" }}>
          <div className="mono" style={{ color: "var(--d-3)", marginBottom: "4px" }}>▢ TIME-TO-HIRE</div>
          <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
            <span style={{ fontSize: "28px", fontWeight: 500, letterSpacing: "-0.02em" }}>14d</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--amber)", letterSpacing: "0.10em" }}>↓ 42%</span>
          </div>
        </div>
      </section>

      {/* 04 HOW IT WORKS */}
      <section className="light section">
        <div className="container">
          <div className="sx-ribbon">
            <span className="idx"><span className="num">04</span><span className="slash">/</span><span className="name">WORKFLOW</span></span>
            <span className="ribbon-meta">PROFILE → MATCH → PLACEMENT</span>
          </div>
          <div className="section-intro">
            <div className="eyebrow">HOW IT WORKS</div>
            <h2 className="h-section" style={{ maxWidth: "760px" }}>
            From profile<br /><span className="muted-weight">to placement.</span>
            </h2>
          </div>

          <div className="steps">
            <div className="stp">
              <div className="num">01</div>
              <h4>Build your profile.</h4>
              <p>AI parses your resume, fills your profile, and asks the right follow-up questions.</p>
            </div>
            <div className="conn"></div>
            <div className="stp">
              <div className="num">02</div>
              <h4>Match &amp; practice.</h4>
              <p>Smart matching finds roles. Mock interviews score you and tell you what to fix.</p>
            </div>
            <div className="conn"></div>
            <div className="stp">
              <div className="num">03</div>
              <h4>Get placed.</h4>
              <p>Apply, interview, sign. Recruiters get hire recommendations they can trust.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 05 STATS */}
      <section className="dark-mesh section">
        <div className="container">
          <div className="sx-ribbon">
            <span className="idx"><span className="num">05</span><span className="slash">/</span><span className="name">NUMBERS</span></span>
            <span className="ribbon-meta">UPDATED Q2 2026</span>
          </div>
          <div className="section-intro">
            <div className="eyebrow">BY THE NUMBERS</div>
            <h2 className="h-section" style={{ maxWidth: "760px" }}>The platform, in numbers.</h2>
          </div>
          <div className="stats">
            <div className="stat">
              <div className="num gradient-text">52K+</div>
              <div className="lab">Candidates onboarded</div>
            </div>
            <div className="stat">
              <div className="num gradient-text">10.4K</div>
              <div className="lab">Jobs posted</div>
            </div>
            <div className="stat">
              <div className="num gradient-text">340K</div>
              <div className="lab">Mock interviews</div>
            </div>
            <div className="stat">
              <div className="num gradient-text">214</div>
              <div className="lab">Partner colleges</div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 TESTIMONIALS */}
      <section className="light section">
        <div className="container">
          <div className="sx-ribbon">
            <span className="idx"><span className="num">06</span><span className="slash">/</span><span className="name">VOICES</span></span>
            <span className="ribbon-meta">FROM THE FIELD</span>
          </div>
          <div className="section-intro">
            <div className="eyebrow">TESTIMONIALS</div>
            <h2 className="h-section">What teams say.</h2>
          </div>

          <div className="quotes">
            {testimonials.map((testimonial, index) => (
              <div key={`${testimonial.name}-${index}`} className="card-l quote-card">
                <div className="qmark">“</div>
                <p className="q">{testimonial.quote}</p>
                <div className="meta">
                  <div className="who">
                    <div className="name">{testimonial.name}</div>
                    <div className="role">{testimonial.role}</div>
                  </div>
                  {testimonial.company ? <div className="co">▢ {testimonial.company}</div> : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 CTA */}
      <section className="cta-mesh section-edge" style={{ position: "relative", overflow: "hidden" }}>
        <div className="container cta-band">
          <div className="sx-ribbon">
            <span className="idx"><span className="num">07</span><span className="slash">/</span><span className="name">GET STARTED</span></span>
            <span className="ribbon-meta">NO CARD · NO COMMITMENT</span>
          </div>
          <div className="cta-copy">
            <div className="eyebrow">START FREE</div>
            <h2 className="display" style={{ fontSize: "clamp(48px, 6.5vw, 80px)" }}>
              <span className="bone-grad">Get started in minutes.</span>
            </h2>
            <p className="lead lead--center" style={{ maxWidth: "620px" }}>
              Create your account today. Your first AI mock interview takes less than five minutes.
            </p>
            <div className="hero-cta hero-cta--center">
            <Link className="btn btn-primary" href="/pricing">
              Create your account
              <svg className="icon" viewBox="0 0 20 20" stroke="currentColor" fill="none"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 10h10M11 6l4 4-4 4"/></svg>
            </Link>
            <Link className="btn btn-ghost" href="/contact">Contact us</Link>
            </div>
          </div>
        </div>

        <div className="frag" style={{ top: "14%", left: "6%", transform: "rotate(-7deg)", maxWidth: "200px", opacity: 0.85, pointerEvents: "none" }}>
          <div className="mono" style={{ color: "var(--amber)", marginBottom: "4px" }}>▢ HIRE REC</div>
          <div style={{ fontSize: "13px", fontWeight: 500 }}>STRONG · 92/100</div>
        </div>
        <div className="frag" style={{ top: "18%", right: "4%", transform: "rotate(5deg)", maxWidth: "200px", opacity: 0.85, pointerEvents: "none" }}>
          <div className="mono" style={{ color: "var(--d-3)", marginBottom: "4px" }}>▢ MATCHES</div>
          <div style={{ fontSize: "13px" }}>12 new today</div>
        </div>
        <div className="frag" style={{ bottom: "10%", left: "10%", transform: "rotate(4deg)", maxWidth: "220px", opacity: 0.8, pointerEvents: "none" }}>
          <div className="mono" style={{ color: "var(--d-3)", marginBottom: "6px" }}>▢ PIPELINE</div>
          <div style={{ display: "flex", gap: "4px" }}>
            <span style={{ flex: 1, height: "14px", background: "var(--surface-3)", borderRadius: "3px", border: "1px solid var(--border-d)" }} />
            <span style={{ flex: 1, height: "14px", background: "var(--surface-3)", borderRadius: "3px", border: "1px solid var(--border-d)" }} />
            <span style={{ flex: 1, height: "14px", background: "var(--amber)", borderRadius: "3px" }} />
          </div>
        </div>
        <div className="frag" style={{ bottom: "14%", right: "8%", transform: "rotate(-3deg)", maxWidth: "220px", opacity: 0.8, pointerEvents: "none" }}>
          <div className="mono" style={{ color: "var(--amber)", marginBottom: "4px" }}>▢ INTERVIEW</div>
          <div style={{ fontSize: "13px" }}>Tomorrow · 3:00 IST</div>
        </div>
      </section>
    </main>
  );
}
