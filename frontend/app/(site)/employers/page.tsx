import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Employers",
  description: "Full-stack ATS with AI mock interviews, proctoring, and hiring analytics for employers.",
  alternates: { canonical: "/employers" },
  openGraph: {
    title: "For Employers | CareerXel",
    description: "Full-stack ATS with AI mock interviews, proctoring, and hiring analytics for employers.",
    url: "/employers"
  }
};

export default function EmployersPage() {
  return (
    <main className="relative">
      {/* 00 HERO */}
      <section className="dark-mesh p-hero">
        <div className="container">
          <div className="sx-ribbon">
            <span className="idx"><span className="num">00</span><span className="slash">/</span><span className="name">FOR EMPLOYERS</span></span>
            <span className="ribbon-meta">HIRE WITHOUT THE CHAOS</span>
          </div>
          <div className="p-hero-grid">
            <div className="hero-copy">
              <div className="serif-kicker">Hiring, without the chaos.</div>
              <div className="eyebrow">FOR EMPLOYERS</div>
              <h1 className="display">
                <span className="bone-grad">Source. Screen. Hire.</span>
                <br />
                <span className="muted-weight">Without the chaos.</span>
              </h1>
              <p className="lead">A full-stack ATS with AI mock interviews and proctoring built in. Configure once, hire 24/7 — and trust the scoring.</p>
              <div className="hero-cta">
                <Link className="btn btn-primary" href="/pricing">
                  Start free trial
                  <svg className="icon" viewBox="0 0 20 20" stroke="currentColor" fill="none"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 10h10M11 6l4 4-4 4" /></svg>
                </Link>
                <Link className="btn btn-ghost" href="/contact">Contact us</Link>
              </div>
            </div>
            <div className="p-hero-mock">
              <div className="mock kanban-mock">
                <div className="mock-bar">
                  <span className="dot" /><span className="dot" /><span className="dot" />
                  <span className="mono" style={{ color: "var(--d-3)", marginLeft: "auto" }}>RECRUITER · PIPELINE</span>
                </div>
                <div className="body">
                  <div className="col">
                    <h6><span>APPLIED</span><span className="ct">248</span></h6>
                    <div className="card"><div className="nm">M. Sundaram</div><div className="ro">SR FE</div></div>
                    <div className="card"><div className="nm">A. Patel</div><div className="ro">SR FE</div></div>
                    <div className="card"><div className="nm">J. Lee</div><div className="ro">SR FE</div></div>
                    <div className="card"><div className="nm">D. Shah</div><div className="ro">SR FE</div></div>
                  </div>
                  <div className="col">
                    <h6><span>SCREEN</span><span className="ct">87</span></h6>
                    <div className="card"><div className="nm">P. Khurana</div><div className="ro">SCREEN 1</div></div>
                    <div className="card"><div className="nm">R. Kim</div><div className="ro">SCREEN 1</div></div>
                    <div className="card"><div className="nm">L. Cruz</div><div className="ro">SCREEN 2</div></div>
                  </div>
                  <div className="col">
                    <h6><span>INTERVIEW</span><span className="ct">23</span></h6>
                    <div className="card"><div className="nm">S. Iyer</div><div className="ro">FINAL</div></div>
                    <div className="card"><div className="nm">N. Adler</div><div className="ro">TECH</div></div>
                  </div>
                  <div className="col">
                    <h6><span>OFFER</span><span className="ct" style={{ color: "var(--burnt)" }}>12</span></h6>
                    <div className="card amber"><div className="nm">Priya K.</div><div className="ro">SIGNED</div></div>
                    <div className="card amber"><div className="nm">Maya S.</div><div className="ro">PENDING</div></div>
                  </div>
                </div>
              </div>
              <div className="frag" style={{ top: "8%", left: "-22%", transform: "rotate(-5deg)", maxWidth: "220px", pointerEvents: "none" }}>
                <div className="mono" style={{ color: "var(--amber)", marginBottom: "4px" }}>▢ HIRE REC</div>
                <div style={{ fontSize: "14px", fontWeight: 500 }}>STRONG · 92/100</div>
              </div>
              <div className="frag" style={{ bottom: "10%", right: "-18%", transform: "rotate(4deg)", maxWidth: "220px", pointerEvents: "none" }}>
                <div className="mono" style={{ color: "var(--d-3)", marginBottom: "4px" }}>▢ INTERVIEW</div>
                <div style={{ fontSize: "13px", color: "var(--d-1)" }}>Tomorrow · 14:00 IST</div>
                <div style={{ fontSize: "11px", color: "var(--d-3)", marginTop: "2px" }}>P. Khurana · Sr Frontend</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 01 POSTINGS */}
      <section className="dark-mesh section">
        <div className="container">
          <div className="sx-ribbon">
            <span className="idx"><span className="num">01</span><span className="slash">/</span><span className="name">POSTINGS</span></span>
            <span className="ribbon-meta">EDITOR · PUBLIC PAGE</span>
          </div>
          <div className="section-header">
            <div className="eyebrow">POSTINGS</div>
            <h2 className="h-section" style={{ marginTop: "18px" }}>
              Job posts that look
              <br />
              <span className="muted-weight">like the brand they represent.</span>
            </h2>
          </div>
          <div className="postings-grid">
            <div className="mock job-mock">
              <div className="mock-bar">
                <span className="dot" /><span className="dot" /><span className="dot" />
                <span className="mono" style={{ color: "var(--d-3)", marginLeft: "auto" }}>JOB EDITOR</span>
              </div>
              <div className="body">
                <div className="field"><div className="l">▢ ROLE TITLE</div><div className="v">Senior Frontend Engineer</div></div>
                <div className="field-row">
                  <div className="field"><div className="l">▢ DEPT</div><div className="v">Engineering</div></div>
                  <div className="field"><div className="l">▢ MODE</div><div className="v">Remote</div></div>
                </div>
                <div className="field-row">
                  <div className="field amber"><div className="l">▢ SALARY MIN</div><div className="v">$180,000</div></div>
                  <div className="field amber"><div className="l">▢ SALARY MAX</div><div className="v">$220,000</div></div>
                </div>
                <div className="field"><div className="l">▢ LOCATIONS</div><div className="v">Remote · NYC · Bengaluru · Berlin</div></div>
                <div className="field"><div className="l">▢ APPLICATION DEADLINE</div><div className="v">2026-06-30 · 23:59 IST</div></div>
                <div className="field"><div className="l">▢ DESCRIPTION</div><div className="v" style={{ lineHeight: 1.5 }}>Build perf-critical UI used by millions. React, TypeScript, Edge SSR, design systems…</div></div>
              </div>
            </div>
            <div className="mock brand-mock">
              <div className="mock-bar">
                <span className="dot" /><span className="dot" /><span className="dot" />
                <span className="mono" style={{ color: "var(--d-3)", marginLeft: "auto" }}>CAREERXEL.COM/HELIX</span>
              </div>
              <div className="hero">
                <div className="tag">▢ HELIX · ENGINEERING</div>
                <h6>Build the next generation of network infra.</h6>
              </div>
              <div className="body">
                <div className="sec"><div className="t">ABOUT</div><div className="b">Helix is the network layer that connects every modern AI app. Hundreds of teams. One platform.</div></div>
                <div className="sec"><div className="t">CULTURE</div><div className="b">Distributed-first. Async-default. Strong opinions, weakly held — and shipped on Fridays.</div></div>
                <div className="sec"><div className="t">BENEFITS</div><div className="b">Equity · Healthcare · Sabbatical at year 4 · Conference budget.</div></div>
                <div style={{ display: "flex", gap: "6px", marginTop: "6px" }}>
                  <span className="m-pill amber">SR FE</span>
                  <span className="m-pill">SRE</span>
                  <span className="m-pill">DESIGN</span>
                  <span className="m-pill">+12</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 ATS */}
      <section className="light section">
        <div className="container">
          <div className="sx-ribbon">
            <span className="idx"><span className="num">02</span><span className="slash">/</span><span className="name">ATS</span></span>
            <span className="ribbon-meta">EVERY APPLICANT · IN CONTEXT</span>
          </div>
          <div className="section-header">
            <div className="eyebrow">ATS</div>
            <h2 className="h-section" style={{ marginTop: "18px" }}>
              Every applicant,
              <br />
              <span className="muted-weight">in context.</span>
            </h2>
          </div>
          <div className="mock-l ats-mock" style={{ position: "relative" }}>
            <div className="mock-bar">
              <span className="dot" /><span className="dot" /><span className="dot" />
              <span className="mono" style={{ color: "#6B7590", marginLeft: "auto" }}>RECRUITER / APPLICANTS</span>
            </div>
            <div className="filters">
              <span className="f on">▢ SR FRONTEND · 248</span>
              <span className="f">SCREEN STAGE</span>
              <span className="f">REMOTE ONLY</span>
              <span className="f">SCORE 80+</span>
              <span className="f">+ ADD FILTER</span>
            </div>
            <div className="table">
              <div className="row head"><div>NAME</div><div>ROLE</div><div>STAGE</div><div>SCORE</div><div>ACTION</div></div>
              <div className="row"><div className="nm">M. Sundaram</div><div className="role">Sr Frontend</div><div className="stat">SCREEN 1</div><div className="score">88</div><div className="stat">▶</div></div>
              <div className="row expanded"><div className="nm" style={{ color: "var(--burnt)" }}>P. Khurana</div><div className="role">Sr Frontend</div><div className="stat">INTERVIEW</div><div className="score">92</div><div className="stat">▼</div></div>
            </div>
            <div className="expand">
              <div className="pic">PK</div>
              <div className="col">
                <h6>SUMMARY</h6>
                <p>Senior FE at Quanta. Shipped design-tokens pipeline used by 40+ apps. Edge SSR for 4M MAUs.</p>
                <h6>SKILLS</h6>
                <p>React · TypeScript · Edge runtime · Design systems · Perf · A11y</p>
              </div>
              <div className="col">
                <h6>AI MOCK SCORE</h6>
                <p style={{ color: "var(--burnt)", fontWeight: 500, fontSize: "18px" }}>92 / 100 · STRONG</p>
                <h6>RECENT ACTIVITY</h6>
                <p>Completed mock interview · 28 min · 12 questions</p>
              </div>
            </div>
            <div className="table">
              <div className="row"><div className="nm">A. Patel</div><div className="role">Sr Frontend</div><div className="stat">APPLIED</div><div className="score">81</div><div className="stat">▶</div></div>
              <div className="row"><div className="nm">J. Lee</div><div className="role">Sr Frontend</div><div className="stat">SCREEN 2</div><div className="score">85</div><div className="stat">▶</div></div>
            </div>
            <div className="frag" style={{ background: "rgba(252,250,246,0.85)", color: "var(--l-1)", borderColor: "var(--border-l)", top: "12%", right: "-10%", transform: "rotate(4deg)", maxWidth: "220px", pointerEvents: "none" }}>
              <div className="mono" style={{ color: "var(--burnt)", marginBottom: "4px" }}>▢ BULK UPLOAD</div>
              <div style={{ fontSize: "13px", fontWeight: 500 }}>247 resumes · 92% parsed</div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 PIPELINE */}
      <section className="dark-mesh section">
        <div className="container">
          <div className="sx-ribbon">
            <span className="idx"><span className="num">03</span><span className="slash">/</span><span className="name">PIPELINE</span></span>
            <span className="ribbon-meta">SLOTS · CALENDAR · OFFER</span>
          </div>
          <div className="section-header">
            <div className="eyebrow">PIPELINE</div>
            <h2 className="h-section" style={{ marginTop: "18px" }}>
              From slot
              <br />
              <span className="muted-weight">to signed offer.</span>
            </h2>
          </div>
          <div style={{ position: "relative" }}>
            <div className="mock kanban-mock kanban-mock-wide">
              <div className="mock-bar">
                <span className="dot" /><span className="dot" /><span className="dot" />
                <span className="mono" style={{ color: "var(--d-3)", marginLeft: "auto" }}>PIPELINE / SR FRONTEND</span>
              </div>
              <div className="body">
                <div className="col"><h6><span>APPLIED</span><span className="ct">248</span></h6><div className="card"><div className="nm">M. Sundaram</div><div className="ro">02 MAY</div></div><div className="card"><div className="nm">A. Patel</div><div className="ro">02 MAY</div></div></div>
                <div className="col"><h6><span>SCREEN 1</span><span className="ct">87</span></h6><div className="card"><div className="nm">J. Lee</div><div className="ro">PHONE</div></div></div>
                <div className="col"><h6><span>SCREEN 2</span><span className="ct">42</span></h6><div className="card"><div className="nm">L. Cruz</div><div className="ro">CODE</div></div></div>
                <div className="col"><h6><span>FINAL</span><span className="ct">23</span></h6><div className="card amber"><div className="nm">P. Khurana</div><div className="ro">15 MAY</div></div></div>
                <div className="col"><h6><span>OFFER</span><span className="ct" style={{ color: "var(--burnt)" }}>12</span></h6><div className="card amber"><div className="nm">N. Adler</div><div className="ro">SIGNED</div></div></div>
              </div>
            </div>
            <div className="pipeline-flow">
              <div className="pipeline-flow-line" />
              <div className="pipeline-flow-badge">↓ FLOW</div>
            </div>
            <div className="mock cal-mock">
              <div className="mock-bar">
                <span className="dot" /><span className="dot" /><span className="dot" />
                <span className="mono" style={{ color: "var(--d-3)", marginLeft: "auto" }}>CALENDAR / MAY 2026</span>
              </div>
              <div className="body">
                {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((d) => (
                  <div key={d} className="day-h">{d}</div>
                ))}
                <div className="cell"><span className="num">5</span></div>
                <div className="cell has"><span className="num">6</span></div>
                <div className="cell"><span className="num">7</span></div>
                <div className="cell has2"><span className="num">8</span></div>
                <div className="cell has"><span className="num">9</span></div>
                <div className="cell"><span className="num">10</span></div>
                <div className="cell"><span className="num">11</span></div>
                <div className="cell has"><span className="num">12</span></div>
                <div className="cell"><span className="num">13</span></div>
                <div className="cell has"><span className="num">14</span></div>
                <div className="cell has2"><span className="num">15</span></div>
                <div className="cell has"><span className="num">16</span></div>
                <div className="cell"><span className="num">17</span></div>
                <div className="cell"><span className="num">18</span></div>
                <div className="cell"><span className="num">19</span></div>
                <div className="cell has"><span className="num">20</span></div>
                <div className="cell"><span className="num">21</span></div>
                <div className="cell has"><span className="num">22</span></div>
                <div className="cell"><span className="num">23</span></div>
                <div className="cell"><span className="num">24</span></div>
                <div className="cell"><span className="num">25</span></div>
                <div className="cell"><span className="num">26</span></div>
                <div className="cell has"><span className="num">27</span></div>
                <div className="cell"><span className="num">28</span></div>
                <div className="cell has"><span className="num">29</span></div>
                <div className="cell"><span className="num">30</span></div>
                <div className="cell"><span className="num">31</span></div>
                <div className="cell"><span className="num">1</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 AI INTERVIEWS */}
      <section className="dark-mesh section-featured">
        <div className="container">
          <div className="sx-ribbon">
            <span className="idx"><span className="num">04</span><span className="slash">/</span><span className="name">AI INTERVIEWS</span></span>
            <span style={{ color: "var(--amber)" }}>FEATURED · CENTERPIECE</span>
          </div>
          <div className="serif-kicker">The interview, automated.</div>
          <div className="eyebrow" style={{ marginTop: "18px" }}>AI INTERVIEWS · FEATURED</div>
          <h2 className="display display-featured" style={{ marginTop: "24px" }}>
            <span className="bone-grad">Run technical interviews 24/7.</span>
            <br />
            <span className="muted-weight">Without lifting a finger.</span>
          </h2>
          <p className="lead" style={{ maxWidth: "760px", marginTop: "20px" }}>
            AI-generated mock interviews per candidate and per job. Configure duration, difficulty, and skills. Identity verification, proctoring with violation detection, secure recording, AI scoring, and a hire recommendation you can trust.
          </p>
          <div className="mock ai-mock-emp" style={{ marginTop: "64px" }}>
            <div className="mock-bar">
              <span className="dot" /><span className="dot" /><span className="dot" />
              <span className="mono" style={{ color: "var(--d-3)", marginLeft: "auto" }}>PROCTORED · STRIPE / SR FE / SESSION 17</span>
            </div>
            <div className="ai-grid">
              <div className="pane">
                <h6>▢ CANDIDATE FEED</h6>
                <div className="video">
                  <div className="vid-meta"><span className="live">● REC 28:14</span><span>P. KHURANA</span></div>
                  <div className="silhouette">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="30" cy="22" r="10" />
                      <path d="M10 50c2-10 12-14 20-14s18 4 20 14" />
                    </svg>
                  </div>
                </div>
                <div className="badge-pill">▢ PROCTORING ACTIVE · 0 VIOLATIONS</div>
                <div className="code">
                  <div><span className="kw">function</span> rateLimiter(<span className="st">key</span>) {"{"}</div>
                  <div>&nbsp;&nbsp;<span className="kw">const</span> recent = bucket(<span className="st">key</span>);</div>
                  <div>&nbsp;&nbsp;<span className="kw">if</span> (recent.length &gt;= LIMIT) <span className="kw">return</span> <span className="st">false</span>;</div>
                  <div>&nbsp;&nbsp;<span className="kw">return</span> <span className="st">true</span>;</div>
                  <div>{"}"}</div>
                </div>
              </div>
              <div className="pane">
                <h6>▢ INTERVIEWER · AI</h6>
                <div style={{ background: "var(--surface-2)", border: "1px solid var(--border-d)", borderRadius: "8px", padding: "12px", flex: 1 }}>
                  <div className="mono" style={{ color: "var(--amber)", marginBottom: "8px", fontSize: "10px" }}>Q.07 / 12</div>
                  <div style={{ fontSize: "13px", color: "var(--d-1)", lineHeight: 1.5 }}>Walk me through how you&apos;d design a token-bucket rate limiter for a public API serving 10M req/min. What are the failure modes?</div>
                  <div style={{ marginTop: "16px", paddingTop: "12px", borderTop: "1px solid var(--border-d)" }}>
                    <div className="mono" style={{ color: "var(--d-3)", fontSize: "9px", marginBottom: "6px" }}>FOLLOW-UPS</div>
                    <div style={{ fontSize: "11px", color: "var(--d-2)", lineHeight: 1.5 }}>→ Behavior under partial network failures?<br />→ Where would you add backpressure?<br />→ How would you scale across regions?</div>
                  </div>
                </div>
                <div style={{ background: "var(--surface-2)", border: "1px solid var(--border-d)", borderRadius: "8px", padding: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 14a4 4 0 004-4V6a4 4 0 00-8 0v4a4 4 0 004 4zM6 14v1a4 4 0 008 0v-1" /></svg>
                  <div style={{ flex: 1 }}>
                    <div className="mono" style={{ color: "var(--d-3)", fontSize: "9px" }}>TRANSCRIPTION · LIVE</div>
                    <div style={{ fontSize: "11px", color: "var(--d-2)" }}>&quot;…we&apos;d start with an in-memory bucket, then…&quot;</div>
                  </div>
                </div>
              </div>
              <div className="pane">
                <h6>▢ AI SCORING</h6>
                <div className="scoring">
                  <div className="gauge"><div className="gh"><span>TECHNICAL</span><span>82</span></div><div className="bar"><div style={{ width: "82%" }} /></div></div>
                  <div className="gauge"><div className="gh"><span>COMMUNICATION</span><span>74</span></div><div className="bar"><div style={{ width: "74%", background: "var(--burnt)" }} /></div></div>
                  <div className="gauge"><div className="gh"><span>PROBLEM SOLVING</span><span>88</span></div><div className="bar"><div style={{ width: "88%" }} /></div></div>
                  <div className="gauge"><div className="gh"><span>OVERALL</span><span>81</span></div><div className="bar"><div style={{ width: "81%" }} /></div></div>
                  <div style={{ padding: "10px", background: "rgba(74,139,255,0.06)", border: "1px solid rgba(74,139,255,0.4)", borderRadius: "8px", marginTop: "4px" }}>
                    <div className="mono" style={{ color: "var(--amber)", fontSize: "9px" }}>▢ HIRE REC</div>
                    <div style={{ fontSize: "14px", fontWeight: 500, marginTop: "4px" }}>STRONG · 92/100</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="chips-row" style={{ marginTop: "40px", justifyContent: "center" }}>
            <span className="chip amber">IDENTITY VERIFIED</span>
            <span className="chip">VIOLATION DETECTION</span>
            <span className="chip">S3 RECORDING</span>
            <span className="chip">AI SCORING</span>
          </div>
        </div>
      </section>

      {/* 05 REUSABILITY */}
      <section className="light section">
        <div className="container">
          <div className="sx-ribbon">
            <span className="idx"><span className="num">05</span><span className="slash">/</span><span className="name">REUSABILITY</span></span>
            <span className="ribbon-meta">TEMPLATES · QUESTION BANKS · EMAILS</span>
          </div>
          <div className="section-header">
            <div className="eyebrow">REUSABILITY</div>
            <h2 className="h-section" style={{ marginTop: "18px" }}>
              Templates that scale
              <br />
              <span className="muted-weight">with your hiring volume.</span>
            </h2>
          </div>
          <div className="mock-l tpl-mock">
            <div className="mock-bar">
              <span className="dot" /><span className="dot" /><span className="dot" />
              <span className="mono" style={{ color: "#6B7590", marginLeft: "auto" }}>TEMPLATES / LIBRARY</span>
            </div>
            <div className="body">
              <div className="nav">
                <div className="li on">▢ INTERVIEW</div>
                <div className="li">▢ EMAIL</div>
                <div className="li">▢ CODE QS</div>
                <div className="li">▢ SCORECARDS</div>
                <div className="li">▢ OFFER</div>
              </div>
              <div className="grid-tpl">
                <div className="card"><div className="d">SR FRONTEND</div><div className="t">Senior FE · Tech Screen</div><div className="d">12 QS · 45 MIN</div></div>
                <div className="card"><div className="d">SR FRONTEND</div><div className="t">Senior FE · System Design</div><div className="d">8 QS · 60 MIN</div></div>
                <div className="card"><div className="d">DESIGN ENG</div><div className="t">Design Engineer · Portfolio</div><div className="d">10 QS · 30 MIN</div></div>
                <div className="card"><div className="d">PRODUCT</div><div className="t">PM · Case Study</div><div className="d">6 QS · 60 MIN</div></div>
                <div className="card"><div className="d">SRE</div><div className="t">SRE · Incident Walkthrough</div><div className="d">10 QS · 45 MIN</div></div>
                <div className="card"><div className="d">DATA</div><div className="t">Data Eng · SQL + Pipelines</div><div className="d">14 QS · 60 MIN</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 ANALYTICS */}
      <section className="dark-mesh section">
        <div className="container">
          <div className="sx-ribbon">
            <span className="idx"><span className="num">06</span><span className="slash">/</span><span className="name">ANALYTICS</span></span>
            <span className="ribbon-meta">FUNNEL · VELOCITY · SOURCES</span>
          </div>
          <div className="section-header">
            <div className="eyebrow">ANALYTICS</div>
            <h2 className="h-section" style={{ marginTop: "18px" }}>
              Numbers your leadership
              <br />
              <span className="muted-weight">will actually read.</span>
            </h2>
          </div>
          <div className="mock an-mock">
            <div className="mock-bar">
              <span className="dot" /><span className="dot" /><span className="dot" />
              <span className="mono" style={{ color: "var(--d-3)", marginLeft: "auto" }}>RECRUITER · ANALYTICS · Q2 2026</span>
            </div>
            <div className="body">
              <div className="kpi">
                <div className="l">TIME-TO-HIRE</div>
                <div className="v">14d</div>
                <div className="d">▼ 42% vs Q1</div>
              </div>
              <div className="kpi">
                <div className="l">QUALIFIED RATE</div>
                <div className="v">68%</div>
                <div className="d">▲ 11% vs Q1</div>
              </div>
              <div className="kpi-funnel">
                <div className="l">▢ HIRE FUNNEL</div>
                <div className="funnel-bars">
                  {[
                    { label: "APPLIED", count: "248", width: "100%", bg: "rgba(74,139,255,0.75)" },
                    { label: "SCREEN", count: "87", width: "65%", bg: "rgba(74,139,255,0.55)" },
                    { label: "INTERVIEW", count: "42", width: "38%", bg: "rgba(42,95,217,0.65)" },
                    { label: "OFFER", count: "12", width: "18%", bg: "rgba(42,95,217,0.85)" },
                    { label: "HIRED", count: "9", width: "12%", bg: "var(--burnt)" }
                  ].map((bar) => (
                    <div key={bar.label}>
                      <div className="funnel-row-head">
                        <span>{bar.label}</span>
                        <span>{bar.count}</span>
                      </div>
                      <div className="funnel-track">
                        <div className="funnel-fill" style={{ width: bar.width, background: bar.bg }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="panel-chart">
                <h6>HIRE VELOCITY · 6 MONTHS</h6>
                <svg viewBox="0 0 400 100" preserveAspectRatio="none" aria-hidden="true">
                  <g stroke="rgba(180,210,255,0.08)" strokeWidth="1">
                    <line x1="0" x2="400" y1="25" y2="25" />
                    <line x1="0" x2="400" y1="50" y2="50" />
                    <line x1="0" x2="400" y1="75" y2="75" />
                  </g>
                  <path d="M10 80 L70 70 L130 75 L190 50 L250 55 L310 35 L370 28 L370 100 L10 100Z" fill="rgba(74,139,255,0.14)" />
                  <path d="M10 80 L70 70 L130 75 L190 50 L250 55 L310 35 L370 28" stroke="#4A8BFF" strokeWidth="2" fill="none" />
                  <path d="M10 90 L70 88 L130 80 L190 85 L250 70 L310 65 L370 60" stroke="#8B9AB8" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
                </svg>
                <div className="chart-legend">
                  <span className="solid">Hires</span>
                  <span className="dashed">Target</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07 CTA */}
      <section className="cta-mesh section-edge" style={{ position: "relative", overflow: "hidden" }}>
        <div className="container cta-band">
          <div className="sx-ribbon">
            <span className="idx"><span className="num">07</span><span className="slash">/</span><span className="name">GET STARTED</span></span>
            <span className="ribbon-meta">30-DAY FREE TRIAL</span>
          </div>
          <div className="cta-copy">
            <div className="eyebrow">START FREE TRIAL</div>
            <h2 className="display" style={{ fontSize: "clamp(48px, 6.5vw, 80px)" }}>
              <span className="bone-grad">See CareerXel for your team.</span>
            </h2>
            <p className="lead lead--center" style={{ maxWidth: "600px" }}>
              A 30-minute demo. Real data, real candidates, real time saved.
            </p>
            <div className="hero-cta hero-cta--center">
              <Link className="btn btn-primary" href="/contact">Book a demo</Link>
              <Link className="btn btn-ghost" href="/pricing">Start free trial</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
