import { ArrowUpRight } from "lucide-react";

function getProjectUrl(project) {
  return [project.liveUrl, project.repoUrl].find((url) => url && url !== "#");
}

export default function ProjectCard({ project, sectionId }) {
  const projectUrl = getProjectUrl(project);

  return (
    <article
      id={sectionId}
      className="grid scroll-mt-10 gap-5 rounded-lg p-4 transition-colors hover:bg-[var(--card-hover)] sm:-mx-4 sm:grid-cols-[260px_1fr]"
    >
      <div
        className="flex w-full items-center justify-center overflow-hidden rounded-md border border-[var(--border)] bg-[var(--card)] shadow-[0_18px_60px_var(--shadow)]"
        style={{
          aspectRatio: project.previewAspect ?? "16 / 9",
        }}
      >
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="h-full w-full object-contain"
        />
      </div>

      <div>
        <h3 className="font-bold text-[var(--foreground)]">
          {projectUrl ? (
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/project inline-flex items-center gap-2 transition-colors hover:text-[var(--accent)]"
              aria-label={`Open ${project.title}`}
            >
              {project.title}
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover/project:-translate-y-0.5 group-hover/project:translate-x-0.5"
              />
            </a>
          ) : (
            <span className="inline-flex items-center gap-2">
              {project.title}
              <ArrowUpRight size={15} className="text-[var(--muted)]" />
            </span>
          )}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
          {project.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-[var(--accent-soft)] px-2.5 py-1 text-xs font-bold text-[var(--accent)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
