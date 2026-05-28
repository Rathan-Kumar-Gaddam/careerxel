import { NextResponse } from "next/server";

import { getPage } from "@/lib/strapi";

export async function GET() {
  try {
    const page = await getPage("home");
    return NextResponse.json({ data: page.testimonials ?? [] });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 });
  }
}
