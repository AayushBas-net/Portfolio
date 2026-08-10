"use client";

import React from "react";

interface FadeScrollProps {
  children: React.ReactNode;
  className?: string;
}

const FadeScroll = ({
  children,
  className = "",
}: FadeScrollProps) => {
  return (
    <div className={`fade-scroll ${className}`}>
      <div className="fade-scroll__content">
        {children}
      </div>
    </div>
  );
};

export default FadeScroll;