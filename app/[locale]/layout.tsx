import type { Metadata } from "next";
import { siteUrl } from "@/src/data/site";
import { t, getLocaleConfig, type Locale } from "@/src/data/translations";

export const dynamicParams = false;

export async function generateStaticParams() {
  return [{ locale: "id" }, { locale: "en" }];
}

export async function generateMetadata({
  params,
}: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = (locale === "id" || locale === "en") ? locale : "id";
  const config = getLocaleConfig(validLocale as Locale);

  const portfolioUrl = siteUrl;
  const title = t(validLocale, "site.title");
  const description = t(validLocale, "site.description");
  const keywords = t(validLocale, "site.keywords");
  const ogTitle = t(validLocale, "site.ogTitle");
  const ogDescription = t(validLocale, "site.ogDescription");
  const twitterTitle = t(validLocale, "site.twitterTitle");
  const twitterDescription = t(validLocale, "site.twitterDescription");
  const siteName = t(validLocale, "site.siteName");

  return {
    metadataBase: new URL(portfolioUrl),
    title,
    description,
    keywords: Array.isArray(keywords) ? keywords : [keywords],
    alternates: {
      canonical: `/${validLocale}`,
      languages: {
        id: "/id",
        en: "/en",
        "x-default": "/id",
      },
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: `/${validLocale}`,
      siteName,
      locale: config.ogLocale,
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: twitterTitle,
      description: twitterDescription,
      images: ["/opengraph-image"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: localeParam } = await params;
  const locale: Locale =
    localeParam === "id" || localeParam === "en"
      ? (localeParam as Locale)
      : "id";

  const config = getLocaleConfig(locale);

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: t(locale, "jsonLd.person.name"),
    url: siteUrl,
    jobTitle: t(locale, "jsonLd.person.jobTitle"),
    description: t(locale, "jsonLd.person.description"),
    address: {
      "@type": "PostalAddress",
      addressLocality: t(locale, "jsonLd.person.addressLocality"),
      addressRegion: t(locale, "jsonLd.person.addressRegion"),
      addressCountry: t(locale, "jsonLd.person.addressCountry"),
    },
    sameAs: [
      "https://github.com/emil-prayoga",
      "https://linkedin.com/in/emilprayogaalbani",
      "https://instagram.com/emil_prayoga_albani",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: t(locale, "jsonLd.person.siteName"),
    url: siteUrl,
    inLanguage: config.jsonLdLanguage,
    author: {
      "@type": "Person",
      name: t(locale, "jsonLd.person.name"),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {children}
    </>
  );
}