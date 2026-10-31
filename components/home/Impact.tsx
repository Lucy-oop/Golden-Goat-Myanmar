import Image from "@/components/ui/Image";
import { getContent } from "@/lib/content";
import CountUp from "@/components/ui/CountUp";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const icons: Record<string, React.ReactNode> = {
  bottle: <path d="M10 2h4v4c0 1 3 2 3 6v9a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-9c0-4 3-5 3-6V2Zm-3 12h10" />,
  leaf: <path d="M5 19C5 10 10 5 20 4c0 10-5 15-14 15Zm0 0 8-8" />,
  seedling: <path d="M12 21v-9m0 0C12 7 8 5 4 5c0 4 3 7 8 7Zm0 0c0-4 3-7 8-7 0 4-3 7-8 7Z" />,
  people: <path d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-6 9c0-3 3-5 6-5s6 2 6 5m1-9a3 3 0 1 0 0-6m2 15c0-2-1-4-3-5" />,
};

export default async function Impact() {
  const { c } = await getContent();
  const { impact } = c;
  return (
    <section className="relative overflow-hidden bg-volcanic py-20 text-white sm:py-28">
      <Image src={impact.image} alt="" fill sizes="100vw" className="object-cover opacity-15" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow={c.ui.home.impactEyebrow} title={impact.title} text={impact.text} dark />
        </Reveal>

        <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 lg:grid-cols-4">
          {impact.stats.map((s) => (
            <div key={s.label} className="bg-volcanic/90 p-6 sm:p-8">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-3xl whitespace-nowrap text-gold-200 sm:text-5xl">
                <CountUp value={s.value} suffix={s.suffix} />
              </dd>
              <dd className="mt-2 text-sm text-white/70">{s.label}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {impact.practices.map((p, i) => (
            <Reveal key={p.label} delay={i * 100}>
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold-600/50 text-gold-200">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    {icons[p.icon]}
                  </svg>
                </span>
                <span className="text-sm text-white/85">{p.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
