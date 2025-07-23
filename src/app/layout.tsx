import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://alpha-hku.vercel.app"),
  title: {
    default: "ALPHA HKU",
    template: "%s - ALPHA HKU",
  },
  description: "The official website for the Alpha Chapter at the University of Hong Kong.",
  manifest: "/manifest.json",
  openGraph: {
    title: "ALPHA HKU",
    description: "The official website for the Alpha Chapter at the University of Hong Kong.",
    url: "https://alpha-hku.vercel.app",
    siteName: "ALPHA HKU",
    images: [
      {
        url: "/placeholder.png", // Must be an absolute URL
        width: 1200,
        height: 630,
        alt: "ALPHA HKU",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ALPHA HKU",
    description: "The official website for the Alpha Chapter at the University of Hong Kong.",
    images: ["/placeholder.png"], // Must be an absolute URL
  },
};

import { CursorFollower } from "@/components/cursor-follower";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Alpha HKU',
    url: 'https://alpha-hku.vercel.app',
    logo: 'https://alpha-hku.vercel.app/placeholder.png',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      url: 'https://alpha-hku.vercel.app/contact-us'
    }
  };

  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <CursorFollower />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
