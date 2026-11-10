import Link from "next/link";
import { ArrowUpRight, Code2, Layers3, Sparkles } from "lucide-react";
import { getTranslationValue, t, type Locale } from "@/src/data/translations";

const highlightIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Aplikasi live": Code2,
  "Full-Stack": Layers3,
  "Pengembangan Fitur": Sparkles,
  "Live applications": Code2,
  "Web Development": Layers3,
  "Feature Development": Sparkles,
};

export default function AboutSection({ locale }: Readonly<{ locale: Locale }>) {
  const highlightsData = getTranslationValue(locale, "about.highlights");

const highlights = Array.isArray(highlightsData)
  ? highlightsData as Array<{
      value: string;
      label: string;
    }>
  : [];

  return (
    <section id="about" className="gallery-section">
      <div className="gallery-shell">
        <div className="gallery-heading ">
          <div> <h2 className=" text-5xl font-semibold leading-[.95] tracking-[-.065em] sm:text-6xl">{t(locale, "about.heading")}</h2> </div>
          <div><p>{t(locale, "about.subheading")}</p> </div>
        </div>
      </div>
      <div className="gallery-shell  ">
          <p className="text-[#bcb9b1] text-md leading-8  sm:leading-9">{t(locale, "about.description")}</p>
          <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {highlights.map(({ value, label }) => {
              const Icon = highlightIcons[label] || Code2;
              return (
                <div key={label} aria-label={`${value} ${label}`} className="rounded-2xl border border-white/10 bg-white/[.035] p-4">
                  <Icon aria-hidden="true" className="mb-5 h-4 w-4 text-[#c8f36a]" />
                  <p className="text-lg font-semibold tracking-tight">{value}</p>
                  <p className="mt-1 text-xs text-[#89877f]">{label}</p>
                </div>
              );
            })}
          </div>
          <Link href={`/${locale}#experience`} className="gallery-focus mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#c8f36a]">{t(locale, "about.ctaExperience")} <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link>
        </div>
    </section>
  );
}
