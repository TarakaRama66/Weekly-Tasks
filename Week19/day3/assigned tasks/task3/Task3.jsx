import { useState } from "react";
 
function Task3() {
  const [employee, setEmployee] = useState("");
  const [skills, setSkills] = useState([
    {
      id: Date.now(),
      skill: "",
    },
  ]);
 
  const [submittedData, setSubmittedData] = useState(null);
 
  const handleSkillChange = (id, value) => {
    setSkills(
      skills.map((item) =>
        item.id === id
          ? { ...item, skill: value }
          : item
      )
    );
  };
 
  const addSkillField = () => {
    setSkills([
      ...skills,
      {
        id: Date.now(),
        skill: "",
      },
    ]);
  };
 
  const removeSkillField = (id) => {
    if (skills.length === 1) return;
 
    setSkills(
      skills.filter((item) => item.id !== id)
    );
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
 
    const hasEmptySkill = skills.some(
      (item) => item.skill.trim() === ""
    );
 
    if (!employee.trim()) {
      alert("Employee Name Required");
      return;
    }
 
    if (hasEmptySkill) {
      alert("Please Fill All Skills");
      return;
    }
 
    setSubmittedData({
      employee,
      skills,
    });
 
    setEmployee("");
 
    setSkills([
      {
        id: Date.now(),
        skill: "",
      },
    ]);
  };
 
  return (
    <div className="container">
      <h1>Dynamic Employee Skills Form</h1>
 
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Employee Name"
          value={employee}
          onChange={(e) =>
            setEmployee(e.target.value)
          }
        />
 
        {skills.map((item, index) => (
          <div key={item.id} className="skill-row">
            <input
              type="text"
              placeholder={`Skill ${index + 1}`}
              value={item.skill}
              onChange={(e) =>
                handleSkillChange(
                  item.id,
                  e.target.value
                )
              }
            />
 
            <button
              type="button"
              className="remove"
              onClick={() =>
                removeSkillField(item.id)
              }
            >
              Remove
            </button>
          </div>
        ))}
 
        <button
          type="button"
          className="add"
          onClick={addSkillField}
        >
          Add Skill
        </button>
 
        <button
          type="submit"
          className="submit"
        >
          Submit Employee
        </button>
      </form>
 
      {submittedData && (
        <div className="preview">
          <h2>Submitted Employee</h2>
 
          <h3>
            Name: {submittedData.employee}
          </h3>
 
          <h3>Skills:</h3>
 
          <ul>
            {submittedData.skills.map((item) => (
              <li key={item.id}>
                {item.skill}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
 
export default Task3;