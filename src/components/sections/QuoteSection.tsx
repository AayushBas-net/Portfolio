// import { SectionTransition } from "@/components/shared/SectionTransition";
import Image from "next/image";

import type { QuoteData } from "@/data/portfolio";

type QuoteSectionProps = {
  data: QuoteData;
};

export function QuoteSection({ data }: QuoteSectionProps) {
  return (
    <section className="quote">
      <div className="container quote__content">
        <blockquote>{data.quote}</blockquote>
        <div className="quote__image-wrap">
          <Image className="quote__portrait" src={data.imageSrc} alt={data.imageAlt} width={430} height={340} priority />
        </div>
      </div>
    </section>
  );
}
