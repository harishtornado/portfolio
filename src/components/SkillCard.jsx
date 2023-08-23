const SkillCard = ({ title, logo }) => {
  return (
    <div className="skill-card">
      <img src={logo} alt={`${title} Logo`} className="skill-logo" />
      <h3 className="skill-title">{title}</h3>
    </div>
  );
};

export default SkillCard;
