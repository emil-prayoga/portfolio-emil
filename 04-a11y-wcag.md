# 04 — Aksesibilitas (WCAG 2.2 Level AA)

Lighthouse a11y hanya menangkap ~30–40% masalah aksesibilitas secara otomatis. Skor 100 ≠ aksesibel. Karena itu daftar ini menggabungkan temuan otomatis-able + manual.

## Yang sudah bagus 👍
- Skip link "Lewati ke konten utama" → `#main-content` (WCAG 2.4.1)
- Satu `h1`, `h2` per section, `h3` per item — hierarki logis (1.3.1)
- Alt text foto hero deskriptif (1.1.1)
- Nav pakai link anchor asli, bukan `div onClick`

---

## Temuan

### A1. Teks link tidak deskriptif — "Lihat proyek" / "Repository" ×4
**WCAG 2.4.4 Link Purpose (In Context)** · Dampak: tinggi
Pengguna screen reader sering membuka *daftar link* (rotor/NVDA+F7). Yang terdengar: "Lihat proyek, Repository, Lihat proyek, Repository…" tanpa tahu milik proyek mana.

**Fix** (teks visual tetap sama):
```tsx
<a href={demoUrl} target="_blank" rel="noopener noreferrer">
  Lihat proyek<span className="sr-only"> {title} (membuka tab baru)</span>
</a>
```

### A2. Nama aksesibel logo: "EAEMIL PRAYOGAPORTFOLIO"
**WCAG 2.4.4 / 4.1.2** · Dampak: sedang
Monogram "EA", "EMIL PRAYOGA", "PORTFOLIO" ditempel tanpa spasi di DOM.

**Fix:**
```tsx
<a href="#home" aria-label="Emil Prayoga Albani — kembali ke beranda">
  <span aria-hidden="true">EA</span>
  <span aria-hidden="true">Emil Prayoga</span>
  <span aria-hidden="true">Portfolio</span>
</a>
```

### A3. Nama + kategori skill menempel: "JavaScriptLanguage"
**WCAG 1.3.1 Info and Relationships** · Dampak: sedang
Juga dibaca begitu oleh Google. Nomor "01, 02…" murni dekoratif tapi dibacakan.

**Fix:** pakai `<dl>` atau beri pemisah:
```tsx
<li>
  <span aria-hidden="true">01</span>
  <span className="font-medium">JavaScript</span>
  <span className="sr-only"> — </span>
  <span className="text-muted-foreground">Bahasa pemrograman</span>
</li>
```

### A4. Statistik "5+ Proyek Web" dll.
**WCAG 1.3.1** · Dampak: rendah
Angka & label terbaca terpisah tanpa relasi. Pakai `<dl><dt>Proyek web</dt><dd>5+</dd></dl>` atau satu elemen `aria-label="Lebih dari 5 proyek web"`.

### A5. Link membuka tab baru tanpa pemberitahuan
**WCAG 3.2.5 (AAA) / praktik G201** · Dampak: rendah-sedang
Link demo, repo, GitHub, LinkedIn, Instagram, WhatsApp kemungkinan `target="_blank"` **[verifikasi]**. Pengguna screen reader kehilangan tombol "Back".
**Fix:** teks `sr-only` "(membuka tab baru)" + ikon ↗ dengan `aria-hidden="true"`. Pastikan `rel="noopener noreferrer"`.

### A6. Panah dekoratif "Mari terhubung ↗"
Panah ↗ dibaca "north east arrow" dan memberi kesan link eksternal, padahal ke `#contact`. Bungkus `aria-hidden="true"` atau ganti ikon yang cocok untuk navigasi internal.

### A7. Form kontak **[verifikasi]**
**WCAG 1.3.1, 1.3.5, 3.3.1, 3.3.2, 4.1.3**
Checklist:
- [ ] Tiap input punya `<label htmlFor>` yang terhubung (bukan cuma placeholder)
- [ ] `autoComplete="name"` / `"email"` (1.3.5 Identify Input Purpose)
- [ ] `type="email"`, `required`, dan pesan error teks — bukan cuma border merah (3.3.1)
- [ ] Error terhubung via `aria-describedby`, field invalid `aria-invalid="true"`
- [ ] Status kirim ("Pesan terkirim" / "Gagal, coba lagi") diumumkan via `role="status"` / `aria-live="polite"` (4.1.3)
- [ ] Tombol disable + label "Mengirim…" saat proses
- [ ] **Form benar-benar terkirim ke suatu tempat** (Resend / Formspree / server action). Form yang diam-diam tidak berfungsi = kehilangan klien.
→ `code-snippets/components/ContactForm.tsx`

### A8. Kontras warna **[verifikasi]**
**WCAG 1.4.3 (4.5:1 teks normal, 3:1 teks besar) & 1.4.11 (3:1 komponen UI)**
Titik rawan khas desain portofolio: teks abu-abu kecil ("Universitas…", tanggal "Apr 2026 – Jul 2026", label kategori skill, label "Case study"), placeholder input, border input, dan badge. Cek dengan DevTools → Inspect elemen → panel "Contrast", atau axe DevTools. Cek juga di **dark mode** kalau ada.

### A9. Fokus keyboard
**WCAG 2.4.7 Focus Visible, 2.4.11 Focus Not Obscured (baru di 2.2)**
- [ ] Tab dari atas ke bawah: semua link/tombol punya outline fokus jelas (jangan `outline-none` tanpa pengganti — pakai `focus-visible:ring-2`)
- [ ] Navbar sticky tidak menutupi elemen yang sedang fokus → tambahkan `scroll-padding-top` di `html` setinggi navbar
- [ ] Skip link terlihat saat difokus dan target `#main-content` bisa menerima fokus (`<main id="main-content" tabIndex={-1}>`)
- [ ] Menu mobile: bisa dibuka/ditutup keyboard, `aria-expanded`, Esc menutup, fokus kembali ke tombol

### A10. Ukuran target sentuh
**WCAG 2.5.8 Target Size (Minimum) — baru di 2.2:** minimal 24×24 px. Ikon sosmed di footer dan link nav mobile paling sering kekecilan. Ideal 44×44.

### A11. Gerakan / animasi
**WCAG 2.3.3 & 2.2.2**
Hormati `prefers-reduced-motion`. Animasi parallax / scroll besar bisa memicu mual pada pengguna gangguan vestibular. → `code-snippets/components/MotionProvider.tsx`

### A12. Landmark & bahasa
- [ ] `<header>`, `<nav aria-label="Navigasi utama">`, `<main>`, `<footer>`; nav kedua di footer diberi `aria-label="Navigasi footer"` supaya dua nav bisa dibedakan
- [ ] `<html lang="id">` (3.1.1); frasa Inggris `<span lang="en">` (3.1.2)

### A13. Heading footer
"Navigasi" & "Karya" di footer adalah `h3` setelah section Kontak. Lebih rapi: footer diberi `h2` tersembunyi (`<h2 className="sr-only">Footer</h2>`) atau ubah jadi teks biasa dengan `aria-label` pada `nav`.

### A14. Konsistensi navigasi
**WCAG 3.2.3 Consistent Navigation / 3.2.4 Consistent Identification**
Nav atas: *Portofolio*. Tombol hero: `#projects`. Footer: *Proyek* & *Karya*. Nav atas tidak punya *Pendidikan*, footer punya. Pilih satu istilah dan satu daftar.
