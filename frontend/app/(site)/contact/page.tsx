import type { Metadata } from "next";
import { Mail, MapPin, MessageSquareText, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact us",
  description: "Contact us at CareerXel for candidates, employers, colleges, and partnerships.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact us | CareerXel",
    description: "Contact us at CareerXel for candidates, employers, colleges, and partnerships.",
    url: "/contact"
  }
};

const details = [
  { icon: Mail, label: "Email", value: "hello@careerxel.com" },
  { icon: Phone, label: "Phone", value: "+91 98765 43210" },
  { icon: MapPin, label: "Location", value: "India - serving global teams" },
  { icon: MessageSquareText, label: "Response", value: "Usually within 1 business day" }
];

export default function ContactPage() {
  return (
    <main className="relative">
      <section className="dark-mesh p-hero">
        <div className="container">
          <div className="sx-ribbon">
            <span className="idx"><span className="num">00</span><span className="slash">/</span><span className="name">Contact us</span></span>
            <span className="ribbon-meta">CANDIDATES · EMPLOYERS · COLLEGES</span>
          </div>
          <div className="contact-grid">
            <div className="hero-copy contact-copy">
              <div className="serif-kicker">Tell us where CareerXel should help.</div>
              <div className="eyebrow">Contact us</div>
              <h1 className="display">
                <span className="bone-grad">Start the conversation.</span><br />
                <span className="muted-weight">We will route it.</span>
              </h1>
              <p className="lead">
                Share your details and the CareerXel team will follow up — usually within one business day.
              </p>
              <div className="hero-cta contact-detail-group" style={{ marginTop: "2.5rem" }}>
                <div className="contact-detail-grid">
                {details.map((detail) => {
                  const Icon = detail.icon;
                  return (
                    <article key={detail.label} className="card-d contact-detail-card">
                      <Icon className="icon" aria-hidden="true" />
                      <div className="mono" style={{ marginTop: "16px", color: "var(--d-3)", fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase" }}>{detail.label}</div>
                      <div style={{ marginTop: "8px", fontSize: "14px", color: "var(--d-1)", fontWeight: 500 }}>{detail.value}</div>
                    </article>
                  );
                })}
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
