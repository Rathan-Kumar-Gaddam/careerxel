"use client";

import Link from "next/link";

const columns: Array<{ title: string; links: Array<{ label: string; href: string }> }> = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "AI & Intelligence", href: "/ai" },
      { label: "Pricing", href: "/pricing" }
    ]
  },
  {
    title: "Solutions",
    links: [
      { label: "Candidates", href: "/candidates" },
      { label: "Employers", href: "/employers" },
      { label: "Colleges", href: "/colleges" },
    
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/resources" },
      { label: "Help Center", href: "/resources" },
      { label: "Guides", href: "/resources" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" }
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Cookies", href: "#" },
      { label: "Security", href: "#" }
    ]
  }
];

export function Footer() {
  return (
    <footer className="foot">
      <div className="container">
        <div className="foot-grid">
          <div className="foot-col">
            <Link className="brand" href="/">
              <span className="mark" />
              CareerXel
            </Link>
            <p style={{ fontSize: "13px", color: "var(--d-3)", marginTop: "16px", maxWidth: "240px", lineHeight: 1.55 }}>
              An AI-native career and recruitment platform. Built for candidates, employers, and colleges.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title} className="foot-col">
              <h5>{col.title}</h5>
              <ul>
                {col.links.map((link) => (
                  <li key={`${col.title}-${link.label}`}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="foot-bottom">
          <span>© 2024–{new Date().getFullYear()} CareerXel · ALL RIGHTS RESERVED</span>
          <div className="foot-social">
            <a href="#" aria-label="CareerXel on X">
              <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M14 3h2.5l-5.5 6.3L17 17h-5l-3.7-4.8L4 17H1.5l5.9-6.7L1 3h5.1l3.4 4.5L14 3z" />
              </svg>
            </a>
            <a href="#" aria-label="CareerXel on LinkedIn">
              <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M3 7h3v10H3zM4.5 3a1.7 1.7 0 100 3.4 1.7 1.7 0 000-3.4zM8 7h3v1.5c.5-1 1.7-1.7 3-1.7 2.4 0 3 1.5 3 3.7V17h-3v-5.5c0-1.3-.5-2-1.7-2-1.3 0-1.8.9-1.8 2V17H8z" />
              </svg>
            </a>
            <a href="#" aria-label="CareerXel on GitHub">
              <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M10 2a8 8 0 00-2.5 15.6c.4.1.5-.2.5-.4v-1.5c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.4.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-3.9 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.5.8 1.2.8 2.1 0 3-1.8 3.7-3.6 3.9.3.2.6.7.6 1.5v2.2c0 .2.1.5.5.4A8 8 0 0010 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
