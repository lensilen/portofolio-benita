import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-sm font-semibold uppercase text-[var(--accent)]">
          Skills
        </h2>
        <h3 className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">
          Tools, technologies, and working strengths
        </h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6"
            >
              <h4 className="mb-4 font-semibold">{group.category}</h4>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-[var(--border)] px-3 py-1 text-sm text-[var(--muted)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
