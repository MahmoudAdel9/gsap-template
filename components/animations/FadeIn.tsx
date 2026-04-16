"use client";

import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { useFadeIn } from "@/hooks/useFadeIn";
import type { FadeInOptions } from "@/types/animation";

type FadeInProps<T extends ElementType = "div"> = {
  as?: T;
  options?: FadeInOptions;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children">;

export function FadeIn<T extends ElementType = "div">({
  as,
  options,
  children,
  ...rest
}: FadeInProps<T>) {
  const Component = (as ?? "div") as ElementType;
  const ref = useFadeIn(options);

  return (
    <Component ref={ref} {...rest}>
      {children}
    </Component>
  );
}
