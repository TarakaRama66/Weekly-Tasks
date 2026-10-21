function Task4App() {
  // JavaScript variables
  const studentName = "TarakRam";
  const course = "React JS";
  const company = "NYB Infotech";
  const duration = 3;
  const isCompleted = false;

  // JavaScript object
  const student = {
    age: 23,
    location: "Hyderabad"
  };

  // JavaScript array
  const skills = ["HTML", "JavaScript", "React"];

  // JavaScript expression
  const totalDuration = duration * 30;

  return (
    <div>
      <h1>Student Information</h1>

      <p>Name: {studentName}</p>
      <p>Course: {course}</p>
      <p>Company: {company}</p>

      <h2>Student Details</h2>
      <p>Age: {student.age}</p>
      <p>Location: {student.location}</p>

      <h2>Training Details</h2>
      <p>Duration: {duration} months</p>
      <p>Total Days (approx.): {totalDuration}</p>

      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h2>Training Status</h2>
      <p>
        {isCompleted ? "Training Completed" : "Training In Progress"}
      </p>

      <h2>JavaScript Expression</h2>
      <p>10 + 20 = {10 + 20}</p>
      <p>Current year: {new Date().getFullYear()}</p>
    </div>
  );
}

export default Task4App;