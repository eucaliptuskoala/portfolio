import { skillGroups } from '../data/skills';
import Reveal from './Reveal';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal><p className="section-label">Capabilities</p></Reveal>
        <Reveal delay={100}>
          <h2 className="section-title">Skills & Tools</h2>
        </Reveal>
        <div className="g g-compact">
          {skillGroups.map((g, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="gc skills-group">
                <h3>{g.title}</h3>
                <div className="skills-tags">
                  {g.tags.map(t => <span key={t} className="skills-tag">{t}</span>)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
