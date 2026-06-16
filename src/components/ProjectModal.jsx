import { useEffect } from 'react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handler = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', handler);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handler);
    };
  }, [onClose]);

  const d = project.detail;
  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <button className="modal-close" onClick={onClose} aria-label="Close">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 4l12 12m0-12L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
      </button>
      <div className="modal-content">
        <div className="modal-category">{project.category}</div>
        <h2 className="modal-title">{project.title}</h2>
        <p className="modal-tagline">{project.tagline}</p>

        <div className="modal-section">
          <h3>Context</h3>
          <p>{d.context}</p>
        </div>
        <div className="modal-section">
          <h3>Problem</h3>
          <p>{d.problem}</p>
        </div>
        <div className="modal-section">
          <h3>My Role</h3>
          <p>{d.role}</p>
        </div>
        <div className="modal-section">
          <h3>Architecture Decisions</h3>
          <p>{d.architecture}</p>
        </div>
        <div className="modal-section">
          <h3>Technical Challenges</h3>
          <p>{d.challenges}</p>
        </div>
        <div className="modal-section">
          <h3>Outcomes</h3>
          <div className="modal-outcome"><p>{d.outcomes}</p></div>
        </div>
        <div className="modal-section">
          <h3>Tech Stack</h3>
          <div className="modal-tech-list">
            {d.techStack.map(t => <span key={t}>{t}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}
