import type { Metadata } from "next";
import Image from "@/components/ui/Image";
import Link from "@/components/ui/Link";
import { notFound } from "next/navigation";
import { getContent, getContentFor } from "@/lib/content";
import ChevronButton from "@/components/ui/ChevronButton";
import ProductPack from "@/components/ui/ProductPack";
import Reveal from "@/components/ui/Reveal";
import ProductCard from "@/components/products/ProductCard";
import Sunburst from "@/components/products/Sunburst";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getContentFor("en").products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { c } = await getContent();
  const p = c.products.find((x) => x.slug === slug);
  return p ? { title: `${p.name} · My King`, description: p.description } : {};
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const { c } = await getContent();
  const { products } = c;
  const ui = c.ui.productPage;
  const pu = c.ui.product;
  const p = products.find((x) => x.slug === slug);
  if (!p) notFound();

  const related = products.filter((x) => x.slug !== p.slug && x.category === p.category).concat(products.filter((x) => x.category !== p.category)).slice(0, 4);

  return (
    <>
      <section className="bg-volcanic pt-20">
        <nav aria-label={c.ui.common.breadcrumb} className="mx-auto max-w-7xl px-4 py-5 text-xs font-semibold tracking-[0.2em] text-white/60 uppercase sm:px-6 lg:px-8">
          <Link href="/" className="-mx-2 -my-3 inline-block px-2 py-3 hover:text-gold-200">{c.ui.common.home}</Link>
          <span className="mx-2 opacity-50">/</span>
          <Link href="/products" className="-mx-2 -my-3 inline-block px-2 py-3 hover:text-gold-200">{ui.crumb}</Link>
          <span className="mx-2 opacity-50">/</span>
          <span className="text-gold-200">{p.name}</span>
        </nav>
      </section>

      <section className="overflow-x-clip">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-24">
          <Reveal from="left" className="relative flex min-h-[420px] items-end justify-center overflow-hidden rounded-3xl bg-white p-10 sm:min-h-[560px]">
            <Sunburst />
            <div className={`relative h-[340px] sm:h-[460px] ${p.cutout ? "w-full" : ""}`}>
              {p.cutout ? (
                <Image
                  src={p.cutout}
                  alt={p.name}
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className={`object-contain object-bottom drop-shadow-[0_24px_24px_rgba(35,26,18,0.2)] ${p.pack === "pouch" ? "pt-12" : ""}`}
                />
              ) : (
                <ProductPack product={p} />
              )}
            </div>
            {p.badge && (
              <span className="absolute top-6 left-6 rounded-full bg-volcanic px-4 py-1.5 text-xs font-bold text-gold-200">{pu.badges[p.badge]}</span>
            )}
          </Reveal>

          <Reveal from="right" delay={120}>
            <p className="text-xs font-bold tracking-[0.25em] text-gold-600 uppercase">
              {pu.brand} · {pu.categories[p.category]}
            </p>
            <h1 className="mt-3 font-display text-4xl leading-tight font-medium text-tamarind sm:text-5xl">{p.name}</h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">{p.about}</p>

            <h2 className="mt-10 text-xs font-bold tracking-[0.2em] uppercase">{ui.sizes}</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {p.sizes.map((s) => (
                <li key={s.size} className="rounded-full border border-ink/15 bg-white px-4 py-2 font-semibold">
                  {s.size}
                </li>
              ))}
            </ul>

            <ul className="mt-8 space-y-3">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-3">
                  <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0 text-leaf" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                    <path d="m4 10 4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-ink/85">{h}</span>
                </li>
              ))}
            </ul>

            <dl className="mt-8 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-2xl bg-sand p-4">
                <dt className="text-muted">{ui.shelfLife}</dt>
                <dd className="mt-1 font-bold">{p.shelfLife}</dd>
              </div>
              <div className="rounded-2xl bg-sand p-4">
                <dt className="text-muted">{ui.certified}</dt>
                <dd className="mt-1 font-bold">Myanmar FDA · GACC</dd>
              </div>
            </dl>

            <div className="mt-10 flex flex-wrap gap-4">
              <ChevronButton href="/contact">{ui.inquiry}</ChevronButton>
              <ChevronButton href="/products" variant="outline">
                {ui.all}
              </ChevronButton>
            </div>
          </Reveal>
        </div>
      </section>

      {p.scene && (
        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <Reveal className="relative aspect-[4/5] overflow-hidden rounded-3xl sm:aspect-[21/9]">
            <Image src={p.scene.image} alt={p.scene.alt} fill sizes="(min-width: 1280px) 1280px, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-volcanic/85 via-volcanic/20 to-transparent sm:bg-gradient-to-r sm:from-volcanic/80 sm:via-volcanic/30" />
            <div className="absolute inset-x-0 bottom-0 max-w-lg p-6 text-white sm:inset-y-0 sm:flex sm:flex-col sm:justify-center sm:p-12">
              <p className="text-xs font-bold tracking-[0.25em] text-gold-200 uppercase">{ui.sceneEyebrow}</p>
              <p className="mt-3 font-display text-2xl leading-snug sm:text-4xl">{p.description}</p>
            </div>
          </Reveal>
        </section>
      )}

      <section className="relative overflow-hidden bg-white py-20">
        <Sunburst />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl text-tamarind sm:text-4xl">{ui.related}</h2>
          <div className="mt-12 grid gap-x-4 gap-y-14 min-[480px]:grid-cols-2 sm:gap-x-6 lg:grid-cols-4">
            {related.map((r, i) => (
              <Reveal key={r.slug} from="right-far" delay={i * 100}>
                <ProductCard product={r} ui={pu} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
