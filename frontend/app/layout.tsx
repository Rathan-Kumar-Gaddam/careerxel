import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://careerxel.com"),
  title: {
    default: "CareerXel - Hire smarter. Grow faster.",
    template: "%s | CareerXel"
  },
  description:
    "CareerXel is an AI-native career and recruitment platform for candidates, employers, and colleges.",
  keywords: ["CareerXel", "AI interviews", "ATS", "placement analytics", "career platform"],
  openGraph: {
    title: "CareerXel - Hire smarter. Grow faster.",
    description:
      "AI mock interviews, recruiter ATS, resume tools, job matching, and college placement analytics in one platform.",
    url: "https://careerxel.com",
    siteName: "CareerXel",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "CareerXel - Hire smarter. Grow faster.",
    description: "AI-native career platform for candidates, employers, and colleges."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
