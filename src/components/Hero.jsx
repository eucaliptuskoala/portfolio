import Reveal from './Reveal';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <div className="hero-bg-glow" />
      </div>
      <div className="container">
        <div className="hero-inner">
          <Reveal>
            <h1 className="hero-name">
              Ivan <em>Bodnar</em>
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="hero-role">Software Engineer &amp; Machine Learning Engineer</p>
          </Reveal>
          <Reveal delay={150}>
            <p className="hero-tagline">
              Building systems that survive reality.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="hero-intro">
              Clean architecture. Applied ML. Systems that last.
            </p>
          </Reveal>
        </div>
      </div>
      <div className="hero-scroll">
        <svg width="18" height="24" viewBox="0 0 18 24" fill="none">
          <path d="M9 2v18m0 0l-6-6m6 6l6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}
