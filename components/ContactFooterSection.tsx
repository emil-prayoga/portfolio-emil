"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowUpRight, MessageCircle, Send } from "lucide-react";
import { personalProjects } from "@/src/data/projects";
import { supabase } from "@/src/supabaseClient";
import { track } from "@vercel/analytics";

const whatsappContactUrl = `https://wa.me/6281959663120?text=${encodeURIComponent(
  "Halo Emil, saya ingin membahas kebutuhan website untuk bisnis atau proyek saya.",
)}`;

export default function ContactFooterSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [copied, setCopied] = useState(false);

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
      setStatusMessage("Pesan berhasil terkirim! Terima kasih.");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setIsError(true);
      setStatusMessage("Gagal mengirim pesan. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <section id="contact" className="scroll-mt-20 w-full">
      <div className="gallery-shell grid gap-12 py-20 sm:py-28 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
        <div>
          <h2 className="max-w-[9ch] text-5xl font-semibold leading-[.94] tracking-[-.07em] sm:text-6xl lg:text-7xl">Mari bikin sesuatu.</h2>
          <p className="mt-6 max-w-lg text-base leading-8 text-[#bcb9b1] sm:text-lg">Punya ide produk, butuh bantuan pengembangan web, atau ingin berkolaborasi? Ceritakan sedikit tentang rencanamu.</p>
          <a
            href={whatsappContactUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("cta_whatsapp")}
            className="gallery-focus mt-6 inline-flex min-h-12 items-center gap-3 rounded-xl bg-[#c8f36a] px-5 text-sm font-bold text-[#101110] transition-colors hover:bg-[#d7ff7d]"
          >
            <MessageCircle aria-hidden="true" className="h-4 w-4" />
            Diskusikan proyek via WhatsApp
            <span className="sr-only">(membuka tab baru)</span>
          </a>
          <div className="mt-10 space-y-5 border-t border-white/10 pt-6 text-sm">
            <div><p className="gallery-label mb-2">Email</p><div className="flex flex-wrap items-center gap-3"><a href="mailto:emilalbani54@gmail.com" className="gallery-focus text-base text-[#f1efe9] transition-colors hover:text-[#c8f36a]">emilalbani54@gmail.com</a>            <button type="button" onClick={() => { track("copy_email"); handleCopyEmail(); }} className="gallery-focus inline-flex min-h-9 items-center rounded-full border border-white/15 px-3 text-xs font-semibold text-[#bcb9b1] transition-colors hover:text-[#c8f36a]">{copied ? "Tersalin" : "Salin email"}</button></div></div>
            <div><p className="gallery-label mb-2">WhatsApp</p><a href="https://wa.me/6281959663120" target="_blank" rel="noopener noreferrer" className="gallery-focus text-base text-[#f1efe9] transition-colors hover:text-[#c8f36a]">+62 819-5966-3120<span className="sr-only"> (membuka tab baru)</span></a></div>
            <div><p className="gallery-label mb-2">Ketersediaan</p><p className="text-base text-[#d2cfc7]">Terbuka untuk Freelance & Remote</p></div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl border border-white/10 bg-white/[.035] p-5 sm:p-8">
          <div><label htmlFor="name" className="mb-2 block text-sm font-medium text-[#d2cfc7]">Nama Lengkap</label><input id="name" name="name" type="text" autoComplete="name" required aria-invalid={isError} aria-describedby="form-status" value={formData.name} onChange={handleChange} placeholder="Masukkan nama kamu" className="gallery-focus min-h-12 w-full rounded-xl border border-white/10 bg-[#0b0b0d] px-4 text-sm text-[#f1efe9] placeholder:text-[#89877f] focus:border-[#c8f36a]" /></div>
          <div><label htmlFor="email" className="mb-2 block text-sm font-medium text-[#d2cfc7]">Alamat Email</label><input id="email" name="email" type="email" autoComplete="email" required aria-invalid={isError} aria-describedby="form-status" value={formData.email} onChange={handleChange} placeholder="nama@email.com" className="gallery-focus min-h-12 w-full rounded-xl border border-white/10 bg-[#0b0b0d] px-4 text-sm text-[#f1efe9] placeholder:text-[#89877f] focus:border-[#c8f36a]" /></div>
          <div><label htmlFor="message" className="mb-2 block text-sm font-medium text-[#d2cfc7]">Pesan</label><textarea id="message" name="message" rows={5} required aria-invalid={isError} aria-describedby="form-status" value={formData.message} onChange={handleChange} placeholder="Ceritakan tentang ide atau proyekmu..." className="gallery-focus w-full resize-y rounded-xl border border-white/10 bg-[#0b0b0d] px-4 py-3 text-sm leading-6 text-[#f1efe9] placeholder:text-[#89877f] focus:border-[#c8f36a]" /></div>
          <button type="submit" disabled={isSubmitting} className="gallery-focus inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-[#c8f36a] px-6 text-sm font-bold text-[#101110] transition-colors hover:bg-[#d7ff7d] disabled:cursor-wait disabled:opacity-60">{isSubmitting ? "Mengirim..." : <>Kirim Pesan <Send aria-hidden="true" className="h-4 w-4" /></>}</button>
          {statusMessage && <p id="form-status" role={isError ? "alert" : "status"} aria-live={isError ? "assertive" : "polite"} className={`text-sm ${isError ? "text-[#ff9385]" : "text-[#c8f36a]"}`}>{statusMessage}</p>}
        </form>
      </div>

    </section>

      <footer className="w-full border-t border-white/10 bg-[#141417]">
        <h2 className="sr-only">Informasi tambahan</h2>
        <div className="gallery-shell grid gap-10 py-10 sm:py-14 md:grid-cols-[1.2fr_.8fr_.8fr]">
          <div><p className="text-xl font-semibold tracking-tight">Emil Prayoga Albani</p><p className="mt-3 max-w-md text-sm leading-7 text-[#bcb9b1]">Mahasiswa Sistem Informasi &amp; Web Developer (React &amp; Next.js) yang membangun website dan aplikasi web responsif. Terbuka untuk freelance dan remote.</p><div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm"><a href="https://github.com/emil-prayoga" target="_blank" rel="noopener noreferrer" className="gallery-focus inline-flex min-h-11 items-center text-[#bcb9b1] hover:text-[#c8f36a]">GitHub<span className="sr-only"> (membuka tab baru)</span> <ArrowUpRight aria-hidden="true" className="inline h-3.5 w-3.5" /></a><a href="https://linkedin.com/in/emilprayogaalbani" target="_blank" rel="noopener noreferrer" className="gallery-focus inline-flex min-h-11 items-center text-[#bcb9b1] hover:text-[#c8f36a]">LinkedIn<span className="sr-only"> (membuka tab baru)</span> <ArrowUpRight aria-hidden="true" className="inline h-3.5 w-3.5" /></a><a href="https://instagram.com/emil_prayoga_albani" target="_blank" rel="noopener noreferrer" className="gallery-focus inline-flex min-h-11 items-center text-[#bcb9b1] hover:text-[#c8f36a]">Instagram<span className="sr-only"> (membuka tab baru)</span> <ArrowUpRight aria-hidden="true" className="inline h-3.5 w-3.5" /></a></div></div>
          <nav aria-label="Navigasi footer"><h3 className="gallery-label mb-4">Navigasi</h3><ul className="grid grid-cols-2 gap-x-3 gap-y-2 text-sm text-[#bcb9b1]">{[["Beranda", "#home"], ["Tentang", "#about"], ["Pendidikan", "#education"], ["Pengalaman", "#experience"], ["Portofolio", "#portfolio"], ["Layanan", "#services"], ["Keahlian", "#skills"]].map(([label, href]) => <li key={href}><a href={href} className="gallery-focus hover:text-[#c8f36a]">{label}</a></li>)}</ul></nav>
          <div><h3 className="gallery-label mb-4">Karya</h3><ul className="space-y-2 text-sm text-[#bcb9b1]">{personalProjects.map((project) => <li key={project.id}><a href={project.link} target="_blank" rel="noopener noreferrer" className="gallery-focus inline-flex items-center gap-1 hover:text-[#c8f36a]">{project.title}<span className="sr-only"> (membuka tab baru)</span><ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5 shrink-0" /></a></li>)}</ul></div>
        </div>
        <div className="border-t border-white/10"><p className="gallery-shell py-4 text-xs text-[#89877f]">© {new Date().getFullYear()} Emil Prayoga Albani</p></div>
      </footer>
    </>
  );
}
