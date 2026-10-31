"use client";

import { Children, useCallback, useEffect, useRef, useState } from "react";
import { ChevronIcon } from "./ChevronButton";

// Scroll-snap carousel with arrow controls and a "page / total" counter.
export default function Carousel({
  children,
  itemClassName = "w-[80%] sm:w-[45%] lg:w-[calc(25%-18px)]",
  dark = false,
  sideArrows = false,
  labels = { prev: "Previous", next: "Next" },
}: {
  children: React.ReactNode;
  itemClassName?: string;
  dark?: boolean;
  // Arrows beside the track on desktop (product shelf style); bottom controls on mobile.
  sideArrows?: boolean;
  labels?: { prev: string; next: string };
}) {
  const track = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  const measure = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const total = Math.max(1, Math.ceil(el.scrollWidth / el.clientWidth - 0.05));
    const current = Math.min(total, Math.round(el.scrollLeft / el.clientWidth) + 1);
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    setPages(total);
    setPage(atEnd ? total : current);
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
  };

  const btn = dark
    ? "border-white/30 text-white hover:bg-white hover:text-volcanic"
    : "border-ink/20 text-ink hover:bg-volcanic hover:text-white";

  const sideBtn =
    "absolute top-[38%] z-10 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-tamarind/40 bg-white/80 text-tamarind backdrop-blur transition hover:bg-tamarind hover:text-white disabled:opacity-0 md:grid";

  return (
    <div className={sideArrows ? "relative md:px-14" : undefined}>
      {sideArrows && (
        <>
          <button type="button" onClick={() => scroll(-1)} disabled={page === 1} aria-label={labels.prev} className={`${sideBtn} left-0`}>
            <ChevronIcon left className="h-4 w-4" />
          </button>
          <button type="button" onClick={() => scroll(1)} disabled={page === pages} aria-label={labels.next} className={`${sideBtn} right-0`}>
            <ChevronIcon className="h-4 w-4" />
          </button>
        </>
      )}
      <div
        ref={track}
        onScroll={measure}
        className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-px-4 px-4 pb-2 sm:-mx-6 sm:scroll-px-6 sm:px-6 lg:mx-0 lg:scroll-px-0 lg:px-0"
      >
        {Children.map(children, (child) => (
          <div className={`shrink-0 snap-start ${itemClassName}`}>{child}</div>
        ))}
      </div>
      <div className={`mt-8 flex items-center gap-4 ${dark ? "text-white/70" : "text-muted"} ${sideArrows ? "justify-center md:hidden" : ""}`}>
        <button
          type="button"
          onClick={() => scroll(-1)}
          disabled={page === 1}
          aria-label={labels.prev}
          className={`grid h-11 w-11 place-items-center rounded-full border transition disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-current ${btn}`}
        >
          <ChevronIcon left className="h-4 w-4" />
        </button>
        <span className="min-w-12 text-center text-sm font-semibold tabular-nums">
          {page} / {pages}
        </span>
        <button
          type="button"
          onClick={() => scroll(1)}
          disabled={page === pages}
          aria-label={labels.next}
          className={`grid h-11 w-11 place-items-center rounded-full border transition disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-current ${btn}`}
        >
          <ChevronIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
