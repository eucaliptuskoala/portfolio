import { principles } from '../data/philosophy';
import Reveal from './Reveal';

export default function Philosophy() {
  return (
    <section id="philosophy" className="section">
      <div className="container">
        <Reveal><p className="section-label">Engineering Philosophy</p></Reveal>
        <Reveal delay={100}>
          <h2 className="section-title">How I Think</h2>
        </Reveal>
        <div className="g g-compact">
          {principles.map((p, i) => (
            <Reveal key={p.num} delay={Math.min(i * 80, 300)}>
              <div className="gc philosophy-card">
                <div className="philosophy-card-number">{p.num}</div>
                <h3 className="philosophy-card-title">{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
