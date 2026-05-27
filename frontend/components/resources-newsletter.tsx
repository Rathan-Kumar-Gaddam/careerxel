"use client";

import { FormEvent, useState } from "react";
import type { ResourcesNewsletterSection } from "@/lib/resources";

type Props = {
  newsletter: ResourcesNewsletterSection;
};

export function ResourcesNewsletter({ newsletter }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.get("firstName"),
          lastName: formData.get("lastName"),
          email: formData.get("email"),
          monthlyDigest: formData.get("monthlyDigest") === "on",
          datasetNotify: formData.get("datasetNotify") === "on",
          webinarInvites: formData.get("webinarInvites") === "on"
        })
      });

      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        setError(typeof payload.message === "string" ? payload.message : "Subscription failed.");
        return;
      }

      form.reset();
      setSubmitted(true);
    } catch {
      setError("Could not submit right now. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="news-card">
      <div>
        <div className="eyebrow" style={{ marginBottom: 14 }}>
          {newsletter.eyebrow}
        </div>
        <h3>
          <span className="bone-grad">{newsletter.headline}</span>
          <br />
          <span className="muted-weight">{newsletter.mutedHeadline}</span>
        </h3>
        <p className="news-card-copy">{newsletter.description}</p>
        <p className="news-card-stat">{newsletter.stat}</p>
      </div>
      <form className="news-form" onSubmit={onSubmit}>
        <div className="row2">
          <div className="field">
            <label htmlFor="news-first">First name</label>
            <input id="news-first" name="firstName" type="text" placeholder="Priya" required />
          </div>
          <div className="field">
            <label htmlFor="news-last">Last name</label>
            <input id="news-last" name="lastName" type="text" placeholder="Khurana" />
          </div>
        </div>
        <div className="field">
          <label htmlFor="news-email">Work email</label>
          <input id="news-email" name="email" type="email" placeholder="priya@company.com" required />
        </div>
        <div className="checks">
          <label className="ck">
            <input type="checkbox" name="monthlyDigest" defaultChecked />
            {newsletter.digestLabel}
          </label>
          <label className="ck">
            <input type="checkbox" name="datasetNotify" />
            {newsletter.datasetLabel}
          </label>
          <label className="ck">
            <input type="checkbox" name="webinarInvites" />
            {newsletter.webinarLabel}
          </label>
        </div>
        {error ? (
          <p className="news-form-error" role="alert">
            {error}
          </p>
        ) : null}
        <button type="submit" disabled={submitting || submitted}>
          {submitted ? newsletter.successLabel : submitting ? "SUBMITTING…" : newsletter.submitLabel}
        </button>
      </form>
    </div>
  );
}
