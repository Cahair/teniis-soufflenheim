import Link from "next/link";

export function BallMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <circle cx="20" cy="20" r="19" fill="var(--color-gold-500)" />
      <path
        d="M7 4.5 C 16 12, 16 28, 7 35.5"
        stroke="var(--color-pine-950)"
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M33 4.5 C 24 12, 24 28, 33 35.5"
        stroke="var(--color-pine-950)"
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function LogoMark({
  onNavigate,
}: {
  onNavigate?: () => void;
}) {
  return (
    <Link
      href="/"
      onClick={onNavigate}
      className="group flex items-center gap-3"
      aria-label="Tennis Padel Club Soufflenheim — accueil"
    >
      <BallMark className="h-9 w-9 drop-shadow-md transition-transform duration-300 group-hover:rotate-12" />
      <span className="flex flex-col leading-none">
        <span className="display text-lg tracking-wide text-white">
          Tennis <span className="text-gold-400">Padel</span>
        </span>
        <span className="mt-1 text-[0.6rem] uppercase tracking-[0.3em] text-white/70">
          Club Soufflenheim
        </span>
      </span>
    </Link>
  );
}
