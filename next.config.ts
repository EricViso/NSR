import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // During development, we want to catch all TypeScript errors
    ignoreBuildErrors: false,  
  },
};

export default nextConfig;