function StudentDashboard() {
  return <h2>Watch Courses</h2>;
}
function InstructorDashboard() {
  return <h2>Create New Course</h2>;
}
function AdminDashboard() {
  return <h2>Manage All Users</h2>;
}
function LoginPage() {
  return <h2>Please Login to Continue</h2>;
}
function Student() {
  const isLoggedIn = true;
  const role = "Instructor";
  if (!isLoggedIn) {
    return <LoginPage />;
  }
  let dashboard;
  switch (role) {
    case "Student":
      dashboard = <StudentDashboard />;
      break;
    case "Instructor":
      dashboard = <InstructorDashboard />;
      break;
    case "Admin":
      dashboard = <AdminDashboard />;
      break;
    default:
      dashboard = <h2>Access Denied</h2>;
  }
  return (
    <div>
      <h1>Online Learning</h1>
      {dashboard}
    </div>
  );
}
export default Student;