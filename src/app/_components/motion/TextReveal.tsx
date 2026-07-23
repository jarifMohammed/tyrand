"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface TextRevealProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  delay?: number;
  once?: boolean;
}

export default function TextReveal({
  text,
  className = "",
  as: Tag = "h2",
  delay = 0,
  once = true,
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: 0.3 });
  const words = text.split(" ");

  return (
    <div ref={ref} className={className}>
      <Tag className="inline">
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden">
            <motion.span
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, filter: "blur(0px)" }
                  : { opacity: 0, y: 24, filter: "blur(6px)" }
              }
              transition={{
                duration: 0.5,
                delay: delay + i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block"
            >
              {word}
            </motion.span>
            {i < words.length - 1 && "\u00A0"}
          </span>
        ))}
      </Tag>
    </div>
  );
}
