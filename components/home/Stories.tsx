import { getContent } from "@/lib/content";
import Carousel from "@/components/ui/Carousel";
import ChevronButton from "@/components/ui/ChevronButton";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import PostCard from "@/components/blog/PostCard";

export default async function Stories() {
  const { c } = await getContent();
  const ui = c.ui.home.stories;
  // Latest company news (product write-ups live on the blog only).
  const latest = c.posts.filter((p) => p.category !== "Products").slice(0, 5);
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <Reveal className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading eyebrow={ui.eyebrow} title={ui.title} />
        <ChevronButton href="/blog" variant="outline">
          {ui.viewAll}
        </ChevronButton>
      </Reveal>
      <Carousel labels={c.ui.common.carousel} itemClassName="w-[82%] sm:w-[45%] lg:w-[calc(33.333%-16px)]">
        {latest.map((p) => (
          <PostCard key={p.slug} post={p} ui={c.ui.blog} />
        ))}
      </Carousel>
    </section>
  );
}
