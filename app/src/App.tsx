import { useEffect, useState } from "react";

const A = "/assets";

type Experience = {
  icon: string;
  orbit: string;
  title: string;
  period: string;
  body: string;
  extra: string;
};

const experiences: Experience[] = [
  {
    icon: "tech-odoo.svg",
    orbit: "5d777.svg",
    title: "Odoo Developer · TIS",
    period: "Dec 2025 – now",
    body: "Regulatory reporting, insurance integrations and release automation for the Angolan market.",
    extra: "Odoo for Brazil and Angola: ARSEG workbooks, SOAP connectors and versioned releases with remote teams.",
  },
  {
    icon: "864c9.png",
    orbit: "5d777.svg",
    title: "Founder · Ark Solutions",
    period: "Discovery to delivery",
    body: "Discovery, requirements, scoping and solution design for client projects.",
    extra: "Turned vague briefs into scoped work with clear deliverables, timelines and a stack that fits the problem.",
  },
  {
    icon: "tech-odoo.svg",
    orbit: "deb0e.svg",
    title: "Odoo Developer · Escodoo",
    period: "Mar 2023 – Oct 2026",
    body: "Custom modules for sales, inventory, accounting and MRP, real-time integrations and version migrations.",
    extra: "Odoo v14 to v18, OCA standards, PostgreSQL tuning and integrations that survive a version bump.",
  },
  {
    icon: "4c9a8.png",
    orbit: "2ddc5.svg",
    title: "Robotics Teacher · Colégio Objetivo",
    period: "Jan 2022 – Nov 2024",
    body: "Taught robotics and programming to school students.",
    extra: "Built lessons that turned hardware and code into something students could see working on the bench.",
  },
];

const technologies: [string, string][] = [
  ["da1d2.png", "React"],
  ["20d7a.png", "JavaScript"],
  ["8a7e8.png", "CSS"],
  ["aa109.png", "Node.js"],
  ["1a7a3.png", "Express"],
  ["b4403.png", "MongoDB"],
  ["tech-python.svg", "Python"],
  ["tech-odoo.svg", "Odoo"],
  ["tech-postgresql.svg", "PostgreSQL"],
  ["tech-docker.svg", "Docker"],
  ["tech-aws.svg", "AWS"],
  ["tech-nextjs.svg", "Next.js"],
];

const satellites: [string, string][] = [
  ["42505.svg", "satellite satellite-1"],
  ["d3cbf.svg", "satellite satellite-2"],
  ["0bb40.svg", "satellite satellite-3"],
  ["0336d.svg", "satellite satellite-4"],
  ["c5eea.svg", "satellite satellite-5"],
  ["e7eb6.svg", "satellite satellite-6"],
  ["8acb5.svg", "satellite satellite-7"],
  ["80c6d.svg", "satellite satellite-8"],
  ["944bd.svg", "satellite satellite-9"],
  ["1d10a.svg", "satellite satellite-10"],
  ["9ec7b.svg", "satellite satellite-11"],
];

function ExperienceCard({ item, index }: { item: Experience; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className={`experience-card experience-card-${index + 1}`}>
      <div className="experience-art">
        <img className="experience-orbit" src={`${A}/${item.orbit}`} alt="" />
        <img className="experience-icon" src={`${A}/${item.icon}`} alt="" />
      </div>
      <div className="experience-copy">
        <span className="experience-period">{item.period}</span>
        <h3>{item.title}</h3>
        <p>{item.body}</p>
        {expanded && <p className="experience-extra">{item.extra}</p>}
        <button
          type="button"
          className="learn-button"
          aria-expanded={expanded}
          onClick={() => setExpanded((value) => !value)}
        >
          {expanded ? "SHOW LESS" : "LEARN MORE"}
        </button>
      </div>
    </article>
  );
}

