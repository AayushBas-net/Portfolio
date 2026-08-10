"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const SPRING = {
  mass: 0.12,
  damping: 14,
  stiffness: 180,
};

export default function MouseFollower() {
  const [visible, setVisible] = useState(false);
  const [inQuote, setInQuote] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, SPRING);
  const ySpring = useSpring(y, SPRING);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const quote = document.querySelector(".quote");

    const handleQuoteEnter = () => {
      setInQuote(true);
    };

    const handleQuoteLeave = () => {
      setInQuote(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    quote?.addEventListener("mouseenter", handleQuoteEnter);
    quote?.addEventListener("mouseleave", handleQuoteLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      quote?.removeEventListener("mouseenter", handleQuoteEnter);
      quote?.removeEventListener("mouseleave", handleQuoteLeave);
    };
  }, [x, y]);

  return (
    <motion.div
      className={`mouse-follower ${inQuote ? "is-quote" : ""}`}
      style={{
        x: xSpring,
        y: ySpring,
      }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.7,
      }}
      transition={{
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 },
      }}
    />
  );
}