import { ArrowUp } from "lucide-react";
import ProjectCard from "@/components/portfolio/ProjectCard";

export default function ProjectGroups({ categories }) {
  return (
    <section className="space-y-24 pb-16">
      <section id="projects" className="scroll-mt-10">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)]">
            Projects
          </h2>
        </div>

        <div className="space-y-24 lg:space-y-32">
          {categories.map((category, categoryIndex) => (
            <div
              key={category.id}
              className={`space-y-5 ${
                categoryIndex === 0 ? "" : "border-t border-[var(--border)] pt-12 lg:pt-16"
              }`}
            >
              {category.projects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  sectionId={index === 0 ? category.id : undefined}
                />
              ))}
            </div>
          ))}
        </div>

        <a
          href="#top"
          className="mt-12 inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)] transition-colors hover:text-[var(--accent-hover)]"
        >
          Back to top <ArrowUp size={16} />
        </a>
      </section>
    </section>
  );
}