function Project({
  reverse = false,
  image,
  imageClass = "",
  title,
  description,
  note,
}: {
  reverse?: boolean;
  image: string;
  imageClass?: string;
  title: string;
  description: string;
  note: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <article className={`project ${reverse ? "project-reverse" : ""}`}>
      <div className="project-copy">
        <p className="project-kicker">Featured Project</p>
        <h3>{title}</h3>
        <div className="project-description">{description}</div>
        <div className="project-actions">
          <button
            type="button"
            className="icon-button"
            aria-label={open ? "Close project details" : "Open project details"}
            onClick={() => setOpen((value) => !value)}
          >
            <img src={`${A}/9de93.svg`} alt="" />
          </button>
          <a className="icon-button" href="#contact" aria-label="Discuss this project">
            <img src={`${A}/9de93.svg`} alt="" />
          </a>
        </div>
        {open && <p className="project-note">{note}</p>}
      </div>
      <button
        type="button"
        className="project-visual"
        onClick={() => setOpen((value) => !value)}
        aria-label="View project details"
      >
        <img className={imageClass} src={`${A}/${image}`} alt="Project interface preview" />
      </button>
    </article>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener("hashchange", closeMenu);
    return () => window.removeEventListener("hashchange", closeMenu);
  }, []);

  return (
    <div className="portfolio-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Portfolio home">
          <img src={`${A}/k-symbol.svg`} alt="" />
        </a>
        <button
          type="button"
          className="menu-button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
        <nav className={menuOpen ? "nav-open" : ""} aria-label="Primary navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Lab</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section-width">
          <div className="hero-intro">
            <div className="portrait-wrap">
              <img className="portrait-glow" src={`${A}/a50e1.svg`} alt="" />
              <img className="portrait portrait-symbol" src={`${A}/k-symbol.svg`} alt="K monogram" />
            </div>
            <img className="hello-arrow" src={`${A}/0f0ff.svg`} alt="" />
            <p className="hello">
              Hello! I Am <span>Kaynnan Bardauil Lemes</span>
            </p>
            <div className="hero-statement">
              <p className="designer">A Developer who</p>
              <h1 aria-label="Ships systems that run in production.">
                Ships systems that
                <br />
                run in <span>production</span>.
              </h1>
              <img className="cover-ring" src={`${A}/fbd20.svg`} alt="" />
              <p className="cover-caption">
                Because if it doesn&apos;t run in production, what else can?
              </p>
            </div>
          </div>

          <div id="about" className="about">
            <h2>
              I&apos;m a Software Engineer.<span className="cursor">|</span>
            </h2>
            <p className="designation">
              Currently, I&apos;m a Senior Full Stack Developer at <span className="company">TIS</span>
            </p>
            <p className="bio">
              Eight years building software, five of them with Python and Odoo v14 to v18.
              <br />
              I build ERP platforms, web applications and integrations used every day by companies
              <br />
              in Brazil and Angola, from discovery to deployment.
            </p>
          </div>
        </section>

        <section className="experience section-width">
          <h2>Work Experience</h2>
          <div className="experience-grid">
            {experiences.map((item, index) => (
              <ExperienceCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </section>

        <section className="skills section-width" aria-labelledby="skills-title">
          <h2 id="skills-title">
            I work across <span>cross-functional</span> teams
          </h2>
          <p>Building Odoo systems, fiscal compliance and integrations for Brazil and Angola.</p>
          <div className="technology-list">
            {technologies.map(([icon, name]) => (
              <div className="technology" key={name} title={name}>
                {icon ? <img src={`${A}/${icon}`} alt={name} /> : <span className="tech-label">{name.slice(0, 2)}</span>}
              </div>
            ))}
          </div>
          <div className="skill-universe" aria-hidden="true">
            <img className="beam beam-1" src={`${A}/f9278.svg`} alt="" />
            <img className="beam beam-2" src={`${A}/f1284.svg`} alt="" />
            <img className="beam beam-3" src={`${A}/7494f.svg`} alt="" />
            <img className="beam beam-4" src={`${A}/b65dc.svg`} alt="" />
            <img className="beam beam-5" src={`${A}/7701c.svg`} alt="" />
            <img className="beam beam-6" src={`${A}/9320f.svg`} alt="" />
            <img className="planet-haze" src={`${A}/a76d1.svg`} alt="" />
            <img className="orbit orbit-1" src={`${A}/d6339.svg`} alt="" />
            <img className="orbit orbit-2" src={`${A}/6cced.svg`} alt="" />
            <img className="orbit orbit-3" src={`${A}/f35ed.svg`} alt="" />
            <img className="orbit orbit-4" src={`${A}/ebf17.svg`} alt="" />
            <img className="planet" src={`${A}/ffb89.svg`} alt="" />
            <img className="planet-logo" src={`${A}/78bbd.svg`} alt="" />
            {satellites.map(([icon, className]) => (
              <img key={icon} className={className} src={`${A}/${icon}`} alt="" />
            ))}
          </div>
        </section>

        <section id="projects" className="projects section-width" aria-label="Featured projects">
          <Project
            image="d7219.png"
            imageClass="project-page-image"
            title="ARSEG reporting engine"
            description="An Odoo engine that generates regulatory workbooks from accounting entries, including solvency margin and technical result by branch, plus fixed asset sheets. Refactored into a layered architecture."
            note="TIS / Odoo / PostgreSQL / Angola."
          />
          <Project
            image="206b3.png"
            reverse
            title="CBS/IBS on service invoices"
            description="Enabled the missing fiscal reform module so the AvaTax payload carries the new CBS/IBS taxes, and traced an NFS-e rejection to an empty municipal tax field in the XML."
            note="Odoo 18 Enterprise / AvaTax / l10n-brazil."
          />
        </section>
      </main>

      <footer id="contact" className="contact section-width">
        <h2>Contact</h2>
        <p>
          Open to remote roles and long-term contracts, available immediately.
          <br />
          Send the context and I will reply with a plan, a timeline and a price.
        </p>
        <a className="email" href="mailto:kaynnanx1@gmail.com">
          kaynnanx1@gmail.com
        </a>
        <div className="social-row">
          <a href="https://github.com/kaynnan" aria-label="GitHub">GitHub</a>
          <a href="https://www.linkedin.com/in/kaynnanbardauil" aria-label="LinkedIn">LinkedIn</a>
          <a href="https://www.workana.com/freelancer/a1292a22656bc7a7d133d85385ff4b7b" aria-label="Workana">Workana</a>
        </div>
      </footer>
    </div>
  );
}
