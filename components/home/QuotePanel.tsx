"use client";

import Image from "@/components/ui/Image";
import { useRef } from "react";
import type { Content } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import useScrollProgress from "@/components/ui/useScrollProgress";

export default function QuotePanel({ quote }: { quote: Content["quote"] }) {
  const section = useRef<HTMLElement>(null);
  const bg = useRef<HTMLDivElement>(null);

  // Gentle parallax: the farm photo drifts slower than the page.
  useScrollProgress(
    section,
    (p) => {
      if (bg.current) bg.current.style.transform = `translateY(${(p - 0.5) * 16}%)`;
    },
    "through",
  );

  return (
    <section ref={section} className="relative flex min-h-[100svh] items-center overflow-hidden bg-volcanic py-28">
      <div ref={bg} className="absolute -inset-y-[12%] inset-x-0 will-change-transform">
        <Image src="/images/story/orange-farm.jpg" alt="" fill sizes="100vw" className="object-cover" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 [filter:drop-shadow(0_2px_10px_rgba(0,0,0,0.5))_drop-shadow(0_0_2px_rgba(0,0,0,0.35))] sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Reveal from="left">
            <svg viewBox="0 0 48 36" className="h-10 w-auto text-gold-400" fill="currentColor" aria-hidden>
              <path d="M0 36V20C0 9 6 2 18 0l2 5c-7 2-10 6-10 12h9v19H0Zm28 0V20c0-11 6-18 18-20l2 5c-7 2-10 6-10 12h9v19H28Z" />
            </svg>
          </Reveal>
          <blockquote className="mt-8 font-display text-4xl leading-tight font-medium text-white sm:text-6xl lg:text-7xl">
            <Reveal from="left" delay={120}>
              <span className="block">{quote.lines[0]}</span>
            </Reveal>
            <Reveal from="left" delay={240}>
              <span className="text-gold-gradient block italic">{quote.lines[1]}</span>
            </Reveal>
          </blockquote>
          <Reveal from="left" delay={360}>
            <p className="mt-8 flex items-center gap-4 text-sm font-bold tracking-[0.25em] text-gold-200 uppercase">
              <span className="h-px w-12 bg-gold-400" />
              {quote.closing}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
