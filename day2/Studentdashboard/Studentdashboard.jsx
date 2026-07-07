import { useState } from "react";
import Header from "./Header";
import Dashboard from "./Dashboard";
import StudentForm from "./StudentForm";

function Studentdashboard() {
  const [students, setStudents] = useState([
    {
      id:1,
      name:"Gupta",
      attendance:true
    }
  ]);

  const addStudent = (student)=>{
      setStudents([...students,student]);
  }

  const updateAttendance=(id)=>{
      setStudents(
        students.map(student=>
          student.id===id
          ? {...student,attendance:!student.attendance}
          : student
        )
      )
  }
  return (
    <>
    <h1>Mini Project</h1>
      <Header />

      <StudentForm addStudent={addStudent}/>

      <Dashboard
      students={students}
      updateAttendance={updateAttendance}
      />
    </>
  );
}

export default Studentdashboard;