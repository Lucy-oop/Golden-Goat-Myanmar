import Image from "@/components/ui/Image";
import Link from "@/components/ui/Link";
import { getContent } from "@/lib/content";
import { ChevronIcon } from "@/components/ui/ChevronButton";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default async function WhereToBuy() {
  const { c } = await getContent();
  const { business, retailers } = c;
  const ui = c.ui.home.whereToBuy;
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <Reveal>
        <SectionHeading
          eyebrow={ui.eyebrow}
          title={ui.title}
          text={ui.text}
          align="center"
        />
      </Reveal>
      <Reveal delay={100} className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-6 sm:gap-x-10">
        {retailers.logos.map((r) => (
          <Image key={r.name} src={r.image} alt={r.name} width={160} height={96} className="h-14 w-20 object-contain sm:h-24 sm:w-40" />
        ))}
        {retailers.names.map((n) => (
          <span key={n} className="rounded-full border border-ink/15 px-5 py-2.5 text-sm font-semibold text-ink/75">
            {n}
          </span>
        ))}
      </Reveal>

      <div className="mt-20 grid gap-6 md:grid-cols-2">
        {business.map((b, i) => (
          <Reveal key={b.title} delay={i * 150}>
            <Link href={b.href} className="group relative block h-80 overflow-hidden rounded-3xl sm:h-96">
              <Image src={b.image} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-volcanic via-volcanic/60 to-volcanic/10" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-6 sm:p-8">
                <div>
                  <h3 className="font-display text-2xl text-white sm:text-3xl">{b.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-white/80">{b.text}</p>
                </div>
                <span className="bg-gold-gradient grid h-12 w-12 shrink-0 place-items-center rounded-full text-volcanic transition group-hover:translate-x-1">
                  <ChevronIcon className="h-5 w-5" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
