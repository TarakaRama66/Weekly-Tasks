import Header from "./Header";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";

function Dashboard() {
  return (
    <div>
      <Header />
      <hr />
      <StudentForm />
      <hr />
      <StudentList />
    </div>
  );
}
export default Dashboard;