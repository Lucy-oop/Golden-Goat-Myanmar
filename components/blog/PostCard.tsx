import FitImage from "@/components/ui/FitImage";
import Link from "@/components/ui/Link";
import type { Content, Post } from "@/lib/content";
import { ChevronIcon } from "@/components/ui/ChevronButton";

export default function PostCard({ post, ui }: { post: Post; ui: Content["ui"]["blog"] }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col">
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-sand">
        <FitImage src={post.image} alt={post.title} contain={post.portrait} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="transition duration-500 group-hover:scale-105" />
      </div>
      <p className="mt-5 text-[11px] font-bold tracking-[0.2em] text-gold-600 uppercase">
        {ui.categories[post.category]} <span className="text-muted">· {post.date}</span>
      </p>
      <h3 className="mt-2 font-display text-xl leading-snug transition group-hover:text-gold-700">{post.title}</h3>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{post.excerpt}</p>
      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">
        {ui.readMore} <ChevronIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
