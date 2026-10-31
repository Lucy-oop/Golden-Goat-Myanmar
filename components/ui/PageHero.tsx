import Image from "@/components/ui/Image";
import Link from "@/components/ui/Link";
import { getContent } from "@/lib/content";

// Banner at the top of inner pages: photo, centred title, breadcrumb.
export default async function PageHero({
  eyebrow,
  title,
  text,
  image,
  crumbs = [],
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  image: string;
  crumbs?: { label: string; href?: string }[];
}) {
  const { c } = await getContent();
  return (
    <section className="relative flex min-h-[62svh] items-center justify-center overflow-hidden bg-volcanic pt-20 text-center">
      <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-volcanic via-volcanic/65 to-volcanic/45" />
      <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <nav aria-label={c.ui.common.breadcrumb} className="mb-6 text-xs font-semibold tracking-[0.2em] text-white/60 uppercase">
          <Link href="/" className="-mx-2 -my-3 inline-block px-2 py-3 hover:text-gold-200">
            {c.ui.common.home}
          </Link>
          {crumbs.map((c) => (
            <span key={c.label}>
              <span className="mx-2 opacity-50">/</span>
              {c.href ? (
                <Link href={c.href} className="-mx-2 -my-3 inline-block px-2 py-3 hover:text-gold-200">
                  {c.label}
                </Link>
              ) : (
                <span className="text-gold-200">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        {eyebrow && <p className="mb-4 text-xs font-bold tracking-[0.3em] text-gold-200 uppercase">{eyebrow}</p>}
        <h1 className="font-display text-4xl leading-tight font-medium text-white sm:text-6xl">{title}</h1>
        {text && <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">{text}</p>}
      </div>
    </section>
  );
}
