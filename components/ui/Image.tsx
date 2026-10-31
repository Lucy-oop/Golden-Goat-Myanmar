import NextImage, { type ImageProps } from "next/image";
import { basePath } from "@/lib/site";

// next/image with `unoptimized` doesn't add basePath to local paths, so do it here:
// "/images/x.jpg" -> "/Golden-Goat-Myanmar/images/x.jpg".
export default function Image({ src, ...props }: ImageProps) {
  const resolved = typeof src === "string" && src.startsWith("/") && !src.startsWith(`${basePath}/`) ? `${basePath}${src}` : src;
  // eslint-disable-next-line jsx-a11y/alt-text -- alt is passed through in props
  return <NextImage src={resolved} {...props} />;
}
