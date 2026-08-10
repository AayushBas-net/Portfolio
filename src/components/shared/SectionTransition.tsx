"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type SectionTransitionProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionTransition({
  children,
  className = "",
}: SectionTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section) return;

      const animation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=100%",
          pin: true,
          scrub: 0.6,
          pinSpacing: true,
        },
      });

      animation.to(section, {
        scale: 0.82,
        rotation: 4,
        y: -20,
        ease: "none",
      });

      return () => {
        animation.scrollTrigger?.kill();
        animation.kill();
      };
    },
    {
      scope: containerRef,
    },
  );

  return (
    <div
      ref={containerRef}
      className={`section-transition ${className}`}
    >
      <div ref={sectionRef} className="section-transition__inner">
        {children}
      </div>
    </div>
  );
}