import type { Metadata } from "next";
import { PricingContent } from "@/components/pricing-content";
import { getPricingPage } from "@/lib/pricing";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPricingPage();
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: "/pricing" },
    openGraph: {
      title: `${page.title} | CareerXel`,
      description: page.description,
      url: "/pricing"
    }
  };
}

export default async function PricingPage() {
  const page = await getPricingPage();

  return (
    <main className="relative">
      <section className="dark-mesh p-hero section-tight">
        <div className="container">
          <div className="hero-copy hero-copy--center" style={{ maxWidth: "48rem", margin: "0 auto" }}>
            <div className="serif-kicker">{page.kicker}</div>
            <h1 className="display">
              <span className="bone-grad">{page.headline}</span><br />
              <span className="muted-weight">{page.mutedHeadline}</span>
            </h1>
            <p className="lead" style={{ maxWidth: "40rem" }}>{page.description}</p>
          </div>
        </div>
      </section>
      <PricingContent content={page.pricingContent} />
    </main>
  );
}
