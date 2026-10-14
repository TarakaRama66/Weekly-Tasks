
import { lazy, Suspense, useState } from "react";

const Dashboard = lazy(() => import("./pages/Dashboard.jsx"));
const Employees = lazy(() => import("./pages/Employees.jsx"));
const Reports = lazy(() => import("./pages/Reports.jsx"));
const Settings = lazy(() => import("./pages/Settings.jsx"));

export default function Task6() {
  const [page, setPage] = useState("dashboard");

  function renderPage() {
    switch (page) {
      case "employees":
        return <Employees />;

      case "reports":
        return <Reports />;

      case "settings":
        return <Settings />;

      default:
        return <Dashboard />;
    }
  }

  return (
    <main>
      <h1>Employee Management Portal</h1>

      <nav>
        <button onClick={() => setPage("dashboard")}>
          Dashboard
        </button>{" "}
        <button onClick={() => setPage("employees")}>
          Employees
        </button>{" "}
        <button onClick={() => setPage("reports")}>
          Reports
        </button>{" "}
        <button onClick={() => setPage("settings")}>
          Settings
        </button>
      </nav>

      <hr />

      <Suspense fallback={<p>Loading page, please wait...</p>}>
        {renderPage()}
      </Suspense>
    </main>
  );
}