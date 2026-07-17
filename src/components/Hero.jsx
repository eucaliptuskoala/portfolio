import Reveal from './Reveal';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-inner">
          <Reveal>
            <h1 className="hero-name">
              Ivan <em>Bodnar</em>
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="hero-role">Software &amp; AI Engineer</p>
          </Reveal>
          <Reveal delay={150}>
            <p className="hero-tagline">
              Making things that matter.
            </p>
          </Reveal>
        </div>
      </div>

    </section>
  );
}
