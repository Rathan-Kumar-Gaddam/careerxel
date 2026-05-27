import { NextResponse } from "next/server";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

type NewsletterPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  monthlyDigest?: boolean;
  datasetNotify?: boolean;
  webinarInvites?: boolean;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let body: NewsletterPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const firstName = clean(body.firstName);
  const lastName = clean(body.lastName);
  const email = clean(body.email);

  if (!firstName || !email) {
    return NextResponse.json({ message: "First name and email are required." }, { status: 400 });
  }

  const token = process.env.STRAPI_API_TOKEN;

  try {
    const response = await fetch(`${STRAPI_URL}/api/newsletter-subscribers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {})
      },
      body: JSON.stringify({
        data: {
          firstName,
          lastName,
          email,
          monthlyDigest: body.monthlyDigest !== false,
          datasetNotify: Boolean(body.datasetNotify),
          webinarInvites: Boolean(body.webinarInvites),
          source: "resources-page"
        }
      })
    });

    if (!response.ok) {
      const strapiBody = await response.json().catch(() => ({}));
      const strapiMessage =
        typeof strapiBody?.error?.message === "string"
          ? strapiBody.error.message
          : typeof strapiBody?.error === "string"
            ? strapiBody.error
            : null;

      return NextResponse.json(
        {
          message:
            strapiMessage ||
            (response.status === 403
              ? "Newsletter signup is not permitted. Check Strapi API token and Public role permissions."
              : "Could not save your subscription. Please try again.")
        },
        { status: response.status }
      );
    }

    return NextResponse.json({ message: "Subscription saved." });
  } catch {
    return NextResponse.json({ message: "Could not reach Strapi." }, { status: 502 });
  }
}
