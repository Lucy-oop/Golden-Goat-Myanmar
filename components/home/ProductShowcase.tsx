import { getContent } from "@/lib/content";
import Carousel from "@/components/ui/Carousel";
import ChevronButton from "@/components/ui/ChevronButton";
import Reveal from "@/components/ui/Reveal";
import ProductCard from "@/components/products/ProductCard";
import Sunburst from "@/components/products/Sunburst";

export default async function ProductShowcase() {
  const { c } = await getContent();
  const ui = c.ui.home.products;
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <Sunburst />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold tracking-[0.25em] text-gold-600 uppercase">{ui.eyebrow}</p>
          <h2 className="font-display text-4xl font-medium text-tamarind sm:text-5xl">{ui.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">{ui.text}</p>
        </Reveal>
        <Carousel sideArrows labels={c.ui.common.carousel} itemClassName="w-[70%] sm:w-[42%] lg:w-[calc(25%-18px)]">
          {c.products.map((p, i) => (
            <Reveal key={p.slug} from="right-far" delay={Math.min(i, 4) * 120} className="h-full">
              <ProductCard product={p} ui={c.ui.product} />
            </Reveal>
          ))}
        </Carousel>
        <div className="mt-12 text-center">
          <ChevronButton href="/products" variant="outline">
            {ui.viewAll}
          </ChevronButton>
        </div>
      </div>
    </section>
  );
}
