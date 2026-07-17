import { education } from '../data/education';
import Reveal from './Reveal';

export default function Education() {
  return (
    <section id="education" className="section section-flush">
      <div className="container">
        <Reveal><p className="section-label">Education</p></Reveal>
        <Reveal delay={100}>
          <h2 className="section-title">Background</h2>
        </Reveal>
        <div className="g g-compact">
          {education.map((item, i) => (
            <Reveal key={item.id} delay={i * 80}>
              <div className="gc education-item">
                <div className="education-dot" />
                <div className="education-year">{item.period}</div>
                <div className="education-title">{item.institution}</div>
                <div className="education-location">{item.location}</div>
                <div className="education-degree">{item.degree}</div>
                <div className="education-desc">{item.description}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
