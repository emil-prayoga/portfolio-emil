# 06 — Cara Benchmark (sebelum & sesudah)

Ambil **baseline dulu** sebelum ubah apa-apa, simpan screenshot/JSON-nya, lalu ukur lagi setelah tiap batch perbaikan.

## Target
| Kategori | Target mobile | Target desktop |
|---|---|---|
| Performance | ≥ 90 (ideal 95+) | ≥ 98 |
| Accessibility | 100 | 100 |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |
| LCP | ≤ 2.5 s | ≤ 1.2 s |
| CLS | ≤ 0.1 | ≤ 0.1 |
| TBT (proxy INP di lab) | ≤ 200 ms | ≤ 100 ms |

## 1. PageSpeed Insights (paling gampang)
https://pagespeed.web.dev/ → tempel URL → lihat tab **Mobile** (yang dipakai Google untuk ranking).
Bagian atas = data lapangan (CrUX) kalau trafik cukup; bawah = data lab Lighthouse.

## 2. Lighthouse CLI (lebih konsisten, bisa diulang)
```bash
npx lighthouse https://portofolio-emil-prayoga-albani.vercel.app/ \
  --preset=perf --form-factor=mobile --throttling-method=simulate \
  --output=html --output=json --output-path=./reports/baseline
```
Skor lab berfluktuasi ±5 poin — **jalankan 3–5 kali dan ambil median**:
```bash
for i in 1 2 3 4 5; do
  npx lighthouse https://portofolio-emil-prayoga-albani.vercel.app/ \
    --quiet --chrome-flags="--headless" --output=json \
    --output-path=./reports/run-$i.json
done
```
Tips: jalankan di jendela incognito/headless, tanpa ekstensi, laptop dicolok charger.

## 3. Lighthouse CI di GitHub Actions
Biar setiap push/PR otomatis dicek dan gagal kalau skor turun di bawah ambang.
→ `code-snippets/lighthouserc.json` + `code-snippets/.github/workflows/lighthouse.yml`

## 4. Aksesibilitas — lebih dari Lighthouse
1. **axe DevTools** (ekstensi Chrome/Firefox, gratis) → scan, perbaiki semua "Critical/Serious".
2. **Keyboard only**: cabut mouse, Tab dari atas sampai bawah, isi & kirim form.
3. **Screen reader**: NVDA (Windows, gratis) atau VoiceOver (Mac/iPhone: Cmd+F5). Buka daftar link & daftar heading — apakah masuk akal tanpa melihat layar?
4. **Zoom 200% & lebar 320px** (WCAG 1.4.4 & 1.4.10): tidak ada teks terpotong / scroll horizontal.
5. **Reduced motion**: DevTools → Rendering → *Emulate prefers-reduced-motion: reduce*.
6. Otomatis di CI (opsional): `@axe-core/playwright` di test E2E.

## 5. SEO — cek manual
- `view-source:` → pastikan title, description, canonical, og:*, JSON-LD ada di HTML awal (bukan disuntik JS)
- Rich Results Test: https://search.google.com/test/rich-results (validasi JSON-LD)
- Preview share: https://www.opengraph.xyz atau LinkedIn Post Inspector
- Search Console → URL Inspection → "Test live URL"

## 6. Template catatan hasil
| Tanggal | Perubahan | Perf (m) | A11y | BP | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|---|
| 2026-10-31 | Baseline | | | | | | | |
| | Fix hero image + priority | | | | | | | |
| | Metadata + OG + JSON-LD | | | | | | | |
| | A11y batch (link, form, logo) | | | | | | | |
