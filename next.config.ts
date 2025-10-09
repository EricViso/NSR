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
  // Sentry configuration removed - instrumentationHook is deprecated in Next.js 15
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://auth.privy.io https://www.googletagmanager.com https://js.stripe.com https://app.unlock-protocol.com https://unlock-protocol.com https://cdnjs.cloudflare.com https://embedded-wallets.privy.io https://unpkg.com",
              "worker-src 'self' blob: https://unpkg.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https: blob:",
              "connect-src 'self' https://mainnet.optimism.io https://auth.privy.io https://api.stripe.com https://app.unlock-protocol.com https://unlock-protocol.com https://cdnjs.cloudflare.com https://embedded-wallets.privy.io https://o555569.ingest.sentry.io wss:",
              "frame-src 'self' https://js.stripe.com https://hooks.stripe.com https://app.unlock-protocol.com https://unlock-protocol.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'self' https://app.unlock-protocol.com https://unlock-protocol.com",
            ].join('; '),
          },
          {
            key: 'Permissions-Policy',
            value: [
              'camera=()',
              'microphone=()',
              'geolocation=()',
              'payment=(self "https://app.unlock-protocol.com" "https://unlock-protocol.com")',
              'usb=()',
              'magnetometer=()',
              'gyroscope=()',
              'accelerometer=()',
            ].join(', '),
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;