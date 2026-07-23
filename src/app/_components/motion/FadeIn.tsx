"use client";

import { motion, useInView } from "motion/react";
import { useRef, type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  distance?: number;
}

const directionMap = (d: string, dist: number) => {
  switch (d) {
    case "up": return { y: dist, x: 0 };
    case "down": return { y: -dist, x: 0 };
    case "left": return { x: dist, y: 0 };
    case "right": return { x: -dist, y: 0 };
    default: return { y: dist, x: 0 };
  }
};

export default function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className = "",
  once = true,
  distance = 40,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: 0.1 });
  const offset = directionMap(direction, distance);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offset, filter: "blur(6px)" }}
      animate={isInView ? { opacity: 1, x: 0, y: 0, filter: "blur(0px)" } : { opacity: 0, ...offset, filter: "blur(6px)" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
