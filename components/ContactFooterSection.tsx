"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowUpRight, MessageCircle, Send } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { personalProjects } from "@/src/data/projects";
import { supabase } from "@/src/supabaseClient";
import { track } from "@vercel/analytics";
import { t, type Locale } from "@/src/data/translations";
import { setLocaleCookie } from "@/src/lib/cookies";

export default function ContactFooterSection({ locale }: Readonly<{ locale: Locale }>) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [copied, setCopied] = useState(false);
  const router = useRouter();

  const switchLanguage = (targetLocale: Locale) => {
    setLocaleCookie(targetLocale);
    const targetPath = `/${targetLocale}${window.location.hash}`;
    router.push(targetPath);
    window.location.href = targetPath;
  };

  const whatsappMessage = t(locale, "contact.whatsappMessage");
  const whatsappContactUrl = `https://wa.me/6281959663120?text=${encodeURIComponent(whatsappMessage)}`;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("emilalbani54@gmail.com");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");
    setIsError(false);
    try {
      track("contact_form_submit");
      const { error } = await supabase.from("contacts").insert([formData]);
      if (error) throw error;
      setStatusMessage(t(locale, "contact.formSuccess"));
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setIsError(true);
      setStatusMessage(t(locale, "contact.formError"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const navLinks = [
    ["home", "#home"],
    ["about", "#about"],
    ["education", "#education"],
    ["experience", "#experience"],
    ["portfolio", "#portfolio"],
    ["services", "#services"],
    ["skills", "#skills"],
  ];

  return (
    <>
    <section id="contact" className="scroll-mt-20 w-full">
      <div className="gallery-shell grid gap-12 py-20 sm:py-28 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
        <div>
          <h2 className="max-w-[9ch] text-5xl font-semibold leading-[.94] tracking-[-.07em] sm:text-6xl lg:text-7xl">{t(locale, "contact.heading")}</h2>
          <p className="mt-6 max-w-lg text-base leading-8 text-[#bcb9b1] sm:text-lg">{t(locale, "contact.subheading")}</p>
          <a
            href={whatsappContactUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("cta_whatsapp")}
            className="gallery-focus mt-6 inline-flex min-h-12 items-center gap-3 rounded-xl bg-[#c8f36a] px-5 text-sm font-bold text-[#101110] transition-colors hover:bg-[#d7ff7d]"
          >
            <MessageCircle aria-hidden="true" className="h-4 w-4" />
            {t(locale, "contact.ctaWhatsApp")}
            <span className="sr-only">{t(locale, "contact.srOnlyOpenTab")}</span>
          </a>
          <div className="mt-10 space-y-5 border-t border-white/10 pt-6 text-sm">
            <div><p className="gallery-label mb-2">{t(locale, "contact.emailLabel")}</p><div className="flex flex-wrap items-center gap-3"><a href="mailto:emilalbani54@gmail.com" className="gallery-focus text-base text-[#f1efe9] transition-colors hover:text-[#c8f36a]">emilalbani54@gmail.com</a>            <button type="button" onClick={() => { track("copy_email"); handleCopyEmail(); }} className="gallery-focus inline-flex min-h-9 items-center rounded-full border border-white/15 px-3 text-xs font-semibold text-[#bcb9b1] transition-colors hover:text-[#c8f36a]">{copied ? t(locale, "contact.copyEmail") : t(locale, "contact.copyEmail")}</button></div></div>
            <div><p className="gallery-label mb-2">WhatsApp</p><a href="https://wa.me/6281959663120" target="_blank" rel="noopener noreferrer" className="gallery-focus text-base text-[#f1efe9] transition-colors hover:text-[#c8f36a]">+62 819-5966-3120<span className="sr-only"> {t(locale, "contact.srOnlyOpenTab")}</span></a></div>
            <div><p className="gallery-label mb-2">Ketersediaan</p><p className="text-base text-[#d2cfc7]">Terbuka untuk Freelance & Remote</p></div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl border border-white/10 bg-white/[.035] p-5 sm:p-8">
          <div><label htmlFor="name" className="mb-2 block text-sm font-medium text-[#d2cfc7]">{t(locale, "contact.formNameLabel")}</label><input id="name" name="name" type="text" autoComplete="name" required aria-invalid={isError} aria-describedby="form-status" value={formData.name} onChange={handleChange} placeholder={t(locale, "contact.formNamePlaceholder")} className="gallery-focus min-h-12 w-full rounded-xl border border-white/10 bg-[#0b0b0d] px-4 text-sm text-[#f1efe9] placeholder:text-[#89877f] focus:border-[#c8f36a]" /></div>
          <div><label htmlFor="email" className="mb-2 block text-sm font-medium text-[#d2cfc7]">{t(locale, "contact.formEmailLabel")}</label><input id="email" name="email" type="email" autoComplete="email" required aria-invalid={isError} aria-describedby="form-status" value={formData.email} onChange={handleChange} placeholder={t(locale, "contact.formEmailPlaceholder")} className="gallery-focus min-h-12 w-full rounded-xl border border-white/10 bg-[#0b0b0d] px-4 text-sm text-[#f1efe9] placeholder:text-[#89877f] focus:border-[#c8f36a]" /></div>
          <div><label htmlFor="message" className="mb-2 block text-sm font-medium text-[#d2cfc7]">{t(locale, "contact.formMessageLabel")}</label><textarea id="message" name="message" rows={5} required aria-invalid={isError} aria-describedby="form-status" value={formData.message} onChange={handleChange} placeholder={t(locale, "contact.formMessagePlaceholder")} className="gallery-focus w-full resize-y rounded-xl border border-white/10 bg-[#0b0b0d] px-4 py-3 text-sm leading-6 text-[#f1efe9] placeholder:text-[#89877f] focus:border-[#c8f36a]" /></div>
          <button type="submit" disabled={isSubmitting} className="gallery-focus inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-[#c8f36a] px-6 text-sm font-bold text-[#101110] transition-colors hover:bg-[#d7ff7d] disabled:cursor-wait disabled:opacity-60">{isSubmitting ? t(locale, "contact.formSubmitting") : <> {t(locale, "contact.formSubmit")} <Send aria-hidden="true" className="h-4 w-4" /></>}</button>
          {statusMessage && <p id="form-status" role={isError ? "alert" : "status"} aria-live={isError ? "assertive" : "polite"} className={`text-sm ${isError ? "text-[#ff9385]" : "text-[#c8f36a]"}`}>{statusMessage}</p>}
        </form>
      </div>

    </section>

      <footer className="w-full border-t border-white/10 bg-[#141417]">
        <h2 className="sr-only">{t(locale, "contact.footerAdditionalHeading")}</h2>
        <div className="gallery-shell grid gap-10 py-10 sm:py-14 md:grid-cols-[1.2fr_.8fr_.8fr]">
          <div><p className="text-xl font-semibold tracking-tight">Emil Prayoga Albani</p><p className="mt-3 max-w-md text-sm leading-7 text-[#bcb9b1]">{t(locale, "contact.bio")}</p><div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm"><a href="https://github.com/emil-prayoga" target="_blank" rel="noopener noreferrer" className="gallery-focus inline-flex min-h-11 items-center text-[#bcb9b1] hover:text-[#c8f36a]">{t(locale, "contact.socialGitHub")}<span className="sr-only"> {t(locale, "contact.srOnlyOpenTab")}</span> <ArrowUpRight aria-hidden="true" className="inline h-3.5 w-3.5" /></a><a href="https://linkedin.com/in/emilprayogaalbani" target="_blank" rel="noopener noreferrer" className="gallery-focus inline-flex min-h-11 items-center text-[#bcb9b1] hover:text-[#c8f36a]">{t(locale, "contact.socialLinkedIn")}<span className="sr-only"> {t(locale, "contact.srOnlyOpenTab")}</span> <ArrowUpRight aria-hidden="true" className="inline h-3.5 w-3.5" /></a><a href="https://instagram.com/emil_prayoga_albani" target="_blank" rel="noopener noreferrer" className="gallery-focus inline-flex min-h-11 items-center text-[#bcb9b1] hover:text-[#c8f36a]">{t(locale, "contact.socialInstagram")}<span className="sr-only"> {t(locale, "contact.srOnlyOpenTab")}</span> <ArrowUpRight aria-hidden="true" className="inline h-3.5 w-3.5" /></a></div></div>
          <nav aria-label={t(locale, "contact.footerNavHeading")}><h3 className="gallery-label mb-4">{t(locale, "contact.footerNavHeading")}</h3><ul className="grid grid-cols-2 gap-x-3 gap-y-2 text-sm text-[#bcb9b1]">{navLinks.map(([key, href]) => <li key={href}><Link href={`/${locale}${href}`} className="gallery-focus hover:text-[#c8f36a]">{t(locale, `navbar.links.${key}`)}</Link></li>)}</ul></nav>
          <div><h3 className="gallery-label mb-4">{t(locale, "contact.footerWorksHeading")}</h3><ul className="space-y-2 text-sm text-[#bcb9b1]">{personalProjects.map((project) => <li key={project.id}><a href={project.link} target="_blank" rel="noopener noreferrer" className="gallery-focus inline-flex items-center gap-1 hover:text-[#c8f36a]">{project.title}<span className="sr-only"> {t(locale, "contact.srOnlyOpenTab")}</span><ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5 shrink-0" /></a></li>)}</ul></div>
        </div>
        <div className="border-t border-white/10"><p className="gallery-shell py-4 text-xs text-[#89877f]">{t(locale, "footer.copyright", { year: new Date().getFullYear().toString() })}</p></div>
      </footer>
    </>
  );
}
