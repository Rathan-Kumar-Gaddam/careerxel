import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-error">
      <div className="container" style={{ padding: "6rem 0", textAlign: "center" }}>
        <p className="eyebrow">Page not found</p>
        <h1 className="display" style={{ marginTop: "1.5rem" }}>404</h1>
        <p className="lead" style={{ marginTop: "1rem", maxWidth: "30rem", marginLeft: "auto", marginRight: "auto" }}>
          The page you are looking for doesn’t exist or may have been moved.
        </p>
        <div style={{ marginTop: "2.5rem" }}>
          <Link className="btn btn-primary" href="/">
            Return home
          </Link>
        </div>
      </div>
    </main>
  );
}
