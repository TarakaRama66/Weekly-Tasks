import StudentDashboard from "./StudentDashboard";
import Role from "./Role";

const ProtectedDashboard = Role(StudentDashboard);
function MainApp() {
  return <ProtectedDashboard />;
}
export default MainApp;