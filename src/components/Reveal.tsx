"use client";

import { useEffect, useRef, useState } from "react";

type Direction = "up" | "left" | "right" | "zoom" | "fade";

const hiddenClass: Record<Direction, string> = {
  up: "translate-y-8",
  left: "-translate-x-10",
  right: "translate-x-10",
  zoom: "scale-95",
  fade: "",
};

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }
    // Un seuil fixe de 12 % ne peut jamais être atteint quand l'élément
    // est plus haut que le viewport (ex : la grille complète de la galerie) —
    // on le plafonne pour que la révélation reste déclenchable.
    const threshold = Math.min(
      0.12,
      (window.innerHeight * 0.3) / Math.max(el.offsetHeight, 1)
    );
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible
          ? "opacity-100"
          : // will-change et transform uniquement avant la révélation : un
            // ancêtre avec transform devient le containing block des
            // descendants position:fixed (lightbox, menus plein écran…)
            `opacity-0 will-change-transform ${hiddenClass[direction]}`
      } ${className}`}
    >
      {children}
    </div>
  );
}
