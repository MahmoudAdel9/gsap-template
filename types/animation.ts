import type { EasingFunction, TweenVars } from "gsap";

export type MaybeHTMLElement = HTMLElement | null;

export interface BaseAnimationOptions {
  duration?: number;
  ease?: string | EasingFunction;
  delay?: number;
}

export interface FadeInOptions extends BaseAnimationOptions {
  y?: number;
  from?: number;
}

export interface StaggerTextOptions extends BaseAnimationOptions {
  stagger?: number;
  y?: number;
  from?: TweenVars["stagger"];
}
