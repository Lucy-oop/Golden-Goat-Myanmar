"use client";

import Image from "@/components/ui/Image";
import Link from "@/components/ui/Link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Content } from "@/lib/content";
import { stripLocale, type Locale } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header({ nav, ui, locale }: { nav: Content["nav"]; ui: Content["ui"]["header"]; locale: Locale }) {
  const pathname = stripLocale(usePathname());
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Transparent over each page banner; on home, until the pinned hero story has scrolled past.
    const onScroll = () => {
      const end = document.getElementById("hero-end");
      setScrolled(end ? end.getBoundingClientRect().top <= 80 : window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-volcanic/95 shadow-lg backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image src="/images/brand/logo-icon.png" alt="" width={70} height={40} priority className="h-9 w-auto" />
          <span className="font-display text-lg leading-none whitespace-nowrap text-white">
            Golden G.O.A.T
            <span className="block font-sans text-[10px] font-semibold tracking-[0.3em] text-gold-400 uppercase">Myanmar</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-8" aria-label={ui.mainNav}>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-xs font-bold tracking-[0.18em] whitespace-nowrap uppercase transition hover:text-gold-400 ${
                pathname === item.href ? "text-gold-400" : "text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-4">
          <div className="hidden sm:block">
            <LanguageSwitcher dark locale={locale} />
          </div>
          <Link
            href="/contact"
            className="bg-gold-gradient hidden rounded-full px-5 py-2.5 text-xs font-bold tracking-wide whitespace-nowrap text-volcanic uppercase transition hover:brightness-110 md:inline-block lg:hidden xl:inline-block"
          >
            {ui.join}
          </Link>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? ui.closeMenu : ui.openMenu}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/30 text-white lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
              {open ? <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" /> : <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="h-[calc(100dvh-5rem)] overflow-y-auto border-t border-white/10 bg-volcanic px-4 pb-10 sm:px-6 lg:hidden">
          <nav className="flex flex-col py-6" aria-label={ui.mobileNav}>
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`border-b border-white/10 py-4 font-display text-2xl ${
                  pathname === item.href ? "text-gold-400" : "text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center justify-between">
            <LanguageSwitcher dark locale={locale} />
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="bg-gold-gradient rounded-full px-5 py-3 text-xs font-bold tracking-wide text-volcanic uppercase"
            >
              {ui.join}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
