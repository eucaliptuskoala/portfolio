import './ProjectCard.css';

function ProjectCard({ project }) {
  const tagClass = `project-tag tag-${project.tagType}`;

  return (
    <div className="project-card">
      <div className="project-card-top">
        <span className="project-title">{project.title}</span>
        <span className={tagClass}>
          {project.tag || project.tags[0]}
        </span>
      </div>
      <p className="project-desc">{project.description}</p>
      {project.gitLink && (
        <a href={project.gitLink} target="_blank" rel="noopener noreferrer" className="project-link">
          view repo →
        </a>
      )}
    </div>
  );
}

export default ProjectCard;
