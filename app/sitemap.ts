import type { MetadataRoute } from "next";
import { siteUrl } from "@/src/data/site";

const locales = ["id", "en"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) => [
    {
      url: `${siteUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: locale === "id" ? 1 : 0.8,
    },
    {
      url: `${siteUrl}/${locale}#contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ]);
}
