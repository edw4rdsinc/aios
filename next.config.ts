import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sanity Studio route
  transpilePackages: ['sanity'],

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },

  // Required for Sanity Studio
  experimental: {
    taint: true,
  },

  // Exclude problematic packages from server bundling
  serverExternalPackages: ['jsdom'],
};

export default nextConfig;
