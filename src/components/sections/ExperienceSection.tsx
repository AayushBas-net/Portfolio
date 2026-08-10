import type { ExperienceData } from "@/data/portfolio";
import FadeScroll  from "@/components/shared/FadeScroll";

type ExperienceSectionProps = {
  data: ExperienceData;
};

export function ExperienceSection({ data }: ExperienceSectionProps) {
  return (
   <FadeScroll className="max-h-[400px]">
      <section className="experience">
      <div className="container experience__grid">
        <h2>{data.heading}</h2>

        <div className="experience__list">
          {data.items.map((item) => (
            <article key={item.company} className="experience__item">
              <div className="experience__header">
                <h3>{item.company}</h3>
                <span>{item.period}</span>
              </div>
              <h4>{item.role}</h4>
              <p>{item.details}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
      </FadeScroll>

  );
}
