"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import { initGsap, ScrollTrigger } from "@/lib/gsap";
import type { FadeInOptions, MaybeHTMLElement } from "@/types/animation";

const DEFAULTS: Required<FadeInOptions> = {
  duration: 0.8,
  ease: "power2.out",
  delay: 0,
  y: 24,
  from: 0,
};

export function useFadeIn(options: FadeInOptions = {}) {
  const elementRef = useRef<MaybeHTMLElement>(null);
  const gsap = initGsap();
  const config = { ...DEFAULTS, ...options };

  useGSAP(
    () => {
      const element = elementRef.current;
      if (!element) return;

      gsap.fromTo(
        element,
        { autoAlpha: config.from, y: config.y },
        {
          autoAlpha: 1,
          y: 0,
          duration: config.duration,
          delay: config.delay,
          ease: config.ease,
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            once: true,
          },
        },
      );
    },
    { scope: elementRef },
  );

  return elementRef;
}

export type FadeInRef = ReturnType<typeof useFadeIn>;

export { ScrollTrigger };
