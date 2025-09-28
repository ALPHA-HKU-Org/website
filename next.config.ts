import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: 'export',
  images: {
    qualities: [25, 75],
  },
};

async function initializeConfig() {
  if (process.env.ANALYZE === "true") {
    const initBundleAnalyzer = (await import("@next/bundle-analyzer")).default;
    const withBundleAnalyzer = initBundleAnalyzer({ enabled: true });
    return withBundleAnalyzer(nextConfig);
  }
  return nextConfig;
}

module.exports = initializeConfig();
