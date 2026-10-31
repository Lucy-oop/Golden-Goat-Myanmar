"use client";

import { useEffect, useState } from "react";

const icons = {
  link: <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" />,
  facebook: <path d="M14 21v-8h3l.5-3.5H14V7.8c0-1 .3-1.8 1.8-1.8H18V3.2A24 24 0 0 0 15.3 3C12.7 3 11 4.6 11 7.5v2H8V13h3v8" />,
  linkedin: <path d="M5 9.5V20M5 4.5v.1M9.5 20v-6.2c0-2.2 1.3-3.6 3.2-3.6s2.8 1.3 2.8 3.6V20M9.5 9.5V20" />,
  x: <path d="M4 4l7 9.3L4.3 20h1.6l5.9-5.8L16.2 20H20l-7.3-9.8L19 4h-1.6l-5.5 5.4L8 4H4Z" />,
  telegram: <path d="M21 4 3 11.2l5.6 2.1L19 6.5l-8.3 8.1v4.9l3.1-3.4 4.4 3.4L21 4Z" />,
  viber: <path d="M12 3c5 0 8.5 2.7 8.5 7.5S17 18 12 18c-.8 0-1.6-.1-2.3-.3L6 20.5v-3.7C4.4 15.5 3.5 13.2 3.5 10.5 3.5 5.7 7 3 12 3Zm-2 4.5c.5 2.6 2.4 4.6 5 5.2" />,
};

type Network = Exclude<keyof typeof icons, "link">;

const shareUrl: Record<Network, (url: string, title: string) => string> = {
  facebook: (u) => `https://www.facebook.com/sharer/sharer.php?u=${u}`,
  linkedin: (u) => `https://www.linkedin.com/sharing/share-offsite/?url=${u}`,
  x: (u, t) => `https://twitter.com/intent/tweet?url=${u}&text=${t}`,
  telegram: (u, t) => `https://t.me/share/url?url=${u}&text=${t}`,
  viber: (u, t) => `viber://forward?text=${t}%20${u}`,
};

const names: Record<Network, string> = { facebook: "Facebook", linkedin: "LinkedIn", x: "X", telegram: "Telegram", viber: "Viber" };

function Icon({ d }: { d: React.ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {d}
    </svg>
  );
}

// Copy-link plus the networks people in Myanmar and the region actually use.
export default function ShareButtons({
  title,
  ui,
  dark = false,
}: {
  title: string;
  ui: { share: string; copyLink: string; copied: string };
  dark?: boolean;
}) {
  const [url, setUrl] = useState("");
  const [copied, setCopied] = useState(false);
  useEffect(() => setUrl(window.location.href), []);

  const btn = `grid h-10 w-10 place-items-center rounded-full border transition ${
    dark ? "border-white/25 text-white/80 hover:border-gold-200 hover:text-gold-200" : "border-ink/15 text-ink/70 hover:border-tamarind hover:text-tamarind"
  }`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url || window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked (e.g. insecure context): leave the button as is.
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className={`mr-1 text-xs font-bold tracking-[0.2em] uppercase ${dark ? "text-white/60" : "text-muted"}`}>{ui.share}</span>
      <button type="button" onClick={copy} className={btn} aria-label={ui.copyLink} title={copied ? ui.copied : ui.copyLink}>
        {copied ? (
          <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] text-leaf" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
            <path d="m5 12 5 5 9-10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <Icon d={icons.link} />
        )}
      </button>
      {(Object.keys(shareUrl) as Network[]).map((n) => (
        <a
          key={n}
          href={url ? shareUrl[n](encodeURIComponent(url), encodeURIComponent(title)) : undefined}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${ui.share}: ${names[n]}`}
          title={names[n]}
          className={btn}
        >
          <Icon d={icons[n]} />
        </a>
      ))}
      <span role="status" className={`text-xs font-semibold ${dark ? "text-gold-200" : "text-leaf"} ${copied ? "" : "sr-only"}`}>
        {copied ? ui.copied : ""}
      </span>
    </div>
  );
}
