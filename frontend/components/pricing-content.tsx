"use client";

import { Fragment, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import clsx from "clsx";
import { ctaHref } from "@/lib/cta";
import type { PricingContent as PricingContentType, PricingPlan } from "@/lib/pricing";

type CurrencyMarket = "in" | "us";

function ValueCell({ value }: { value: string }) {
  if (value === "Yes") return <span className="val-yes">Yes</span>;
  if (value === "-") return <span className="val-muted">—</span>;
  return <>{value}</>;
}

function detectCurrencyMarket(): CurrencyMarket {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  if (timezone === "Asia/Kolkata" || timezone === "Asia/Calcutta") return "in";
  if (timezone.startsWith("America/")) return "us";
  return "us";
}

function getPlanPrice(plan: PricingPlan, annual: boolean, market: CurrencyMarket) {
  if (market === "in") {
    return annual ? plan.annualInr ?? plan.annual : plan.monthlyInr ?? plan.monthly;
  }
  return annual ? plan.annualUsd ?? plan.annual : plan.monthlyUsd ?? plan.monthly;
}

export function PricingContent({ content }: { content: PricingContentType }) {
  const [activeAudience, setActiveAudience] = useState(content.audiences[0]?.id ?? "");
  const [annual, setAnnual] = useState(true);
  const [market, setMarket] = useState<CurrencyMarket>("us");

  useEffect(() => {
    setMarket(detectCurrencyMarket());
  }, []);

  const audience = useMemo(
    () => content.audiences.find((item) => item.id === activeAudience) ?? content.audiences[0],
    [activeAudience, content.audiences]
  );

  const comparisonPlans = (audience.plans ?? []).map((plan) => ({
    name: plan.name,
    price: `${getPlanPrice(plan, annual, market)}${(plan.period ?? "").startsWith("/") ? ` ${plan.period}` : ["forever", "annual contract", "annual", "one-time", "first cohort"].includes(plan.period ?? "") ? ` ${plan.period}` : ""}`,
    featured: plan.featured
  }));

  return (
    <div className="pricing-shell">
      <div className="container">
        <div className="pricing-controls">
          {(content.audiences ?? []).map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveAudience(item.id)}
              className={clsx("pricing-tab", activeAudience === item.id && "is-active")}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="pricing-billing">
          <span className={!annual ? "is-on" : undefined}>Monthly</span>
          <button
            type="button"
            className={clsx("pricing-toggle", annual && "is-annual")}
            onClick={() => setAnnual((value) => !value)}
            aria-pressed={annual}
            aria-label="Toggle annual billing"
          >
            <span className="pricing-toggle-knob" />
          </button>
          <span className={annual ? "is-on" : undefined}>Annual</span>
          <span className="pricing-save">Save 20%</span>
        </div>

        <div className="pricing-grid">
          {(audience.plans ?? []).map((plan) => (
            <article key={plan.name} className={clsx("card-d pricing-plan", plan.featured && "is-featured")}>
              <div className="pricing-plan-head">
                <div className="pricing-plan-name">{plan.name}</div>
                {plan.tag ? <span className="pricing-plan-tag">{plan.tag}</span> : null}
              </div>
              <div className="pricing-price">
                <span className={clsx("amount", annual && "bone-grad")}>{getPlanPrice(plan, annual, market)}</span>
                <span className="period">{plan.period}</span>
              </div>
              <p className="pricing-plan-desc">{plan.description}</p>
              <Link className={clsx("btn", plan.featured ? "btn-primary" : "btn-ghost")} href={ctaHref(plan.cta, "/pricing")}>
                {plan.cta}
              </Link>
              <div className="pricing-divider" />
              {(plan.featureGroups ?? []).map((group) => (
                <div key={group.title}>
                  <div className="pricing-features-title">{group.title}</div>
                  <ul className="pricing-features">
                    {(group.items ?? []).map((item) => (
                      <li key={item}>
                        <Check size={16} strokeWidth={2} aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </article>
          ))}
        </div>

        <p className="pricing-note">{content.note}</p>
      </div>

      <section className="light pricing-compare">
        <div className="container">
          <div className="sx-ribbon">
            <span className="idx"><span className="num">01</span><span className="slash">/</span><span className="name">Compare</span></span>
            <span className="ribbon-meta">Every feature · every tier</span>
          </div>
          <div className="section-intro">
            <div className="eyebrow">Compare plans</div>
            <h2 className="h-section" style={{ marginTop: "18px" }}>
              {content.comparison.title}
              <br />
              <span className="muted-weight">{content.comparison.subtitle}</span>
            </h2>
            <p className="lead" style={{ marginTop: "16px", maxWidth: "36rem", color: "var(--l-2)" }}>
              For {audience.label} — {annual ? "annual" : "monthly"} billing.
            </p>
          </div>
          <div className="pricing-compare-table-wrap">
            <table className="pricing-compare-table">
              <thead>
                <tr>
                  <th>Capability</th>
                  {comparisonPlans.map((plan) => (
                    <th key={plan.name} className={plan.featured ? "is-featured" : undefined}>
                      {plan.name}
                      <span style={{ display: "block", marginTop: "4px", fontWeight: 400, textTransform: "none", letterSpacing: 0 }}>{plan.price}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {(content.comparison.groups ?? []).map((group) => (
                  <Fragment key={group.title}>
                    <tr className="group">
                      <td colSpan={comparisonPlans.length + 1}>{group.title}</td>
                    </tr>
                    {(group.rows ?? []).map((row) => (
                      <tr key={`${group.title}-${row.capability}`}>
                        <td>{row.capability}</td>
                        {comparisonPlans.map((_, index) => {
                          const value = row.values[index] ?? "-";
                          return (
                            <td key={`${row.capability}-${index}`}>
                              <ValueCell value={value} />
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="dark-mesh pricing-enterprise">
        <div className="container">
          <div className="sx-ribbon">
            <span className="idx"><span className="num">02</span><span className="slash">/</span><span className="name">Enterprise</span></span>
            <span className="ribbon-meta">Scale · custom · white-glove</span>
          </div>
          <div className="pricing-enterprise-panel">
            <div className="pricing-enterprise-copy">
              <div className="eyebrow">{content.enterprise.eyebrow}</div>
              <h2 className="h-section pricing-enterprise-title">
                <span className="bone-grad">{content.enterprise.headline}</span>
                <br />
                <span className="muted-weight">{content.enterprise.mutedHeadline}</span>
              </h2>
              <p className="lead pricing-enterprise-desc">{content.enterprise.description}</p>
              <div className="hero-cta pricing-enterprise-cta">
                <Link className="btn btn-primary" href={ctaHref(content.enterprise.primaryCta, "/contact")}>
                  {content.enterprise.primaryCta}
                </Link>
                <Link className="btn btn-ghost" href={ctaHref(content.enterprise.secondaryCta, "/contact")}>
                  {content.enterprise.secondaryCta}
                </Link>
              </div>
            </div>
            <div className="pricing-enterprise-grid">
              {(content.enterprise.items ?? []).map((item, index) => {
                const isLast = index === (content.enterprise.items ?? []).length - 1;
                return (
                  <article
                    key={item.title}
                    className={clsx("pricing-enterprise-card", isLast && "is-wide")}
                  >
                    <div className="pricing-enterprise-card-tag">{item.tag}</div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="light pricing-faq">
        <div className="container">
          <div className="sx-ribbon">
            <span className="idx"><span className="num">03</span><span className="slash">/</span><span className="name">FAQ</span></span>
            <span className="ribbon-meta">Pricing · billing · legal</span>
          </div>
          <div className="pricing-faq-grid">
            <div className="section-intro">
              <div className="eyebrow">FAQ</div>
              <h2 className="h-section" style={{ marginTop: "18px" }}>
                Pricing,
                <br />
                <span className="muted-weight">in plain English.</span>
              </h2>
              <p className="lead" style={{ marginTop: "16px", color: "var(--l-2)" }}>Still have questions? Talk to a human.</p>
            </div>
            <div>
              {(content.faqs ?? []).map((faq) => (
                <article key={faq.question} className="pricing-faq-item">
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cta-mesh section-edge">
        <div className="container cta-band">
          <div className="sx-ribbon">
            <span className="idx"><span className="num">04</span><span className="slash">/</span><span className="name">Start</span></span>
            <span className="ribbon-meta">No card required</span>
          </div>
          <div className="cta-copy">
            <div className="eyebrow">{content.finalCta.eyebrow}</div>
            <h2 className="display" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}>
              <span className="bone-grad">{content.finalCta.headline}</span>
            </h2>
            <p className="lead lead--center" style={{ maxWidth: "40rem" }}>{content.finalCta.description}</p>
            <div className="hero-cta hero-cta--center">
              <Link className="btn btn-primary" href={ctaHref(content.finalCta.primaryCta, "/pricing")}>{content.finalCta.primaryCta}</Link>
              <Link className="btn btn-ghost" href={ctaHref(content.finalCta.secondaryCta, "/contact")}>{content.finalCta.secondaryCta}</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
