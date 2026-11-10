const LOCALE_COOKIE = "NEXT_LOCALE";

export function getLocaleCookie(): string | undefined {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(
    new RegExp(`(^| )${LOCALE_COOKIE}=([^;]+)`),
  );
  return match ? match[2] : undefined;
}

export function setLocaleCookie(locale: string, days = 365): void {
  if (typeof document === "undefined") return;
  const expires = new Date(
    Date.now() + days * 24 * 60 * 60 * 1000,
  ).toUTCString();
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; expires=${expires}; SameSite=Lax`;
}

export function isValidLocale(locale: string): locale is "id" | "en" {
  return locale === "id" || locale === "en";
}