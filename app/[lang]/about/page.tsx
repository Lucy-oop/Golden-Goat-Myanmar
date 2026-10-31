import type { Metadata } from "next";
import Image from "@/components/ui/Image";
import FitImage from "@/components/ui/FitImage";
import { getContent } from "@/lib/content";
import AboutHero from "@/components/about/AboutHero";
import ProcessScrolly from "@/components/about/ProcessScrolly";
import CountUp from "@/components/ui/CountUp";
import CtaBand from "@/components/ui/CtaBand";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export async function generateMetadata(): Promise<Metadata> {
  const { c } = await getContent();
  return c.ui.about.meta;
}

export default async function AboutPage() {
  const { c } = await getContent();
  const { about, impact, milestones } = c;
  const ui = c.ui.about;
  return (
    <>
      <AboutHero ui={ui.hero} home={c.ui.common.home} />

      {/* Story */}
      <section className="overflow-x-clip">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <Reveal from="left">
            <SectionHeading eyebrow={ui.story.eyebrow} title={ui.story.title} />
            <div className="mt-6 space-y-4 leading-relaxed text-muted">
              <p>{about.intro}</p>
              <p>{about.volcano}</p>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-ink/10 pt-8">
              {[
                { value: 2021, label: ui.story.stats[0], separator: false },
                { value: 4891, suffix: ui.story.feet, label: ui.story.stats[1] },
                { value: impact.stats[0].value, suffix: "%", label: ui.story.stats[2] },
              ].map(({ label: l, ...n }) => (
                <div key={l}>
                  <dt className="font-display text-2xl text-gold-700 sm:text-3xl">
                    <CountUp {...n} />
                  </dt>
                  <dd className="mt-1 text-xs text-muted">{l}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal from="right" delay={150} className="relative grid grid-cols-5 gap-4">
            <div className="relative col-span-3 aspect-[3/4] overflow-hidden rounded-3xl">
              <Image src="/images/story/market-baskets.jpg" alt={ui.story.alts[0]} fill sizes="(min-width: 1024px) 30vw, 60vw" className="object-cover" />
            </div>
            <div className="col-span-2 grid grid-rows-2 gap-4">
              <div className="relative overflow-hidden rounded-3xl">
                <Image src="/images/story/palm-harvest.jpg" alt={ui.story.alts[1]} fill sizes="(min-width: 1024px) 20vw, 40vw" className="object-cover" />
              </div>
              <div className="relative overflow-hidden rounded-3xl">
                <Image src="/images/story/tamarind-concentrate.jpg" alt={ui.story.alts[2]} fill sizes="(min-width: 1024px) 20vw, 40vw" className="object-cover" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission & vision */}
      <section className="overflow-x-clip bg-sand py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          {[
            { ...ui.mission, items: about.mission },
            { ...ui.vision, items: about.vision },
          ].map((block, i) => (
            <Reveal key={block.title} from={i === 0 ? "left" : "right"} className="h-full">
              <article className="h-full rounded-3xl bg-white p-8 sm:p-10">
                <p className="text-xs font-bold tracking-[0.25em] text-gold-600 uppercase">{block.sub}</p>
                <h2 className="mt-3 font-display text-3xl">{block.title}</h2>
                <ul className="mt-6 space-y-4">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed text-muted">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Journey */}
      <section id="journey" className="scroll-mt-20 overflow-x-clip py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow={ui.journey.eyebrow}
              title={ui.journey.title}
              text={ui.journey.text}
              align="center"
            />
          </Reveal>
          <ol className="relative mt-16">
            <span aria-hidden className="absolute top-0 bottom-0 left-4 w-px bg-gold-400/50 md:left-1/2" />
            {milestones.map((m, i) => {
              const left = i % 2 === 0;
              return (
                <li key={m.year} className="relative mb-14 pl-12 last:mb-0 md:grid md:grid-cols-2 md:gap-16 md:pl-0">
                  <span aria-hidden className="absolute top-2 left-4 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-cream bg-gold-600 md:left-1/2" />
                  <Reveal from={left ? "left" : "right"} className={left ? "md:text-right" : "md:col-start-2"}>
                    <p className="font-display text-5xl text-gold-gradient">
                      <CountUp value={Number(m.year)} separator={false} duration={1800} />
                    </p>
                    <h3 className="mt-2 text-xl font-bold">{m.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted">{m.text}</p>
                  </Reveal>
                  {m.image && (
                    <Reveal
                      from={left ? "right" : "left"}
                      delay={120}
                      className={`mt-6 md:mt-0 ${left ? "" : "md:col-start-1 md:row-start-1"}`}
                    >
                      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-sand shadow-lg">
                        <FitImage src={m.image} alt={m.title} contain={m.portrait} sizes="(min-width: 768px) 40vw, 90vw" />
                      </div>
                    </Reveal>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow={ui.team.eyebrow} title={ui.team.title} align="center" />
          </Reveal>
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {about.team.map((m, i) => (
              <Reveal key={m.name} delay={i * 120}>
                <article className="text-center">
                  <div className="relative mx-auto aspect-square w-48 overflow-hidden rounded-full ring-4 ring-gold-200 ring-offset-4 ring-offset-white">
                    <Image src={m.image} alt={m.name} fill sizes="192px" className="object-cover" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl">{m.name}</h3>
                  <p className="mt-1 text-sm font-bold tracking-wide text-gold-700 uppercase">{m.role}</p>
                  <p className="mt-1 text-sm text-muted">{m.credentials}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-16">
            <div className="grid items-center gap-8 overflow-hidden rounded-3xl bg-cream md:grid-cols-2">
              <div className="relative aspect-[4/3] bg-sand md:aspect-auto md:h-full md:min-h-[420px]">
                <Image src={about.workforce.image} alt={ui.team.workforceAlt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="p-8 sm:p-10">
                <h3 className="font-display text-2xl sm:text-3xl">{about.workforce.title}</h3>
                <p className="mt-4 leading-relaxed text-muted">{about.workforce.text}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How we work */}
      <ProcessScrolly practices={about.practices} ui={ui.process} />

      {/* Strategy, audience, channels */}
      <section className="overflow-x-clip py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal from="left">
            <SectionHeading eyebrow="2024 – 2030" title={about.goals.title} />
            <ol className="mt-8 space-y-5">
              {about.goals.items.map((g, i) => (
                <li key={g} className="flex gap-4">
                  <span className="bg-gold-gradient grid h-8 w-8 shrink-0 place-items-center rounded-full text-sm font-bold text-volcanic">{i + 1}</span>
                  <p className="pt-1 leading-relaxed text-muted">{g}</p>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal from="right" delay={120}>
            <p className="text-xs font-bold tracking-[0.25em] text-gold-600 uppercase">{ui.business.audience}</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {about.audience.map((a) => (
                <div key={a.label} className="rounded-2xl border border-ink/10 bg-white p-4 sm:p-6">
                  <p className="font-display text-3xl text-tamarind sm:text-4xl">
                    <CountUp value={a.value} suffix="%" />
                  </p>
                  <p className="mt-2 font-bold">{a.label}</p>
                  <p className="text-sm text-muted">{a.note}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 text-xs font-bold tracking-[0.25em] text-gold-600 uppercase">{ui.business.channels}</p>
            <ul className="mt-4 divide-y divide-ink/10">
              {about.channels.map((c) => (
                <li key={c.title} className="grid gap-1 py-4 sm:grid-cols-3">
                  <span className="font-bold">{c.title}</span>
                  <span className="text-sm text-muted sm:col-span-2">{c.text}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Certifications */}
      <section className="overflow-x-clip bg-sand py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow={ui.certs.eyebrow}
              title={ui.certs.title}
              text={ui.certs.text}
              align="center"
            />
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {about.documents.map((d, i) => (
              <Reveal key={d.title} delay={i * 120}>
                <article className="h-full rounded-3xl bg-white p-6">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-cream">
                    <Image src={d.image} alt={d.title} fill sizes="(min-width: 768px) 30vw, 90vw" className="object-contain p-2" />
                  </div>
                  <h3 className="mt-5 font-bold">{d.title}</h3>
                  <p className="mt-1 text-sm text-muted">{d.text}</p>
                </article>
              </Reveal>
            ))}
            <Reveal delay={240}>
              <article className="flex h-full flex-col rounded-3xl bg-volcanic p-6 text-white">
                <div className="grid aspect-[4/5] place-items-center rounded-xl border border-gold-400/40 bg-volcanic-800 text-center">
                  <div>
                    <p className="font-display text-6xl text-gold-gradient">GACC</p>
                    <p className="mt-3 text-sm tracking-[0.2em] text-white/70 uppercase">{ui.certs.gaccBadge}</p>
                  </div>
                </div>
                <h3 className="mt-5 font-bold">{ui.certs.gaccTitle}</h3>
                <p className="mt-1 text-sm text-white/70">{ui.certs.gaccText}</p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
