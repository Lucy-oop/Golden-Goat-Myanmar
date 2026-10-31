import { lang } from "next/root-params";
import { notFound } from "next/navigation";
import { hasLocale, type Locale } from "@/lib/i18n";
import * as en from "./en";
import { my } from "./my";
import { zh } from "./zh";

export type { Post, Product } from "./en";

// Everything except the Product / Post type exports.
export type Content = Omit<typeof en, "Product" | "Post">;

// Translations mirror the English shape but only carry text: arrays line up by index,
// and anything they leave out (images, slugs, sizes) falls back to English.
export type Translation = DeepPartial<Content>;
type DeepPartial<T> = T extends readonly (infer U)[]
  ? DeepPartial<U>[]
  : T extends object
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : T;

function merge<T>(base: T, over: unknown): T {
  if (over === undefined || over === null) return base;
  if (Array.isArray(base)) {
    const o = over as unknown[];
    return base.map((item, i) => merge(item, o[i])) as T;
  }
  if (typeof base === "object" && base !== null) {
    const out = { ...base } as Record<string, unknown>;
    for (const [k, v] of Object.entries(over as object)) out[k] = merge((base as Record<string, unknown>)[k], v);
    return out as T;
  }
  return over as T;
}

const translations: Record<Locale, Translation> = { en: {}, zh, my };
const cache = new Map<Locale, Content>();

export function getContentFor(locale: Locale): Content {
  if (!cache.has(locale)) cache.set(locale, merge(en as Content, translations[locale]));
  return cache.get(locale)!;
}

// For Server Components: reads the locale from the [lang] root segment.
export async function getLocale(): Promise<Locale> {
  const l = await lang();
  if (!hasLocale(l)) notFound();
  return l;
}

export async function getContent() {
  const locale = await getLocale();
  return { locale, c: getContentFor(locale) };
}
