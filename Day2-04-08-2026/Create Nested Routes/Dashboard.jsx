import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <h2>Dashboard</h2>
      <Link to="profile">Profile</Link> |{" "}
      <Link to="settings">Settings</Link> |{" "}
      <Link to="reports">Reports</Link>
      <hr></hr>
      <Outlet />
    </>
  );
}
export default Dashboard;