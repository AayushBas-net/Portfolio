"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import type { WorksData } from "@/data/portfolio";

type WorksSectionProps = {
  data: WorksData;
  excludeHref?: string;
  headingOverride?: string;
  hideIntro?: boolean;
};

export function WorksSection({
  data,
  excludeHref,
  headingOverride,
  hideIntro = false,
}: WorksSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const works = data.items.filter(
    (item) => item.href !== excludeHref
  );

  return (
    <section className="works">
      <div className="container">

        {/* Heading */}
        <div className="works__head">
          <h2>{headingOverride ?? data.heading}</h2>

          {!hideIntro && <p>{data.intro}</p>}
        </div>

        {/* Works */}
        <div
          className="works__expand-grid"
          onMouseLeave={() => setActiveIndex(null)}
        >
          {works.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <Link
                key={item.title}
                href={item.href ?? "#"}
                className={`works__expand-card ${
                  isActive ? "is-active" : ""
                }`}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
              >
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 760px) 100vw, 384px"
                  className="works__expand-img"
                />

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="works__expand-overlay"
                    />
                  )}
                </AnimatePresence>

                <div className="works__expand-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="works__expand-info"
                    >
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.category}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}