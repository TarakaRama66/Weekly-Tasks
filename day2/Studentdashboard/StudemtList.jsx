import StudentCard from "./StudentCard";
function StudentList({students,updateAttendance}){
    return(
    <>
    {
    students.map(student=>(
    <StudentCard
    key={student.id}
    student={student}
    updateAttendance={updateAttendance}/>))}
    </>
)
}
export default StudentList;