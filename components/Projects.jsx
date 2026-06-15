import { ArrowUpRight, Code2, Layers, Smartphone } from "lucide-react";
import { projectCategories } from "@/data/projects";

const icons = {
  "front-end": Code2,
  mobile: Smartphone,
  ui: Layers,
};

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-sm font-semibold uppercase text-[var(--accent)]">
          Portfolio
        </h2>
        <h3 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
          Work organized by focus area
        </h3>
        <p className="mb-10 max-w-2xl text-[var(--muted)]">
          Project details will be added later. For now, each category is ready
          as a home for front-end, mobile, and UI portfolio pieces.
        </p>

        <div className="grid gap-6 lg:grid-cols-3">
          {projectCategories.map((category) => {
            const Icon = icons[category.id];

            return (
              <article
                key={category.id}
                className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6 shadow-[0_18px_50px_var(--shadow)]"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h4 className="text-xl font-bold">{category.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {category.description}
                </p>

                {category.projects.length > 0 ? (
                  <div className="mt-6 space-y-4">
                    {category.projects.map((project) => (
                      <div
                        key={project.title}
                        className="border-t border-[var(--border)] pt-4"
                      >
                        <h5 className="font-semibold">{project.title}</h5>
                        <p className="mt-2 text-sm text-[var(--muted)]">
                          {project.description}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full bg-[var(--accent-soft)] px-2.5 py-0.5 text-xs text-[var(--accent)]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="mt-4 flex gap-4 text-sm">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 font-medium text-[var(--accent)]"
                            >
                              Live <ArrowUpRight size={14} />
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 font-medium text-[var(--muted)] hover:text-[var(--foreground)]"
                            >
                              Code <ArrowUpRight size={14} />
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="mt-6 rounded-lg border border-dashed border-[var(--border-strong)] p-4 text-sm text-[var(--muted)]">
                    Portfolio items for {category.title} will be placed here.
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
