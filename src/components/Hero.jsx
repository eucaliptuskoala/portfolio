import Reveal from './Reveal';
import MagneticBtn from './MagneticBtn';
import NodeNetwork from './NodeNetwork';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="g">
          <div className="gc hero-left">
            <Reveal><p className="hero-eyebrow">Portfolio</p></Reveal>
            <Reveal delay={100}>
              <h1 className="hero-title">Building systems<br />that survive <em>reality.</em></h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="hero-sub">
                Software Engineer and Machine Learning Engineer focused on clean architecture,
                production systems, and applied AI.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="hero-actions">
                <MagneticBtn className="btn btn-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                  Explore Projects
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1 8h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </MagneticBtn>
                <MagneticBtn className="btn btn-secondary" href="https://github.com/ivanbodnar" target="_blank" rel="noopener noreferrer">
                  View GitHub
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 12l8-8m0 0H7m5 0v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </MagneticBtn>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="hero-timeline">
                <div className="hero-timeline-item">
                  <div className="hero-timeline-dot" />
                  <span className="hero-timeline-label">Domain</span>
                  <span className="hero-timeline-value">Software Engineering</span>
                </div>
                <div className="hero-timeline-item">
                  <div className="hero-timeline-dot" />
                  <span className="hero-timeline-label">Domain</span>
                  <span className="hero-timeline-value">Machine Learning</span>
                </div>
                <div className="hero-timeline-item">
                  <div className="hero-timeline-dot" />
                  <span className="hero-timeline-label">Domain</span>
                  <span className="hero-timeline-value">Data Science</span>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="gc hero-right">
            <div className="hero-atmosphere">
              <NodeNetwork />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
