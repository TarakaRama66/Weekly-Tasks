import { useState } from "react";

function Student(props) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
      }}
    >
      {/* Props */}
      <h2>Name: {props.name}</h2>
      <h3>Course: {props.course}</h3>

      {/* State */}
      <h3>Count: {props.count}</h3>

      <button onClick={props.increment}>Increment</button>
    </div>
  );
}

function PropsState() {
  // State
  const [count, setCount] = useState(0);

  // Dynamic data using Props
  const students = [
    { id: 1, name: "Gupta", course: "React" },
    { id: 2, name: "Ram", course: "Java" },
    { id: 3, name: "Sai", course: "Python" },
  ];

  return (
    <div>
      <h1>Props & State Example</h1>

      {students.map((student) => (
        <Student
          key={student.id}
          name={student.name}
          course={student.course}
          count={count}
          increment={() => setCount(count + 1)}
        />
      ))}
    </div>
  );
}

export default PropsState;