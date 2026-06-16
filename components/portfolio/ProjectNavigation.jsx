export default function ProjectNavigation({ items, activeSection, onSelect }) {
  return (
    <nav className="mt-20 hidden lg:block" aria-label="Primary navigation">
      <ul className="space-y-3">
        <li>
          <div className="-ml-6 text-2xl font-bold uppercase leading-none text-[var(--accent)]">
            Projects
          </div>
        </li>
        {items.map((item) => {
          const id = item.href.slice(1);
          const isActive = activeSection === id;

          return (
            <li key={item.href} className="overflow-visible">
              <a
                href={item.href}
                onClick={() => onSelect(id)}
                aria-current={isActive ? "true" : undefined}
                className={`group flex items-center gap-4 text-xs font-bold uppercase transition-all duration-200 hover:text-[var(--accent)] focus-visible:text-[var(--accent)] ${
                  isActive ? "translate-x-3 text-[var(--accent)]" : "text-[var(--muted)]"
                }`}
              >
                <span
                  className={`-ml-6 h-px transition-all duration-200 group-hover:w-24 group-hover:bg-[var(--accent)] group-focus-visible:w-24 group-focus-visible:bg-[var(--accent)] ${
                    isActive ? "w-24 bg-[var(--accent)]" : "w-16 bg-[var(--border-strong)]"
                  }`}
                />
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
