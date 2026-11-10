import translationsId from "./translations.id.json";
import translationsEn from "./translations.en.json";

export type Locale = "id" | "en";

export const locales: Locale[] = ["id", "en"];

export function isValidLocale(
  locale: string | undefined
): locale is Locale {
  return locales.includes(locale as Locale);
}

export const defaultLocale: Locale = "id";

const translationMap: Record<Locale, Record<string, unknown>> = {
  id: translationsId as Record<string, unknown>,
  en: translationsEn as Record<string, unknown>,
};

export function getTranslation(locale: Locale): Record<string, unknown> {
  return translationMap[locale] ?? translationMap[defaultLocale];
}

function resolveKey(obj: Record<string, unknown>, key: string): unknown {
  const parts = key.split(".");
  let current: unknown = obj;
  for (const part of parts) {
    if (typeof current !== "object" || current === null || !(part in current)) {
      return undefined;
    }
    current = (current as Record<string, unknown>)[part];
  }
  return current;
}

function interpolate(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_match, key) => values[key] ?? `{${key}}`);
}

export type TranslationKey = string;

export function t(
  locale: Locale,
  key: TranslationKey,
  values?: Record<string, string>,
): string {
  const translations = getTranslation(locale);
  const value = resolveKey(translations, key);

  if (typeof value === "string") {
    return values ? interpolate(value, values) : value;
  }

  // Fallback ke bahasa Indonesia jika key tidak ditemukan di locale target
  if (locale !== defaultLocale) {
    const fallback = resolveKey(getTranslation(defaultLocale), key);
    if (typeof fallback === "string") {
      return values ? interpolate(fallback, values) : fallback;
    }
  }

  return key;
}

export function getTranslationValue(
  locale: Locale,
  key: TranslationKey,
): unknown {
  const translations = getTranslation(locale);
  const value = resolveKey(translations, key);

  if (value !== undefined) {
    return value;
  }

  if (locale !== defaultLocale) {
    return resolveKey(getTranslation(defaultLocale), key);
  }

  return undefined;
}

export function getLocaleConfig(locale: Locale) {
  const translations = getTranslation(locale);
  return {
    locale: (translations.locale as string) ?? locale,
    htmlLang: (translations.htmlLang as string) ?? locale,
    ogLocale: (translations.ogLocale as string) ?? `${locale}_${locale.toUpperCase()}`,
    jsonLdLanguage: (translations.jsonLdLanguage as string) ?? locale,
  };
}