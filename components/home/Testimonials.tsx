import { getContent } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default async function Testimonials() {
  const { c } = await getContent();
  const ui = c.ui.home.testimonials;
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow={ui.eyebrow} title={ui.title} align="center" />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {c.testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 120} className={i === 2 ? "sm:col-span-2 lg:col-span-1" : ""}>
              <figure className="flex h-full flex-col rounded-3xl border border-ink/10 bg-cream p-8">
                <div className="flex gap-1 text-gold-600" aria-label={ui.stars}>
                  {Array.from({ length: 5 }).map((_, k) => (
                    <svg key={k} viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden>
                      <path d="m10 1.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5Z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 leading-relaxed text-ink/85">“{t.text}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="bg-gold-gradient grid h-11 w-11 place-items-center rounded-full font-display text-lg text-volcanic">
                    {t.name.charAt(0)}
                  </span>
                  <span className="font-semibold">{t.name}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
