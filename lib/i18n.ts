// Locales shared by the proxy, server components and client components.

export const locales = ["en", "zh", "my"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
export const localeCookie = "NEXT_LOCALE";

export const localeLabels: Record<Locale, { short: string; name: string; htmlLang: string }> = {
  en: { short: "EN", name: "English", htmlLang: "en" },
  zh: { short: "中文", name: "简体中文", htmlLang: "zh-Hans" },
  my: { short: "မြန်မာ", name: "မြန်မာ", htmlLang: "my" },
};

export const hasLocale = (value: string): value is Locale => (locales as readonly string[]).includes(value);

// "/zh/about/" -> "/about"; "/zh" -> "/"
export function stripLocale(pathname: string) {
  const [, first, ...rest] = pathname.replace(/\/+$/, "").split("/");
  return hasLocale(first) ? `/${rest.join("/")}` : pathname.replace(/\/+$/, "") || "/";
}
