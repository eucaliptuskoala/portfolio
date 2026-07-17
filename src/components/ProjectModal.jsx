import { useEffect, useRef, useState } from 'react';

export default function ProjectModal({ project, onClose }) {
  const onCloseRef = useRef(onClose);
  const [closing, setClosing] = useState(false);

  useEffect(() => { onCloseRef.current = onClose; });

  const handleClose = () => setClosing(true);

  useEffect(() => {
    if (!closing) return;
    const timer = setTimeout(() => onCloseRef.current(), 300);
    return () => clearTimeout(timer);
  }, [closing]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handler = (e) => e.key === 'Escape' && handleClose();
    document.addEventListener('keydown', handler);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handler);
    };
  }, []);

  const d = project.detail;
  return (
    <div className={`modal-overlay${closing ? ' closing' : ''}`} onClick={(e) => e.target === e.currentTarget && handleClose()}>
      <button className="modal-close" onClick={handleClose} aria-label="Close">
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
