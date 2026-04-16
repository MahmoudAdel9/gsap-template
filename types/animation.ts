import type { gsap } from "gsap";

export type MaybeHTMLElement = HTMLElement | null;

export interface BaseAnimationOptions {
  duration?: number;
  ease?: string | gsap.EaseFunction;
  delay?: number;
}

export interface FadeInOptions extends BaseAnimationOptions {
  y?: number;
  from?: number;
}

export interface StaggerTextOptions extends BaseAnimationOptions {
  stagger?: number;
  y?: number;
  from?: gsap.TweenVars["stagger"];
}
