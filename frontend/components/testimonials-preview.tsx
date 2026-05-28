import Link from "next/link";
import type { Testimonial } from "@/lib/content";

const TESTIMONIAL_PREVIEW_LIMIT = 6;

function ChevronIcon() {
  return (
    <svg className="icon" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M5 10h10M11 6l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

type Props = {
  testimonials: Testimonial[];
  mode?: "preview" | "archive";
};

export function TestimonialsPreview({ testimonials, mode = "preview" }: Props) {
  const isPreview = mode === "preview";
  const hasMore = isPreview && testimonials.length > TESTIMONIAL_PREVIEW_LIMIT;
  const displayed = isPreview ? testimonials.slice(0, TESTIMONIAL_PREVIEW_LIMIT) : testimonials;

  return (
    <>
      <div className="quotes">
        {displayed.map((testimonial, index) => (
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

      {hasMore ? (
        <div className="res-blog-cta">
          <Link className="btn btn-burnt" href="/reviews">
            View all reviews
            <ChevronIcon />
          </Link>
        </div>
      ) : null}
    </>
  );
}
