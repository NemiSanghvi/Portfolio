
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath:
  process.env.NODE_ENV === "production"
    ? "/Portfolio"
    : "",
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
