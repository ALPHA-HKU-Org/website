import { Metadata } from "next";
import { ResourceIframe } from "@/components/sections/resource-iframe";
import { siteConfig } from "@/lib/config";

const title = "Resources";
const description =
  "Find useful resources and materials from the ALPHA Chapter at the University of Hong Kong.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [
      {
        url: siteConfig.seoImage,
        width: siteConfig.seoImageWidth,
        height: siteConfig.seoImageHeight,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [siteConfig.seoImage],
  },
};

export default function Resources() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8 text-center">
        <p className="text-lg text-muted-foreground">
          Here are some recommended websites. They offer more details and different perspectives on our
          chapter's topics.
        </p>
      </div>
      <div className="space-y-8">
        <ResourceIframe
          title="Where She Stood - WWII"
          websiteUrl="https://whereshestoodwwii.wixsite.com/where-she-stood"
        />
        <ResourceIframe
          title="The Spine of the Nation"
          websiteUrl="https://thespineofthenation.wordpress.com"
        />
      </div>
    </div>
  );
}
