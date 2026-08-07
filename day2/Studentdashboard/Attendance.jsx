function Attendance({student,updateAttendance}){
    return(
    <button onClick={()=>updateAttendance(student.id)}>
        Toggle Attendance
    </button>
    )
}
export default Attendance;