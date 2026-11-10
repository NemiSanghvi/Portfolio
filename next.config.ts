import type { NextConfig } from "next";

/**
 * Vercel-compatible Next.js configuration.
 * The static export settings and GitHub Pages basePath have been removed.
 * Remaining settings preserve existing behavior such as trailing slashes,
 * unoptimized images, and Turbopack CSS handling.
 */
const nextConfig: NextConfig = {
  // No output: "export" – Vercel handles dynamic rendering.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
