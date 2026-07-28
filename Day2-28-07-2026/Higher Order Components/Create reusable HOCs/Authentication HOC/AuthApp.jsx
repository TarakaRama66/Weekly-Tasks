import Dashboard from "./Dashboard";
import Auth from "./Auth";

const ProtectedDashboard = Auth(Dashboard);

function AuthApp() {

  const employee = {
    id:101,
    name:"Tarak",
    department:"Development",
    role:"React Developer",
    salary:50000
  }
  return (
    <>
      <ProtectedDashboard employee={employee}/>
    </>
  );
}
export default AuthApp;