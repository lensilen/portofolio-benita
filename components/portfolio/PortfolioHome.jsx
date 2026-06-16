"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { projectCategories } from "@/data/projects";
import { getProjectNavItems } from "@/components/portfolio/navigation";
import ProfileSidebar from "@/components/portfolio/ProfileSidebar";
import ProjectGroups from "@/components/portfolio/ProjectGroups";

const projectNavItems = getProjectNavItems(projectCategories);
const defaultSection = projectNavItems[0].href.slice(1);

export default function PortfolioHome() {
  const [theme, setTheme] = useState("dark");
  const [activeSection, setActiveSection] = useState(defaultSection);

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
      const current = projectNavItems.reduce((active, item) => {
        const section = document.querySelector(item.href);
        if (!section) {
          return active;
        }

        return section.getBoundingClientRect().top <= triggerLine ? item.href.slice(1) : active;
      }, defaultSection);

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
        <ProfileSidebar
          activeSection={activeSection}
          navItems={projectNavItems}
          onSelectSection={setActiveSection}
          onToggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")}
          profile={profile}
          theme={theme}
        />
        <ProjectGroups categories={projectCategories} />
      </div>
    </main>
  );
}
