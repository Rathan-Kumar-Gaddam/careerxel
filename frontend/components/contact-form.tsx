"use client";

import { FormEvent, useState } from "react";
import clsx from "clsx";

const audiences = [
  { value: "candidate", label: "Candidate" },
  { value: "employer", label: "Employer" },
  { value: "college", label: "College" },
  { value: "partner", label: "Partner" }
];

type Status = "idle" | "sending" | "success" | "error";

type FieldErrors = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  function validate(payload: Record<string, FormDataEntryValue>) {
    const errors: FieldErrors = {};
    const name = String(payload.name ?? "").trim();
    const email = String(payload.email ?? "").trim();
    const phone = String(payload.phone ?? "").trim();

    if (!name) {
      errors.name = "Name is required.";
    }
    if (!email) {
      errors.email = "Email is required.";
    } else if (!emailPattern.test(email)) {
      errors.email = "Enter a valid email address.";
    }
    if (phone) {
      if (!/^[0-9]{10}$/.test(phone)) {
        errors.phone = "Phone must be exactly 10 digits with no special characters.";
      }
    }

    return errors;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("idle");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    const errors = validate(payload);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setStatus("error");
      setMessage("Please fix the highlighted fields before submitting.");
      return;
    }

    setFieldErrors({});
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await response.json();

      if (!response.ok) {
        setStatus("error");
        setMessage(result.message || "Something went wrong.");
        return;
      }

      form.reset();
      setStatus("success");
      setMessage("Thanks — we received your message and will reply within one business day.");
    } catch {
      setStatus("error");
      setMessage("Could not submit the form right now. Please try again.");
    }
  }

  function clearError(event: FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const name = event.currentTarget.name;
    if (!name) return;
    setFieldErrors((current) => {
      if (!current[name as keyof FieldErrors]) return current;
      const updated = { ...current };
      delete updated[name as keyof FieldErrors];
      return updated;
    });
  }

  return (
    <form onSubmit={onSubmit} className="card-d contact-form" noValidate>
      <div className="contact-form-grid">
        <label className="contact-field">
          <span className="contact-label">Name</span>
          <input
            name="name"
            className={clsx("contact-input", fieldErrors.name && "is-invalid")}
            placeholder="Your name"
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={fieldErrors.name ? "contact-name-error" : undefined}
            onInput={clearError}
          />
          {fieldErrors.name ? <span id="contact-name-error" className="contact-field-error">{fieldErrors.name}</span> : null}
        </label>

        <label className="contact-field">
          <span className="contact-label">Email</span>
          <input
            name="email"
            type="email"
            className={clsx("contact-input", fieldErrors.email && "is-invalid")}
            placeholder="you@company.com"
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? "contact-email-error" : undefined}
            onInput={clearError}
          />
          {fieldErrors.email ? <span id="contact-email-error" className="contact-field-error">{fieldErrors.email}</span> : null}
        </label>

        <label className="contact-field">
          <span className="contact-label">Company / College</span>
          <input
            name="company"
            className="contact-input"
            placeholder="Organization name"
            onInput={clearError}
          />
        </label>

        <label className="contact-field">
          <span className="contact-label">Phone</span>
          <input
            name="phone"
            className={clsx("contact-input", fieldErrors.phone && "is-invalid")}
            placeholder="9876543210"
            aria-invalid={Boolean(fieldErrors.phone)}
            aria-describedby={fieldErrors.phone ? "contact-phone-error" : undefined}
            onInput={clearError}
          />
          {fieldErrors.phone ? <span id="contact-phone-error" className="contact-field-error">{fieldErrors.phone}</span> : null}
        </label>

        <label className="contact-field">
          <span className="contact-label">Role</span>
          <input
            name="role"
            className="contact-input"
            placeholder="Recruiter, student, placement officer"
            onInput={clearError}
          />
        </label>

        <label className="contact-field">
          <span className="contact-label">I am a</span>
          <select
            name="audience"
            defaultValue="candidate"
            className="contact-input contact-select"
            onInput={clearError}
          >
            {audiences.map((audience) => (
              <option key={audience.value} value={audience.value}>
                {audience.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="contact-field contact-field--full">
        <span className="contact-label">Message</span>
        <textarea
          name="message"
          rows={6}
          className={clsx("contact-input contact-textarea", fieldErrors.message && "is-invalid")}
          placeholder="Tell us what you want to do with CareerXel."
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={fieldErrors.message ? "contact-message-error" : undefined}
          onInput={clearError}
        />
        {fieldErrors.message ? <span id="contact-message-error" className="contact-field-error">{fieldErrors.message}</span> : null}
      </label>

      <div className="contact-form-actions">
        <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        {message ? (
          <p className={clsx("contact-form-note", status === "success" && "is-success", status === "error" && "is-error")}>
            {message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
