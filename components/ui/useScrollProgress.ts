"use client";

import { useEffect, useRef } from "react";

// Calls onProgress(0→1) on every animation frame the page scrolls.
// "pin":     0 when the section top hits the viewport top, 1 when its bottom hits the viewport bottom
//            (use with a tall section + sticky child).
// "through": 0 when the section enters from the bottom, 1 when it leaves through the top.
// Writes straight to the DOM in the callback, so scrolling never re-renders React.
export default function useScrollProgress<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  onProgress: (p: number) => void,
  mode: "pin" | "through" = "pin",
) {
  const cb = useRef(onProgress);
  cb.current = onProgress;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      cb.current(mode === "pin" ? 1 : 0.5);
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p =
        mode === "pin"
          ? -rect.top / Math.max(1, rect.height - vh)
          : (vh - rect.top) / (vh + rect.height);
      cb.current(Math.min(1, Math.max(0, p)));
    };
    const request = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
    };
  }, [ref, mode]);
}
