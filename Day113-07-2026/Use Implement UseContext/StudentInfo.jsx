import { useContext } from "react";
import StudentContext from "./StudentContext";

function StudentInfo() {
  const { student } = useContext(StudentContext);

  return (
    <div>
        <h1>Implement useContext() hook for accessing shared data</h1>
        <h2>Student Name: {student.name}</h2>
        <h3>Course: {student.course}</h3>
    </div>
  );
}

export default StudentInfo;