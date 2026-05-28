import Link from "next/link";
import type { Metadata } from "next";
import { homeContent, type Testimonial } from "@/lib/content";
import { TestimonialsPreview } from "@/components/testimonials-preview";
import { getPage } from "@/lib/strapi";

export const metadata: Metadata = {
  title: "Features | CareerXel",
  description: "Explore the powerful AI-native features of CareerXel designed for candidates, employers, and colleges.",
  alternates: { canonical: "/features" },
  openGraph: {
    title: "Features | CareerXel",
    description: "Explore the powerful AI-native features of CareerXel designed for candidates, employers, and colleges.",
    url: "/features"
  }
};

export default async function FeaturesPage() {
  const page = await getPage("home");
  const testimonials: Testimonial[] = page.testimonials?.length
    ? page.testimonials
    : homeContent.testimonials;
  const stats = homeContent.numbers;
  const features = [
    {
      icon: "🤖",
      title: "AI Mock Interviews",
      description: "Practice with realistic interview scenarios powered by AI. Get instant feedback and improve your performance.",
      tag: "FOR CANDIDATES"
    },
    {
      icon: "📄",
      title: "Smart Resume Builder",
      description: "Build ATS-optimized resumes with AI suggestions. Highlight your strengths and match job requirements.",
      tag: "FOR CANDIDATES"
    },
    {
      icon: "🎯",
      title: "Job Matching Engine",
      description: "Discover perfectly matched opportunities using advanced AI algorithms. Get notified of roles that fit your skills.",
      tag: "FOR CANDIDATES"
    },
    {
      icon: "📊",
      title: "Configurable ATS",
      description: "Manage your entire hiring workflow in one platform. Customize pipelines, screening, and evaluation process.",
      tag: "FOR EMPLOYERS"
    },
    {
      icon: "⚡",
      title: "AI Screening",
      description: "Automatically screen candidates with intelligent evaluation. Save time and find top talent faster.",
      tag: "FOR EMPLOYERS"
    },
    {
      icon: "📈",
      title: "Interview Analytics",
      description: "Deep insights into candidate performance. Track hiring metrics and optimize your recruitment process.",
      tag: "FOR EMPLOYERS"
    },
    {
      icon: "🎓",
      title: "Placement Dashboards",
      description: "Track student placements in real-time. Monitor career outcomes and improve employment rates.",
      tag: "FOR COLLEGES"
    },
    {
      icon: "📉",
      title: "Career Analytics",
      description: "Comprehensive analytics on graduate employment. Identify trends and optimize college programs.",
      tag: "FOR COLLEGES"
    },
    {
      icon: "🔗",
      title: "Employer Network",
      description: "Connect with verified employers and industry partners. Build lasting relationships for your students.",
      tag: "FOR COLLEGES"
    },
  ];

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="dark-mesh hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="serif-kicker">Powerful capabilities for everyone.</div>
              {/* <div className="eyebrow">AI-NATIVE PLATFORM</div> */}
              <h1 className="display">
                <span className="bone-grad">Built for careers.</span><br />
                <span className="muted-weight">Powered by AI.</span>
              </h1>
              <p className="lead">
                Explore the comprehensive features that make CareerXel the most intelligent platform for candidates, employers, and educational institutions.
              </p>
              <div className="hero-cta">
                <Link className="btn btn-primary" href="/contact">Schedule demo</Link>
              </div>
            </div>
            <div className="hero-mock-wrap">
              <div className="mock hero-mock-inner">
                <div className="mock-bar">
                  <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                </div>
                <div className="mockui" style={{ padding: "24px" }}>
                  <div style={{ display: "grid", gap: "12px" }}>
                    <div style={{ background: "var(--surface-2)", borderRadius: "8px", padding: "12px" }}>
                      <div style={{ fontSize: "11px", color: "var(--d-3)", marginBottom: "4px", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.1em" }}>AI Screening</div>
                      <div style={{ fontSize: "20px", fontWeight: "600", color: "var(--d-1)" }}>2,847</div>
                      <div style={{ fontSize: "11px", color: "var(--amber)", marginTop: "4px", fontFamily: "var(--font-mono)" }}>Candidates evaluated</div>
                    </div>
                    <div style={{ background: "var(--surface-2)", borderRadius: "8px", padding: "12px" }}>
                      <div style={{ fontSize: "11px", color: "var(--d-3)", marginBottom: "4px", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Interviews</div>
                      <div style={{ fontSize: "20px", fontWeight: "600", color: "var(--d-1)" }}>312</div>
                      <div style={{ fontSize: "11px", color: "var(--amber)", marginTop: "4px", fontFamily: "var(--font-mono)" }}>Conducted & scored</div>
                    </div>
                    <div style={{ background: "var(--surface-2)", borderRadius: "8px", padding: "12px" }}>
                      <div style={{ fontSize: "11px", color: "var(--d-3)", marginBottom: "4px", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Placement Rate</div>
                      <div style={{ fontSize: "20px", fontWeight: "600", color: "var(--d-1)" }}>94%</div>
                      <div style={{ fontSize: "11px", color: "var(--amber)", marginTop: "4px", fontFamily: "var(--font-mono)" }}>Graduate success</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="light section">
        <div className="container">
          <h2 className="h-section" style={{ marginTop: "32px" }}>
            <span className="bone-grad">Everything you need</span><br />
            <span className="muted-weight">in one platform.</span>
          </h2>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px", marginTop: "56px" }}>
            {features.map((feature, index) => (
              <div key={index} className="card-l" style={{ padding: "32px 24px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ fontSize: "40px", lineHeight: "1" }}>{feature.icon}</div>
                <div>
                  <h3 style={{ fontSize: "18px", fontWeight: "600", margin: "0 0 8px", letterSpacing: "-0.01em", color: "var(--l-1)" }}>
                    {feature.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: "var(--l-2)", margin: "0", lineHeight: "1.55" }}>
                    {feature.description}
                  </p>
                </div>
                <div style={{ marginTop: "auto", paddingTop: "16px", borderTop: "1px solid var(--border-l)" }}>
                  <span style={{ fontSize: "10px", fontFamily: "var(--font-mono)", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--burnt)", fontWeight: "600" }}>
                    {feature.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="section">
        <div className="container">
          <h2 className="h-section faq-title">
            <span className="bone-grad">Built for every role</span><br />
            <span className="muted-weight">in the hiring journey.</span>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px", marginTop: "56px" }}>
            <div className="card-d" style={{ padding: "32px" }}>
              <div style={{ fontSize: "24px", marginBottom: "16px" }}>👤</div>
              <h3 style={{ fontSize: "20px", fontWeight: "600", margin: "0 0 12px", color: "var(--d-1)" }}>For Candidates</h3>
              <p style={{ color: "var(--d-2)", margin: "0 0 16px", fontSize: "14px", lineHeight: "1.55" }}>
                Practice interviews, build optimized resumes, discover matched opportunities, and track your career progress.
              </p>
              <Link href="/candidates" style={{ color: "var(--amber)", textDecoration: "none", fontWeight: "500", fontSize: "14px" }}>
                Explore →
              </Link>
            </div>

            <div className="card-d" style={{ padding: "32px" }}>
              <div style={{ fontSize: "24px", marginBottom: "16px" }}>🏢</div>
              <h3 style={{ fontSize: "20px", fontWeight: "600", margin: "0 0 12px", color: "var(--d-1)" }}>For Employers</h3>
              <p style={{ color: "var(--d-2)", margin: "0 0 16px", fontSize: "14px", lineHeight: "1.55" }}>
                Streamline hiring with configurable ATS, AI screening, interview coordination, and analytics.
              </p>
              <Link href="/employers" style={{ color: "var(--amber)", textDecoration: "none", fontWeight: "500", fontSize: "14px" }}>
                Explore →
              </Link>
            </div>

            <div className="card-d" style={{ padding: "32px" }}>
              <div style={{ fontSize: "24px", marginBottom: "16px" }}>🎓</div>
              <h3 style={{ fontSize: "20px", fontWeight: "600", margin: "0 0 12px", color: "var(--d-1)" }}>For Colleges</h3>
              <p style={{ color: "var(--d-2)", margin: "0 0 16px", fontSize: "14px", lineHeight: "1.55" }}>
                Track placements, measure outcomes, connect employers, and improve graduate success rates.
              </p>
              <Link href="/colleges" style={{ color: "var(--amber)", textDecoration: "none", fontWeight: "500", fontSize: "14px" }}>
                Explore →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <div className="container">
          <h2 className="h-section" style={{ marginTop: "32px" }}>
            <span className="bone-grad">Proven results</span><br />
            <span className="muted-weight">at scale.</span>
          </h2>

          <div className="stats" style={{ marginTop: "56px" }}>
            {stats.map((stat, index) => (
              <div key={index} className="stat">
                <div className="num">{stat[0]}</div>
                <div className="lab">{stat[1]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="light section">
        <div className="container">
          <h2 className="h-section" style={{ marginTop: "32px", maxWidth: "920px" }}>
            <span className="bone-grad">Loved by</span><br />
            <span className="muted-weight">candidates, recruiters, and colleges.</span>
          </h2>

          <TestimonialsPreview testimonials={testimonials} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <h2 className="h-section" style={{ marginTop: "32px", maxWidth: "920px" }}>
            <span className="bone-grad">Common questions</span><br />
            <span className="muted-weight">answered.</span>
          </h2>

          <div className="faq-grid">
            <div className="card-d faq-card">
              <h3>
                How does AI scoring work?
              </h3>
              <p>
                Our AI evaluates candidate responses based on role-specific rubrics, technical depth, communication clarity, and problem-solving approach. Scores are consistent and evidence-backed.
              </p>
            </div>

            <div className="card-d faq-card">
              <h3>
                Can candidates practice unlimited interviews?
              </h3>
              <p>
                Yes. Candidates can practice as many mock interviews as they want, across different roles and difficulty levels. Each interview provides detailed feedback.
              </p>
            </div>

            <div className="card-d faq-card">
              <h3>
                How do we ensure fair evaluation?
              </h3>
              <p>
                All candidates are evaluated against the same rubrics. Our AI removes bias by focusing on skills, experience, and performance rather than demographic factors.
              </p>
            </div>

            <div className="card-d faq-card">
              <h3>
                What data security measures are in place?
              </h3>
              <p>
                CareerXel follows enterprise-grade security standards including end-to-end encryption, GDPR compliance, and regular third-party audits. Your data is always yours.
              </p>
            </div>

            <div className="card-d faq-card">
              <h3>
                How long does onboarding take?
              </h3>
              <p>
                For candidates, minutes. Upload your resume and the AI builds your profile. For employers and colleges, we handle custom setup—typically 1-2 weeks including training.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-mesh">
        <div className="container">
          <div style={{ textAlign: "center", padding: "96px 0" }}>
            <h2 className="display" style={{ fontSize: "clamp(36px, 5vw, 54px)", maxWidth: "900px", margin: "0 auto 24px" }}>
              Ready to transform your career journey?
            </h2>
            <p className="lead" style={{ fontSize: "18px", maxWidth: "560px", margin: "0 auto 40px" }}>
              Join thousands of candidates, employers, and colleges using CareerXel to reimagine recruitment.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link className="btn btn-primary" href="/contact">Talk to our team</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
