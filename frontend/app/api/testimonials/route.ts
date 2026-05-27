import { NextResponse } from "next/server";

const STRAPI = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export async function GET() {
  try {
    const query = new URLSearchParams({
      "filters[slug][$eq]": "home",
      "populate[features]": "true",
      "populate[testimonials]": "true"
    }).toString();

    const res = await fetch(`${STRAPI}/api/pages?${query}`);
    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json({ error: `Strapi returned ${res.status}`, details: text }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 });
  }
}
