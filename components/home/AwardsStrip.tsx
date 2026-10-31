import Link from "@/components/ui/Link";
import { getContent } from "@/lib/content";
import { ChevronIcon } from "@/components/ui/ChevronButton";
import Reveal from "@/components/ui/Reveal";

const icons: Record<string, React.ReactNode> = {
  globe: <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-9-9h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3Z" />,
  trophy: <path d="M8 21h8m-4-4v4m-5-17h10v5a5 5 0 0 1-10 0V4Zm0 2H4v1a3 3 0 0 0 3 3m10-4h3v1a3 3 0 0 1-3 3" />,
  medal: <path d="M12 21a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm-3.5-11L6 3h4l2 5m3.5 2L18 3h-4l-2 5m0 6v3" />,
  shield: <path d="M12 3 5 6v5c0 4.4 3 8.3 7 10 4-1.7 7-5.6 7-10V6l-7-3Zm-3 9 2 2 4-4" />,
};

// Short trust band on the home page; the full 2021–2026 timeline lives on the About page.
export default async function AwardsStrip() {
  const { c } = await getContent();
  const ui = c.ui.home.awards;
  return (
    <section className="border-y border-gold-400/30 bg-sand">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <p className="text-xs font-bold tracking-[0.25em] text-gold-600 uppercase">{ui.eyebrow}</p>
            <h2 className="mt-2 font-display text-2xl font-medium sm:text-3xl">{ui.title}</h2>
          </Reveal>
          <Link href="/about#journey" className="group inline-flex items-center gap-2 text-sm font-semibold text-tamarind">
            {ui.link}
            <ChevronIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {c.awards.map((a, i) => (
            <Reveal key={a.title} delay={i * 120}>
              <div className="flex items-start gap-4">
                <span className="bg-gold-gradient grid h-12 w-12 shrink-0 place-items-center rounded-full text-volcanic">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    {icons[a.icon]}
                  </svg>
                </span>
                <div>
                  <p className="font-bold">{a.title}</p>
                  <p className="mt-0.5 text-sm text-muted">{a.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
