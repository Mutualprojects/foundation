import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'w.ndtvimg.com',
      },
      {
        protocol: 'https',
        hostname: 'regenorthosport.in',
      },
      {
        protocol: 'https',
        hostname: 'www.brihaspathi.com',
      },
      {
        protocol: 'https',
        hostname: 'www.sreedattha.ac.in',
      },
      {
        protocol: 'https',
        hostname: 'www.harshatoyota.com',
      },
      {
        protocol: 'https',
        hostname: 'www.orchidsinternationalschool.com',
      },
    ],
  },

};

export default nextConfig;
