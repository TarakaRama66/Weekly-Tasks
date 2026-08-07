import StudentInfo from "./StudentInfo";
import UseToggle from "./UseToggle";

function StudentDashboard() {
  const { show, toggle } = UseToggle(false);

  return (
    <>
      <h1>Student Dashboard</h1>
      <StudentInfo />
      <button onClick={toggle}>{show ? "Hide Marks" : "Show Marks"}</button>
      {show && (
        <>
          <h3>Marks</h3>
          <p>React : 90</p>
          <p>JavaScript : 88</p>
          <p>HTML & CSS : 95</p>
        </>
      )}
    </>
  );
}
export default StudentDashboard;