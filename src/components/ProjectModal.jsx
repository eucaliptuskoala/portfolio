import { useEffect, useRef, useState } from 'react';

const linkIcons = {
  live: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  github: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.09.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.5.337c1.91-1.294 2.75-1.025 2.75-1.025.544 1.377.201 2.394.099 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>,
  gitlab: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 01-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 014.82 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0118.6 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.51L23 13.45a.84.84 0 01-.35.94z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  gitlab_backend: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 01-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 014.82 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0118.6 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.51L23 13.45a.84.84 0 01-.35.94z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  gitlab_frontend: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 01-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 014.82 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0118.6 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.51L23 13.45a.84.84 0 01-.35.94z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
};

const linkLabels = {
  live: 'Live',
  github: 'GitHub',
  gitlab: 'GitLab',
  gitlab_frontend: 'Frontend',
  gitlab_backend: 'Backend',
};

export default function ProjectModal({ project, onClose }) {
  const onCloseRef = useRef(onClose);
  const dialogRef = useRef(null);
  const closeBtnRef = useRef(null);
  const [closing, setClosing] = useState(false);

  useEffect(() => { onCloseRef.current = onClose; });

  const handleClose = () => setClosing(true);

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    closeBtnRef.current?.focus();
    return () => previouslyFocused?.focus?.();
  }, []);

  useEffect(() => {
    if (!closing) return;
    const timer = setTimeout(() => onCloseRef.current(), 300);
    return () => clearTimeout(timer);
  }, [closing]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handler = (e) => {
      if (e.key === 'Escape') {
        setClosing(true);
      } else if (e.key === 'Tab') {
        const focusables = dialogRef.current?.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables || focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', handler);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handler);
    };
  }, []);

  const d = project.detail;
  return (
    <div className={`modal-overlay${closing ? ' closing' : ''}`}
         role="dialog" aria-modal="true" aria-label={project.title} ref={dialogRef}
         onClick={(e) => e.target === e.currentTarget && handleClose()}>
      <button className="modal-close" onClick={handleClose} aria-label="Close" ref={closeBtnRef}>
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
            {project.tech.map(t => <span key={t}>{t}</span>)}
          </div>
        </div>
        {d.links && (
          <div className="modal-section">
            <h3>Links</h3>
            <div className="modal-tech-list">
              {Object.entries(d.links).map(([key, url]) => (
                <a key={key} href={url} target="_blank" rel="noopener noreferrer" className="contact-link">
                  {linkIcons[key] || linkIcons.live}
                  {linkLabels[key] || key}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
