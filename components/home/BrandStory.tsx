import Image from "@/components/ui/Image";
import { getContent } from "@/lib/content";
import ChevronButton from "@/components/ui/ChevronButton";
import CountUp from "@/components/ui/CountUp";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default async function BrandStory() {
  const { c } = await getContent();
  const { story } = c;
  const ui = c.ui.home.story;
  return (
    <section className="overflow-x-clip">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <Reveal from="left">
          <SectionHeading eyebrow={story.eyebrow} title={story.title} />
          <div className="mt-6 space-y-4 leading-relaxed text-muted">
            {story.paragraphs.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-4">
            <Image src={story.founder.image} alt={story.founder.name} width={56} height={56} className="h-14 w-14 rounded-full object-cover" />
            <div>
              <p className="font-display text-lg">{story.founder.name}</p>
              <p className="text-xs text-muted">{story.founder.role}</p>
            </div>
          </div>
          <div className="mt-10">
            <ChevronButton href="/about">{ui.explore}</ChevronButton>
          </div>
        </Reveal>

        <Reveal from="right" delay={150} className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image src={story.image} alt={ui.photoAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="bg-gold-gradient absolute -top-6 -right-2 rounded-2xl px-5 py-4 text-volcanic shadow-xl sm:-right-6">
            <p className="font-display text-3xl">
              <CountUp value={2021} separator={false} duration={1800} />
            </p>
            <p className="text-xs font-semibold">{ui.badge}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
