"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useMemo, type CSSProperties } from "react";

interface AnimatedBackgroundProps {
  src: string;
  className?: string;
  parallax?: boolean;
  glowColor?: string;
  glowIntensity?: number;
}

export default function AnimatedBackground({
  src,
  className = "",
  parallax = false,
  glowColor = "rgba(163, 230, 53, 0.08)",
  glowIntensity = 0.15,
}: AnimatedBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  const baseStyle: CSSProperties = useMemo(() => ({
    backgroundImage: `url('${src}')`,
  }), [src]);

  const glowStyle: CSSProperties = useMemo(() => ({
    background: `radial-gradient(ellipse at 50% 50%, ${glowColor}, transparent 70%)`,
    opacity: glowIntensity,
  }), [glowColor, glowIntensity]);

  return (
    <div ref={ref} className={`absolute inset-0 overflow-hidden ${className}`}>
      {parallax ? (
        <motion.div className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-image-zoom" style={{ ...baseStyle, y }} />
      ) : (
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-image-zoom" style={baseStyle} />
      )}
      <div className="absolute inset-0 animate-bg-glow-slow" style={glowStyle} />
      <div className="absolute bottom-0 left-0 right-0 h-px animate-border-glow" />
    </div>
  );
}
