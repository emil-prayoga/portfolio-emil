import Link from "next/link";
import { ArrowUpRight, Globe, ShoppingCart, Store, Users } from "lucide-react";

const whatsappServiceUrl = `https://wa.me/6281959663120?text=${encodeURIComponent(
  "Halo Emil, saya mau tanya soal pembuatan website",
)}`;

const services = [
  { icon: Globe, title: "Company Profile", description: "Website perusahaan/UMKM yang rapi, cepat, dan mudah ditemukan di Google. Cocok untuk membangun kepercayaan calon pelanggan." },
  { icon: Store, title: "Katalog Produk", description: "Tampilkan produk/jasa dengan kategori, pencarian, dan tombol order via WhatsApp. Tanpa ribet checkout." },
  { icon: ShoppingCart, title: "Toko Online", description: "E-commerce sederhana dengan keranjang, checkout, dan panel admin untuk kelola produk & pesanan." },
  { icon: Users, title: "Sistem Informasi", description: "Aplikasi internal (RT, kasir, inventori, dashboard) yang menata data dan menghemat waktu kerja." },
];

const steps = [
  "Diskusi kebutuhan & tujuan (gratis, 30 menit)",
  "Desain & prototipe, revisi sampai setuju",
  "Pengembangan, testing, & pelatihan penggunaan",
  "Launch + bantuan purna jual",
];

export default function ServicesSection() {
  return (
    <section id="services" className="gallery-section scroll-mt-20">
      <div className="gallery-shell">
        <div className="gallery-heading">
          <h2>Layanan.</h2>
          <p>Solusi website yang fokus ke hasil bisnis: lebih dipercaya, mudah dihubungi, cepat.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, description }) => (
            <article key={title} className="project-card flex min-h-full flex-col p-5 sm:p-6">
              <Icon aria-hidden="true" className="mb-4 h-5 w-5 text-[#c8f36a]" />
              <h3 className="text-xl font-semibold leading-tight tracking-[-.03em]">{title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-[#bcb9b1]">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-[#f1efe9]">Proses kerja</h3>
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
            <h3 className="text-lg font-semibold text-[#f1efe9]">Estimasi</h3>
            <ul className="mt-4 space-y-2 text-sm text-[#bcb9b1]">
              <li>• Company profile / katalog: 1–3 minggu</li>
              <li>• Toko online: 3–6 minggu</li>
              <li>• Sistem informasi: sesuai kompleksitas</li>
              <li>• Harga: menyesuaikan kebutuhan (diskusi dulu)</li>
            </ul>
            <a href={whatsappServiceUrl} target="_blank" rel="noopener noreferrer" className="gallery-focus mt-6 inline-flex min-h-12 items-center gap-3 rounded-xl bg-[#c8f36a] px-5 text-sm font-bold text-[#101110] transition-colors hover:bg-[#d7ff7d]">
              Diskusikan kebutuhan website
              <span className="sr-only">(membuka tab baru)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
