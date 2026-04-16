"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import { initGsap } from "@/lib/gsap";
import type { StaggerTextOptions } from "@/types/animation";

const DEFAULTS: Required<Omit<StaggerTextOptions, "from">> = {
  duration: 0.7,
  ease: "power2.out",
  delay: 0,
  stagger: 0.06,
  y: 18,
};

export function useStaggerText<T extends HTMLElement = HTMLElement>(options: StaggerTextOptions = {}) {
  const containerRef = useRef<T | null>(null);
  const gsap = initGsap();
  const config = { ...DEFAULTS, ...options };

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const targets = container.querySelectorAll<HTMLElement>("[data-stagger-item]");
      if (!targets.length) return;

      gsap.fromTo(
        targets,
        { autoAlpha: 0, y: config.y },
        {
          autoAlpha: 1,
          y: 0,
          duration: config.duration,
          delay: config.delay,
          ease: config.ease,
          stagger: config.stagger,
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
            once: true,
          },
        },
      );
    },
    { scope: containerRef },
  );

  return containerRef;
}
