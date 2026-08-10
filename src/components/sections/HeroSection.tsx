import type { HeroData } from "@/data/portfolio";
import MouseFollower from "@/components/shared/MouseFollower";

type HeroSectionProps = {
  data: HeroData;
};

export function HeroSection({ data }: HeroSectionProps) {
  const floatingTags = [
    "Typography",
    "Website Design",
    "App Design",
    "Graphics Design",
    "Color Theory",
    "Visual Hierarchy",
  ];

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero__floating" aria-hidden="true">
          {floatingTags.map((tag, index) => (
            <span key={tag} className={`hero__tag hero__tag--${index + 1}`}>
              {tag}
            </span>
          ))}
        </div>

        <div className="hero__title-wrap">
          <p className="hero__availability">
            <span className="hero__availability-dot" />
            Available for freelance
          </p>
          {data.nameLines.map((line, lineIndex) => (
            <h1 key={line} className={`hero__name-line ${lineIndex === 0 ? "hero__name-line--primary" : "hero__name-line--secondary"}`}>
              {line}
            </h1>
          ))}
        </div>

        <div className="hero__meta">
          <p>{data.location}</p>
          <p>{data.role}</p>
        </div>
      </div>
    </section>
  );
}
