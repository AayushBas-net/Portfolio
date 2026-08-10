import Image from "next/image";
import "./binhero.css";
import { WorksSection } from "@/components/sections/WorksSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { portfolioData } from "@/data/portfolio";

export default function BinHeroPage() {
  return (
    <main className="binhero-page">

      {/* ================= HERO ================= */}
      <section className="binhero-hero">
        <div className="binhero-heroTop">
          <span>UI/UX DESIGN</span>
          <span>CASE STUDY</span>
        </div>

        <div className="binhero-heroTitle">
          <h1>BinHero</h1>

          <p>
            A smart waste management platform designed to make
            recycling easier, more accessible, and more engaging.
          </p>
        </div>

        <div className="binhero-heroImage">
          <Image
            src="/binhero/hero.png"
            alt="BinHero"
            width={1600}
            height={900}
            priority
          />
        </div>
      </section>


      {/* ================= PROBLEM ================= */}
      <section className="binhero-problem">
        <div className="binhero-sectionTop">
          <h2>The Problem</h2>

          <div className="binhero-sideText">
            <p>
              Waste mismanagement continues to harm the environment.
            </p>

            <p>
              Recycling apps fail to capture user attention or encourage consistent action.
            </p>
            <p>
              People lack of incentives and motivation to dispose of waste correctly.
            </p>
          </div>
        </div>

        <p className="binhero-greenText" style={{ fontSize: "28px"}}>
    Recognizing this gap, we saw an opportunity to make waste disposal not just easier, but also rewarding and engaging for users. 
        </p>
      </section>


      {/* ================= LOGOS ================= */}
      <section className="binhero-logos">
        <Image
          src="/binhero/logos.png"
          alt="BinHero logos and illustration"
          width={1600}
          height={700}
        />
      </section>


      {/* ================= SOLUTION ================= */}
      <section className="binhero-solution">
        <div className="binhero-sectionTop">
          <h2>The Solution</h2>

          <div className="binhero-sideText">
            <p>
              BinHero brings waste identification, recycling
              information, location discovery and challenges
              into one simple experience.
            </p>

            <p>
              Making responsible waste disposal easier and
              more engaging.
            </p>
          </div>
        </div>
      </section>


      {/* ================= DESIGN SYSTEM ================= */}
      <section className="binhero-designSystem">
        <div className="binhero-designTitle">
          <h2>Design System</h2>
        </div>

        <Image
          src="/binhero/designsystem.png"
          alt="BinHero design system"
          width={1600}
          height={900}
        />
      </section>


      {/* ================= WIREFRAME ================= */}
      <section className="binhero-visualBlock">
        <h2>Low-Fidelity Wireframe</h2>

        <Image
          src="/binhero/wireframe.png"
          alt="BinHero low-fidelity wireframe"
          width={1600}
          height={1000}
        />
      </section>


      {/* ================= HIGH FIDELITY ================= */}
      <section className="binhero-visualBlock binhero-hifi">
        <h2>High-Fidelity Screens</h2>

        <Image
          src="/binhero/hifi.png"
          alt="BinHero high-fidelity screens"
          width={1200}
          height={1800}
        />
      </section>

{/* ================= MORE WORKS ================= */}
<section className="binhero-moreWorks">
  <WorksSection
    data={portfolioData.works}
    excludeHref="/works/binhero"
    headingOverride="More Works"
    hideIntro
  />
</section>

      {/* ================= CTA ================= */}
      <ContactSection data={portfolioData.contact} />

    </main>
  );
}