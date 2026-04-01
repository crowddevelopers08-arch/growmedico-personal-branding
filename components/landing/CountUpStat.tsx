"use client";

import { useEffect, useRef, useState } from "react";

type CountUpStatProps = {
  value: number;
  suffix?: string;
  decimalPlaces?: number;
};

export function CountUpStat({
  value,
  suffix = "",
  decimalPlaces = 0,
}: CountUpStatProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let frame = 0;
    let startTime: number | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const duration = 1800;
          const step = (time: number) => {
            if (startTime === null) startTime = time;
            const progress = Math.min((time - startTime) / duration, 1);
            const current = value * progress;
            setDisplay(current.toFixed(decimalPlaces));

            if (progress < 1) {
              frame = window.requestAnimationFrame(step);
            }
          };

          frame = window.requestAnimationFrame(step);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
    };
  }, [decimalPlaces, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

