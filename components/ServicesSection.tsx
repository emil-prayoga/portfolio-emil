import Link from "next/link";
import { ArrowUpRight, Globe, ShoppingCart, Store, Users } from "lucide-react";
import { t, type Locale, getTranslationValue } from "@/src/data/translations";

export default function ServicesSection({ locale }: Readonly<{ locale: Locale }>) {
  const whatsappMessage = t(locale, "services.whatsappMessage");
  const whatsappServiceUrl = `https://wa.me/6281959663120?text=${encodeURIComponent(whatsappMessage)}`;

  const servicesData = getTranslationValue(locale, "services.items");
  const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    "Company Profile": Globe,
    "Katalog Produk": Store,
    "Product Catalog": Store,
    "Toko Online": ShoppingCart,
    "Online Store": ShoppingCart,
    "Sistem Informasi": Users,
    "Information System": Users,
  };
  const services = Array.isArray(servicesData)
  ? servicesData as Array<{
      icon: string;
      title: string;
      description: string;
    }>
  : [];

  const stepsData = getTranslationValue(locale, "services.processSteps");

const steps = Array.isArray(stepsData)
  ? stepsData as string[]
  : [];

  const estimateData = getTranslationValue(locale, "services.estimateItems");

const estimateItems = Array.isArray(estimateData)
  ? estimateData as string[]
  : [];

  return (
    <section id="services" className="gallery-section scroll-mt-20">
      <div className="gallery-shell">
        <div className="gallery-heading">
          <h2>{t(locale, "services.heading")}</h2>
          <p>{t(locale, "services.subheading")}</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services?.map && services.map(({ icon: iconName, title, description }: { icon: string; title: string; description: string }) => {
            const Icon = serviceIcons[title] || Globe;
            return (
              <article key={title} className="project-card flex min-h-full flex-col p-5 sm:p-6">
                <Icon aria-hidden="true" className="mb-4 h-5 w-5 text-[#c8f36a]" />
                <h3 className="text-xl font-semibold leading-tight tracking-[-.03em]">{title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-[#bcb9b1]">{description}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-[#f1efe9]">{t(locale, "services.processHeading")}</h3>
            <ol className="mt-4 space-y-3 text-sm leading-7 text-[#bcb9b1]">
              {steps.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span aria-hidden="true" className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/[.06] text-xs font-semibold text-[#c8f36a]">{index + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[.035] p-5 sm:p-6">
            <h3 className="text-lg font-semibold text-[#f1efe9]">{t(locale, "services.estimateHeading")}</h3>
            <ul className="mt-4 space-y-2 text-sm text-[#bcb9b1]">
              {estimateItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a href={whatsappServiceUrl} target="_blank" rel="noopener noreferrer" className="gallery-focus mt-6 inline-flex min-h-12 items-center gap-3 rounded-xl bg-[#c8f36a] px-5 text-sm font-bold text-[#101110] transition-colors hover:bg-[#d7ff7d]">
              {t(locale, "services.ctaWhatsApp")}
              <span className="sr-only">{t(locale, "services.srOnlyOpenTab")}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
