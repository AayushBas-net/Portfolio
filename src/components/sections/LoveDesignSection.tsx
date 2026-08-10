import type { LoveDesignData } from "@/data/portfolio";
import FadeScroll  from "@/components/shared/FadeScroll";

type LoveDesignSectionProps = {
  data: LoveDesignData;
};

export function LoveDesignSection({ data }: LoveDesignSectionProps) {
  return (
    <FadeScroll className="max-h-[400px]">
    <section className="love-design">
      <div className="container love-design__grid">
        <h2>{data.heading}</h2>

        <div className="love-design__content">
          <p>{data.intro}</p>
          <div className="love-design__table">
            {data.items.map((item) => (
              <article key={item.index} className="love-design__row">
                <span>{item.index}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
    </FadeScroll>
  );
}
