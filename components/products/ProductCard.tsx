import Image from "@/components/ui/Image";
import Link from "@/components/ui/Link";
import type { Content, Product } from "@/lib/content";
import ProductPack from "@/components/ui/ProductPack";

export default function ProductCard({ product: p, ui }: { product: Product; ui: Content["ui"]["product"] }) {
  return (
    <Link href={`/products/${p.slug}`} className="group flex h-full flex-col px-2">
      <div className="relative flex h-64 items-end justify-center transition duration-500 group-hover:-translate-y-2 sm:h-80">
        {p.cutout ? (
          <Image src={p.cutout} alt={p.name} fill sizes="(min-width: 1024px) 25vw, 70vw" className={`object-contain object-bottom drop-shadow-[0_18px_18px_rgba(35,26,18,0.18)] ${p.pack === "pouch" ? "pt-10" : ""}`} />
        ) : (
          <ProductPack product={p} />
        )}
        {p.badge && (
          <span className="absolute top-2 left-0 rounded-full bg-volcanic px-3 py-1 text-[11px] font-bold tracking-wide text-gold-200">
            {ui.badges[p.badge]}
          </span>
        )}
      </div>
      <p className="mt-6 text-[11px] font-bold tracking-[0.2em] text-gold-600 uppercase">{ui.categories[p.category]}</p>
      <h3 className="mt-1 text-base leading-snug font-bold text-tamarind group-hover:underline sm:text-lg">
        {ui.brand} {p.name} | {p.sizes.map((s) => s.size).join(", ")}
      </h3>
    </Link>
  );
}
