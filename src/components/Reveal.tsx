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
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible
          ? "translate-x-0 translate-y-0 scale-100 opacity-100"
          : `opacity-0 ${hiddenClass[direction]}`
      } ${className}`}
    >
      {children}
    </div>
  );
}
