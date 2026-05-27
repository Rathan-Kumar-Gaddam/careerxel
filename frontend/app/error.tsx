"use client";

import Link from "next/link";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorProps) {
  return (
    <main className="page-error">
      <div className="container" style={{ padding: "6rem 0", textAlign: "center" }}>
        <p className="eyebrow">Something went wrong</p>
        <h1 className="display" style={{ marginTop: "1.5rem" }}>500</h1>
        <p className="lead" style={{ marginTop: "1rem", maxWidth: "30rem", marginLeft: "auto", marginRight: "auto" }}>
          Sorry, an unexpected error occurred while loading this page.
        </p>
        <p style={{ marginTop: "1rem", color: "var(--d-2)" }}>{error.message}</p>
        <div style={{ marginTop: "2.5rem", display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <button type="button" className="btn btn-primary" onClick={() => reset()}>
            Try again
          </button>
          <Link className="btn btn-ghost" href="/">
            Go home
          </Link>
        </div>
      </div>
    </main>
  );
}
