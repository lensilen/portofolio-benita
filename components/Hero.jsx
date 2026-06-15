import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center px-6 pt-24">
      <div className="mx-auto grid w-full max-w-5xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase text-[var(--accent)]">
            {profile.role}
          </p>
          <h1 className="mb-6 max-w-3xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
            {profile.tagline}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-hover)]"
            >
              View Portfolio
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full border border-[var(--border-strong)] bg-[var(--card)] px-6 py-3 text-sm font-semibold text-[var(--accent)] transition-colors hover:border-[var(--accent)] hover:bg-[var(--accent-soft)]"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6 shadow-[0_24px_80px_var(--shadow)]">
          <div className="mb-5 flex items-start justify-between gap-4 border-b border-[var(--border)] pb-5">
            <div>
              <p className="text-sm font-semibold text-[var(--accent)]">
                Portfolio Snapshot
              </p>
              <h2 className="mt-2 text-2xl font-bold">{profile.name}</h2>
            </div>
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)] text-lg font-bold text-[var(--accent)]">
              BA
            </div>
          </div>
          <dl className="grid gap-4 text-sm">
            <div>
              <dt className="font-semibold text-[var(--foreground)]">Focus</dt>
              <dd className="mt-1 text-[var(--muted)]">
                Front-end interfaces, mobile app screens, and UI design systems.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-[var(--foreground)]">
                Portfolio Areas
              </dt>
              <dd className="mt-1 text-[var(--muted)]">
                Front End, Mobile, and UI design.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-[var(--foreground)]">
                Location
              </dt>
              <dd className="mt-1 text-[var(--muted)]">{profile.location}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
