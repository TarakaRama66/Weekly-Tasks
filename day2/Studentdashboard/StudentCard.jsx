import Attendance from "./Attendance";
function StudentCard({student,updateAttendance}){
    return(
        <div>
            <h3>{student.name}</h3>
            <p>Attendance :{student.attendance?" Present":" Absent"}</p>
            <Attendance
            student={student}updateAttendance={updateAttendance}/>
            </div>
            )
        }
export default StudentCard;