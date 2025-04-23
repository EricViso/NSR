import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // Disable TypeScript during production build for now
    ignoreBuildErrors: true,
  },
  eslint: {
    // Disable ESLint during production build for now
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;