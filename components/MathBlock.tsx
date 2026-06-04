"use client";
import { useEffect, useRef } from "react";
import katex from "katex";

interface Props {
  formula: string;
  display?: boolean;
  className?: string;
}

export default function MathBlock({ formula, display = false, className = "" }: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (ref.current) {
      katex.render(formula, ref.current, {
        displayMode: display,
        throwOnError: false,
        trust: true,
      });
    }
  }, [formula, display]);

  return (
    <span
      ref={ref}
      className={`${display ? "block my-6 overflow-x-auto text-center" : "inline"} ${className}`}
    />
  );
}
