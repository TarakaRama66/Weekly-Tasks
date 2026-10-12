import {
  NavLink,
  Outlet
} from "react-router";

function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <h2>Admin Panel</h2>

        <NavLink to="/dashboard" end>
          Overview
        </NavLink>

        <NavLink to="/dashboard/employees">
          Employees
        </NavLink>

        <NavLink to="/dashboard/reports">
          Reports
        </NavLink>

        <NavLink to="/dashboard/settings">
          Settings
        </NavLink>
      </aside>

      <main className="dashboard-content">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;