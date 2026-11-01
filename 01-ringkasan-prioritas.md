# 01 — Ringkasan & Prioritas

Secara umum fondasinya **sudah bagus**: ada skip link ("Lewati ke konten utama"), cuma satu `<h1>`, struktur `h2` per section rapi, alt text di foto ada, title & meta description sudah diisi, pakai `next/image`. Jadi ini bukan rombak — ini **polishing** yang dampaknya besar.

## ≤Quick wins ( 1 jam, dampak tinggi)

| # | Temuan | Kenapa penting | Area |
|---|---|---|---|
| 1 | Foto hero dimuat dengan `w=3840` | Browser HP bisa narik gambar jauh lebih besar dari yang ditampilkan → LCP lambat. Tambah `sizes` + `priority` | Perf |
| 2 | Link "Lihat proyek" & "Repository" muncul 4× dengan teks sama | Screen reader yang buka daftar link cuma dengar "Lihat proyek, Lihat proyek, …" — gak tahu proyek mana (WCAG 2.4.4) | A11y |
| 3 | Nama logo terbaca "EAEMIL PRAYOGAPORTFOLIO" | Monogram "EA" + teks nempel tanpa spasi → nama aksesibel jadi aneh, juga dibaca crawler | A11y/SEO |
| 4 | Nama skill terbaca "JavaScriptLanguage", "React.jsFrontend" | Nama & kategori nempel tanpa pemisah → screen reader & Google baca satu kata | A11y/SEO |
| 5 | Email ditampilkan sebagai teks biasa, bukan `mailto:` | Orang di HP gak bisa tap langsung → friksi di titik konversi paling penting | Konversi |
| 6 | Anchor nav `#portfolio` vs tombol hero `#projects` vs footer "Proyek" **[verifikasi]** | Kalau salah satu id gak ada, link mati. Plus label beda-beda (Portofolio/Proyek/Karya) bikin bingung | UX |
| 7 | Tambah OG image + Open Graph/Twitter tags **[verifikasi]** | Link portofolio paling sering dibagikan via WA/LinkedIn. Tanpa preview gambar, CTR anjlok | SEO |
| 8 | Tambah JSON-LD `Person` | Bantu Google ngerti ini halaman orang (nama, pekerjaan, lokasi, sosmed) → peluang knowledge panel | SEO |

## Medium (setengah – 1 hari)

| # | Temuan | Area |
|---|---|---|
| 9 | Pakai domain sendiri (mis. `emilprayoga.dev` / `.my.id`) — subdomain `vercel.app` lemah buat branding & SEO jangka panjang | SEO |
| 10 | `sitemap.ts`, `robots.ts`, canonical URL, daftar di Google Search Console | SEO |
| 11 | Animasi Framer Motion: hormati `prefers-reduced-motion` & jangan mulai konten dari `opacity: 0` di atas fold | Perf/A11y |
| 12 | Form kontak: pastikan `<label for>`, `autocomplete`, pesan sukses/gagal via `aria-live` **[verifikasi]** | A11y/Konversi |
| 13 | Link eksternal (`target="_blank"`) beri tanda "membuka tab baru" | A11y |
| 14 | Konsistensi positioning: meta bilang "Frontend Developer & UI/UX Enthusiast", hero bilang "Web Developer", about bilang full-stack + AI | SEO/Konten |

## Strategis (paling besar efeknya ke "info sampai")

| # | Saran | Area |
|---|---|---|
| 15 | Bikin **halaman case study** per proyek (`/proyek/smart-umkm`, dst). Labelnya sudah "Case study" tapi isinya belum ada — ini sumber konten terindeks terbesar | SEO/Konten |
| 16 | Pisahkan pesan untuk **2 audiens**: recruiter (skill, pengalaman, CV) vs klien  (masalah yang diselesaikan, layanan, proses) | Konten |
| 17 | Tambah bukti hasil (angka, screenshot, testimoni) di tiap proyek | Konten |
| 18 | Pasang Lighthouse CI di GitHub Actions supaya skor gak turun diam-diam | Benchmark |

Detail + alasan + kode ada di file 02–06 dan `code-snippets/`.
