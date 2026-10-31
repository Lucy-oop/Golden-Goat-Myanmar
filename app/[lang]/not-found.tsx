import ChevronButton from "@/components/ui/ChevronButton";
import { getContent } from "@/lib/content";

export default async function NotFound() {
  const { c } = await getContent();
  const ui = c.ui.notFound;
  return (
    <section className="grid min-h-[80svh] place-items-center bg-volcanic px-4 pt-20 text-center text-white">
      <div>
        <p className="font-display text-8xl text-gold-gradient">404</p>
        <h1 className="mt-4 font-display text-3xl">{ui.title}</h1>
        <p className="mt-3 text-white/70">{ui.text}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <ChevronButton href="/">{ui.home}</ChevronButton>
          <ChevronButton href="/products" variant="light">
            {ui.products}
          </ChevronButton>
        </div>
      </div>
    </section>
  );
}
