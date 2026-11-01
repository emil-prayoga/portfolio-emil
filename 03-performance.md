# 03 — Performance & Core Web Vitals

Target (field data, persentil 75, mobile):
- **LCP ≤ 2.5 s** — kapan elemen terbesar (kemungkinan foto hero / h1) tampil
- **INP ≤ 200 ms** — responsif saat diklik/diketik
- **CLS ≤ 0.1** — layout gak loncat-loncat

Situs portofolio statis seperti ini realistis mencapai **Lighthouse Performance 95+ di mobile**.

---

## 1. Foto hero: `w=3840` → kandidat terbesar penyebab LCP lambat
**Temuan:** URL gambar hero:
```
/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage.<hash>.png&w=3840&q=75
```
`w=3840` biasanya terjadi kalau `<Image>` dipakai dengan `fill` atau ukuran responsif **tanpa prop `sizes`** — Next.js lalu menganggap gambar selebar viewport dan menawarkan srcset hingga 3840px. Nama file aslinya juga `image.png` (PNG untuk foto = berat).

**Kenapa:** Di HP, browser bisa mengunduh varian jauh lebih besar dari yang tampil di layar. Ini membuang bandwidth di koneksi seluler dan langsung menunda LCP.

**Fix:**
```tsx
<Image
  src={portrait}                // import statis → dapat width/height + blur otomatis
  alt="Potret Emil Prayoga Albani"
  priority                      // preload, bukan lazy — ini elemen LCP
  sizes="(min-width: 1024px) 420px, 80vw"   // sesuaikan dengan lebar tampil sebenarnya
  placeholder="blur"
  className="h-auto w-full"
/>
```
- Konversi sumber ke foto ber-crop rapat (mis. 1000×1250) sebelum di-import. Ganti nama file jadi deskriptif (`emil-prayoga-albani.jpg`) — membantu Google Images juga.
- Aktifkan AVIF di `next.config` → `code-snippets/next.config.ts`.
- Kalau ada `fetchPriority`, `priority` sudah mengurusnya di Next 14+/15.

**Cara cek:** DevTools → Network → filter "Img" → lihat ukuran transfer foto hero di emulasi Moto G / iPhone. Atau Lighthouse → "Properly size images" & "Largest Contentful Paint element".

## 2. Animasi masuk vs LCP
**Temuan:** stack pakai Framer Motion. Pola umum `initial={{ opacity: 0, y: 20 }}` di hero **[verifikasi]**.

**Kenapa:** Kalau `h1`/foto hero mulai dari `opacity: 0` dan menunggu JS hydrate untuk muncul, LCP baru tercatat setelah animasi selesai → skor turun 0.5–1.5 s, dan crawler/screen reader bisa menemukan konten "tak terlihat".

**Fix:**
- Konten **di atas fold**: tampil langsung (tanpa fade-in), atau animasi cuma `transform` kecil tanpa `opacity: 0`.
- Animasi hanya untuk section di bawah fold (`whileInView`).
- Pakai `LazyMotion` + `domAnimation` + komponen `m` untuk memangkas ukuran bundle Framer Motion.
- Hormati `prefers-reduced-motion` → `<MotionConfig reducedMotion="user">` (lihat `code-snippets/components/MotionProvider.tsx`).

## 3. Font
**Saran:** pakai `next/font` (self-host, `display: swap`, subset `latin`), maksimal 2 keluarga & beberapa weight saja. Hindari `<link>` ke Google Fonts langsung (request tambahan + risiko CLS).

## 4. JavaScript
- Section statis (Pendidikan, Pengalaman, Keahlian, Footer) jadikan **Server Component** — jangan `"use client"` di level page. Hanya bagian interaktif (nav mobile, form, animasi) yang jadi client component.
- Cek bundle: `ANALYZE=true next build` dengan `@next/bundle-analyzer`. Target JS awal halaman < ~150 KB gzip.
- Ikon: import ikon satuan (`lucide-react` per ikon), bukan seluruh paket.

## 5. Gambar lain & pihak ketiga
- Kalau nanti ada screenshot proyek: pakai `next/image`, `sizes` yang benar, **tanpa** `priority` (biar lazy).
- Hindari embed (Instagram, YouTube, peta) di halaman utama; kalau perlu, pakai facade (thumbnail dulu, iframe saat diklik).

## 6. CLS
- Semua `<Image>` harus punya dimensi (import statis otomatis).
- Badge "Available for freelance" / elemen yang muncul belakangan beri ruang tetap.
- Navbar sticky: tinggi tetap.

## 7. Caching & delivery
Vercel sudah menangani CDN, Brotli, HTTP/2–3. Pastikan halaman di-render **statis** (lihat output `next build`: rute `/` harus bertanda ○ Static). Kalau ternyata ƒ Dynamic, cari penyebabnya (biasanya `cookies()`, `headers()`, atau `fetch` tanpa cache).
