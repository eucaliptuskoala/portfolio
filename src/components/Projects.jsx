import { useState } from 'react';
import { projects } from '../data/projects';
import Reveal from './Reveal';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const filters = ['All', 'Production', 'Internship', 'Client', 'Research', 'Academic'];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  const sorted = [...projects].sort((a, b) => b.year.localeCompare(a.year));
  const filtered = filter === 'All' ? sorted : sorted.filter(p => p.category === filter);

  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal><p className="section-label">Projects</p></Reveal>
        <Reveal delay={100}>
          <h2 className="section-title">Selected Work</h2>
        </Reveal>
        <Reveal delay={150}>
          <div className="project-filters">
            {filters.map(f => (
              <button key={f} className={`filter-btn ${filter === f ? 'active' : ''}`}
                      onClick={() => setFilter(f)}>{f}</button>
            ))}
          </div>
        </Reveal>
      </div>
      <div className="container projects-spacer">
        <div className="projects-grid">
          {filtered.map((p, i) => (
            <Reveal key={p.id} delay={Math.min(i * 50, 300)}>
              <ProjectCard project={p} onClick={setSelected} />
            </Reveal>
          ))}
        </div>
      </div>
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
