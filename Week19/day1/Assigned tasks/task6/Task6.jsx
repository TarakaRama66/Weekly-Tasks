function Task6() {
  const employee = {
    id: 101,
    name: "Taraka Ram",
    role: "Associate Software Engineer",
    salary: 25000,
    experience: 1
  };
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux Toolkit"
  ];
  const marks = [85, 90, 78, 95, 88];
  const totalMarks = marks.reduce(
    (total, mark) => total + mark,0);
  const average = totalMarks / marks.length;
  const greeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
      return "Good Morning";
    } else if (hour < 17) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };
  return (
    <>
      <h1>JavaScript Expressions Inside JSX</h1>
      <hr></hr>
      <h2>Variables</h2>
      <p>Name : {employee.name}</p>
      <p>Role : {employee.role}</p>
      <hr></hr>
      <h2>Arithmetic Expressions</h2>
      <p>Addition : {100 + 200}</p>
      <p>Subtraction : {500 - 100}</p>
      <p>Multiplication : {20 * 10}</p>
      <p>Division : {100 / 5}</p>
      <p>Modulus : {17 % 5}</p>
      <hr></hr>
      <h2>Object Properties</h2>
      <p>Employee ID : {employee.id}</p>
      <p>Salary : ₹{employee.salary}</p>
      <p>Experience : {employee.experience} Years</p>
      <hr></hr>
      <h2>Function Call</h2>
      <p>{greeting()}</p>
      <hr></hr>
      <h2>Ternary Operator</h2>
      <p>Status :{employee.experience >= 2 ? " Experienced Developer": " Fresher"}</p>
      <hr></hr>
      <h2>Logical AND Operator</h2>
      {employee.salary > 40000 && (
        <h3>Eligible For Performance Bonus</h3>
      )}
      <hr></hr>
      <h2>Array Length</h2>
      <p>Total Skills : {skills.length}</p>
      <hr></hr>
      <h2>Array Rendering Using map()</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <hr></hr>
      <h2>Array Calculations</h2>
      <p>Total Marks : {totalMarks}</p>
      <p>Average Marks : {average}</p>
      <hr></hr>
      <h2>String Methods</h2>
      <p>{employee.name.toUpperCase()}</p>
      <p>{employee.role.toLowerCase()}</p>
      <hr></hr>
      <h2>Date Expressions</h2>
      <p>Current Year : {new Date().getFullYear()}</p>
      <p>Current Time : {new Date().toLocaleTimeString()}</p>
      <hr></hr>
      <h2>Template Literals</h2>
      <p>
        {`${employee.name} works as a ${employee.role}`}
      </p>
      <hr></hr>
      <h2>Nested Expressions</h2>
      <p>
        {employee.salary > 40000
          ? `${employee.name} is a High Paid Employee`
          : `${employee.name} is a Junior Employee`}
      </p>
      <hr />
      <h2>Math Object</h2>
      <p>Square Root : {Math.sqrt(144)}</p>
      <p>Power : {Math.pow(5, 3)}</p>
      <p>Random Number : {Math.floor(Math.random() * 100)}</p>
      <hr></hr>
      <h2>15. Combined Expression</h2>
      <p>
        {employee.name} has {skills.length} technical
        skills and earns ₹{employee.salary} per month.
      </p>
    </>
  );
}
export default Task6;