"use client";

import React, { useState } from "react";

import { cn } from "@/lib/utils";

const STAGGER = 0.035;

type TextRollProps = {
  children: string;
  className?: string;
  center?: boolean;
};

export const TextRoll: React.FC<TextRollProps> = ({
  children,
  className,
  center = false,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn("relative inline-flex overflow-hidden", className)}
      style={{ lineHeight: 1, whiteSpace: "pre" }}
    >
      {children.split("").map((l, i) => {
        const delay = center
          ? STAGGER * Math.abs(i - (children.length - 1) / 2)
          : STAGGER * i;

        return (
          <span
            key={i}
            aria-hidden="true"
            style={{
              position: "relative",
              display: "inline-block",
              overflow: "hidden",
              height: "1em",
              lineHeight: 1,
            }}
          >
            <span
              style={{
                display: "block",
                transform: hovered ? "translateY(-100%)" : "translateY(0)",
                transition: `transform 260ms ease-in-out ${delay}s`,
              }}
            >
              {l}
            </span>
            <span
              style={{
                position: "absolute",
                inset: 0,
                display: "block",
                transform: hovered ? "translateY(0)" : "translateY(100%)",
                transition: `transform 260ms ease-in-out ${delay}s`,
              }}
            >
              {l}
            </span>
          </span>
        );
      })}
    </span>
  );
};
