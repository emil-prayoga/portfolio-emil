const skills = [
  { name: "JavaScript", category: "Language" },
  { name: "TypeScript", category: "Language" },
  { name: "React.js", category: "Frontend" },
  { name: "Next.js", category: "Framework" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "shadcn/ui", category: "UI Library" },
  { name: "Framer Motion", category: "Animation" },
  { name: "Supabase", category: "Backend & Database" },
  { name: "REST API", category: "Integration" },
  { name: "Git & GitHub", category: "Tools" },
  { name: "Figma & Stitch", category: "UI/UX Design" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="gallery-section scroll-mt-20 ">
      <div className="gallery-shell">
        <div className="gallery-heading"><div><h2>Alat di balik karya.</h2></div><p>Teknologi yang saya gunakan untuk merancang, membangun, dan mengirim produk web.</p></div>
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3" aria-label="Daftar keahlian dan teknologi">
          {skills.map((skill, index) => <li key={skill.name} className="group flex min-h-24 items-center gap-4 rounded-2xl border border-white/10 bg-white/[.035] p-5 transition-colors hover:border-[#c8f36a]/50 hover:bg-white/[.06]"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[.06] font-mono text-xs text-[#c8f36a]">{String(index + 1).padStart(2, "0")}</span><div><span className="block text-lg font-semibold tracking-tight">{skill.name}</span><span className="mt-1 block text-xs text-[#89877f]">{skill.category}</span></div></li>)}
        </ul>
      </div>
    </section>
  );
}
