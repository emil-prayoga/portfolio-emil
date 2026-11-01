# 02 — SEO

## Yang sudah bagus
- `<title>` jelas: "Emil Prayoga Albani — Frontend Developer" (nama + peran, < 60 karakter).
- Meta description ada dan manusiawi.
- Satu `<h1>`, heading per section konsisten.
- Konten berbahasa Indonesia yang cukup panjang (pengalaman, pendidikan, proyek) → bagus buat relevansi.

---

## 1. Samakan "siapa saya" di semua tempat
**Temuan:** meta description = "Frontend Developer & UI/UX Enthusiast"; hero = "Web Developer"; about = React/Next + API + database + AI; footer = "Mahasiswa Sistem Informasi & Web Developer".

**Kenapa:** Google dan manusia sama-sama butuh **satu sinyal yang konsisten**. Kalau title bilang frontend tapi isi ngomongin database & AI, keyword yang ditarget jadi kabur dan snippet di hasil pencarian gak cocok sama yang dilihat pengunjung.

**Saran:** pilih satu label utama, misalnya *"Web Developer (React & Next.js)"*, lalu pakai identik di `title`, `description`, `h1`/subjudul hero, JSON-LD `jobTitle`, dan bio LinkedIn/GitHub.

Contoh:
```
title:       Emil Prayoga Albani — Web Developer React & Next.js
description: Web developer dari Sumenep, Madura. Membangun website & aplikasi web
             responsif dengan React, Next.js, Supabase, dan integrasi AI untuk UMKM
             dan tim produk. Terbuka untuk freelance & remote.
```
(~155 karakter, memuat nama, peran, stack, lokasi, ketersediaan.)

## 2. Manfaatkan lokasi (local SEO)
**Kenapa:** Persaingan "web developer" secara nasional berat, tapi "jasa pembuatan website Sumenep" / "web developer Madura" jauh lebih longgar — dan cocok banget dengan target UMKM yang memang lokal.

**Saran:** sebut "Sumenep, Madura, Jawa Timur" di description, JSON-LD (`address`), dan satu kalimat natural di section About/Kontak. Kalau serius cari klien lokal, buat Google Business Profile.

## 3. Open Graph & Twitter Card **[verifikasi]**
**Temuan:** dari hasil fetch yang terbaca hanya `description` & `viewport`; tag `og:*` tidak terdeteksi. Cek di DevTools → Elements → `<head>`, atau tempel URL ke https://www.opengraph.xyz.

**Kenapa:** Portofolio paling sering disebar lewat WhatsApp, LinkedIn, DM. Preview tanpa gambar & judul = kelihatan seperti link spam, klik turun.

**Saran:** pakai Metadata API Next.js + `opengraph-image.tsx` (generate otomatis 1200×630). Lihat `code-snippets/app/layout.tsx` dan `code-snippets/app/opengraph-image.tsx`.

## 4. Structured data (JSON-LD)
**Kenapa:** Schema `Person` + `WebSite` membantu Google menghubungkan nama Emil dengan GitHub, LinkedIn, Instagram (`sameAs`), pekerjaan, dan lokasi. Ini yang bikin pencarian nama sendiri menampilkan hasil yang benar, bukan orang lain dengan nama mirip.

Untuk tiap proyek bisa pakai `CreativeWork` / `SoftwareApplication`.
→ `code-snippets/components/JsonLd.tsx`

## 5. Sitemap, robots, canonical, Search Console
**Kenapa:** Tanpa Search Console kamu gak tahu halaman sudah terindeks atau belum, keyword apa yang memunculkan situs, dan ada error apa. Canonical mencegah duplikat (Vercel juga membuat URL preview per deployment).

**Saran:**
- `app/sitemap.ts` dan `app/robots.ts` → `code-snippets/app/`
- `metadataBase` + `alternates.canonical` di layout
- Verifikasi di Google Search Console, submit sitemap
- Pastikan deployment **preview** tidak terindeks (Vercel otomatis menambah `X-Robots-Tag: noindex` di preview, tapi cek lagi)

## 6. Domain sendiri
**Kenapa:** `portofolio-emil-prayoga-albani.vercel.app` panjang, susah diingat/diketik, dan semua otoritas link yang dikumpulkan "milik" subdomain Vercel. Domain `.my.id` murah (sekitar belasan ribu/tahun) dan sekalian bisa dipakai buat email profesional — penting kalau mau jualan ke UMKM.

Setelah pindah: redirect 301 dari URL vercel.app ke domain baru (Vercel → Domains → Redirect).

## 7. Halaman case study per proyek (dampak SEO terbesar)
**Temuan:** setiap kartu proyek berlabel "01 / Case study", tapi tombolnya langsung ke demo live & repo — tidak ada halaman case study.

**Kenapa:**
- Single-page = cuma **1 URL** yang bisa diranking. Empat halaman case study = 4 URL tambahan, masing-masing bisa menargetkan keyword sendiri ("aplikasi RT online", "sistem informasi RT Next.js", "aplikasi AI untuk UMKM").
- Recruiter mau lihat **cara berpikir**, bukan cuma hasil jadi.
- Label "Case study" yang ternyata langsung ke demo = ekspektasi tidak terpenuhi.

**Struktur halaman yang disarankan** (`/proyek/[slug]`):
1. Masalah / konteks (siapa penggunanya, sakitnya apa)
2. Peran Emil & durasi
3. Solusi + 2–3 screenshot (dengan alt deskriptif)
4. Keputusan teknis & alasannya (kenapa Supabase, kenapa Next.js)
5. Tantangan & cara mengatasi
6. Hasil (angka kalau ada) + apa yang akan diperbaiki
7. Link demo & repo

## 8. Konsistensi bahasa
**Temuan:** mayoritas Bahasa Indonesia, tapi ada "Available for freelance", "Case study", "Language", "Frontend", "Lihat proyek / Repository".

**Kenapa:** Bukan error, tapi untuk SEO & screen reader sebaiknya `<html lang="id">` **[verifikasi]**, dan frasa Inggris yang panjang dibungkus `<span lang="en">` (WCAG 3.1.2) supaya dilafalkan benar. Atau sekalian buat versi `/en` kalau mau menarget recruiter luar negeri (pakai `hreflang`).

## 9. Link demo yang mengarah ke halaman login **[verifikasi]**
**Temuan:** Smart UMKM ditautkan ke `/dashboard`.

**Kenapa:** Kalau dashboard butuh login, pengunjung (dan recruiter yang buru-buru) mentok di form login dan menyimpulkan proyeknya gak jalan. Sediakan akun demo (tulis kredensialnya di case study) atau mode demo tanpa login.
