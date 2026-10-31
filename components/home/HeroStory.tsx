"use client";

import Image from "@/components/ui/Image";
import Link from "@/components/ui/Link";
import { useRef } from "react";
import type { Content } from "@/lib/content";
import ChevronButton, { ChevronIcon } from "@/components/ui/ChevronButton";
import useScrollProgress from "@/components/ui/useScrollProgress";

// Collage layouts. x/y are the card centre as a fraction of the stage,
// w is width as a fraction of stage width, a is aspect ratio (w / h), r is final rotation.
type Slot = { x: number; y: number; w: number; a: number; r: number } | null;

const desktop = {
  center: { x: 0.5, y: 0.45, w: 0.37, a: 1.75 },
  imageScale: 0.6,
  cards: [
    { x: 0.27, y: 0.3, w: 0.14, a: 0.98, r: -3 },
    { x: 0.24, y: 0.57, w: 0.2, a: 1.45, r: 2 },
    { x: 0.73, y: 0.3, w: 0.165, a: 1.3, r: 3 },
    { x: 0.81, y: 0.45, w: 0.175, a: 1.5, r: -2 },
    { x: 0.77, y: 0.6, w: 0.22, a: 1.75, r: 1.5 },
    { x: 0.1, y: 0.42, w: 0.12, a: 0.8, r: -5 },
  ] as Slot[],
};

const mobile = {
  center: { x: 0.5, y: 0.38, w: 0.72, a: 1.6 },
  imageScale: 0.9,
  cards: [
    { x: 0.28, y: 0.2, w: 0.36, a: 1.25, r: -4 },
    { x: 0.73, y: 0.205, w: 0.36, a: 1.3, r: 3 },
    { x: 0.27, y: 0.53, w: 0.36, a: 1.3, r: 3 },
    { x: 0.74, y: 0.535, w: 0.36, a: 1.35, r: -3 },
    null,
    null,
  ] as Slot[],
};

