"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";
import { defaultLocale, hasLocale } from "@/lib/i18n";

// next/link that keeps the visitor in their language: "/about" on a /zh/... page links to
// "/zh/about". Content and components keep writing plain paths ("/", "/products/x").
export default function Link({ href, ...props }: ComponentProps<typeof NextLink>) {
  const first = usePathname().split("/")[1];
  const locale = hasLocale(first) ? first : defaultLocale;
  const localized =
    typeof href === "string" && href.startsWith("/") && !hasLocale(href.split("/")[1] ?? "")
      ? `/${locale}${href === "/" ? "" : href}`
      : href;
  return <NextLink href={localized} {...props} />;
}
