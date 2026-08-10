import type { AboutData } from "@/data/portfolio";
import FadeScroll  from "@/components/shared/FadeScroll";

type AboutSectionProps = {
  data: AboutData;
};

export function AboutSection({ data }: AboutSectionProps) {
  return (
      <section className="about" id="about">
        <FadeScroll className="max-h-[400px]">
        <div className="container about__grid">
          <h2>{data.heading}</h2>

          <div className="about__info">
            <article>
              <h3>About Me</h3>
              <p>{data.aboutText}</p>
            </article>

            <article>
              <h3>My Approach & Strategy</h3>
              <p>{data.strategyText}</p>
            </article>

            <article>
              <h3>My Tools / Tech Stack</h3>

              <div className="tool-grid">
                {data.tools.map((tool) => (
                  <div key={tool.index} className="tool-card">
                    <span className="tool-card__index">
                      {tool.index}
                    </span>

                    <strong>{tool.title}</strong>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
        </FadeScroll>
      </section>
  );
}