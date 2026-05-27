import Link from "next/link";
import { ResourcesNewsletter } from "@/components/resources-newsletter";
import type { ResourcesNewsletterSection } from "@/lib/resources";
import { resourceShelves } from "@/lib/resources-data";

type Props = {
  newsletter: ResourcesNewsletterSection;
};

function ShelfIcon({ type }: { type: string }) {
  if (type === "guides") {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="3" y="3" width="14" height="14" rx="2" />
        <path d="M7 7h6M7 10h6M7 13h4" />
      </svg>
    );
  }
  if (type === "docs") {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M5 3h7l3 3v11a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1z" />
        <path d="M12 3v3h3" />
      </svg>
    );
  }
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <polygon points="6,4 16,10 6,16" />
    </svg>
  );
}

export function ResourcesShelves({ newsletter }: Props) {
  return (
    <section className="dark-mesh section">
      <div className="container">
        <div className="sx-ribbon">
          <span className="idx"><span className="num">02</span>
            <span className="slash">/</span>
            <span className="name">SHELVES</span>
          </span>
          <span className="ribbon-meta">GUIDES · DOCS · WEBINARS</span>
        </div>
        <div className="section-header">
          <div className="eyebrow">RESOURCE SHELVES</div>
          <h2 className="h-section" style={{ marginTop: 18 }}>
            Browse by shelf.
            <br />
            <span className="muted-weight">Or by what&apos;s open in your tab.</span>
          </h2>
        </div>

        <div className="shelf-grid">
          {resourceShelves.map((shelf) => (
            <div key={shelf.title} className="shelf">
              <div className="head">
                <div className="ic">
                  <ShelfIcon type={shelf.icon} />
                </div>
                <div>
                  <h3>{shelf.title}</h3>
                  <div className="sub">{shelf.sub}</div>
                </div>
              </div>
              {shelf.items.map((item) => (
                <Link key={item.name} className="item" href="#">
                  <div className="ic-sm">{item.badge}</div>
                  <div className="info">
                    <div className="nm">{item.name}</div>
                    <div className="meta">{item.meta}</div>
                  </div>
                  <div className="arr">→</div>
                </Link>
              ))}
            </div>
          ))}
        </div>

        <ResourcesNewsletter newsletter={newsletter} />
      </div>
    </section>
  );
}
