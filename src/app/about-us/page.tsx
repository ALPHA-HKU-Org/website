import { AnimatedFillButton } from "@/components/primitives/animated-fill-button";
import { PageHeader } from "@/components/primitives/page-header";
import { buildPageMetadata, siteConfig } from "@/lib/config";
import { Metadata } from "next";

const url = "/about-us";
export const metadata: Metadata = buildPageMetadata(url);

export default function AboutUs() {
  const aboutSection = siteConfig.mainNav.find((item) => item.href === url);
  const links = aboutSection?.children ?? [];

  return (
    <section className="mx-auto max-w-4xl">
      <PageHeader
        title="Learn more about us"
        description="An index of key pages in this section."
      />

      <ul className="mt-8 space-y-4">
        {links.map((link) => (
          <li
            key={link.href}
            className="rounded-full border px-6 py-4"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="font-medium">{link.label}</span>
              <AnimatedFillButton
                href={link.href}
                size="lg"
              >
                Visit
              </AnimatedFillButton>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
