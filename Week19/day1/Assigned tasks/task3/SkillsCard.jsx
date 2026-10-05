function SkillCard() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux Toolkit",
    "Git",
    "REST API"
  ];
  return (
    <div>
      <h2>Technical Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <hr></hr>
    </div>
  );
}
export default SkillCard;