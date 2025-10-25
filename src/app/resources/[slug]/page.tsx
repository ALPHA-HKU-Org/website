import { ResourceIframe } from "@/components/sections/resource-iframe";
import { buildPageMetadata } from "@/lib/config";
import { findResourceBySlug, resources } from "@/lib/data/resources";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const resource = findResourceBySlug(slug);
  if (!resource) return buildPageMetadata("/resources");
  return buildPageMetadata(`/resources/${resource.slug}`, {
    title: resource.title,
    description: `Embedded resource: ${resource.title}`,
  });
}

export default async function ResourceEmbedPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const resource = findResourceBySlug(slug);
  if (!resource) return notFound();

  return (
    <ResourceIframe
      title={resource.title}
      websiteUrl={resource.websiteUrl}
      hideTopPx={resource.hideTopPx}
      scale={resource.scale}
      hideHeader
      showOnMobile
      containerHeight="100dvh"
    />
  );
}
