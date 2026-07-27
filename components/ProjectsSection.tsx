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
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={project.id}
            className="group block h-full"
          >
            <Card className="h-full flex flex-col justify-between bg-neutral-900 border-neutral-800 text-neutral-100 hover:border-neutral-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-bold tracking-tight text-neutral-50 group-hover:text-neutral-200 transition-colors">
                    {project.title}
                  </CardTitle>
                  <svg
                    className="w-5 h-5 text-neutral-500 group-hover:text-neutral-100 transition-colors"
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
                </div>
              </CardHeader>

              <CardContent className="flex-1">
                <CardDescription className="text-neutral-400 text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardContent>

              <CardFooter className="pt-4 border-t border-neutral-800/60 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-neutral-800 hover:bg-neutral-700 text-neutral-300 font-normal"
                  >
                    {tag}
                  </Badge>
                ))}
              </CardFooter>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}