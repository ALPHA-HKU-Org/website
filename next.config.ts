import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: 'export',
  images: {
    qualities: [25, 75],
  },
};

module.exports = nextConfig;
