import type { Metadata } from "next";
import FitImage from "@/components/ui/FitImage";
import Link from "@/components/ui/Link";
import { getContent } from "@/lib/content";
import { ChevronIcon } from "@/components/ui/ChevronButton";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import PostList from "@/components/blog/PostList";

export async function generateMetadata(): Promise<Metadata> {
  const { c } = await getContent();
  return c.ui.blog.meta;
}

export default async function BlogPage() {
  const { c } = await getContent();
  const ui = c.ui.blog;
  const [featured] = c.posts;
  return (
    <>
      <PageHero
        eyebrow={ui.hero.eyebrow}
        title={ui.hero.title}
        text={ui.hero.text}
        image="/images/events/trade-fair.jpg"
        crumbs={[{ label: ui.hero.eyebrow }]}
      />

      <section className="overflow-x-clip">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal>
            <Link href={`/blog/${featured.slug}`} className="group grid overflow-hidden rounded-3xl bg-volcanic text-white lg:grid-cols-2">
              <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-96">
                <FitImage src={featured.image} alt={featured.title} contain={featured.portrait} sizes="(min-width: 1024px) 50vw, 100vw" className="transition duration-700 group-hover:scale-105" />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-12">
                <p className="text-xs font-bold tracking-[0.25em] text-gold-200 uppercase">
                  {ui.featured} · {ui.categories[featured.category]} · {featured.date}
                </p>
                <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">{featured.title}</h2>
                <p className="mt-4 leading-relaxed text-white/75">{featured.excerpt}</p>
                <span className="mt-8 inline-flex items-center gap-2 font-semibold text-gold-200">
                  {ui.readStory} <ChevronIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>

          <div className="mt-20">
            <PostList posts={c.posts} ui={ui} exclude={featured.slug} />
          </div>
        </div>
      </section>
    </>
  );
}
