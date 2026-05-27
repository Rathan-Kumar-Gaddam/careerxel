import type { Metadata } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap"
});

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
    <html lang="en" className={`${fontSans.variable} ${fontMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
