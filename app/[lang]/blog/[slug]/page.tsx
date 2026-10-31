import type { Metadata } from "next";
import Image from "@/components/ui/Image";
import FitImage from "@/components/ui/FitImage";
import Link from "@/components/ui/Link";
import { notFound } from "next/navigation";
import { getContent, getContentFor, type Post } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import ChevronButton, { ChevronIcon } from "@/components/ui/ChevronButton";
import CtaBand from "@/components/ui/CtaBand";
import Reveal from "@/components/ui/Reveal";
import PostCard from "@/components/blog/PostCard";
import ReadingProgress from "@/components/blog/ReadingProgress";
import ShareButtons from "@/components/blog/ShareButtons";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getContentFor("en").posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { c } = await getContent();
  const post = c.posts.find((p) => p.slug === slug);
  return post ? { title: `${post.title} · Golden Goat Myanmar`, description: post.excerpt } : {};
}

// ~200 words a minute for English; Chinese and Burmese don't space words, so count characters.
function readingMinutes(post: Post, locale: Locale) {
  const text = post.body.join(" ");
  const units = locale === "en" ? text.split(/\s+/).length / 200 : text.replace(/\s/g, "").length / 350;
  return Math.max(1, Math.round(units));
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const { locale, c } = await getContent();
  const { posts } = c;
  const ui = c.ui.blog;
  const index = posts.findIndex((p) => p.slug === slug);
  if (index < 0) notFound();
  const post = posts[index];

  const minutes = readingMinutes(post, locale);
  const category = ui.categories[post.category];
  const prev = posts[index - 1];
  const next = posts[index + 1];
  const more = posts.filter((p) => p.slug !== post.slug && p.category === post.category).concat(posts.filter((p) => p.category !== post.category)).slice(0, 3);
  const [lead, ...rest] = post.body;
  const share = { share: ui.share, copyLink: ui.copyLink, copied: ui.copied };

  return (
    <>
      <ReadingProgress targetId="article-body" />

      <article>
        {/* Header */}
        <header className="relative overflow-hidden bg-volcanic pt-28 pb-36 text-white sm:pt-36 sm:pb-48">
          <Image src={post.image} alt="" fill priority sizes="100vw" className="scale-110 object-cover opacity-25 blur-2xl" />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <nav aria-label={c.ui.common.breadcrumb} className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-[0.15em] text-white/60 uppercase">
              <Link href="/" className="-mx-2 -my-3 inline-block px-2 py-3 hover:text-gold-200">
                {c.ui.common.home}
              </Link>
              <span className="opacity-40">/</span>
              <Link href="/blog" className="-mx-2 -my-3 inline-block px-2 py-3 hover:text-gold-200">
                {ui.hero.eyebrow}
              </Link>
              <span className="opacity-40">/</span>
              <span className="text-gold-200">{category}</span>
            </nav>

            <div className="mt-8 max-w-4xl">
              <span className="inline-block rounded-full border border-gold-200/40 bg-gold-200/10 px-3.5 py-1 text-xs font-bold tracking-wide text-gold-200">
                {category}
              </span>
              <h1 className="mt-5 font-display text-4xl leading-[1.1] font-medium sm:text-5xl lg:text-6xl">{post.title}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/75 sm:text-xl">{post.excerpt}</p>
            </div>

            <div className="mt-10 flex flex-col gap-5 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-white/70">
                <span>{post.date}</span>
                <span aria-hidden className="h-1 w-1 rounded-full bg-gold-400" />
                <span>
                  {minutes} {ui.minRead}
                </span>
              </p>
              <ShareButtons title={post.title} ui={share} dark />
            </div>
          </div>
        </header>

        {/* Feature image, overlapping the header */}
        <div className="relative mx-auto -mt-24 max-w-6xl px-4 sm:-mt-32 sm:px-6 lg:px-8">
          <Reveal className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-sand shadow-2xl shadow-volcanic/25 sm:aspect-[16/9] lg:aspect-[21/9]">
            <FitImage src={post.image} alt={post.title} contain={post.portrait} sizes="(min-width: 1152px) 1152px, 100vw" />
          </Reveal>
        </div>

        {/* Body + aside */}
        <div className="mx-auto grid max-w-6xl gap-14 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-20 lg:px-8">
          <div id="article-body" className="max-w-[680px]">
            <p className="text-xl leading-relaxed text-ink sm:text-[22px]">{lead}</p>
            <div className="mt-8 space-y-6 text-[17px] leading-[1.85] text-ink/80">
              {rest.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </div>

            {post.link && (
              <a
                href={post.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-12 flex items-center gap-5 rounded-2xl border border-ink/10 bg-white p-5 transition hover:border-gold-400 hover:shadow-lg sm:p-6"
              >
                <span className="bg-gold-gradient grid h-12 w-12 shrink-0 place-items-center rounded-full text-volcanic">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
                    <path d="M8 5.5v13l11-6.5-11-6.5Z" />
                  </svg>
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-bold tracking-[0.2em] text-gold-700 uppercase">{ui.externalLabel}</span>
                  <span className="mt-1 block font-semibold text-ink">{post.link.label}</span>
                  <span className="block truncate text-sm text-muted">{new URL(post.link.href).hostname.replace(/^www\./, "")}</span>
                </span>
                <ChevronIcon className="h-5 w-5 shrink-0 text-tamarind transition-transform group-hover:translate-x-1" />
              </a>
            )}

            <div className="mt-12 border-t border-ink/10 pt-8 lg:hidden">
              <ShareButtons title={post.title} ui={share} />
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl border border-ink/10 bg-white p-6">
              <p className="text-xs font-bold tracking-[0.2em] text-gold-700 uppercase">{ui.aboutStory}</p>
              <dl className="mt-4 divide-y divide-ink/10 text-sm">
                {[
                  [ui.category, category],
                  [ui.published, post.date],
                  [ui.readingTime, `${minutes} ${ui.minRead}`],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-4 py-3">
                    <dt className="text-muted">{k}</dt>
                    <dd className="text-right font-semibold">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-5 hidden border-t border-ink/10 pt-5 lg:block">
                <ShareButtons title={post.title} ui={share} />
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-volcanic p-6 text-white">
              <Image src="/images/story/popa-landscape.jpg" alt="" fill sizes="300px" className="object-cover opacity-30" />
              <div className="relative">
                <p className="font-display text-2xl leading-snug">{ui.ctaTitle}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{ui.ctaText}</p>
                <div className="mt-6">
                  <ChevronButton href="/contact">{ui.ctaButton}</ChevronButton>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </article>

      {/* Previous / next */}
      {(prev || next) && (
        <nav aria-label={`${ui.prev} / ${ui.next}`} className="mx-auto grid max-w-6xl gap-4 px-4 pb-20 sm:grid-cols-2 sm:px-6 lg:px-8">
          {[
            { p: prev, label: ui.prev, align: "" },
            { p: next, label: ui.next, align: "sm:col-start-2 sm:flex-row-reverse sm:text-right" },
          ].map(({ p, label, align }) =>
            p ? (
              <Link
                key={label}
                href={`/blog/${p.slug}`}
                className={`group flex items-center gap-4 rounded-2xl border border-ink/10 bg-white p-4 transition hover:border-gold-400 hover:shadow-lg ${align}`}
              >
                <span className="relative h-20 w-24 shrink-0 overflow-hidden rounded-xl bg-sand">
                  <Image src={p.image} alt="" fill sizes="96px" className="object-cover transition duration-500 group-hover:scale-105" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-bold tracking-[0.2em] text-gold-700 uppercase">{label}</span>
                  <span className="mt-1 line-clamp-2 block font-display text-lg leading-snug text-ink">{p.title}</span>
                </span>
              </Link>
            ) : null,
          )}
        </nav>
      )}

      <section className="bg-sand py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
            <h2 className="font-display text-3xl sm:text-4xl">{ui.more}</h2>
            <ChevronButton href="/blog" variant="outline">
              {ui.allStories}
            </ChevronButton>
          </div>
          <div className="mt-10 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <PostCard post={p} ui={ui} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
