# 05 — Saran Tambahan: Konten & Konversi

SEO bikin orang datang, performa bikin orang bertahan, a11y bikin semua orang bisa baca. Tapi **"info sampai"** pada akhirnya soal: setelah 10 detik, apakah pengunjung paham *Emil bisa bantu apa* dan *harus ngapain selanjutnya*?

## 1. Tentukan audiens utama halaman
Saat ini halaman melayani dua orang sekaligus:
- **Recruiter / HR / lead dev** → peduli: stack, pengalaman, cara kerja, CV, GitHub.
- **Pemilik UMKM** (disebut di pengalaman: "menjangkau prospek UMKM") → peduli: "website saya jadi apa, berapa lama, berapa biaya, bisa dipercaya gak". Mereka **tidak peduli** React vs Next.js.

**Saran:** hero tetap untuk audiens utama (misal recruiter), lalu tambahkan section/halaman terpisah **"Layanan untuk UMKM"** berisi: jenis website yang dibuat (company profile, katalog, toko online, sistem kasir/RT), proses kerja 3–4 langkah, kisaran harga/"mulai dari", dan CTA WhatsApp dengan pesan pre-filled:
```
https://wa.me/6281959663120?text=Halo%20Emil%2C%20saya%20mau%20tanya%20soal%20pembuatan%20website
```

## 2. Hero: dari "apa yang saya pakai" ke "apa yang saya hasilkan"
Sekarang: *"Saya membangun aplikasi web yang responsif dan fungsional menggunakan React dan Next.js…"*
Ini menjelaskan alat. Coba fokus ke hasil, misalnya:
> *"Saya membantu UMKM dan tim produk punya website yang cepat, mudah dipakai, dan siap dikembangkan — dari tampilan sampai database dan fitur AI."*

## 3. Bukti > klaim
- Tiap proyek: tambah **screenshot** (saat ini kartu proyek tanpa gambar — padahal ini portofolio visual).
- Tambah **satu angka per proyek** kalau ada: jumlah pengguna, waktu pengerjaan, skor Lighthouse proyeknya, fitur kunci.
- Pengalaman asisten praktikum sudah bagus pakai angka (35+, 40+, 25+ mahasiswa) — pertahankan pola itu di proyek.
- Kalau ada klien UMKM yang puas: 1–2 testimoni pendek (nama + usaha, dengan izin).
- Statistik "5+ Proyek Web" agak lemah untuk ditonjolkan; lebih kuat diganti hal yang membedakan, mis. "4 aplikasi live", "Sertifikat IDCamp 2025 Dicoding" (dengan link verifikasi).

## 4. CTA & kontak
- Email jadikan `mailto:` + tombol "Salin email".
- Tambah tombol **"Unduh CV (PDF)"** di hero/About — recruiter hampir selalu mencarinya.
- Satu CTA utama yang konsisten ("Hubungi saya" → WhatsApp atau form), sisanya sekunder.
- Badge "Available for freelance" → sertakan cara konkret: "Balas < 24 jam via WhatsApp".

## 5. Kredibilitas teknis buat recruiter
- Pin repo yang sama di GitHub dan pastikan tiap repo punya README berisi screenshot, cara menjalankan, dan stack — recruiter klik "Repository" lalu lihat README kosong = poin hilang.
- Konsistensi penamaan: proyek "Orange Shop" tapi repo `shopify-shop` dan URL `shopify-shop-emilabs` — membingungkan, dan "Shopify" adalah merek dagang pihak lain. Pertimbangkan rename repo & project Vercel jadi `orange-shop`.
- Slug URL demo acak (`sim-rt-etzn`, `smart-umkm-sigma`, `content-assistant-pink`) — kalau pakai domain sendiri, bisa jadi `rt.emil….my.id`, `umkm.emil….my.id`, dll. Lebih profesional.

## 6. Kejujuran soal AI-assisted development
Kalimat "Memanfaatkan AI-assisted development … sekaligus meninjau dan menyesuaikan kode" itu bagus dan jujur. Biar makin kuat, tunjukkan di case study **satu contoh keputusan yang kamu ambil sendiri** (misal desain skema database, penanganan auth, refactor) — itu yang membedakan developer dari "yang cuma prompt".

## 7. Ukur, jangan nebak
- Aktifkan **Vercel Web Analytics + Speed Insights** (gratis di Hobby, 2 baris kode) → tahu dari mana pengunjung datang & Core Web Vitals pengguna nyata.
- Track klik CTA (WhatsApp, email, unduh CV) sebagai event → tahu apakah perubahan konten menaikkan kontak.
