function Ternary() {
  const students = [
    { id: 1, name: "Tarak", passed: true },
    { id: 2, name: "Ram", passed: false },
    { id: 3, name: "Tilak", passed: true },
    { id: 4, name: "Gupta", passed: false},
  ];

  return (
    <>
      <h2>Student Results Using Ternary Operator</h2>
      {students.map((student) => (
        <p key={student.id}>
          {student.name} - {student.passed ? "Pass" : "Fail"}
        </p>
      ))}
    </>
  );
}
export default Ternary;