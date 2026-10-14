import { DashboardProvider, useDashboard } from "./context/DashboardContext";
// import Dashboard from "./components/Dashboard";
import EmployeeManager from "./components/EmployeeManager";
import DepartmentManager from "./components/DepartmentManager";

function DashboardContent() {
  const { dispatch } = useDashboard();

  function resetDashboard() {
    if (window.confirm("Reset all dashboard data?")) {
      dispatch({ type: "RESET_DASHBOARD" });
    }
  }

  return (
    <main>
      {/* <Dashboard /> */}

      <EmployeeManager />

      <hr></hr>

      <DepartmentManager />

      <hr></hr>

      <button onClick={resetDashboard}>
        Reset Dashboard
      </button>
    </main>
  );
}

function Task5App() {
  return (
    <DashboardProvider>
      <DashboardContent />
    </DashboardProvider>
  );
}

export default Task5App;