"use client";

import { useEffect, useRef, useState } from "react";

// Counts from 0 up to `value` (ease-out) the first time the number scrolls into view.
// `separator` formats thousands (4,891); turn it off for years (2021).
export default function CountUp({
  value,
  prefix = "",
  suffix = "",
  separator = true,
  duration = 1400,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  separator?: boolean;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setN(0);
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / duration);
        setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    });
    let raf = requestAnimationFrame(() => observer.observe(el));
    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      setN(0);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {separator ? n.toLocaleString("en-US") : n}
      {suffix}
    </span>
  );
}
