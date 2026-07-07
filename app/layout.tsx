import type { Metadata } from "next";
import { Anton, Manrope, Space_Mono } from "next/font/google";
import "./globals.css";

// next/font self-hosts these at build time (no external request at runtime, no
// layout shift). Each exposes a CSS variable that globals.css maps to a role.
const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  // PLACEHOLDER: swap in the real domain once it's registered.
  metadataBase: new URL("https://gckuts.example.com"),
  title:
    "Giancarlo Colombo — Barber in Smithtown, NY | Skin Fades & Beard Trims",
  description:
    "Book a cut with Giancarlo Colombo at Mike's Custom Kuts in Smithtown, NY. Precision skin fades, beard trims, line-ups, and kids' cuts. 5.0★ on Booksy.",
  keywords: [
    "barber Smithtown NY",
    "skin fade Smithtown",
    "Giancarlo Colombo barber",
    "beard trim Smithtown",
    "kids haircut Smithtown",
    "Mike's Custom Kuts",
  ],
  openGraph: {
    title: "Giancarlo Colombo — Barber in Smithtown, NY",
    description:
      "Precision skin fades, beard work, and kids' cuts. Book online.",
    type: "website",
    locale: "en_US",
    // PLACEHOLDER: add a 1200x630 share image at /public/og.jpg, then uncomment:
    // images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${manrope.variable} ${spaceMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
