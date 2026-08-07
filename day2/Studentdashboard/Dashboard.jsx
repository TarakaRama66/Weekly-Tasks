import {Component} from "react";
import StudentList from "./StudemtList";
class Dashboard extends Component{
    render(){
        const {students,updateAttendance}=this.props
        return(
        <div>
            <h2>Total Students : {students.length}</h2>
            <StudentList
            students={students}
            updateAttendance={updateAttendance}/>
        </div>
        )
    }
}
export default Dashboard;