import Image from "next/image";
import Link from "next/link";
import profileImg from "@/src/img/emil.png";
import { ArrowDownRight } from "lucide-react";
import { t, type Locale } from "@/src/data/translations";

export default function HeroSection({ locale }: Readonly<{ locale: Locale }>) {
  return (
    <section id="home" className="hero gallery-shell grid grid-cols-1 items-center gap-12 md:grid-cols-[1.1fr_.9fr] md:gap-14 lg:gap-20">
      <div className="flex flex-col items-start">
        <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: t(locale, "hero.heading") }} />
        <p className="hero-role mt-6">{t(locale, "hero.role")}</p>
        <p className="hero-copy mt-5">{t(locale, "hero.copy")}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link href={`/${locale}#contact`} className="gallery-focus hero-button inline-flex min-h-12 items-center gap-3 px-6 text-sm font-bold">
            {t(locale, "hero.ctaContact")} <ArrowDownRight aria-hidden="true" className="h-4 w-4" />
          </Link>
          <a href="/cv" download className="gallery-focus hero-secondary inline-flex min-h-12 items-center px-6 text-sm font-semibold text-[#f1efe9] transition-colors hover:bg-white/10" aria-label={t(locale, "cv.downloadAria")}>
            {t(locale, "hero.ctaDownloadCV")}
          </a>
        </div>
      </div>

      <figure className="hero-portrait mx-auto w-full max-w-116 md:ml-auto">
        <div className="relative aspect-4/5">
          <Image src={profileImg} alt={t(locale, "hero.imageAlt")} fill priority placeholder="blur" sizes="(min-width: 1024px) 420px, 80vw" className="object-cover object-[center_32%]" />
          <div className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/45 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">{t(locale, "hero.badge")}</div>
        </div>
        <figcaption className="flex items-center justify-between gap-4 text-xs sm:text-sm">
          <span>{t(locale, "hero.name")}</span><span className="text-right">{t(locale, "hero.location")}</span>
        </figcaption>
      </figure>
    </section>
  );
}
