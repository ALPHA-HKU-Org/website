import createMDX from "@next/mdx";
import type { NextConfig } from "next";

let nextConfig: NextConfig = {
  /* config options here */
  // output: 'export',
  images: {
    qualities: [25, 75],
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-frontmatter", "remark-mdx-frontmatter"],
  },
});
nextConfig = withMDX(nextConfig);

async function initializeConfig() {
  if (process.env.ANALYZE === "true") {
    const initBundleAnalyzer = (await import("@next/bundle-analyzer")).default;
    const withBundleAnalyzer = initBundleAnalyzer({ enabled: true });
    return withBundleAnalyzer(nextConfig);
  }
  return nextConfig;
}

module.exports = initializeConfig();
