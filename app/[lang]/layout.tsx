import type { Metadata } from "next";
import { Fraunces, Manrope, Noto_Sans_Myanmar } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import RouteScroll from "@/components/layout/RouteScroll";
import { getContent } from "@/lib/content";
import { localeLabels, locales } from "@/lib/i18n";
import "../globals.css";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
// Latin fonts have no Burmese glyphs; this one is only downloaded when Myanmar text is on the page.
const notoMyanmar = Noto_Sans_Myanmar({ subsets: ["myanmar"], weight: ["400", "600", "700"], variable: "--font-noto-myanmar", preload: false });

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata(): Promise<Metadata> {
  const { c } = await getContent();
  return { title: c.ui.meta.title, description: c.ui.meta.description };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { locale, c } = await getContent();
  return (
    <html lang={localeLabels[locale].htmlLang} data-scroll-behavior="smooth" className={`${fraunces.variable} ${manrope.variable} ${notoMyanmar.variable}`}>
      <body>
        <Header nav={c.nav} ui={c.ui.header} locale={locale} />
        <main>
          <RouteScroll>{children}</RouteScroll>
        </main>
        <Footer />
      </body>
    </html>
  );
}
