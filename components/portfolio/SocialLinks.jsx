import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

const socialLinkClass = "text-[var(--muted)] transition-colors hover:text-[var(--accent)]";

export default function SocialLinks({ email, social }) {
  return (
    <div className="mt-10 flex items-center gap-4 lg:mt-0">
      <a
        href={social.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className={socialLinkClass}
      >
        <GithubIcon />
      </a>
      <a
        href={social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className={socialLinkClass}
      >
        <LinkedinIcon />
      </a>
      <a href={`mailto:${email}`} aria-label="Email" className={socialLinkClass}>
        <Mail size={20} />
      </a>
    </div>
  );
}
