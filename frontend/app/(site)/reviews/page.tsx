import type { Metadata } from "next";
import Link from "next/link";

import { TestimonialsPreview } from "@/components/testimonials-preview";
import { getTestimonials } from "@/lib/strapi";

export const metadata: Metadata = {
  title: "Reviews",
  description: "Read CareerXel reviews from candidates, employers, and colleges.",
  alternates: { canonical: "/reviews" },
  openGraph: {
    title: "Reviews | CareerXel",
    description: "Read CareerXel reviews from candidates, employers, and colleges.",
    url: "/reviews"
  }
};

export default async function ReviewsPage() {
  const testimonials = await getTestimonials();
  const count = testimonials.length;
  const countLabel = count === 1 ? "1 review" : `${count} reviews`;

  return (
    <main className="relative">
      <section className="dark-mesh res-blog-archive-hero">
        <div className="container">
          <nav className="res-blog-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="res-blog-breadcrumb-sep" aria-hidden="true">
              /
            </span>
            <span aria-current="page">Reviews</span>
          </nav>

          <div className="serif-kicker">What people are saying.</div>
          <h1 className="display res-blog-archive-title">
            <span className="bone-grad">All reviews,</span>
            <br />
            <span className="muted-weight">in one place.</span>
          </h1>
          <p className="subhead res-blog-archive-subhead">
            {count > 0
              ? `${countLabel} from candidates, employers, colleges, and partners.`
              : "New reviews will appear here after they are published in Strapi."}
          </p>
        </div>
      </section>

      <section className="light section">
        <div className="container">
          <TestimonialsPreview testimonials={testimonials} mode="archive" />
          <div className="res-blog-archive-footer">
            <Link className="btn btn-ghost" href="/">
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
