import type { Metadata } from "next";
import Image from "@/components/ui/Image";
import { getContent } from "@/lib/content";
import CtaBand from "@/components/ui/CtaBand";
import CountUp from "@/components/ui/CountUp";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import ProductCatalog from "@/components/products/ProductCatalog";
import Sunburst from "@/components/products/Sunburst";

export async function generateMetadata(): Promise<Metadata> {
  const { c } = await getContent();
  return c.ui.productsPage.meta;
}

export default async function ProductsPage() {
  const { c } = await getContent();
  const ui = c.ui.productsPage;
  return (
    <>
      <PageHero
        eyebrow={ui.hero.eyebrow}
        title={ui.hero.title}
        text={ui.hero.text}
        image="/images/story/banner-all-bottles.jpg"
        crumbs={[{ label: ui.hero.crumb }]}
      />

      <section className="relative overflow-hidden bg-white py-20 sm:py-24">
        <Sunburst />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProductCatalog products={c.products} ui={c.ui.product} />
        </div>
      </section>

      <section className="border-y border-gold-400/30 bg-sand">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {ui.promises.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <p className="font-display text-xl text-tamarind">{p.title}</p>
              <p className="mt-1 text-sm text-muted">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="overflow-x-clip py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <Reveal from="left" className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image src="/images/story/supermarket-shelf.jpg" alt={ui.wholesale.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </Reveal>
          <Reveal from="right" delay={120}>
            <p className="text-xs font-bold tracking-[0.25em] text-gold-600 uppercase">{ui.wholesale.eyebrow}</p>
            <h2 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">{ui.wholesale.title}</h2>
            <p className="mt-4 leading-relaxed text-muted">
              {ui.wholesale.text}
            </p>
            <div className="mt-8 rounded-2xl bg-volcanic p-6 text-white">
              <p className="text-xs font-bold tracking-[0.2em] text-gold-200 uppercase">{ui.wholesale.offerLabel}</p>
              <p className="mt-2 font-display text-2xl">
                <CountUp value={100} /> {ui.wholesale.cartons} + <CountUp value={2} /> {ui.wholesale.cartonsFree}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand title={ui.cta.title} text={ui.cta.text} />
    </>
  );
}
