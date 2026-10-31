import Image from "@/components/ui/Image";
import Link from "@/components/ui/Link";
import { getContent } from "@/lib/content";

export default async function Footer() {
  const { c } = await getContent();
  const { company, nav, trendingProducts } = c;
  const ui = c.ui.footer;
  return (
    <footer className="bg-volcanic text-white/70">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <Image src="/images/brand/logo-mark.png" alt="Golden G.O.A.T Myanmar" width={120} height={104} className="h-24 w-auto" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed">
            {ui.blurb}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {company.certifications.map((c) => (
              <li key={c} className="rounded-full border border-gold-600/40 px-3 py-1 text-[11px] font-semibold tracking-wide text-gold-200">
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-xs font-bold tracking-[0.2em] text-white uppercase">{ui.explore}</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-gold-400">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-xs font-bold tracking-[0.2em] text-white uppercase">{ui.trending}</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {trendingProducts.map((p) => (
              <li key={p.slug}>
                <Link href={`/products/${p.slug}`} className="transition hover:text-gold-400">
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-xs font-bold tracking-[0.2em] text-white uppercase">{ui.contact}</h3>
          <address className="mt-5 space-y-3 text-sm not-italic">
            <p>{company.address}</p>
            {company.phones.map((p) => (
              <p key={p}>
                <a href={`tel:${p}`} className="transition hover:text-gold-400">
                  {p}
                </a>
              </p>
            ))}
            {company.emails.map((e) => (
              <p key={e} className="text-[13px] [overflow-wrap:anywhere]">
                <a href={`mailto:${e}`} className="transition hover:text-gold-400">
                  {e}
                </a>
              </p>
            ))}
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © 2026 {company.name} {ui.rights}
          </p>
          <p className="text-gold-400/80">{ui.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
