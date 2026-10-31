"use client";

import { usePathname } from "next/navigation";
import { localeCookie, localeLabels, locales, stripLocale, type Locale } from "@/lib/i18n";
import { basePath } from "@/lib/site";

// Loads the same page in the other language (/en/about -> /zh/about) and remembers the choice
// in a cookie, which the site root uses to pick the language. A full load clears any routes the
// client router cached in the old language.
export default function LanguageSwitcher({ dark, locale }: { dark: boolean; locale: Locale }) {
  const path = stripLocale(usePathname());

  const choose = (code: Locale) => {
    if (code === locale) return;
    document.cookie = `${localeCookie}=${code}; path=/; max-age=31536000; samesite=lax`;
    window.location.assign(`${basePath}/${code}${path === "/" ? "" : path}/`);
  };

  return (
    <div className={`flex items-center gap-1 text-xs font-semibold ${dark ? "text-white/80" : "text-ink/70"}`}>
      {locales.map((code, i) => (
        <span key={code} className="flex items-center gap-1 whitespace-nowrap">
          {i > 0 && <span className="opacity-30">/</span>}
          <button
            type="button"
            lang={localeLabels[code].htmlLang}
            title={localeLabels[code].name}
            onClick={() => choose(code)}
            aria-current={code === locale ? "true" : undefined}
            className={`rounded px-1.5 py-1 transition hover:text-gold-200 ${code === locale ? "text-gold-400" : ""}`}
          >
            {localeLabels[code].short}
          </button>
        </span>
      ))}
    </div>
  );
}
