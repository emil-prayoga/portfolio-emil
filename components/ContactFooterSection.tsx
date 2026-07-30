"use client";

import React, { useState } from 'react';
import { MapPin, Send, MessageSquare, ArrowUpRight, Phone, Mail } from 'lucide-react';
import { supabase } from '@/src/supabaseClient';

export default function ContactFooterSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');
    setIsError(false);

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([
          { 
            name: formData.name, 
            email: formData.email, 
            message: formData.message 
          }
        ]);

      if (error) throw error;

      setStatusMessage('Pesan berhasil terkirim! Terima kasih.');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Error sending message:', err);
      setIsError(true);
      setStatusMessage('Gagal mengirim pesan. Silakan coba lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    /* Trik "Breakout/Full-bleed": Memaksa selebar layar monitor (w-screen) 
       meskipun ada di dalam container terbatas */
    <div id="contact" className="scroll-mt-20 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-neutral-950 text-neutral-400">
      
      {/* SECTION 2: FORM CONTACT */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 py-16 lg:px-0 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Info Kontak & Sapaan */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-5xl font-bold text-neutral-100 tracking-tight leading-tight">
            Get In Touch
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            Apakah kamu punya ide aplikasi menarik, butuh bantuan pengembangan web, atau sekadar ingin menyapa? Silakan kirim pesan!
          </p>

          <div className="pt-4 space-y-4">
            <div className="flex items-center gap-4 text-neutral-300">
              <div className="p-3 rounded-full bg-neutral-900 border border-neutral-800 text-emerald-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-neutral-500">Email Langsung</p>
                <p className="font-medium text-neutral-200">emilalbani54@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-neutral-300">
              <div className="p-3 rounded-full bg-neutral-900 border border-neutral-800 text-emerald-400">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-neutral-500">Status Ketersediaan</p>
                <p className="font-medium text-neutral-200">Terbuka untuk Freelance & Remote</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Kontak */}
        <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/60 border border-neutral-800 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                Nama Lengkap
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Masukkan nama kamu"
                className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-emerald-500 transition-colors text-sm"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                Alamat Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="nama@email.com"
                className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-emerald-500 transition-colors text-sm"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                Pesan
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tuliskan pesan atau ide projek kamu di sini..."
                className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-emerald-500 transition-colors resize-none text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-100 text-neutral-950 font-semibold hover:bg-neutral-400 transition-colors disabled:opacity-50 text-sm cursor-pointer"
            >
              {isSubmitting ? (
                "Mengirim..."
              ) : (
                <>
                  Kirim Pesan <Send className="w-4 h-4" />
                </>
              )}
            </button>

            {statusMessage && (
              <p className={`text-center text-sm pt-2 font-medium ${isError ? 'text-rose-400' : 'text-emerald-400'}`}>
                {statusMessage}
              </p>
            )}
          </form>
        </div>

      </div>

      {/* SECTION 1: GRID FOOTER LINKS */}
      <footer className="w-full bg-neutral-900/70 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-0 py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            
            {/* KOLOM 1: NAMA & BIO */}
            <div className="flex flex-col lg:col-span-2 space-y-3">
              <h2 className="font-bold text-xl text-neutral-100">Emil Prayoga Albani</h2>
              <p className="text-sm leading-relaxed text-neutral-400 max-w-md">
                Mahasiswa Sistem Informasi & Web Developer yang berfokus pada pengembangan aplikasi web interaktif, berkinerja tinggi, dan responsif dengan standar UI/UX modern.
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-3 pt-2">
                <a 
                  href="https://github.com/emil-prayoga" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
                  aria-label="GitHub"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com/in/emilprayogaalbani" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a 
                  href="https://instagram.com/emil_prayoga_albani" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* KOLOM 2: PROYEK TOP */}
            <div className="flex flex-col lg:col-span-1">
              <h2 className="font-bold text-sm uppercase tracking-wider text-neutral-200 mb-3">Best Portfolio</h2>
              <nav>
                <ul className="flex flex-col gap-2 text-sm">
                  <li><a href="https://github.com/emil-prayoga/library-system" className="hover:text-emerald-400 transition-colors">Sistem Informasi Perpustakaan</a></li>
                  <li><a href="https://www.figma.com/design/5OVVErhO9TDjsBtTAt4Mh6/Final-Project?node-id=9278-644&t=mzbqYItNsu6zl0Xt-1" className="hover:text-emerald-400 transition-colors">Aplikasi Peminjaman Buku Perpustakaan</a></li>
                  <li><a href="https://shopify-shop-emilabs.vercel.app/" className="hover:text-emerald-400 transition-colors">Shopify Shop</a></li>
                  <li><a href="https://emilabs-financial-dashboard.vercel.app/" className="hover:text-emerald-400 transition-colors">Personal Finance Tracker</a></li>
                  <li><a href="https://firhijab.vercel.app/" className="hover:text-emerald-400 transition-colors">Smart UMKM Web App & AI ChatBot</a></li>
                </ul>
              </nav>
            </div>

            {/* KOLOM 3: NAVIGASI SEKSI */}
            <div className="flex flex-col lg:col-span-1">
              <h2 className="font-bold text-sm uppercase tracking-wider text-neutral-200 mb-3">Navigasi</h2>
              <nav>
                <ul className="flex flex-col gap-2 text-sm">
                  <li><a href="#home" className="hover:text-emerald-400 transition-colors">Beranda</a></li>
                  <li><a href="#about" className="hover:text-emerald-400 transition-colors">Tentang Saya</a></li>
                  <li><a href="#education" className="hover:text-emerald-400 transition-colors">Pendidikan</a></li>
                  <li><a href="#experience" className="hover:text-emerald-400 transition-colors">Pengalaman</a></li>
                  <li><a href="#skills" className="hover:text-emerald-400 transition-colors">Keahlian</a></li>
                  <li><a href="#projects" className="hover:text-emerald-400 transition-colors">Proyek</a></li>
                </ul>
              </nav>
            </div>

            {/* KOLOM 4: KONTAK PERSONAL */}
            <div className="flex flex-col gap-2.5 lg:col-span-1 text-sm">
              <h2 className="font-bold text-sm uppercase tracking-wider text-neutral-200 mb-1">Kontak Saya</h2>
              <p className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Sumenep, Jawa Timur</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="https://wa.me/6281959663120" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                  +62 819-5966-3120
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:emilalbani54@gmail.com" className="hover:text-emerald-400 transition-colors truncate">
                  emilalbani54@gmail.com
                </a>
              </p>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}