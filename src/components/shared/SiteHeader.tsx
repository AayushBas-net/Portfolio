import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import Link from "next/link";
import { TextRoll } from "@/components/shared/TextRoll";
import { portfolioData } from "@/data/portfolio";

export function SiteHeader() {
  const nav = portfolioData.hero.nav;

  return (
    <header className="site-header">
      <div className="site-header__inner">
       <Link
  href="/"
  className="site-header__logo"
  aria-label="Home"
>
  <Image
    src={portfolioData.hero.logoSrc ?? "/images/logo.png"}
    alt="logo"
    width={40}
    height={40}
  />
</Link>

        <nav className="site-header__nav" aria-label="Primary navigation">
          {nav.map((item) => (
            <Link key={item.label} href={item.href} className="site-header__nav-link">
              <TextRoll>{item.label}</TextRoll>
            </Link>
          ))}
        </nav>

        <div className="site-header__actions">
          <ThemeToggle />
          <Link href="#contact" className="site-header__cta">
            <span className="site-header__cta-text">{portfolioData.hero.contactLabel ?? "Contact"}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
