import { personalProjects } from "../src/data/projects";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProjectsSection() {
  return (
    <section className="max-w-7xl mx-auto py-12 scroll-mt-20" id="projects">
      <div className="mb-16 space-y-2">
        <h2 className="text-3xl sm:text-5xl font-bold text-neutral-100 tracking-tight leading-tight text-center">
          Proyek
        </h2>
        <p className="text-neutral-400 text-base sm:text-lg leading-relaxed text-center">
          Proyek yang mencerminkan keahlian dan minat saya di bidang Web Development.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {personalProjects.map((project) => (
          <div key={project.id} className="group block h-full">
            <Card className="h-full flex flex-col justify-between bg-neutral-900 border-neutral-800 text-neutral-100 hover:border-neutral-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <CardHeader> {/* Mengurangi padding bawah sedikit */}
                {/* --- BAGIAN HEADER BARU DENGAN IKON FOLDER --- */}
                <div className="flex items-center justify-between mb-2">
                  {/* Ikon Folder di Kiri */}
                  <svg
                    className="w-8 h-8 text-emerald-400 " // Beri warna aksen biar manis
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    />
                  </svg>

                  {/* Tombol Aksi di Kanan (Link, GitHub, Figma) */}
                  <div className="flex items-center gap-1 shrink-0"> {/* Gap dikurangi agar lebih rapat */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Lihat demo ${project.title}`}
                      className="p-2 rounded-lg text-neutral-400 transition hover:bg-neutral-800 hover:text-neutral-100"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Lihat repository GitHub ${project.title}`}
                        className="p-2 rounded-lg text-neutral-400 transition hover:bg-neutral-800 hover:text-neutral-100"
                      >
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.683-.217.683-.482 0-.237-.009-.866-.013-1.699-2.782.604-3.369-1.34-3.369-1.34-.455-1.156-1.112-1.464-1.112-1.464-.909-.62.069-.608.069-.608 1.004.071 1.532 1.031 1.532 1.031.892 1.529 2.341 1.087 2.91.831.091-.647.35-1.087.635-1.338-2.221-.253-4.555-1.111-4.555-4.95 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.651 0 0 .84-.269 2.75 1.025A9.56 9.56 0 0 1 12 6.844c.85.004 1.705.115 2.503.338 1.909-1.294 2.748-1.025 2.748-1.025.546 1.379.203 2.398.1 2.651.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.694-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .268.18.579.688.481A10.004 10.004 0 0 0 22 12c0-5.523-4.477-10-10-10Z" />
                        </svg>
                      </a>
                    )}

                    {project.figmaUrl && (
                      <a
                        href={project.figmaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Lihat desain Figma ${project.title}`}
                        className="p-2 rounded-lg text-neutral-400 transition hover:bg-neutral-800 hover:text-neutral-100"
                      >
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                          {/* Ikon Figma yang lebih akurat */}
                          <path d="M12 11.517V16.5a2.5 2.5 0 0 1-2.5 2.5 2.5 2.5 0 0 1-2.5-2.5 2.5 2.5 0 0 1 2.5-2.5H12Zm0-5v5H9.5a2.5 2.5 0 0 1-2.5-2.5 2.5 2.5 0 0 1 2.5-2.5H12Zm0-4v4H9.5a2.5 2.5 0 0 1 0-5H12Zm2.5 4a2.5 2.5 0 1 1 0 5H12v-5h2.5Zm0 5a2.5 2.5 0 1 1 0 5H12v-5h2.5Z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                {/* --- SELESAI BAGIAN HEADER BARU --- */}

                {/* Judul Proyek Sekarang di bawah ikon, pakai margin-top */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-2"
                >
                  <CardTitle className="text-2xl font-bold tracking-tight text-neutral-50  transition-colors">
                    {project.title}
                  </CardTitle>
                </a>
              </CardHeader>

              <CardContent className="flex-1 pb-6">
                {/* Menambahkan line-clamp agar tinggi card konsisten */}
                <CardDescription className="text-neutral-400 text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardContent>

              <CardFooter className="pt-4 border-t border-neutral-800/60 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-neutral-800 hover:bg-neutral-700 text-neutral-300 font-normal rounded-md px-2.5 py-0.5 text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}