import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <Reveal><p className="section-label">About</p></Reveal>
        <div className="g">
          <div className="gc">
            <Reveal delay={100}>
              <h2 className="section-title" style={{ marginBottom: 0, fontSize: 'clamp(28px, 3.5vw, 48px)' }}>
                Engineer.<br />Architect.<br />Thinker.
              </h2>
            </Reveal>
          </div>
          <div className="gc about-body">
            <Reveal delay={200}>
              <p>
                I started with software engineering — Java, Spring Boot, relational databases.
                The kind of work where clarity of thought becomes clarity of code.
                Over time, I expanded into machine learning and data science, but I never left
                my engineering roots behind. I approach ML the same way I approach backend
                architecture: with structure, discipline, and a deep distrust of magic.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="about-pullquote">
                &ldquo;The interesting part is rarely the model. It&rsquo;s the system around it.&rdquo;
                <span> — Ivan Bodnar</span>
              </div>
            </Reveal>
            <Reveal delay={350}>
              <p>
                I&rsquo;m interested in systems, architecture, and explainable AI. I believe
                maintainability matters more than hype, that good data hygiene beats a
                fancy model every time, and that the best production system is the one
                you&rsquo;re not afraid to change.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
