"use client";

import { useEffect, useRef } from "react";

// Thin gold bar under the header showing how far through the article body the reader is.
export default function ReadingProgress({ targetId }: { targetId: string }) {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = target.getBoundingClientRect();
      const p = (window.innerHeight * 0.4 - rect.top) / Math.max(1, rect.height);
      if (bar.current) bar.current.style.transform = `scaleX(${Math.min(1, Math.max(0, p))})`;
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
  }, [targetId]);

  return (
    <div aria-hidden className="fixed inset-x-0 top-20 z-40 h-[3px] bg-transparent">
      <div ref={bar} className="bg-gold-gradient h-full origin-left scale-x-0" />
    </div>
  );
}
