"use client";

import { useEffect, useRef } from "react";
import type { ContactData } from "@/data/portfolio";

type ContactSectionProps = {
  data: ContactData;
};

export function ContactSection({ data }: ContactSectionProps) {
  const dotsRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!dotsRef.current) return;

    let mounted = true;

    function spawnDot() {
      if (!mounted || !dotsRef.current) return;

      const dot = document.createElement("span");
      dot.className = "footer-dot";

      const size = Math.round(6 + Math.random() * 14); // 6-20px (a bit larger)
      const dx = Math.round((Math.random() - 0.5) * 40); // horizontal drift px
      // slower durations: 2200 - 5400ms
      const duration = 2200 + Math.round(Math.random() * 3200);
      const opacity = (0.08 + Math.random() * 0.35).toFixed(2); // lower opacity range (0.08 - 0.43)

      // avoid center area: exclude a central band (percent)
      const centerExclusion = 36; // percent width to avoid in center
      const chooseRight = Math.random() < 0.7; // bias to right side

      let leftPercent = 50; // default
      if (chooseRight) {
        const min = 50 + centerExclusion / 2 + 4; // small margin
        const max = 96;
        leftPercent = min + Math.random() * (max - min);
      } else {
        const min = 4;
        const max = 50 - centerExclusion / 2 - 4;
        leftPercent = min + Math.random() * (max - min);
      }

      dot.style.left = `${leftPercent}%`;
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      dot.style.setProperty("--dx", `${dx}px`);
      dot.style.opacity = `${opacity}`;
      dot.style.animationDuration = `${duration}ms`;

      dotsRef.current.appendChild(dot);

      // remove after animation
      const cleanup = () => {
        dot.removeEventListener("animationend", cleanup);
        dot.remove();
      };

      dot.addEventListener("animationend", cleanup);
    }

    // keep dots area below the contact content to avoid overlapping text
    function updateDotsTop() {
      if (!dotsRef.current) return;
      const sectionEl = dotsRef.current.parentElement as HTMLElement | null;
      const contentEl = contentRef.current as HTMLElement | null;
      if (!sectionEl || !contentEl) return;
      const sectionRect = sectionEl.getBoundingClientRect();
      const contentRect = contentEl.getBoundingClientRect();
      const topPx = Math.max(8, contentRect.bottom - sectionRect.top + 12); // 12px margin
      dotsRef.current.style.top = topPx + "px";
    }

    updateDotsTop();
    window.addEventListener("resize", updateDotsTop);

    const interval = setInterval(() => {
      // spawn 1-2 dots at random (favor single spawns)
      const count = Math.random() < 0.32 ? 2 : 1;
      for (let i = 0; i < count; i++) spawnDot();
    }, 700 + Math.random() * 900);

    return () => {
      mounted = false;
      clearInterval(interval);
      window.removeEventListener("resize", updateDotsTop);
    };
  }, []);

  return (
    <section className="contact" id="contact">
      <div className="footer-dots" ref={dotsRef} aria-hidden="true" />
        <div className="container contact__content" ref={contentRef}>
        <h2>
          {data.headingLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>

        <p>{data.subtext}</p>

        <div className="contact__line">
          <a href={`tel:${data.phone}`}>{data.phone}</a>
          <a href={`mailto:${data.email}`}>{data.email}</a>
        </div>

        <div className="contact__socials">
          {data.links.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
