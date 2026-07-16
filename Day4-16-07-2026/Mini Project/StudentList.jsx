import { useDispatch, useSelector } from "react-redux";
import { deleteStudent } from "./studentSlice";

function StudentList() {
  const students = useSelector((state) => state.student.students);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Student List</h2>
      {students.length === 0 ? (
        <p>No Students Found</p>
      ) : (
        students.map((student) => (
          <div key={student.id}>
            <h3>{student.name}</h3>
            <p>Course : {student.course}</p>
            <p>Age : {student.age}</p>
            <button onClick={() => dispatch(deleteStudent(student.id))}>Delete</button>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}
export default StudentList;