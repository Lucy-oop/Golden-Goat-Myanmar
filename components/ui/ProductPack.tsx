import { useId } from "react";
import type { Product } from "@/lib/content";

// Studio-style packshot drawn in SVG so every product sits on the same
// baseline at the same scale, like a cut-out photo on a white shelf.
export default function ProductPack({ product }: { product: Product }) {
  const id = useId().replace(/:/g, "");
  const { pack, juice, tint, label } = product;

  return (
    <svg viewBox="0 0 200 340" className="h-full w-auto overflow-visible drop-shadow-[0_18px_18px_rgba(42,33,24,0.18)]" role="img" aria-label={`${product.name} pack`}>
      <defs>
        <linearGradient id={`shade-${id}`} x1="0" x2="1">
          <stop offset="0" stopColor="#000" stopOpacity=".35" />
          <stop offset=".35" stopColor="#000" stopOpacity="0" />
          <stop offset=".65" stopColor="#fff" stopOpacity=".08" />
          <stop offset="1" stopColor="#000" stopOpacity=".4" />
        </linearGradient>
        <linearGradient id={`metal-${id}`} x1="0" x2="1">
          <stop offset="0" stopColor="#8d8d8d" />
          <stop offset=".45" stopColor="#f2f2f2" />
          <stop offset="1" stopColor="#7a7a7a" />
        </linearGradient>
        <linearGradient id={`gold-${id}`} x1="0" x2="1">
          <stop offset="0" stopColor="#8a6420" />
          <stop offset=".5" stopColor="#e9c977" />
          <stop offset="1" stopColor="#8a6420" />
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="332" rx="66" ry="6" fill="#2a2118" opacity=".18" />
      {pack === "bottle" && <Bottle id={id} juice={juice} />}
      {pack === "small-bottle" && <SmallBottle id={id} juice={juice} />}
      {pack === "pouch" && <Pouch id={id} />}
      {pack === "jar" && <Jar id={id} juice={juice} />}
      <Label pack={pack} tint={tint} label={label} />
    </svg>
  );
}

const BOTTLE =
  "M78 44H122V58C122 70 168 84 170 118V300C170 318 158 328 140 328H60C42 328 30 318 30 300V118C32 84 78 70 78 58Z";

function Bottle({ id, juice }: { id: string; juice: string }) {
  return (
    <g>
      <clipPath id={`clip-${id}`}>
        <path d={BOTTLE} />
      </clipPath>
      <path d={BOTTLE} fill={juice} />
      <g clipPath={`url(#clip-${id})`}>
        <rect x="0" y="44" width="200" height="22" fill="#fff" opacity=".55" />
        <rect x="0" y="0" width="200" height="340" fill={`url(#shade-${id})`} />
        {/* Swirled glass on the shoulders */}
        {[86, 100, 114, 128, 142].map((y) => (
          <path key={y} d={`M30 ${y + 18}C60 ${y - 6} 140 ${y - 6} 170 ${y + 18}`} stroke="#fff" strokeWidth="3" fill="none" opacity=".18" />
        ))}
        <rect x="40" y="118" width="7" height="186" rx="3.5" fill="#fff" opacity=".35" />
        <rect x="152" y="128" width="4" height="160" rx="2" fill="#fff" opacity=".2" />
      </g>
      <path d={BOTTLE} fill="none" stroke="#fff" strokeOpacity=".35" strokeWidth="1.5" />
      <rect x="76" y="36" width="48" height="10" rx="2" fill="#d9d9d9" />
      <rect x="72" y="8" width="56" height="30" rx="4" fill={`url(#metal-${id})`} />
      {[16, 22, 28].map((y) => (
        <line key={y} x1="72" x2="128" y1={y} y2={y} stroke="#6b6b6b" strokeOpacity=".35" />
      ))}
    </g>
  );
}

function SmallBottle({ id, juice }: { id: string; juice: string }) {
  const body = "M84 92H116V112C116 118 150 122 150 140V310C150 320 144 328 134 328H66C56 328 50 320 50 310V140C50 122 84 118 84 112Z";
  return (
    <g>
      <path d={body} fill={juice} />
      <path d={body} fill={`url(#shade-${id})`} />
      <rect x="58" y="140" width="6" height="166" rx="3" fill="#fff" opacity=".3" />
      <path d={body} fill="none" stroke="#fff" strokeOpacity=".3" strokeWidth="1.5" />
      <rect x="80" y="64" width="40" height="30" rx="3" fill={`url(#gold-${id})`} />
      {[72, 79, 86].map((y) => (
        <line key={y} x1="80" x2="120" y1={y} y2={y} stroke="#5a3d10" strokeOpacity=".35" />
      ))}
    </g>
  );
}

