import Image from "next/image";
import "./mustvisitnepal.css";
import { WorksSection } from "@/components/sections/WorksSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { portfolioData } from "@/data/portfolio";

export default function MustVisitNepalPage() {
  return (
    <main className="mustvisitnepal-page">

      {/* ================= HERO ================= */}
      <section className="mustvisitnepal-hero">
        <div className="mustvisitnepal-heroTop">
          <span>UI/UX DESIGN</span>
          <span>CASE STUDY</span>
        </div>

        <div className="mustvisitnepal-heroTitle">
          <h1 style={{fontSize:"18px!important"}}>MustVisitNepal</h1>

          <p>
            MustVisitNepal is a digital gateway designed to showcase Nepal&apos;s
            diverse tourism through a modern, high-impact web interface. It
            aims to bridge the gap between global travelers and authentic
            local adventures.
          </p>
        </div>

        <div className="mustvisitnepal-heroImage">
          <Image
            src="/mustvisitnepal/hero.png"
            alt="MustVisitNepal website"
            width={1600}
            height={900}
            priority
          />
        </div>
      </section>


      {/* ================= PROBLEM ================= */}
      <section className="mustvisitnepal-problem">
        <div className="mustvisitnepal-sectionTop">
          <h2>The Problem</h2>

          <div className="mustvisitnepal-sideText">
            <p>
              Scattered information across disconnected sources complicates
              travel planning.
            </p>

            <p>
              Cluttered, outdated interfaces in legacy tourism sites create
              high user friction.
            </p>

            <p>
              Lack of intuitive, category-based navigation makes it harder
              for travelers to discover relevant destinations and experiences.
            </p>

            <p>
              Travelers need a more engaging and accessible way to explore
              Nepal.
            </p>
          </div>
        </div>

        <p className="mustvisitnepal-greenText">
          This gap presented an opportunity to make travel planning{" "}
          <span>not just seamless, but also inspiring and accessible</span>{" "}
          for every traveler.
        </p>
      </section>


      {/* ================= WEBSITE OVERVIEW ================= */}
      <section className="mustvisitnepal-overview">
        <Image
          src="/mustvisitnepal/overview.png"
          alt="MustVisitNepal responsive website overview"
          width={1600}
          height={700}
        />
      </section>


      {/* ================= SOLUTION ================= */}
      <section className="mustvisitnepal-solution">
        <div className="mustvisitnepal-sectionTop">
          <h2>The Solution</h2>

          <div className="mustvisitnepal-sideText">
            <p>
              A clean and modern website design that prioritizes usability
              and visual storytelling.
            </p>

            <p>
              The solution combines custom imagery, clear navigation,
              categorized travel styles, and a streamlined user journey
              that makes discovering Nepal easier and more engaging.
            </p>
          </div>
        </div>
      </section>


      {/* ================= DESIGN SYSTEM ================= */}
      <section className="mustvisitnepal-designSystem">
        <div className="mustvisitnepal-designTitle">
          <h2>Design System</h2>
        </div>

        <Image
          src="/mustvisitnepal/designsystem.png"
          alt="MustVisitNepal design system"
          width={1600}
          height={900}
        />
      </section>


      {/* ================= HIGH FIDELITY ================= */}
      <section className="mustvisitnepal-visualBlock mustvisitnepal-hifi">
        <h2>High-Fidelity Screens</h2>

        <Image
          src="/mustvisitnepal/hifi.png"
          alt="MustVisitNepal high-fidelity screens"
          width={1200}
          height={1800}
        />
      </section>


      {/* ================= MORE WORKS ================= */}
      <section className="mustvisitnepal-moreWorks">
        <WorksSection
          data={portfolioData.works}
          excludeHref="/works/mustvisitnepal"
          headingOverride="More Works"
          hideIntro
        />
      </section>


      {/* ================= CONTACT / FOOTER ================= */}
      <ContactSection data={portfolioData.contact} />

    </main>
  );
}