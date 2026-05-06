import './SkillCard.css';

function SkillCard({ category }) {
  return (
    <div className="skill-group">
      <p className="skill-group-name">{category.name}</p>
      <div className="skill-list">
        {category.skills.map((skill, index) => (
          <span key={index} className="skill-item">{skill}</span>
        ))}
      </div>
    </div>
  );
}

export default SkillCard;
