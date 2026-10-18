import { ArrowUpRight, Code2, PenTool } from "lucide-react";
import { personalProjects } from "@/src/data/projects";

function ProjectLinks({ project }: { project: (typeof personalProjects)[number] }) {
  return (
    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="gallery-focus inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#e7785d] transition-colors hover:text-[#ffad96]">
        Lihat proyek <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
      </a>
      {project.githubUrl && <a href={project.githubUrl.trim()} target="_blank" rel="noopener noreferrer" aria-label={`Buka repository GitHub ${project.title}`} className="gallery-focus inline-flex min-h-11 items-center gap-2 text-sm text-[#bcb9b1] transition-colors hover:text-white"><Code2 aria-hidden="true" className="h-4 w-4" /> Repository</a>}
      {/* {project.figmaUrl && <a href={project.figmaUrl} target="_blank" rel="noopener noreferrer" aria-label={`Buka desain Figma ${project.title}`} className="gallery-focus inline-flex min-h-11 items-center gap-2 text-sm text-[#bcb9b1] transition-colors hover:text-white"><PenTool aria-hidden="true" className="h-4 w-4" /> Desain Figma</a>} */}
    </div>
  );
}

export default function ProjectsSection() {
  const featured = personalProjects;
  return (
    <section id="portfolio" className="gallery-section scroll-mt-20 ">
      <div className="gallery-shell">
        
        <div className="gallery-heading">
          <h2>Portofolio.</h2>
          <p>Produk digital dan portfolio yang saya bangun dengan fokus pada kegunaan, detail, dan performa.</p>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((project, index) => (
            <article key={project.id} className="project-card flex min-h-full flex-col p-5 sm:p-6">
              <div className="mb-6 flex items-center justify-between">
                <span className="gallery-label">{String(index + 1).padStart(2, "0")} / Case study</span>
                <ArrowUpRight aria-hidden="true" className="h-4 w-4 text-[#c8f36a]" />
              </div>
              <h3 className="text-2xl font-semibold leading-tight tracking-[-.045em]">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-[#bcb9b1]">{project.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label={`Teknologi ${project.title}`}>
                {project.tags.map((tag) => <li key={tag} className="tag-pill">{tag}</li>)}
              </ul>
              <ProjectLinks project={project} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
