import { profile } from "@/data/profile";

const focusAreas = ["Front End", "Mobile", "UI"];

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-start">
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase text-[var(--accent)]">
            About
          </h2>
          <h3 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            A portfolio for thoughtful digital interfaces.
          </h3>
          <p className="leading-relaxed text-[var(--muted)]">
            {profile.about}
          </p>
        </div>

        <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6">
          <h4 className="mb-5 text-lg font-semibold">Portfolio Focus</h4>
          <div className="grid gap-3">
            {focusAreas.map((area) => (
              <div
                key={area}
                className="rounded-lg border border-[var(--border)] px-4 py-3 text-sm font-semibold text-[var(--foreground)]"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
