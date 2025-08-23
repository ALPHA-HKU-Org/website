import { siteConfig } from "@/lib/config";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { ThemeProvider } from "@/providers/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const siteUrl = process.env.SITE_URL;

const title = "ALPHA HKU";
export const description =
  "The first and only global student initiative based in Hong Kong for constructive peace and humanity. First international student chapter of ALPHA Education.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl!),
  title: {
    default: title,
    template: `%s - ${title}`,
  },
  description: description,
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    title: title,
    description: description,
    url: siteUrl!,
    siteName: title,
    images: [
      {
        url: siteConfig.seoImage,
        width: siteConfig.seoImageWidth,
        height: siteConfig.seoImageHeight,
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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
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
      contactType: "general inquiries",
      email: siteConfig.email,
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <Header />
          <main className="min-h-[calc(100vh-var(--header-height))] flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
