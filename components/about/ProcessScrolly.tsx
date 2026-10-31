"use client";

import Image from "@/components/ui/Image";
import { useEffect, useRef } from "react";
import type { Content } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

// Split-screen scrollytelling: the heading and step list stay pinned on the left while
// the step cards scroll by on the right. The card crossing the middle of the viewport
// marks its step active (class toggles only, no re-render).
export default function ProcessScrolly({ practices, ui }: { practices: Content["about"]["practices"]; ui: Content["ui"]["about"]["process"] }) {
  const steps = useRef<(HTMLLIElement | null)[]>([]);
  const cards = useRef<(HTMLElement | null)[]>([]);
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setActive = (active: number) => {
      steps.current.forEach((el, i) => el?.classList.toggle("is-active", i === active));
      if (bar.current) bar.current.style.transform = `scaleY(${(active + 1) / practices.length})`;
    };
    setActive(0);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(cards.current.indexOf(e.target as HTMLElement));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    cards.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-volcanic py-20 text-white sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[5fr_7fr] lg:gap-20 lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="mb-3 text-xs font-bold tracking-[0.25em] text-gold-600 uppercase">{ui.eyebrow}</p>
          <h2 className="font-display text-3xl leading-tight font-medium sm:text-4xl lg:text-5xl">
            {ui.title} <span className="text-gold-gradient italic">{ui.titleAccent}</span>
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-white/70">
            {ui.text}
          </p>

          <div className="relative mt-10 hidden pl-6 lg:block">
            <div className="absolute top-0 bottom-0 left-0 w-px bg-white/15" />
            <div ref={bar} className="absolute top-0 bottom-0 left-0 w-px origin-top bg-gold-400 transition-transform duration-500" />
            <ol className="space-y-4">
              {practices.map((p, i) => (
                <li
                  key={p.title}
                  ref={(el) => {
                    steps.current[i] = el;
                  }}
                  className="group flex items-baseline gap-4 text-white/40 transition-colors duration-300 [&.is-active]:text-white"
                >
                  <span className="font-display text-lg group-[.is-active]:text-gold-200">0{i + 1}</span>
                  <span className="font-semibold">{p.title}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {practices.map((p, i) => (
            <article
              key={p.title}
              ref={(el) => {
                cards.current[i] = el;
              }}
            >
              <Reveal from="rise" className="group">
                <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-white/5">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover transition duration-[1.2s] ease-out group-hover:scale-105"
                  />
                  <p className="absolute top-4 left-4 rounded-2xl border border-white/25 bg-black/40 px-3.5 py-1.5 font-display text-2xl text-white backdrop-blur-md sm:top-6 sm:left-6 sm:text-3xl">
                    0{i + 1}
                  </p>
                </div>
                <div className="mt-5 sm:mt-6">
                  <h3 className="font-display text-2xl leading-tight sm:text-3xl">{p.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">{p.text}</p>
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
