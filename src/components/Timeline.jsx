import './Timeline.css';

function Timeline({ items }) {
  return (
    <div className="timeline">
      <div className="timeline-line" />
      {items.map((item, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-content">
            <span className="timeline-date">{item.date}</span>
            <div className="timeline-card">
              <span className="timeline-card-title">{item.title}</span>
              <span className="timeline-card-subtitle">{item.subtitle}</span>
              {item.description && (
                <p className="timeline-card-desc">{item.description}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Timeline;
