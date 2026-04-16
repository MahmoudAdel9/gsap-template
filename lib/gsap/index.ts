import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let isRegistered = false;

export function initGsap(): typeof gsap {
  if (!isRegistered) {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
    gsap.config({ nullTargetWarn: false });
    isRegistered = true;
  }

  return gsap;
}

export { ScrollTrigger };
