"use client";

import type { ComponentPropsWithoutRef } from "react";

import { useStaggerText } from "@/hooks/useStaggerText";
import type { StaggerTextOptions } from "@/types/animation";

interface StaggerTextProps extends ComponentPropsWithoutRef<"p"> {
  text: string;
  splitBy?: "word" | "character";
  options?: StaggerTextOptions;
}

function splitText(text: string, splitBy: StaggerTextProps["splitBy"]) {
  if (splitBy === "character") {
    return text.split("").map((character) => (character === " " ? "\u00A0" : character));
  }

  return text.split(" ").map((word, index, source) => {
    if (index === source.length - 1) return word;
    return `${word}\u00A0`;
  });
}

export function StaggerText({
  text,
  splitBy = "word",
  className,
  options,
  ...rest
}: StaggerTextProps) {
  const ref = useStaggerText(options);
  const parts = splitText(text, splitBy);

  return (
    <p ref={ref} className={className} {...rest}>
      {parts.map((part, index) => (
        <span key={`${part}-${index}`} data-stagger-item>
          {part}
        </span>
      ))}
    </p>
  );
}
