import { socials } from "@/lib/socials";

/* Rangée d'icônes des réseaux sociaux, sur fond sombre (footer,
   menu mobile). Pastilles rondes, dorées au survol. */
export default function SocialLinks() {
  return (
    <div className="flex gap-3">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-gold-400 hover:text-gold-400"
        >
          <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="currentColor">
            <path d={social.path} />
          </svg>
        </a>
      ))}
    </div>
  );
}
