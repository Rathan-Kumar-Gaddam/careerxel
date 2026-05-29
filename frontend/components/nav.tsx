"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { navItems } from "@/lib/content";

function Chevron({ open }: { open?: boolean }) {
  return (
    <svg
      className={clsx("chev", open && "chev-open")}
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M3 4.5l3 3 3-3" />
    </svg>
  );
}

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function isSolutionsActive(pathname: string) {
  return ["/candidates", "/employers", "/colleges"].some(
    (href) => pathname === href || pathname.startsWith(`${href}/`)
  );
}

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const solutionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
    setSolutionsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!solutionsOpen) return;

    function onPointerDown(event: PointerEvent) {
      if (!solutionsRef.current?.contains(event.target as Node)) {
        setSolutionsOpen(false);
      }
    }

    function onEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setSolutionsOpen(false);
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onEscape);
    };
  }, [solutionsOpen]);

  const solutionsActive = isSolutionsActive(pathname);

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <Link className="brand" href="/">
            <span className="mark" />
            <span className="brand-text">
              CareerXel
              <span className="brand-tagline">Accelerating Careers, Empowering Futures</span>
            </span>
          </Link>

          <div className="nav-links">
            {navItems.map((item) => {
              if (item.dropdownItems) {
                return (
                  <div
                    key={item.label}
                    ref={solutionsRef}
                    className={clsx("nav-dropdown", solutionsOpen && "is-open")}
                    onMouseEnter={() => setSolutionsOpen(true)}
                    onMouseLeave={() => setSolutionsOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={clsx("nav-dropdown-trigger", solutionsActive && "is-active")}
                      aria-expanded={solutionsOpen}
                      aria-haspopup="true"
                      aria-current={solutionsActive ? "page" : undefined}
                    >
                      {item.label}
                      <Chevron open={solutionsOpen} />
                    </Link>
                    <div className="nav-dropdown-menu" role="menu">
                      <div className="nav-dropdown-panel">
                        {item.dropdownItems.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            role="menuitem"
                            className={isActive(pathname, sub.href) ? "is-active" : undefined}
                            onClick={() => setSolutionsOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={isActive(pathname, item.href) ? "is-active" : undefined}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="nav-actions">
            <a className="btn btn-primary" href="https://www.staging.idsjobportal.outreachtek.com/register">
              Sign in

            </a>
          </div>

          <button
            type="button"
            className="nav-menu-btn"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="icon" strokeWidth={1.5} /> : <Menu className="icon" strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      <div className={`nav-mobile-overlay${open ? " is-open" : ""}`} aria-hidden={!open} onClick={() => setOpen(false)} />

      <aside className={`nav-mobile-panel${open ? " is-open" : ""}`} aria-hidden={!open}>
        <div className="nav-mobile-head">
          <Link className="brand" href="/" onClick={() => setOpen(false)}>
            <span className="mark" />
            CareerXel
          </Link>
          <button type="button" className="nav-menu-btn" aria-label="Close navigation" onClick={() => setOpen(false)}>
            <X className="icon" strokeWidth={1.5} />
          </button>
        </div>
        <div className="nav-mobile-links">
          {navItems.map((item) => {
            if (item.dropdownItems) {
              return item.dropdownItems.map((sub) => (
                <Link
                  key={sub.href}
                  href={sub.href}
                  className={isActive(pathname, sub.href) ? "is-active" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {sub.label}
                </Link>
              ));
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className={isActive(pathname, item.href) ? "is-active" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className="nav-mobile-actions">
          <a className="btn btn-primary" href="https://www.staging.idsjobportal.outreachtek.com/register" onClick={() => setOpen(false)}>
            Sign in

          </a>
        </div>
      </aside>
    </>
  );
}
