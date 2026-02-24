import type { NextConfig } from "next";

// DEPLOY CONFIGURATION
// For GitHub Pages (project page): set NEXT_PUBLIC_BASE_PATH=/bluebox-web in your CI env
// For custom domain (e.g. bluebox.cl): leave NEXT_PUBLIC_BASE_PATH unset or empty
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",           // Static HTML export for GitHub Pages
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
  trailingSlash: true,        // Required for static export routing
  images: {
    unoptimized: true,        // Required for static export (no Next.js image server)
  },
};

export default nextConfig;
