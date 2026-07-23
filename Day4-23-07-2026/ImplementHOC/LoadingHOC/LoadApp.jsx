import Dashboard from "./Dashboard";
import Loading from "./Loading";

const DashboardWithLoading = Loading(Dashboard);

function LoadApp() {
  return (
    <div>
      <DashboardWithLoading />
    </div>
  );
}

export default LoadApp;