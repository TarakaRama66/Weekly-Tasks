import Employee from "./Employee";

function App1() {
  const employee = {
    id: 101,
    company: "ABC Technologies",
  };

  const { id, company } = employee;

  const skills = ["HTML", "CSS"];
  const allSkills = [...skills, "JavaScript", "React"];

  const totalMarks = (...marks) =>
    marks.reduce((sum, mark) => sum + mark, 0);

  const emp = new Employee("Gupta");

  return (
    <div>
      <h1>Babel All-in-One Example</h1>

      <h3>Object Destructuring</h3>
      <p>ID: {id}</p>
      <p>Company: {company}</p>

      <h3>Spread Operator</h3>
      <p>{allSkills.join(", ")}</p>

      <h3>Rest Parameter + Arrow Function</h3>
      <p>Total Marks: {totalMarks(80, 90, 95)}</p>

      <h3>Class</h3>
      <p>{emp.display()}</p>
    </div>
  );
}

export default App1;