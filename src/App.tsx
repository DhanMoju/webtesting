import { useState } from "react";

const navItems = ["Who we are", "What we do", "Our approach", "Sectors"];

const capabilities = [
  { number: "01", title: "Engineering design", copy: "From early concept through detailed design, we develop practical engineering solutions that are clear, coordinated, and built for purpose." },
  { number: "02", title: "Project management", copy: "We bring structure, accountability, and calm leadership to complex projects, protecting quality, programme, and value." },
  { number: "03", title: "Construction supervision", copy: "On site, our team translates design intent into disciplined delivery through close technical oversight and collaboration." },
  { number: "04", title: "Advisory & consultancy", copy: "Independent insight for the decisions that shape a project — feasibility, procurement, risk, and long-term performance." },
];

const sectors = ["Buildings & infrastructure", "Energy & utilities", "Industrial facilities", "Commercial developments", "Public sector", "Residential projects"];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="site-shell">
      <div className="utility"><span>MFY CONSULTING LTD</span><span className="utility-right">ENGINEERING / PROJECTS / CONSULTANCY</span></div>
      <header className="site-header">
        <button className="brand" onClick={() => scrollTo("top")} aria-label="MFY Consulting home"><span>MFY</span><small>CONSULTING LTD</small></button>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Main navigation">
          {navItems.map((item) => <button key={item} onClick={() => { scrollTo(item.toLowerCase().replaceAll(" ", "-")); setMenuOpen(false); }}>{item}</button>)}
          <a className="nav-contact" href="mailto:info@mfyconsult.com.ng">Start a conversation <span>↗</span></a>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation"><i /><i /></button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-image" />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow">Built on clarity / Driven by purpose</p>
            <h1>Engineering<br /><em>better</em> futures.</h1>
            <div className="hero-bottom"><p>We are an independent engineering and project consultancy delivering considered solutions for the places and infrastructure that matter.</p><button onClick={() => scrollTo("who-we-are")} className="circle-arrow" aria-label="Explore MFY">↓</button></div>
          </div>
          <span className="hero-index">01 / 04</span>
        </section>

        <section id="who-we-are" className="intro section-grid">
          <div className="section-label"><span>01</span><span>Who we are</span></div>
          <div className="intro-copy"><p className="kicker">Independent thinking. Integrated delivery.</p><h2>We make the complex<br /><em>feel possible.</em></h2><p className="body-copy">MFY Consulting is a multidisciplinary engineering practice founded on a simple belief: the best outcomes come from bringing the right people, ideas, and experience together early.</p><p className="body-copy">Our work is grounded in technical rigour, but our approach is human. We listen carefully, communicate plainly, and stay close to every detail that makes a project work.</p><button className="text-link" onClick={() => scrollTo("what-we-do")}>Discover our capabilities <span>↗</span></button></div>
        </section>

        <section id="what-we-do" className="capabilities dark-section"><div className="section-grid section-heading"><div className="section-label"><span>02</span><span>What we do</span></div><div><p className="kicker">Expertise that moves projects forward</p><h2>From first idea<br />to <em>final detail.</em></h2></div></div><div className="capability-grid">{capabilities.map((item) => <article className="capability" key={item.number}><span className="number">{item.number}</span><h3>{item.title}</h3><p>{item.copy}</p><span className="card-arrow">↗</span></article>)}</div></section>

        <section id="our-approach" className="approach section-grid"><div className="section-label"><span>03</span><span>Our approach</span></div><div><p className="kicker">A smarter way to deliver</p><h2>Good work is<br /><em>connected work.</em></h2><div className="process-list"><div><span>01</span><h3>Understand</h3><p>We start by asking the right questions. Context creates better decisions.</p></div><div><span>02</span><h3>Shape</h3><p>We turn insight into a clear, coordinated plan that everyone can own.</p></div><div><span>03</span><h3>Deliver</h3><p>We stay engaged through delivery, solving problems before they become delays.</p></div></div></div></section>

        <section id="sectors" className="sectors dark-section"><div className="section-grid"><div className="section-label"><span>04</span><span>Sectors</span></div><div><p className="kicker">Experience across the built environment</p><h2>Where we<br /><em>make an impact.</em></h2><div className="sector-list">{sectors.map((sector, index) => <div key={sector}><span>{String(index + 1).padStart(2, "0")}</span>{sector}<b>↗</b></div>)}</div></div></div></section>

        <section className="cta"><p className="kicker">Have a project in mind?</p><h2>Let&apos;s build<br /><em>what&apos;s next.</em></h2><a href="mailto:info@mfyconsult.com.ng" className="cta-button">Start a conversation <span>↗</span></a></section>
      </main>
      <footer><div className="footer-brand">MFY<small>CONSULTING LTD</small></div><div><p>Engineering / Projects / Consultancy</p><p>© {new Date().getFullYear()} MFY Consulting Ltd</p></div><a href="mailto:info@mfyconsult.com.ng">info@mfyconsult.com.ng ↗</a></footer>
    </div>
  );
}

export default App;
