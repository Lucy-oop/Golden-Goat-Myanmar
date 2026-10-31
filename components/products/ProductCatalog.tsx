"use client";

import { useState } from "react";
import type { Content, Product } from "@/lib/content";
import ProductCard from "./ProductCard";

const filters: ("All" | Product["category"])[] = ["All", "Juice", "Squash", "Paste", "Jaggery", "Snack"];

export default function ProductCatalog({ products, ui }: { products: Product[]; ui: Content["ui"]["product"] }) {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const shown = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <div>
      <div role="tablist" aria-label={ui.filterLabel} className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:justify-center sm:px-0">
        {filters.map((f) => {
          const count = f === "All" ? products.length : products.filter((p) => p.category === f).length;
          return (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={active === f}
              onClick={() => setActive(f)}
              className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
                active === f ? "border-tamarind bg-tamarind text-cream" : "border-ink/15 bg-white text-ink/75 hover:border-tamarind"
              }`}
            >
              {f === "All" ? ui.all : ui.categories[f]} <span className="opacity-60">({count})</span>
            </button>
          );
        })}
      </div>
      <div className="mt-14 grid gap-x-4 gap-y-14 min-[480px]:grid-cols-2 sm:gap-x-6 lg:grid-cols-4">
        {shown.map((p, i) => (
          <div key={`${active}-${p.slug}`} className="animate-[fade-in-right_0.6s_ease_both]" style={{ animationDelay: `${(i % 4) * 90}ms` }}>
            <ProductCard product={p} ui={ui} />
          </div>
        ))}
      </div>
    </div>
  );
}
