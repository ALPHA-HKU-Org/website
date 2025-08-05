import { siteConfig } from "@/lib/config";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "@/components/features/theme/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { CursorFollower } from "@/components/features/cursor/cursor-follower";

const siteUrl = process.env.SITE_URL;

const title = "ALPHA HKU";
const description =
  "The official website for the ALPHA University Chapter at the University of Hong Kong. Join us to connect with students and professionals in the business and technology fields.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl!),
  title: {
    default: title,
    template: `%s - ${title}`,
  },
  description: description,
  manifest: "/manifest.json",
  openGraph: {
    title: title,
    description: description,
    url: siteUrl!,
    siteName: title,
    images: [
      {
        url: siteConfig.seoImage,
        width: 882,
        height: 802,
        alt: title,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: [siteConfig.seoImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ALPHA University Chapter at the University of Hong Kong",
    url: siteUrl,
    logo: `${siteUrl}${siteConfig.seoImage}`,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: siteConfig.email,
      url: `${siteUrl}/contact-us`,
    },
    sameAs: [siteConfig.instagram, siteConfig.github, siteConfig.linkedin],
  };

  return (
    <html
      lang="en"
      className={GeistSans.className}
      suppressHydrationWarning
    >
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
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
