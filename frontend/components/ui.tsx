import Link from "next/link";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

export function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={clsx("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>;
}

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className={clsx("inline-flex items-center gap-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-blue")}>
      <span aria-hidden="true" className="text-[8px] text-blue/80">✦</span>
      {children}
    </div>
  );
}

export function Ribbon({ index, label, meta, light = false }: { index: string; label: string; meta: string; light?: boolean }) {
  return (
    <div className={clsx("mb-12 flex items-center justify-between border-t pt-6 font-mono text-[10px] font-medium uppercase tracking-[0.18em] sm:text-[11px]", light ? "border-slate-200 text-slate-500" : "border-line text-mist/70")}>
      <span>
        {index} <span className="text-blue font-semibold">/ {label}</span>
      </span>
      <span className="hidden sm:inline text-right">{meta}</span>
    </div>
  );
}

export function ButtonLink({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: "primary" | "ghost" }) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border px-5 text-sm font-semibold tracking-wide transition-all duration-200 active:scale-[0.98]",
        variant === "primary"
          ? "border-blue bg-blue text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_4px_12px_rgba(74,139,255,0.2)] hover:bg-[#6BA3FF] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_6px_20px_rgba(74,139,255,0.3)]"
          : "border-white/15 text-slate-100 hover:bg-white/10 hover:border-white/25"
      )}
    >
      {children}
      {variant === "primary" ? <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" /> : null}
    </Link>
  );
}

export function MetricMock() {
  return (
    <div className="relative mx-auto mt-8 aspect-[4/5] w-full max-w-sm rotate-2 overflow-hidden rounded-2xl border border-line bg-panel shadow-glow sm:rotate-6 lg:mt-0 transition-transform duration-300 hover:rotate-0">
      <div className="flex h-10 items-center gap-1.5 border-b border-line bg-panel2 px-4">
        <span className="h-2 w-2 rounded-full bg-[#364065]" />
        <span className="h-2 w-2 rounded-full bg-[#364065]" />
        <span className="h-2 w-2 rounded-full bg-[#364065]" />
        <span className="ml-auto font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-mist/60">Candidate.OS</span>
      </div>
      <div className="grid h-[calc(100%-2.5rem)] gap-3.5 p-4">
        <div className="flex gap-2">
          {["Dashboard", "Jobs", "Interviews"].map((item, index) => (
            <span key={item} className={clsx("rounded-full border px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.16em]", index === 0 ? "border-blue/40 text-blue" : "border-line text-mist")}>
              {item}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[
            ["PROFILE", "87%", "complete"],
            ["MATCHES", "12", "4 new"]
          ].map(([label, value, delta]) => (
            <div key={label} className="rounded-xl border border-line bg-panel2 p-3.5">
              <div className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-mist/60">{label}</div>
              <div className="mt-1 text-2xl font-bold tracking-tight text-white">{value}</div>
              <div className="font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-blue mt-0.5">{delta}</div>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-line bg-panel2 p-3.5">
          <div className="mb-3.5 flex justify-between items-center text-xs">
            <span className="font-semibold text-slate-100">Application velocity</span>
            <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-mist/50">30D</span>
          </div>
          <svg viewBox="0 0 240 96" className="h-28 w-full" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 72 L30 58 L60 64 L90 38 L120 46 L150 28 L180 34 L210 18 L240 24 L240 96 L0 96 Z" fill="url(#velocity-grad)" />
            <path d="M0 72 L30 58 L60 64 L90 38 L120 46 L150 28 L180 34 L210 18 L240 24" stroke="#4A8BFF" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <defs>
              <linearGradient id="velocity-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4A8BFF" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#4A8BFF" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="grid grid-cols-3 gap-2.5">
          {[
            ["APPLIED", "8", ["Stripe", "Linear"]],
            ["INTERVIEW", "3", ["Vercel"]],
            ["OFFER", "1", ["Figma"]]
          ].map(([label, count, names]) => (
            <div key={label as string} className="rounded-lg border border-line bg-panel2 p-2.5">
              <div className="flex justify-between font-mono text-[8px] font-semibold uppercase tracking-[0.18em] text-mist/60">
                <span>{label as string}</span>
                <span className="text-blue font-bold">{count as string}</span>
              </div>
              {(names as string[]).map((name) => (
                <div key={name} className="mt-2.5 rounded bg-[#364065]/65 px-2 py-1.5 border border-white/5">
                  <div className="text-[10px] text-slate-100 font-semibold leading-tight">{name}</div>
                  <div className="font-mono text-[7.5px] uppercase tracking-[0.12em] text-mist/50 mt-0.5">Product</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
