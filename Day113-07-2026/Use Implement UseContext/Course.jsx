import { useContext } from "react";
import StudentContext from "./StudentContext";

function Course() {
  const { student, setStudent } = useContext(StudentContext);
  const changeCourse = () => {
    setStudent({
      ...student,
      course: "Advanced React",
    });
  };
  return (
    <div>
      <h3>Current Course: {student.course}</h3>
      <button onClick={changeCourse}>Upgrade Course</button>
    </div>
  );
}
export default Course;