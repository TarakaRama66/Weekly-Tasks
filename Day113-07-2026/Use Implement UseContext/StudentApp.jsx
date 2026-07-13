import StudentProvider from "./StudentProvider";
import StudentInfo from "./StudentInfo";
import Course from "./Course";

function StudentApp() {
  return (
    <StudentProvider>
      <StudentInfo />
      <Course />
    </StudentProvider>
  );
}
export default StudentApp;