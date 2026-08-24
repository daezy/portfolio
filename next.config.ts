import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // The source screenshots are 3400px PNGs; serving AVIF/WebP keeps LCP (and
    // therefore Core Web Vitals) from being dominated by image weight.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
