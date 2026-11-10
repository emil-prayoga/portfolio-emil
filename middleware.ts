import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Locale, locales } from "./src/data/translations";

const LOCALE_COOKIE = "NEXT_LOCALE";
const DEFAULT_LOCALE = "id";

export function isValidLocale(
  locale: string | undefined
): locale is Locale {
  return typeof locale === "string" &&
    locales.includes(locale as Locale);
}

function getLocaleFromCookie(request: NextRequest): string | undefined {
  return request.cookies.get(LOCALE_COOKIE)?.value;
}

export  function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip Next.js internals and static special files
  if (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/api/") ||
    pathname.startsWith("/sitemap.xml") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/opengraph-image") ||
    pathname.startsWith("/_vercel") ||
    pathname.startsWith("/favicon.ico")
  ) {
    return NextResponse.next();
  }

  // Check if path already starts with a valid locale
  const pathLocale = pathname.split("/")[1];
  if (isValidLocale(pathLocale)) {
    return NextResponse.next();
  }

  // Root path "/" - redirect to default or cookie-based locale
  if (pathname === "/") {
    const cookieLocale = getLocaleFromCookie(request);
    const locale = isValidLocale(cookieLocale) ? cookieLocale : DEFAULT_LOCALE;
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}`;
    return NextResponse.redirect(url);
  }

  // Any other path without locale - redirect to default locale
  const cookieLocale = getLocaleFromCookie(request);
  const locale = isValidLocale(cookieLocale) ? cookieLocale : DEFAULT_LOCALE;
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - sitemap.xml, robots.txt
     * - opengraph-image
     * - public folder files
     */
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|opengraph-image|.*\\..*).*)",
  ],
};