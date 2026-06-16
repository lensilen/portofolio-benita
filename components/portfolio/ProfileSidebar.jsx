import ProjectNavigation from "@/components/portfolio/ProjectNavigation";
import SocialLinks from "@/components/portfolio/SocialLinks";
import ThemeToggle from "@/components/portfolio/ThemeToggle";

export default function ProfileSidebar({
  activeSection,
  navItems,
  onSelectSection,
  onToggleTheme,
  profile,
  theme,
}) {
  return (
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
            <p className="mt-5 max-w-sm text-base font-semibold leading-relaxed text-[var(--muted)]">
              {profile.tagline}
            </p>
          </div>

          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>

        <ProjectNavigation
          items={navItems}
          activeSection={activeSection}
          onSelect={onSelectSection}
        />
      </div>

      <SocialLinks email={profile.email} social={profile.social} />
    </aside>
  );
}
