"use client";

import { useEffect, useRef } from "react";

export default function Reveal({
  children,
  delay = 0,
  className = "",
  from = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  from?: "up" | "left" | "right" | "right-far" | "rise";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.remove("is-visible");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    // Start observing after the route's scroll-to-top has painted, so nothing reveals
    // from the previous page's scroll position.
    const frame = requestAnimationFrame(() => observer.observe(el));
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      el.classList.remove("is-visible");
    };
  }, []);

  return (
    <div ref={ref} className={`reveal ${from === "up" ? "" : `reveal-${from}`} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
