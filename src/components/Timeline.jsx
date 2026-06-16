import timelineItems from '../data/timeline';
import Reveal from './Reveal';

export default function Timeline() {
  return (
    <section className="section" style={{ paddingBottom: 0 }}>
      <div className="container">
        <Reveal><p className="section-label">Timeline</p></Reveal>
        <Reveal delay={100}>
          <h2 className="section-title">Evolution</h2>
        </Reveal>
        <div className="g g-compact">
          {timelineItems.map((item, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="gc timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-title">{item.title}</div>
                <div className="timeline-desc">{item.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
