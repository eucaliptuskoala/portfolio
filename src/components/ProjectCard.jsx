export default function ProjectCard({ project, onClick }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(project);
    }
  };

  return (
    <div className="project-card" tabIndex={0} role="button"
         onClick={() => onClick(project)} onKeyDown={handleKeyDown}>
      <div className="project-card-category">{project.category}</div>
      <div className="project-card-year">{project.year}</div>
      <h3 className="project-card-title">{project.title}</h3>
      <p className="project-card-tagline">{project.tagline}</p>
      <div className="project-card-tech">
        {project.tech.slice(0, 5).map(t => <span key={t}>{t}</span>)}
        {project.tech.length > 5 && <span>+{project.tech.length - 5}</span>}
      </div>
      <div className="project-card-arrow">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 16L16 4m0 0H7m9 0v9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </div>
    </div>
  );
}
