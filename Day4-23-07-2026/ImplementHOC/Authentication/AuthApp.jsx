import Dashboard from "./Dashboard";
import Auth from "./Auth";

const ProtectedDashboard = Auth(Dashboard);

function AuthApp() {
  return (
    <div>
      <ProtectedDashboard />
    </div>
  );
}

export default AuthApp;