import { NextResponse } from "next/server";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  role?: string;
  audience?: string;
  message?: string;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const name = clean(body.name);
  const email = clean(body.email);
  const company = clean(body.company);
  const phone = clean(body.phone);
  const role = clean(body.role);
  const audience = clean(body.audience) || "candidate";
  const message = clean(body.message);

  if (!name || !email) {
    return NextResponse.json({ message: "Name and email are required." }, { status: 400 });
  }

  const token = process.env.STRAPI_API_TOKEN;

  try {
    const response = await fetch(`${STRAPI_URL}/api/leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {})
      },
      body: JSON.stringify({
        data: {
          name,
          email,
          company,
          phone,
          role,
          audience,
          message,
          source: "contact-page"
        }
      })
    });

    if (!response.ok) {
      return NextResponse.json({ message: "Strapi could not save this contact request." }, { status: response.status });
    }

    return NextResponse.json({ message: "Contact request saved." });
  } catch {
    return NextResponse.json({ message: "Could not reach Strapi." }, { status: 502 });
  }
}
