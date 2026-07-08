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
                Engineer.<br />Architect.<br />Researcher.
              </h2>
            </Reveal>
          </div>
          <div className="gc about-body">
            <Reveal delay={200}>
              <p>
                I came into software without a CS background. 
                No head start, no prior knowledge — just deadlines I was always chasing.
              </p>
            </Reveal>
            <Reveal delay={250}>
              <p>
                I've spent most of my time feeling behind. 
                Behind my peers, behind where I thought I should be. 
                What I learned is that the gap closes if you keep going. 
                Not through talent — I'm not sure I have much of it — but through not stopping.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="about-pullquote">
                There is no talent here, this is hard work. This is an obsession.
                <span> — Connor McGregor</span>
              </div>
            </Reveal>
            <Reveal delay={350}>
              <p>
                I know enough to know how much I don't know. 
                I don't oversell what I've built. 
                But I ship things, I figure out what I'm missing, and I don't pretend otherwise.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
