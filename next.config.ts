import type { NextConfig } from "next";

// GitHub Pages serves this repository at /Golden-Goat-Myanmar.
const basePath = "/Golden-Goat-Myanmar";

const nextConfig: NextConfig = {
  // Static HTML export to ./out for GitHub Pages (no Node server, so no proxy or image optimisation).
  output: "export",
  basePath,
  // /en/about/ -> en/about/index.html, which GitHub Pages serves without extra rules.
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