function Pouch({ id }: { id: string }) {
  const body = "M38 86Q100 72 162 86L168 304Q170 326 148 328H52Q30 326 32 304Z";
  return (
    <g>
      <path d={body} fill={`url(#metal-${id})`} />
      <path d={body} fill={`url(#shade-${id})`} opacity=".5" />
      <path d="M38 86Q100 72 162 86L163 100Q100 86 37 100Z" fill="#fff" opacity=".35" />
      <rect x="88" y="44" width="24" height="34" fill="#e9e9e9" />
      <rect x="84" y="22" width="32" height="24" rx="4" fill="#f7f7f7" stroke="#cfcfcf" />
      <rect x="48" y="96" width="6" height="200" rx="3" fill="#fff" opacity=".45" />
    </g>
  );
}

function Jar({ id, juice }: { id: string; juice: string }) {
  const body = "M42 176H158V312C158 322 150 328 140 328H60C50 328 42 322 42 312Z";
  return (
    <g>
      <path d={body} fill={juice} />
      {Array.from({ length: 70 }).map((_, i) => (
        <circle key={i} cx={48 + ((i * 37) % 106)} cy={184 + ((i * 53) % 138)} r={1 + (i % 3) * 0.6} fill="#fff" opacity=".18" />
      ))}
      <path d={body} fill={`url(#shade-${id})`} />
      <rect x="50" y="182" width="6" height="134" rx="3" fill="#fff" opacity=".35" />
      <rect x="36" y="140" width="128" height="38" rx="6" fill={`url(#gold-${id})`} />
      {[150, 158, 166].map((y) => (
        <line key={y} x1="36" x2="164" y1={y} y2={y} stroke="#5a3d10" strokeOpacity=".3" />
      ))}
    </g>
  );
}

const LABELS = {
  bottle: { x: 30, y: 170, w: 140, h: 108 },
  "small-bottle": { x: 50, y: 178, w: 100, h: 100 },
  pouch: { x: 46, y: 150, w: 108, h: 120 },
  jar: { x: 42, y: 204, w: 116, h: 96 },
} as const;

function Label({ pack, tint, label }: { pack: Product["pack"]; tint: string; label: string }) {
  const b = LABELS[pack];
  const cx = b.x + b.w / 2;
  const small = b.w < 120;
  const words = label.toUpperCase().split(" ");
  const lines = words.length > 1 && label.length > 10 ? [words.slice(0, -1).join(" "), words.at(-1)!] : [label.toUpperCase()];
  return (
    <g>
      <rect x={b.x} y={b.y} width={b.w} height={b.h} fill="#f7f0dd" />
      {pack === "pouch" && <rect x={b.x + 3} y={b.y + 3} width={b.w - 6} height={b.h - 6} fill="none" stroke="#3f6b35" strokeWidth="3" />}
      <rect x={b.x} y={b.y} width={b.w} height="3" fill="#c79a3e" />
      <rect x={b.x} y={b.y + b.h - 3} width={b.w} height="3" fill="#c79a3e" />
      {/* Crown */}
      <path
        d={`M${cx - 11} ${b.y + 20}l3-10 5 6 3-9 3 9 5-6 3 10z`}
        fill="#d4a42c"
        stroke="#8a6420"
        strokeWidth=".8"
      />
      <text x={cx} y={b.y + 40} textAnchor="middle" fontFamily="var(--font-fraunces), Georgia, serif" fontStyle="italic" fontWeight="600" fontSize={small ? 17 : 21} fill="#8a4f1c">
        My King
      </text>
      {lines.map((line, i) => (
        <text
          key={line}
          x={cx}
          y={b.y + (small ? 58 : 62) + i * 13}
          textAnchor="middle"
          fontFamily="var(--font-manrope), sans-serif"
          fontWeight="800"
          fontSize={small ? 9.5 : 12}
          letterSpacing=".5"
          fill={tint}
        >
          {line}
        </text>
      ))}
      <text x={cx} y={b.y + b.h - 12} textAnchor="middle" fontFamily="var(--font-manrope), sans-serif" fontWeight="700" fontSize="6" letterSpacing=".6" fill="#6f6253">
        100% NATURAL · NO ADDED SUGAR
      </text>
      <circle cx={b.x + b.w - 13} cy={b.y + 15} r="8" fill="#3f6b35" />
      <path d={`M${b.x + b.w - 17} ${b.y + 18}c1-6 5-8 8-8-1 5-4 8-8 8z`} fill="#cfe3b4" />
    </g>
  );
}
