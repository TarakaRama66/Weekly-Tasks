function SubjectName() {
  const students = [
    {
      id: 1,
      name: "Tarak",
      subjects: ["Maths", "Science"],
    },
    {
      id: 2,
      name: "Ram",
      subjects: ["Physics", "Chemistry"],
    },
    {
      id: 3,
      name: "Tilak",
      subjects: ["Biology", "Computer"],
    },
    {
        id:4,
        name:"Gupta",
        subjects:["English","Hindi"]
    },
  ];

  return (
    <>
      <h2>Student With Subjects</h2>
      {students.map((student) => (
        <div key={student.id}>
          <h3>{student.name}</h3>
          <ul>
            {student.subjects.map((subject, index) => (
              <li key={index}>{subject}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
export default SubjectName;