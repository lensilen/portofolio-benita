"use client";

import { useEffect, useState } from "react";
import { ArrowUp, ArrowUpRight, Mail, Moon, Sun } from "lucide-react";
import { profile } from "@/data/profile";
import { projectCategories } from "@/data/projects";

const focusLinks = [
  { href: "#front-end", label: "Front End" },
  { href: "#mobile", label: "Mobile" },
  { href: "#ui-ux", label: "UI/UX" },
];

function GithubIcon({ size = 20 }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.09.68-.22.68-.49v-1.73c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.35 1.11 2.92.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.31 9.31 0 0 1 12 6.95c.85 0 1.7.12 2.5.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9v2.8c0 .27.18.59.69.49A10.15 10.15 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 20 }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.94 8.98H3.86V20h3.08V8.98ZM5.4 4A1.78 1.78 0 1 0 5.4 7.56 1.78 1.78 0 0 0 5.4 4Zm5.62 4.98H8.07V20h3.08v-5.78c0-1.52.29-3 2.17-3 1.86 0 1.88 1.74 1.88 3.1V20h3.08v-6.4c0-3.14-.67-5.56-4.35-5.56-1.77 0-2.95.97-3.44 1.89h-.04l-.43-1.95Z" />
    </svg>
  );
}

export default function Home() {
  const [theme, setTheme] = useState("dark");
  const [activeSection, setActiveSection] = useState("front-end");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const preferredTheme = window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
    setTheme(savedTheme ?? preferredTheme);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handlePointerMove = (event) => {
      document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
    };

    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("pointermove", handlePointerMove);
    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      const triggerLine = window.innerHeight * 0.42;
      const current = focusLinks.reduce((active, item) => {
        const section = document.querySelector(item.href);
        if (!section) {
          return active;
        }

        return section.getBoundingClientRect().top <= triggerLine ? item.href.slice(1) : active;
      }, focusLinks[0].href.slice(1));

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, []);

  return (
    <main id="top" className="min-h-screen px-6 py-10 sm:px-10 lg:px-16">
      <div aria-hidden="true" className="pointer-light" />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-16 lg:grid-cols-[360px_1fr] lg:gap-24">
        <aside className="lg:sticky lg:top-10 lg:flex lg:h-[calc(100vh-5rem)] lg:flex-col lg:justify-between">
          <div>
            <div className="flex items-start justify-between gap-6">
              <div>
                <h1 className="text-5xl font-bold tracking-tight text-[var(--foreground)] sm:text-6xl">
                  {profile.name}
                </h1>
                <p className="mt-4 text-xl font-semibold text-[var(--foreground)]">
                  {profile.role}
                </p>
                <p className="mt-5 max-w-sm text-base font-semibold leading-relaxed text-[var(--accent)]">
                  {profile.tagline}
                </p>
              </div>

              <button
                type="button"
                aria-label="Toggle theme"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
              </button>
            </div>

            <nav className="mt-20 hidden lg:block" aria-label="Primary navigation">
              <div>
                <ul className="space-y-3">
                  <li>
                    <div className="pl-14 text-xs font-bold uppercase text-[var(--muted)]">
                      Projects
                    </div>
                  </li>
                  {focusLinks.map((item) => (
                    <li key={item.href} className="overflow-visible">
                      <a
                        href={item.href}
                        onClick={() => setActiveSection(item.href.slice(1))}
                        aria-current={activeSection === item.href.slice(1) ? "true" : undefined}
                        className={`group flex items-center gap-4 text-xs font-bold uppercase transition-all duration-200 hover:text-[var(--accent)] focus-visible:text-[var(--accent)] ${
                          activeSection === item.href.slice(1)
                            ? "translate-x-3 text-[var(--accent)]"
                            : "text-[var(--muted)]"
                        }`}
                      >
                        <span
                          className={`-ml-6 h-px transition-all duration-200 group-hover:w-24 group-hover:bg-[var(--accent)] group-focus-visible:w-24 group-focus-visible:bg-[var(--accent)] ${
                            activeSection === item.href.slice(1)
                              ? "w-24 bg-[var(--accent)]"
                              : "w-16 bg-[var(--border-strong)]"
                          }`}
                        />
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>

          <div className="mt-10 flex items-center gap-4 lg:mt-0">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
            >
              <GithubIcon />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
            >
              <LinkedinIcon />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
            >
              <Mail size={20} />
            </a>
          </div>
        </aside>

        <section className="space-y-24 pb-16">
          <section id="projects" className="scroll-mt-10">
            <div className="mb-8">
              <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)]">
                Projects
              </h2>
            </div>

            <div className="space-y-24 lg:space-y-32">
              {projectCategories.map((category, categoryIndex) => (
                <div
                  key={category.id}
                  className={`space-y-5 ${
                    categoryIndex === 0
                      ? ""
                      : "border-t border-[var(--border)] pt-12 lg:pt-16"
                  }`}
                >
                  {category.projects.map((project, index) => {
                    const projectUrl = [project.liveUrl, project.repoUrl].find(
                      (url) => url && url !== "#",
                    );

                    return (
                      <article
                        key={project.title}
                        id={index === 0 ? category.id : undefined}
                        className="grid scroll-mt-10 gap-5 rounded-lg p-4 transition-colors hover:bg-[var(--card-hover)] sm:-mx-4 sm:grid-cols-[230px_1fr]"
                      >
                        <div className="flex aspect-video items-center justify-center overflow-hidden rounded-md border border-[var(--border)] bg-[var(--card)] shadow-[0_18px_60px_var(--shadow)]">
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
                  })}
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
      </div>
    </main>
  );
}
