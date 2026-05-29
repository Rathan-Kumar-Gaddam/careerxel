import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Candidates",
  description: "AI-built profiles, smart matching, mock interviews, and learning roadmaps for candidates.",
  alternates: { canonical: "/candidates" },
  openGraph: {
    title: "For Candidates | CareerXel",
    description: "AI-built profiles, smart matching, mock interviews, and learning roadmaps for candidates.",
    url: "/candidates"
  }
};

export default function CandidatesPage() {
  return (
    <main className="relative">
      {/* 00 HERO */}
      <section className="dark-mesh p-hero">
        <div className="container">
          <div className="p-hero-grid">
            <div className="hero-copy">
              <div className="serif-kicker">For the people doing the work.</div>
              {/* <div className="eyebrow">FOR CANDIDATES</div> */}
              <h1 className="display">
                <span className="bone-grad">Your career,</span><br />
                <span className="muted-weight">on autopilot.</span>
              </h1>
              <p className="lead">AI-built profiles, smart matching, mock interviews you can keep failing until you don't, and learning roadmaps that actually move the needle.</p>
              <div className="hero-cta">
                <Link className="btn btn-primary" href="https://www.staging.idsjobportal.outreachtek.com/register">Create free account
                  <svg className="icon" viewBox="0 0 20 20" stroke="currentColor" fill="none"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 10h10M11 6l4 4-4 4"/></svg>
                </Link>
              </div>
            </div>
            <div className="p-hero-mock">
              <div className="mock candidate-hero-mock">
                <div className="mock-bar">
                  <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                  <span className="mono" style={{ color: "var(--d-3)", marginLeft: "auto" }}>CANDIDATE.OS</span>
                </div>
                <div className="candidate-hero-body">
                  <div className="m-bar-row">
                    <span className="m-pill amber">DASHBOARD</span>
                    <span className="m-pill">JOBS</span>
                    <span className="m-pill">PRACTICE</span>
                  </div>
                  <div className="hero-stat-row">
                    <div className="stat-card" style={{ background: "var(--surface-2)", border: "1px solid var(--border-d)", borderRadius: "10px", padding: "12px" }}>
                      <div className="mono" style={{ color: "var(--d-3)", fontSize: "9px" }}>PROFILE</div>
                      <div style={{ fontSize: "24px", fontWeight: 500, letterSpacing: "-0.02em" }}>87%</div>
                      <div className="mono" style={{ color: "var(--amber)", fontSize: "9px" }}>▲ COMPLETE</div>
                    </div>
                    <div className="stat-card" style={{ background: "var(--surface-2)", border: "1px solid var(--border-d)", borderRadius: "10px", padding: "12px" }}>
                      <div className="mono" style={{ color: "var(--d-3)", fontSize: "9px" }}>SCORE</div>
                      <div style={{ fontSize: "24px", fontWeight: 500, letterSpacing: "-0.02em" }}>82</div>
                      <div className="mono" style={{ color: "var(--amber)", fontSize: "9px" }}>▲ TECH</div>
                    </div>
                  </div>
                  <div style={{ background: "var(--surface-2)", border: "1px solid var(--border-d)", borderRadius: "10px", padding: "12px", flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "var(--d-2)", marginBottom: "6px" }}>
                      <span>Weekly progress</span>
                      <span className="mono" style={{ color: "var(--d-3)", fontSize: "9px" }}>7D</span>
                    </div>
                    <svg viewBox="0 0 200 80" preserveAspectRatio="none" style={{ width: "100%", height: "70%" }}>
                      <path d="M0 60 L30 50 L60 55 L90 30 L120 35 L150 20 L180 25 L200 12" stroke="#4A8BFF" strokeWidth="1.5" fill="none"/>
                      <path d="M0 60 L30 50 L60 55 L90 30 L120 35 L150 20 L180 25 L200 12 L200 80 L0 80Z" fill="rgba(74,139,255,0.12)"/>
                    </svg>
                  </div>
                  <div style={{ background: "var(--surface-2)", border: "1px solid var(--border-d)", borderRadius: "10px", padding: "12px", display: "flex", gap: "10px", alignItems: "center" }}>
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--amber)" }}></div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: "12px", color: "var(--d-1)" }}>Interview · Stripe · Sr Frontend</div>
                      <div className="mono" style={{ color: "var(--d-3)", fontSize: "9px" }}>TOMORROW · 14:00 IST</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frag" style={{ top: "44%", left: "-22%", transform: "rotate(0deg)", maxWidth: "220px", pointerEvents: "none" }}>
                <div className="mono" style={{ color: "var(--amber)", marginBottom: "4px" }}>ADVISOR</div>
                <div style={{ fontSize: "13px", color: "var(--d-1)" }}>Let's review your week →</div>
              </div>
              <div className="frag" style={{ bottom: "6%", right: "-18%", transform: "rotate(0deg)", maxWidth: "220px", pointerEvents: "none" }}>
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

      {/* 01 RESUME OS */}
      <section className="dark-mesh section">
        <div className="container">
          <div className="two-asym">
            <div className="section-intro">
              {/* <div className="eyebrow">RESUME OS</div> */}
              <h2 className="h-section">
                Resumes that adapt<br />
                <span className="muted-weight">to every role.</span>
              </h2>
              <p className="subhead">Build once. CareerXel retunes the bullets, ordering, and emphasis for every job you apply to — and always exports an ATS-clean version.</p>
            </div>
            <div className="mock resume-mock">
              <div className="mock-bar">
                <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                <span className="mono" style={{ color: "var(--d-3)", marginLeft: "auto" }}>RESUME / EDITOR</span>
              </div>
              <div className="cols" style={{ height: "calc(100% - 32px)" }}>
                <div className="nav-c">
                  <div className="li on">HEADER</div>
                  <div className="li">SUMMARY</div>
                  <div className="li">EXPERIENCE</div>
                  <div className="li">PROJECTS</div>
                  <div className="li">SKILLS</div>
                  <div className="li">EDUCATION</div>
                  <div className="li">CERTS</div>
                </div>
                <div className="ed">
                  <div className="opt">
                    <div className="lab">OPTIMIZE FOR</div>
                    <div className="v">Senior Frontend Engineer · Stripe</div>
                  </div>
                  <div className="field"><div className="l">FULL NAME</div><div className="v">Priya Khurana</div></div>
                  <div className="field"><div className="l">HEADLINE</div><div className="v">Senior Frontend Engineer · React, TS, Edge</div></div>
                  <div className="field"><div className="l">SUMMARY</div><div className="v" style={{ color: "var(--amber)" }}>Shipping perf-critical UI at scale. ↺ retuned</div></div>
                </div>
                <div className="pv">
                  <h6 style={{ fontSize: "14px" }}>Priya Khurana</h6>
                  <div className="mono" style={{ color: "var(--d-3)", fontSize: "9px" }}>PRIYA@MAIL.COM · LINEAR.LINK/PRIYA</div>
                  <div style={{ marginTop: "6px" }}><div className="mono" style={{ color: "var(--d-3)", fontSize: "9px" }}>EXPERIENCE</div>
                  <div style={{ fontSize: "11px", color: "var(--d-1)", marginTop: "4px" }}>Quanta · Senior FE</div>
                  <div style={{ fontSize: "10px", color: "var(--d-2)", lineHeight: 1.5 }}>— Built design-tokens pipeline used by 40+ apps</div>
                  <div style={{ fontSize: "10px", color: "var(--amber)", lineHeight: 1.5 }}>— Scaled Edge SSR for 4M MAUs (retuned ↺)</div></div>
                </div>
              </div>
            </div>
          </div>
          <div className="rule-label" style={{ marginTop: "56px" }}>EXPORTS</div>
          <div className="chips-row">
            <span className="chip">PDF</span>
            <span className="chip">DOCX</span>
            <span className="chip amber">ATS-OPTIMIZED</span>
          </div>
        </div>
      </section>

      {/* 02 DISCOVERY (light) */}
      <section className="light section">
        <div className="container">
          <div className="two-asym-rev">
            <div className="mock-l search-mock" style={{ position: "relative" }}>
              <div className="mock-bar">
                <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                <span className="mono" style={{ color: "#6B7590", marginLeft: "auto" }}>JOBS</span>
              </div>
              <div className="cols" style={{ height: "calc(100% - 32px)" }}>
                <div className="filters">
                  <div>
                    <h6>EXPERIENCE</h6>
                    <div className="opt"><span className="cb"></span><span>Entry</span></div>
                    <div className="opt on"><span className="cb"></span><span>Mid (3-5y)</span></div>
                    <div className="opt on"><span className="cb"></span><span>Senior (5+y)</span></div>
                  </div>
                  <div>
                    <h6>WORK MODE</h6>
                    <div className="opt on"><span className="cb"></span><span>Remote</span></div>
                    <div className="opt"><span className="cb"></span><span>Hybrid</span></div>
                    <div className="opt"><span className="cb"></span><span>On-site</span></div>
                  </div>
                  <div>
                    <h6>SALARY</h6>
                    <div className="opt"><span className="cb"></span><span>$80k+</span></div>
                    <div className="opt on"><span className="cb"></span><span>$120k+</span></div>
                  </div>
                </div>
                <div className="results">
                  <div className="result">
                    <div><div className="who">Senior Frontend Engineer</div><div className="meta">STRIPE · REMOTE · $180-220K</div></div>
                    <div className="match">96% MATCH</div>
                  </div>
                  <div className="result">
                    <div><div className="who">Design Engineer</div><div className="meta">LINEAR · REMOTE · $160-200K</div></div>
                    <div className="match">91% MATCH</div>
                  </div>
                  <div className="result">
                    <div><div className="who">Product Engineer</div><div className="meta">FIGMA · HYBRID · $170-210K</div></div>
                    <div className="match">88% MATCH</div>
                  </div>
                  <div className="result">
                    <div><div className="who">Staff Software Engineer</div><div className="meta">VERCEL · REMOTE · $200-260K</div></div>
                    <div className="match">84% MATCH</div>
                  </div>
                </div>
              </div>
            
            </div>
            <div className="section-intro">
              {/* <div className="eyebrow">DISCOVERY</div> */}
              <h2 className="h-section">
                Find roles built for you,<br />
                <span className="muted-weight">not for everyone.</span>
              </h2>
              <p className="subhead">Smart matching reads your skills, your trajectory, and your preferences — and gets out of your way.</p>
              <div className="chips-row">
                <span className="chip">FULL-TEXT SEARCH</span>
                <span className="chip">SMART MATCH</span>
                <span className="chip">JOB ALERTS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 INTERVIEW LAB FEATURED */}
      <section className="dark-mesh section">
        <div className="container">
          <div className="section-header">
            {/* <div className="eyebrow">INTERVIEW LAB</div> */}
            <h2 className="h-section" style={{ marginTop: "18px" }}>
              Practice like<br /><span className="muted-weight">it's the real thing.</span>
            </h2>
          </div>

          <div className="mock iv-mock">
            <div className="mock-bar">
              <span className="dot"></span><span className="dot"></span><span className="dot"></span>
              <span className="mono" style={{ color: "var(--d-3)", marginLeft: "auto" }}>SESSION 04 · LIVE 28:14</span>
            </div>
            <div className="iv-grid" style={{ height: "calc(100% - 32px)" }}>
              <div className="pane">
                <h6>EDITOR · TYPESCRIPT</h6>
                <div className="code">
                  <div><span className="kw">function</span> rateLimiter(<span className="st">key</span>: string) &#123;</div>
                  <div>&nbsp;&nbsp;<span className="kw">const</span> now = Date.now();</div>
                  <div>&nbsp;&nbsp;<span className="kw">const</span> bucket = store.get(<span className="st">key</span>) ?? [];</div>
                  <div>&nbsp;&nbsp;<span className="kw">const</span> recent = bucket.filter(t =&gt; now - t &lt; WINDOW);</div>
                  <div>&nbsp;&nbsp;<span className="kw">if</span> (recent.length &gt;= LIMIT) <span className="kw">return</span> <span className="st">false</span>;</div>
                  <div>&nbsp;&nbsp;recent.push(now);</div>
                  <div>&nbsp;&nbsp;store.set(<span className="st">key</span>, recent);</div>
                  <div>&nbsp;&nbsp;<span className="kw">return</span> <span className="st">true</span>;</div>
                  <div>&#125;</div>
                </div>
              </div>
              <div className="pane">
                <h6>AI INTERVIEWER</h6>
                <div className="qbox">
                  <div className="mono" style={{ color: "var(--amber)", marginBottom: "8px" }}>Q.07 / 12</div>
                  <div className="q">Walk me through how you'd design a token-bucket rate limiter for a public API serving 10M req/min. What are the failure modes?</div>
                  <div style={{ marginTop: "16px", paddingTop: "12px", borderTop: "1px solid var(--border-d)" }}>
                    <div className="mono" style={{ color: "var(--d-3)", fontSize: "9px", marginBottom: "6px" }}>FOLLOW-UPS</div>
                    <div style={{ fontSize: "11px", color: "var(--d-2)", lineHeight: 1.5 }}>→ How does this behave under partial network failures?<br />→ Where would you add backpressure?</div>
                  </div>
                </div>
              </div>
              <div className="pane">
                <h6>LIVE SCORE</h6>
                <div className="gauge">
                  <div className="gh"><span>TECHNICAL</span><span>82</span></div>
                  <div className="bar"><div style={{ width: "82%" }}></div></div>
                </div>
                <div className="gauge">
                  <div className="gh"><span>COMMUNICATION</span><span>74</span></div>
                  <div className="bar"><div style={{ width: "74%", background: "var(--burnt)" }}></div></div>
                </div>
                <div className="gauge">
                  <div className="gh"><span>OVERALL</span><span>78</span></div>
                  <div className="bar"><div style={{ width: "78%" }}></div></div>
                </div>
                <div style={{ marginTop: "14px", padding: "10px", background: "rgba(74,139,255,0.06)", border: "1px solid rgba(74,139,255,0.3)", borderRadius: "8px" }}>
                  <div className="mono" style={{ color: "var(--amber)", fontSize: "9px" }}>HIRE REC</div>
                  <div style={{ fontSize: "14px", fontWeight: 500, marginTop: "4px" }}>STRONG · 92/100</div>
                </div>
                <div style={{ flex: 1 }}></div>
                <div className="mono" style={{ color: "var(--d-3)", textAlign: "center" }}>▶ RECORDING · 28:14</div>
              </div>
            </div>
          </div>

          <div className="chips-row" style={{ marginTop: "40px", justifyContent: "center" }}>
            <span className="chip">AVG SESSION 28 MIN</span>
            <span className="chip">QUESTIONS BANKED 4,200</span>
            <span className="chip">SCORING DIMENSIONS 12</span>
          </div>
        </div>
      </section>

      {/* 04 GROWTH */}
      <section className="light section">
        <div className="container">
          <div className="two-asym">
            <div className="section-intro">
              {/* <div className="eyebrow">GROWTH</div> */}
              <h2 className="h-section">
                Learn what actually<br />
                <span className="muted-weight">moves the needle.</span>
              </h2>
              <p className="subhead">A career advisor that remembers every conversation. Roadmaps you can follow. LMS SSO so your campus learning lives in one place.</p>
              <div className="chips-row">
                <span className="chip">ADVISOR CHAT</span>
                <span className="chip">ROLE ROADMAPS</span>
                <span className="chip">SKILL ROADMAPS</span>
                <span className="chip">LMS SSO</span>
              </div>
            </div>
            <div className="mock-l road-mock">
              <div className="mock-bar">
                <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                <span className="mono" style={{ color: "#6B7590", marginLeft: "auto" }}>ROADMAP / SR FRONTEND</span>
              </div>
              <svg viewBox="0 0 600 320" style={{ height: "calc(100% - 32px)" }}>
                {/* connections */}
                <line x1="80" y1="160" x2="200" y2="80" className="conn-l"/>
                <line x1="80" y1="160" x2="200" y2="160" className="conn-l"/>
                <line x1="80" y1="160" x2="200" y2="240" className="conn-l dim"/>
                <line x1="200" y1="80" x2="340" y2="60" className="conn-l"/>
                <line x1="200" y1="80" x2="340" y2="120" className="conn-l"/>
                <line x1="200" y1="160" x2="340" y2="180" className="conn-l"/>
                <line x1="200" y1="240" x2="340" y2="240" className="conn-l dim"/>
                <line x1="340" y1="60" x2="500" y2="100" className="conn-l dim"/>
                <line x1="340" y1="120" x2="500" y2="160" className="conn-l dim"/>
                <line x1="340" y1="180" x2="500" y2="160" className="conn-l dim"/>
                <line x1="340" y1="240" x2="500" y2="220" className="conn-l dim"/>

                {/* nodes */}
                <g>
                  <rect className="node done" x="40" y="148" width="80" height="24" rx="6"/>
                  <text x="80" y="164" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="#0F1832">START</text>
                </g>

                <g>
                  <rect className="node done" x="160" y="68" width="80" height="24" rx="6"/>
                  <text x="200" y="84" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="#0F1832">JS · TS</text>
                </g>
                <g>
                  <rect className="node active" x="160" y="148" width="80" height="24" rx="6"/>
                  <text x="200" y="164" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="#0F1832">REACT</text>
                </g>
                <g>
                  <rect className="node" x="160" y="228" width="80" height="24" rx="6"/>
                  <text x="200" y="244" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="#4A5470">TESTING</text>
                </g>

                <g>
                  <rect className="node done" x="300" y="48" width="80" height="24" rx="6"/>
                  <text x="340" y="64" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="#0F1832">TOOLING</text>
                </g>
                <g>
                  <rect className="node active" x="300" y="108" width="80" height="24" rx="6"/>
                  <text x="340" y="124" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="#0F1832">PERF</text>
                </g>
                <g>
                  <rect className="node" x="300" y="168" width="80" height="24" rx="6"/>
                  <text x="340" y="184" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="#4A5470">EDGE SSR</text>
                </g>
                <g>
                  <rect className="node" x="300" y="228" width="80" height="24" rx="6"/>
                  <text x="340" y="244" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="#4A5470">A11Y</text>
                </g>

                <g>
                  <rect className="node" x="460" y="88" width="100" height="24" rx="6"/>
                  <text x="510" y="104" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="#4A5470">SR FRONTEND</text>
                </g>
                <g>
                  <rect className="node" x="460" y="148" width="100" height="24" rx="6"/>
                  <text x="510" y="164" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="#4A5470">PLATFORM</text>
                </g>
                <g>
                  <rect className="node" x="460" y="208" width="100" height="24" rx="6"/>
                  <text x="510" y="224" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="#4A5470">DESIGN ENG</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 05 COMMAND CENTER */}
      <section className="dark-mesh section">
        <div className="container">
          <div className="section-header">
            {/* <div className="eyebrow">COMMAND CENTER</div> */}
            <h2 className="h-section" style={{ marginTop: "18px" }}>
              Every application,<br /><span className="muted-weight">every interview, in one view.</span>
            </h2>
          </div>
          <div className="mock cc-mock">
            <div className="mock-bar">
              <span className="dot"></span><span className="dot"></span><span className="dot"></span>
              <span className="mono" style={{ color: "var(--d-3)", marginLeft: "auto" }}>CANDIDATE.OS / DASHBOARD</span>
            </div>
            <div className="top">
              <div style={{ background: "var(--surface-2)", border: "1px solid var(--border-d)", borderRadius: "10px", padding: "12px", flex: 1 }}>
                <div className="mono" style={{ color: "var(--d-3)", fontSize: "10px" }}>APPLICATIONS</div>
                <div style={{ fontSize: "24px", fontWeight: 500, letterSpacing: "-0.02em" }}>28</div>
              </div>
              <div style={{ background: "var(--surface-2)", border: "1px solid var(--border-d)", borderRadius: "10px", padding: "12px", flex: 1 }}>
                <div className="mono" style={{ color: "var(--d-3)", fontSize: "10px" }}>INTERVIEWS</div>
                <div style={{ fontSize: "24px", fontWeight: 500, letterSpacing: "-0.02em" }}>7</div>
              </div>
              <div style={{ background: "var(--surface-2)", border: "1px solid var(--border-d)", borderRadius: "10px", padding: "12px", flex: 1 }}>
                <div className="mono" style={{ color: "var(--d-3)", fontSize: "10px" }}>OFFERS</div>
                <div style={{ fontSize: "24px", fontWeight: 500, letterSpacing: "-0.02em", color: "var(--amber)" }}>2</div>
              </div>
              <div style={{ background: "var(--surface-2)", border: "1px solid var(--border-d)", borderRadius: "10px", padding: "12px", flex: 1 }}>
                <div className="mono" style={{ color: "var(--d-3)", fontSize: "10px" }}>PROFILE</div>
                <div style={{ fontSize: "24px", fontWeight: 500, letterSpacing: "-0.02em" }}>87%</div>
              </div>
            </div>
            <div className="body" style={{ flex: 1, minHeight: "200px" }}>
              <div className="col">
                <h6>PIPELINE</h6>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <div style={{ background: "var(--surface-2)", border: "1px solid var(--border-d)", borderRadius: "8px", padding: "8px 10px", display: "flex", justifyContent: "space-between" }}><span style={{ fontSize: "11px" }}>Stripe — SR FE</span><span className="mono" style={{ color: "var(--amber)", fontSize: "9px" }}>OFFER</span></div>
                  <div style={{ background: "var(--surface-2)", border: "1px solid var(--border-d)", borderRadius: "8px", padding: "8px 10px", display: "flex", justifyContent: "space-between" }}><span style={{ fontSize: "11px" }}>Linear — Design Eng</span><span className="mono" style={{ color: "var(--d-2)", fontSize: "9px" }}>INTERVIEW</span></div>
                  <div style={{ background: "var(--surface-2)", border: "1px solid var(--border-d)", borderRadius: "8px", padding: "8px 10px", display: "flex", justifyContent: "space-between" }}><span style={{ fontSize: "11px" }}>Vercel — Platform</span><span className="mono" style={{ color: "var(--d-2)", fontSize: "9px" }}>SCREEN</span></div>
                  <div style={{ background: "var(--surface-2)", border: "1px solid var(--border-d)", borderRadius: "8px", padding: "8px 10px", display: "flex", justifyContent: "space-between" }}><span style={{ fontSize: "11px" }}>Figma — Product Eng</span><span className="mono" style={{ color: "var(--d-3)", fontSize: "9px" }}>APPLIED</span></div>
                </div>
              </div>
              <div className="col">
                <h6>MONTHLY TRENDS</h6>
                <svg viewBox="0 0 240 120" style={{ width: "100%", height: "80%" }}>
                  <g stroke="rgba(180,210,255,0.06)"><line x1="0" x2="240" y1="30" y2="30"/><line x1="0" x2="240" y1="60" y2="60"/><line x1="0" x2="240" y1="90" y2="90"/></g>
                  <path d="M10 90 L50 80 L90 70 L130 50 L170 60 L210 35" stroke="#4A8BFF" strokeWidth="1.6" fill="none"/>
                  <path d="M10 90 L50 80 L90 70 L130 50 L170 60 L210 35 L210 120 L10 120Z" fill="rgba(74,139,255,0.12)"/>
                </svg>
              </div>
              <div className="col">
                <h6>UPCOMING</h6>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <div style={{ background: "var(--surface-2)", border: "1px solid var(--border-d)", borderRadius: "8px", padding: "10px" }}>
                    <div style={{ fontSize: "11px", color: "var(--d-1)" }}>Stripe · Final Round</div>
                    <div className="mono" style={{ color: "var(--amber)", fontSize: "9px", marginTop: "2px" }}>TOMORROW · 14:00</div>
                  </div>
                  <div style={{ background: "var(--surface-2)", border: "1px solid var(--border-d)", borderRadius: "8px", padding: "10px" }}>
                    <div style={{ fontSize: "11px", color: "var(--d-1)" }}>Linear · Tech Screen</div>
                    <div className="mono" style={{ color: "var(--d-3)", fontSize: "9px", marginTop: "2px" }}>FRI · 10:30</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 BENTO */}
      <section className="dark-mesh section">
        <div className="container">
          <div className="section-header">
            {/* <div className="eyebrow">EVERYTHING ELSE</div> */}
            <h2 className="h-section" style={{ marginTop: "18px" }}>
              Plus the parts<br /><span className="muted-weight">you'd expect to be missing.</span>
            </h2>
          </div>

          <div className="bgrid">
            <div className="card-d tile tile-2x1">
              <div className="icbox">
                <svg className="icon" viewBox="0 0 20 20" stroke="currentColor" fill="none">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 3a4 4 0 014 4v3l1.5 2.5h-11L6 10V7a4 4 0 014-4z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 14h4"/>
                </svg>
              </div>
              <div><h4>Notifications</h4><p>Stay on top of every match, interview, and message.</p></div>
              <span className="tag">/REALTIME</span>
            </div>
            <div className="card-d tile">
              <div className="icbox">
                <svg className="icon" viewBox="0 0 20 20" stroke="currentColor" fill="none">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l8-4 8 4-8 4-8-4z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 10v4c0 1.5 2.5 3 5 3s5-1.5 5-3v-4"/>
                </svg>
              </div>
              <div><h4>College affiliation</h4><p>Join with a code. Surface in placement reports.</p></div>
              <span className="tag">/CAMPUS</span>
            </div>
            {/* <div className="card-d tile">
              <div className="icbox">
                <svg className="icon" viewBox="0 0 20 20" stroke="currentColor" fill="none">
                  <circle cx="10" cy="10" r="7" strokeWidth="1.5"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h14M10 3a10 10 0 010 14M10 3a10 10 0 000 14"/>
                </svg>
              </div>
              <div><h4>7 languages</h4><p>EN · ES · FR · HI · TA · PT · AR.</p></div>
              <span className="tag">/I18N</span>
            </div> */}
            <div className="card-d tile">
              <div className="icbox">
                <svg className="icon" viewBox="0 0 20 20" stroke="currentColor" fill="none">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 3v3M10 14v3M3 10h3M14 10h3"/>
                  <circle cx="10" cy="10" r="3" strokeWidth="1.5"/>
                </svg>
              </div>
              <div><h4>Google OAuth</h4><p>Sign in with Google. Phone OTP backup.</p></div>
              <span className="tag">/AUTH</span>
            </div>
            <div className="card-d tile">
              <div className="icbox">
                <svg className="icon" viewBox="0 0 20 20" stroke="currentColor" fill="none">
                  <circle cx="10" cy="7" r="3" strokeWidth="1.5"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 17c1.5-3 4-4 7-4s5.5 1 7 4"/>
                </svg>
              </div>
              <div><h4>Photo &amp; certs</h4><p>Photo plus verified certifications.</p></div>
              <span className="tag">/PROFILE</span>
            </div>
            <div className="card-d tile">
              <div className="icbox">
                <svg className="icon" viewBox="0 0 20 20" stroke="currentColor" fill="none">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 13l-3-3 3-3M13 7l3 3-3 3M11 5l-2 10"/>
                </svg>
              </div>
              <div><h4>Public portfolio</h4><p>One link. Shareable. Always up to date.</p></div>
              <span className="tag">/PUBLIC</span>
            </div>
          </div>
        </div>
      </section>

      {/* 07 CTA */}
      <section className="cta-mesh section-edge" style={{ position: "relative", overflow: "hidden" }}>
        <div className="container cta-band">
          <div className="cta-copy">
            {/* <div className="eyebrow">START FREE</div> */}
            <h2 className="display" style={{ fontSize: "clamp(48px, 6.5vw, 80px)" }}>
              <span className="bone-grad">Start building your career today.</span>
            </h2>
            <p className="lead lead--center" style={{ maxWidth: "620px" }}>
              It takes less than five minutes. Your first AI mock interview is free.
            </p>
            <div className="hero-cta hero-cta--center">
              <Link className="btn btn-primary" href="https://www.staging.idsjobportal.outreachtek.com/register">
                Create free account
                <svg className="icon" viewBox="0 0 20 20" stroke="currentColor" fill="none"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 10h10M11 6l4 4-4 4"/></svg>
              </Link>
            </div>
          </div>
        </div>
       
      </section>
    </main>
  );
}
