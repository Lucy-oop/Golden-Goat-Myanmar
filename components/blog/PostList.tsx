"use client";

import { useState } from "react";
import type { Content, Post } from "@/lib/content";
import PostCard from "./PostCard";

export default function PostList({ posts, ui, exclude }: { posts: Post[]; ui: Content["ui"]["blog"]; exclude?: string }) {
  const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))] as ("All" | Post["category"])[];
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const list = posts.filter((p) => p.slug !== exclude && (active === "All" || p.category === active));

  return (
    <div>
      <div role="tablist" aria-label={ui.filterLabel} className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:px-0">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            role="tab"
            aria-selected={active === c}
            onClick={() => setActive(c)}
            className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
              active === c ? "border-tamarind bg-tamarind text-cream" : "border-ink/15 bg-white text-ink/75 hover:border-tamarind"
            }`}
          >
            {c === "All" ? ui.all : ui.categories[c]}
          </button>
        ))}
      </div>
      <div className="mt-12 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => (
          <div key={`${active}-${p.slug}`} className="animate-[fade-in-right_0.6s_ease_both]" style={{ animationDelay: `${(i % 3) * 90}ms` }}>
            <PostCard post={p} ui={ui} />
          </div>
        ))}
      </div>
      {list.length === 0 && <p className="mt-12 text-center text-muted">{ui.empty}</p>}
    </div>
  );
}
