/**
 * Lignes de court de tennis stylisées, utilisées en décor de fond
 * des sections sombres et dorées.
 */
export default function CourtLines({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 420"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="20"
        y="20"
        width="760"
        height="380"
        rx="6"
        stroke="currentColor"
        strokeWidth="3"
      />
      <line x1="20" y1="80" x2="780" y2="80" stroke="currentColor" strokeWidth="2" />
      <line x1="20" y1="340" x2="780" y2="340" stroke="currentColor" strokeWidth="2" />
      <line x1="240" y1="80" x2="240" y2="340" stroke="currentColor" strokeWidth="2" />
      <line x1="560" y1="80" x2="560" y2="340" stroke="currentColor" strokeWidth="2" />
      <line x1="240" y1="210" x2="560" y2="210" stroke="currentColor" strokeWidth="2" />
      <line x1="400" y1="20" x2="400" y2="400" stroke="currentColor" strokeWidth="4" />
    </svg>
  );
}