const clamp01 = (n: number) => Math.min(1, Math.max(0, n));
const ease = (t: number) => 1 - Math.pow(1 - t, 3);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export default function HeroStory({
  hero,
  heroStory,
  ui,
}: {
  hero: Content["hero"];
  heroStory: Content["heroStory"];
  ui: Content["ui"]["home"]["hero"];
}) {
  const section = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const photo = useRef<HTMLDivElement>(null);
  const frame = useRef<HTMLDivElement>(null);
  const copy = useRef<HTMLDivElement>(null);
  const text = useRef<HTMLDivElement>(null);
  const leaves = useRef<HTMLDivElement>(null);
  const backdrop = useRef<HTMLDivElement>(null);
  const cards = useRef<(HTMLDivElement | null)[]>([]);

  useScrollProgress(section, (p) => {
    const s = stage.current;
    if (!s) return;
    const W = s.clientWidth;
    const H = s.clientHeight;
    const isMobile = W < 768;
    const L = isMobile ? mobile : desktop;
    // The slot tables are drawn in a design box (16:10 desktop, 390×844 phone). Uniformly
    // scale that composition to fit the free space between the header and the closing copy,
    // whose height varies with screen width and language, so photos never cover the text.
    const Hd = W * (isMobile ? 2.16 : 0.625);
    const margin = 14; // cream frame padding, rotation and shadow
    const rects = [L.center, ...L.cards].flatMap((r) => {
      if (!r) return [];
      const w = r.w * W;
      const h = w / r.a;
      return [{ l: r.x * W - w / 2 - margin, r: r.x * W + w / 2 + margin, t: r.y * Hd - h / 2 - margin, b: r.y * Hd + h / 2 + margin }];
    });
    const box = {
      l: Math.min(...rects.map((r) => r.l)),
      r: Math.max(...rects.map((r) => r.r)),
      t: Math.min(...rects.map((r) => r.t)),
      b: Math.max(...rects.map((r) => r.b)),
    };
    const top = 96; // below the 80px header
    const bottom = H - (text.current?.offsetHeight ?? 0) - 16;
    const k0 = Math.max(0.2, Math.min(1, (bottom - top) / (box.b - box.t), (W - 24) / (box.r - box.l)));
    const offY = top + (bottom - top - (box.b - box.t) * k0) / 2;
    const fx = (x: number) => W / 2 + (x * W - (box.l + box.r) / 2) * k0;
    const fy = (y: number) => offY + (y * Hd - box.t) * k0;

    // Final rect of the centre card.
    const cw = L.center.w * W * k0;
    const ch = cw / L.center.a;
    const cx = fx(L.center.x);
    const cy = fy(L.center.y);

    // 1. Hero photo shrinks into the centre frame.
    const t = ease(clamp01(p / 0.32));
    const scale = lerp(1, L.imageScale, t);
    const vx0 = lerp(0, cx - cw / 2, t);
    const vy0 = lerp(0, cy - ch / 2, t);
    const vx1 = lerp(W, cx + cw / 2, t);
    const vy1 = lerp(H, cy + ch / 2, t);
    // The clip is applied before the scale, so map the visible rect back into local space.
    const toLocalX = (x: number) => cx + (x - cx) / scale;
    const toLocalY = (y: number) => cy + (y - cy) / scale;
    if (photo.current) {
      photo.current.style.transformOrigin = `${cx}px ${cy}px`;
      photo.current.style.transform = `scale(${scale})`;
      photo.current.style.clipPath = `inset(${toLocalY(vy0)}px ${W - toLocalX(vx1)}px ${H - toLocalY(vy1)}px ${toLocalX(vx0)}px round ${(t * 4) / scale}px)`;
    }
    if (frame.current) {
      const pad = 10;
      Object.assign(frame.current.style, {
        left: `${cx - cw / 2 - pad}px`,
        top: `${cy - ch / 2 - pad}px`,
        width: `${cw + pad * 2}px`,
        height: `${ch + pad * 2}px`,
        opacity: String(clamp01((t - 0.75) / 0.25)),
      });
    }

    // Hero copy fades out first.
    const c = clamp01(p / 0.14);
    if (copy.current) {
      copy.current.style.opacity = String(1 - c);
      copy.current.style.transform = `translateY(${-60 * c}px)`;
      copy.current.style.pointerEvents = c > 0.5 ? "none" : "auto";
    }

    // 2. Cards fan out from behind the centre card.
    L.cards.forEach((slot, i) => {
      const el = cards.current[i];
      if (!el) return;
      if (!slot) {
        el.style.display = "none";
        return;
      }
      const w = slot.w * W * k0;
      const h = w / slot.a;
      const x = fx(slot.x);
      const y = fy(slot.y);
      const k = ease(clamp01((p - (0.22 + i * 0.05)) / 0.3));
      Object.assign(el.style, {
        display: "block",
        left: `${x - w / 2}px`,
        top: `${y - h / 2}px`,
        width: `${w}px`,
        height: `${h}px`,
        opacity: String(clamp01(k * 2)),
        transform: `translate(${(cx - x) * (1 - k)}px, ${(cy - y) * (1 - k)}px) scale(${lerp(0.45, 1, k)}) rotate(${slot.r * k}deg)`,
      });
    });

    // 3. Closing copy.
    const tt = ease(clamp01((p - 0.6) / 0.2));
    if (text.current) {
      text.current.style.opacity = String(tt);
      text.current.style.transform = `translateY(${40 * (1 - tt)}px)`;
      text.current.style.pointerEvents = tt > 0.5 ? "auto" : "none";
    }
    if (backdrop.current)
      backdrop.current.style.opacity = String(
        lerp(1, 0.78, clamp01((p - 0.2) / 0.5)),
      );
    if (leaves.current)
      leaves.current.style.transform = `translateY(${-p * 140}px)`;
  });

  return (
    <section
      ref={section}
      className="relative h-[260svh] md:h-[320svh] motion-reduce:h-auto"
    >
      <div
        ref={stage}
        className="sticky top-0 h-[100svh] min-h-[560px] overflow-hidden bg-volcanic motion-reduce:relative"
      >
        {/* Blurred Mount Popa backdrop the collage settles onto. */}
        <div aria-hidden className="absolute inset-0">
          <Image
            src={hero.image}
            alt=""
            fill
            sizes="100vw"
            className="scale-110 object-cover blur-2xl"
          />
          <div ref={backdrop} className="absolute inset-0 bg-volcanic/70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,transparent_30%,rgba(35,26,18,0.75)_100%)]" />
        </div>
        <div
          ref={leaves}
          aria-hidden
          className="pointer-events-none absolute inset-0"
        >
          <Leaf className="absolute top-[22%] -left-4 w-24 -rotate-12 sm:w-32" />
          <Leaf className="absolute top-[12%] -right-6 w-28 rotate-[200deg] sm:w-40" />
          <Leaf className="absolute top-[68%] left-[38%] w-16 rotate-45 sm:w-20" />
          <Leaf className="absolute top-[80%] right-[10%] w-14 -rotate-[30deg]" />
        </div>

        {heroStory.cards.map((card, i) => (
          <div
            key={card.image}
            ref={(el) => {
              cards.current[i] = el;
            }}
            className="absolute rounded-md bg-cream p-2 opacity-0 shadow-2xl shadow-black/50 will-change-transform sm:p-3"
          >
            <div className="relative h-full w-full overflow-hidden rounded-sm">
              <Image
                src={card.image}
                alt={card.alt}
                fill
                sizes="(min-width: 768px) 22vw, 44vw"
                className="object-cover"
              />
            </div>
          </div>
        ))}

        <div
          ref={frame}
          aria-hidden
          className="absolute rounded-md bg-cream opacity-0 shadow-2xl shadow-black/60"
        />

        <div ref={photo} className="absolute inset-0 will-change-transform">
          <Image
            src={hero.image}
            alt={ui.photoAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[78%_50%] md:object-center"
          />
        </div>

        <div
          ref={copy}
          className="absolute inset-0 flex items-center justify-center text-center"
        >
          <div className="relative isolate mx-auto w-full max-w-5xl px-4 pt-20 sm:px-6 lg:px-8">
            {/* Soft neutral shadow behind the words only; the photo itself stays unfiltered. */}
            <div
              aria-hidden
              className="absolute inset-x-0 top-10 -bottom-10 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.62),rgba(0,0,0,0.25)_45%,transparent_72%)] sm:bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.5),rgba(0,0,0,0.18)_45%,transparent_70%)]"
            />
            <div className="[filter:drop-shadow(0_2px_10px_rgba(0,0,0,0.55))_drop-shadow(0_0_2px_rgba(0,0,0,0.4))]">
              <p className="mb-5 text-xs font-bold tracking-[0.3em] text-gold-200 uppercase">
                {hero.eyebrow}
              </p>
              <h1 className="mx-auto max-w-4xl font-display text-4xl leading-[1.05] font-medium text-white sm:text-6xl lg:text-7xl">
                {hero.title}{" "}
                <span className="text-gold-gradient italic">
                  {hero.titleAccent}
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                {hero.subtitle}
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <ChevronButton href="/about">{ui.explore}</ChevronButton>
                <ChevronButton href="/contact" variant="light">
                  {ui.join}
                </ChevronButton>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={text}
          className="absolute inset-x-0 bottom-0 px-4 pb-[max(2rem,env(safe-area-inset-bottom))] text-center opacity-0 sm:pb-12"
        >
          <h2 className="font-display text-2xl font-medium text-balance text-white sm:text-4xl">
            {heroStory.title}
          </h2>
          <div className="mx-auto mt-3 max-w-3xl space-y-1 text-sm leading-relaxed text-white/85 sm:mt-4 sm:text-base">
            {heroStory.lines.map((l) => (
              <p key={l}>{l}</p>
            ))}
          </div>
          <Link
            href={heroStory.cta.href}
            className="group mt-6 inline-flex items-center gap-4 rounded-full border-2 border-gold-200/80 bg-gradient-to-b from-cream to-gold-200 py-2 pr-2 pl-6 text-sm font-semibold text-tamarind shadow-[0_0_24px_rgba(233,201,119,0.45)] transition hover:shadow-[0_0_36px_rgba(233,201,119,0.7)] sm:mt-8 sm:pl-8 sm:text-base"
          >
            {heroStory.cta.label}
            <span className="grid h-10 w-10 place-items-center rounded-full bg-cream text-tamarind transition group-hover:translate-x-1 sm:h-12 sm:w-12">
              <ChevronIcon className="h-5 w-5" />
            </span>
          </Link>
        </div>
      </div>
      <div
        id="hero-end"
        aria-hidden
        className="absolute bottom-0 h-px w-full"
      />
    </section>
  );
}

function Leaf({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 60" className={className}>
      <path d="M2 30C30 2 80 -4 118 30 80 64 30 58 2 30Z" fill="#4f8a3a" />
      <path d="M2 30C30 2 80 -4 118 30" fill="#6aa84f" opacity=".5" />
      <path d="M6 30h108" stroke="#2f5a22" strokeWidth="1.5" opacity=".6" />
    </svg>
  );
}
