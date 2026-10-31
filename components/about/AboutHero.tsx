"use client";

import Image from "@/components/ui/Image";
import Link from "@/components/ui/Link";
import { useRef } from "react";
import Reveal from "@/components/ui/Reveal";
import useScrollProgress from "@/components/ui/useScrollProgress";
import type { Content } from "@/lib/content";

const photos = ["/images/story/production-line-photo.jpg", "/images/events/food-sampling.jpg", "/images/events/trade-fair.jpg"];

// About page hero: copy and a row of photos fade and slide up in sequence, then the
// row rises over the bottom of the landscape as the short pinned section is scrolled.
export default function AboutHero({ ui, home }: { ui: Content["ui"]["about"]["hero"]; home: string }) {
  const section = useRef<HTMLElement>(null);
  const bg = useRef<HTMLDivElement>(null);
  const copy = useRef<HTMLDivElement>(null);
  const row = useRef<HTMLDivElement>(null);

  useScrollProgress(section, (p) => {
    if (bg.current) bg.current.style.transform = `translateY(${-p * 6}%) scale(${1.06 - p * 0.06})`;
    if (copy.current) {
      copy.current.style.opacity = String(Math.max(0, 1 - p * 1.7));
      copy.current.style.transform = `translateY(${-p * 80}px)`;
    }
    if (row.current) row.current.style.transform = `translateY(${-p * 32}svh)`;
  });

  return (
    <section ref={section} className="relative h-[130svh] bg-cream sm:h-[150svh] motion-reduce:h-auto">
      <div className="sticky top-0 h-[100svh] min-h-[620px] overflow-hidden bg-volcanic motion-reduce:relative">
        <div ref={bg} className="absolute inset-0 scale-[1.06] will-change-transform">
          <Image
            src="/images/story/popa-landscape.jpg"
            alt={ui.bgAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[42%_50%] brightness-110 saturate-[1.2] sm:object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-volcanic/60 via-volcanic/15 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-cream via-cream/60 to-transparent" />

        <div ref={copy} className="relative mx-auto max-w-4xl px-4 pt-28 text-center text-white will-change-transform sm:px-6 sm:pt-36">
          <Reveal from="rise">
            <nav aria-label="Breadcrumb" className="text-xs font-semibold tracking-[0.2em] text-white/70 uppercase">
              <Link href="/" className="-mx-2 -my-3 inline-block px-2 py-3 hover:text-gold-200">
                {home}
              </Link>
              <span className="mx-2 opacity-50">/</span>
              <span className="text-gold-200">{ui.crumb}</span>
            </nav>
          </Reveal>
          <Reveal from="rise" delay={120}>
            <h1 className="mt-5 font-display text-4xl leading-[1.05] font-medium [text-shadow:0_2px_24px_rgba(0,0,0,0.35)] sm:text-6xl lg:text-7xl">
              {ui.title} <span className="text-gold-200 italic">{ui.titleAccent}</span>
            </h1>
          </Reveal>
          <Reveal from="rise" delay={240}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/90 [text-shadow:0_1px_12px_rgba(0,0,0,0.45)] sm:text-lg">{ui.text}</p>
          </Reveal>
        </div>

        <div ref={row} className="absolute inset-x-0 top-[58%] will-change-transform">
          <div className="mx-auto grid max-w-6xl grid-cols-[1fr_1.35fr_1fr] items-start gap-2.5 px-3 sm:gap-6 sm:px-6 lg:px-8">
            {photos.map((src, i) => (
              <Reveal key={src} from="rise" delay={360 + i * 120} className={i === 1 ? "" : "mt-12 sm:mt-28"}>
                <figure className="rounded-xl bg-cream p-1 shadow-2xl shadow-volcanic/40 sm:rounded-2xl sm:p-2">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-lg sm:rounded-xl">
                    <Image src={src} alt={ui.photos[i].alt} fill sizes="(min-width: 1024px) 35vw, 40vw" className="object-cover" />
                    <figcaption className="absolute bottom-2 left-2 rounded-full bg-volcanic/75 px-2 py-0.5 text-[9px] font-semibold tracking-wide text-gold-200 backdrop-blur sm:bottom-4 sm:left-4 sm:px-3.5 sm:py-1.5 sm:text-xs">
                      {ui.photos[i].caption}
                    </figcaption>
                  </div>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
        {/* Soft cream fade over the bottom edge, so the photos melt into the page below. */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[14%] bg-gradient-to-t from-cream to-transparent" />
      </div>
    </section>
  );
}
