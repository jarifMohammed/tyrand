"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

interface CountUpProps {
  target: string;
  duration?: number;
  className?: string;
}

function parseTarget(target: string) {
  const match = target.match(/^([<]?)(\d+\.?\d*)(.*)$/);
  if (!match) return { prefix: "", value: 0, suffix: target, decimals: 0 };
  return {
    prefix: match[1],
    value: parseFloat(match[2]),
    suffix: match[3],
    decimals: match[2].includes(".") ? match[2].split(".")[1].length : 0,
  };
}

export default function CountUp({
  target,
  duration = 2,
  className = "",
}: CountUpProps) {
  const { prefix, value, suffix, decimals } = parseTarget(target);
  const [display, setDisplay] = useState(`${prefix}0${suffix}`);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const start = performance.now();
    const step = (now: number) => {
      const elapsed = (now - start) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * value;
      setDisplay(`${prefix}${current.toFixed(decimals)}${suffix}`);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, value, prefix, suffix, decimals, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
