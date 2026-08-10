export type NavItem = {
  label: string;
  href: string;
};

export type HeroData = {
  nav: NavItem[];
  nameLines: string[];
  location: string;
  role: string;
  logoSrc?: string;
  contactLabel?: string;
};

export type QuoteData = {
  quote: string;
  imageSrc: string;
  imageAlt: string;
};

export type ToolItem = {
  title: string;
  index: string;
};

export type AboutData = {
  heading: string;
  aboutText: string;
  strategyText: string;
  tools: ToolItem[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  details: string;
};

export type ExperienceData = {
  heading: string;
  items: ExperienceItem[];
};

export type WorkItem = {
  title: string;
  category: string;
  imageSrc: string;
  imageAlt: string;
  href?: string;
};

export type WorksData = {
  heading: string;
  intro: string;
  items: WorkItem[];
};

export type LoveItem = {
  index: string;
  title: string;
  description: string;
};

export type LoveDesignData = {
  heading: string;
  intro: string;
  items: LoveItem[];
};

export type ContactData = {
  headingLines: string[];
  subtext: string;
  phone: string;
  email: string;
  links: NavItem[];
};

export type PortfolioData = {
  hero: HeroData;
  quote: QuoteData;
  about: AboutData;
  experience: ExperienceData;
  works: WorksData;
  loveDesign: LoveDesignData;
  contact: ContactData;
};

export const portfolioData: PortfolioData = {
  hero: {
    nav: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Works", href: "#works" },
    ],
    nameLines: ["I'm Aayush", "Basnet"],
    location: "Based in Morang, Nepal",
    role: "Creative Designer",
    logoSrc: "/images/logo.png",
    contactLabel: "Contact",
  },
  quote: {
    quote:
      '"It all started in college, when curiosity led me to explore UI/UX. Since then, that curiosity has grown into a passion for creating, experimenting, and bringing ideas to life through design."',
    imageSrc: "/images/2.png",
    imageAlt: "Portrait image",
  },
  about: {
    heading: "From Curiosity to Design",
    aboutText:
      "A creative and curious person with a strong interest in design, technology, and visual storytelling. Always drawn to new ideas, fresh perspectives, and opportunities to learn something different. I enjoy exploring, experimenting, and turning simple thoughts into meaningful work. Naturally detail-oriented, with a focus on keeping things thoughtful, clear, and purposeful. I see challenges as opportunities to grow, improve, and discover better ways of doing things.",
    strategyText:
      "I like to approach things with an open mind and a willingness to learn. I don’t always try to find the perfect answer right away; exploring, experimenting, and improving are all part of the process. Curiosity, consistency, and continuous growth are values I try to bring into everything I work on. Whether it’s a professional project or something personal, I enjoy figuring things out and seeing an idea gradually come together.",
    tools: [
      { title: "Figma", index: "1" },
      { title: "Photoshop", index: "2" },
      { title: "Illustrator", index: "3" },
      { title: "Canva", index: "4" },
      { title: "Miro/Figjam", index: "5" },
    ],
  },
  experience: {
    heading: "Experience",
    items: [
      { company: "Fusionexis Pvt. Ltd.",
        role: "Creative Designer",
        period: "July 2026 - Pre.",
        details:
          "Working across UI/UX, graphic design, branding, and digital marketing to create cohesive visual experiences for products and campaigns. Designing user interfaces, marketing materials, social media content, and brand assets while maintaining consistency across digital touchpoints.",
      },
      {
        company: "Bardali Creations",
        role: "UI/UX & Graphics Designer",
        period: "Nov 2025 - June 2026",
        details:
          "Learned to turn concepts into wireframes and interfaces through layouts. Worked on small startup projects and improved understanding of spacing, flow, and usability.",
      },
      {
        company: "Assabet Technologies",
        role: "UI/UX Intern",
        period: "Jul - Sep 2025",
        details:
          "Learned to turn concepts into wireframes and simple interfaces through layouts. Worked on startup projects and improved understanding of spacing, flow, and usability.",
      },
      {
        company: "Sobogaard Nepal",
        role: "Graphic Designer",
        period: "Mar - May 2024",
        details:
          "Worked on social media posts, making visuals that matched the brand style and design goals. Took edits and promotions into account, making content that improved engagement and visual identity.",
      },
    ],
  },
  works: {
    heading: "Selected Works",
    intro:
      "Clean visuals, thoughtful graphics, and simple intuitive UI/UX. These projects show how I explore ideas and bring them to life. From graphics to interfaces, each piece reflects my learning and creativity as a designer.",
    items: [
      {
        title: "Binhero",
        category: "Mobile Application",
        imageSrc: "/images/works/binhero.png",
        imageAlt: "Binhero project",
        href: "/works/binhero",
      },
      {
        title: "Mustvisitnepal",
        category: "Website Design",
        imageSrc: "/images/works/mustvisit.png",
        imageAlt: "Mustvisit Nepal project",
        href: "/works/mustvisitnepal"
      },
      {
        title: "Graphic Designs",
        category: "Official Projects",
        imageSrc: "/images/works/graphics.png",
        imageAlt: "Graphic designs project",
        href: "#",
      },
      {
        title: "Kothabhada",
        category: "Website Re-Design",
        imageSrc: "/images/works/kothabhada.png",
        imageAlt: "Kothabhada project",
        href: "#",
      },
      {
        title: "Project Placeholder One",
        category: "Coming Soon",
        imageSrc: "/images/works/placeholder-one.svg",
        imageAlt: "Placeholder project one",
        href: "#",
      },
      {
        title: "FinTrack",
        category: "Mobile Application",
        imageSrc: "/images/works/fintrack.png",
        imageAlt: "Placeholder project two",
        href: "#",
      },
    ],
  },
  loveDesign: {
    heading: "What I Love Designing",
    intro:
      "I am still growing as a designer, but I enjoy exploring different areas from interface to graphics. I focus on making clean visuals, simple layouts, and designs that communicate the message clearly.",
    items: [
      {
        index: "01",
        title: "UI/UX Design",
        description:
          "I create simple, user-friendly interfaces through wireframes, layouts, and clean visual structures that focus on clarity and usability.",
      },
      {
        index: "02",
        title: "Graphics Design",
        description:
          "I design visual content such as posters, social media posts, and branding elements, focusing on clean aesthetics and clear communication.",
      },
      {
        index: "03",
        title: "Website Layouts",
        description:
          "I build structured website layouts that balance visuals and readability, making information easy to follow and visually organized.",
      },
      {
        index: "04",
        title: "Social Media Creatives",
        description:
          "I create engaging social media designs with attention to color, hierarchy, and content flow to match the brand's tone and audience.",
      },
      {
        index: "05",
        title: "Packaging Concepts",
        description:
          "I explore packaging ideas by combining color, layout, and product storytelling to create simple yet appealing visual concepts.",
      },
      {
        index: "06",
        title: "Branding Basics",
        description:
          "From logo to color palette and layout, I work on the foundation of brand identity to keep visuals consistent and meaningful.",
      },
    ],
  },
  contact: {
    headingLines: ["Let's Create", "Something Together."],
    subtext:
      "Connect to create captivating digital experiences that engage audiences and drive meaningful brand interactions across diverse platforms",
    phone: "+977 9863986447",
    email: "aayushbasnet745@gmail.com",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/aayushbasnet/" },
      { label: "Behance", href: "https://www.behance.net/aayushbasnet2" },
      { label: "Instagram", href: "https://www.instagram.com/justadesigner0/" },
    ],
  },
};
