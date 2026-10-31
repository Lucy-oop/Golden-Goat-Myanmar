// The site is served from a sub-path on GitHub Pages (https://<user>.github.io/Golden-Goat-Myanmar).
// next.config.ts sets basePath from this, and exposes it to the browser as NEXT_PUBLIC_BASE_PATH.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
