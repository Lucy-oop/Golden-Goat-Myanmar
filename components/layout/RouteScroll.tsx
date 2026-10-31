"use client";

import { usePathname } from "next/navigation";
import { Fragment, useLayoutEffect } from "react";

// On every route change: jump to the top before the new page paints, and remount the page
// subtree (keyed by path) so scroll reveals and counters start hidden and replay on scroll.
export default function RouteScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  }, []);

  useLayoutEffect(() => {
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return <Fragment key={pathname}>{children}</Fragment>;
}
