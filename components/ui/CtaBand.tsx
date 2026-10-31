import Image from "@/components/ui/Image";
import { getContent } from "@/lib/content";
import ChevronButton from "./ChevronButton";
import Reveal from "./Reveal";

// Closing call to action shared by the inner pages.
export default async function CtaBand({ title, text }: { title?: string; text?: string }) {
  const { c } = await getContent();
  const ui = c.ui.cta;
  return (
    <section className="relative overflow-hidden bg-volcanic py-20 sm:py-24">
      <Image src="/images/story/hero-popa-bottles.jpg" alt="" fill sizes="100vw" className="object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-volcanic via-volcanic/85 to-volcanic/60" />
      <Reveal className="relative mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl">{title ?? ui.title}</h2>
          <p className="mt-4 text-white/75">{text ?? ui.text}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <ChevronButton href="/contact">{ui.join}</ChevronButton>
          <ChevronButton href="/products" variant="light">
            {ui.products}
          </ChevronButton>
        </div>
      </Reveal>
    </section>
  );
}
