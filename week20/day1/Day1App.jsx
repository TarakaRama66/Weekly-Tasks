import {
  Routes,
  Route
} from "react-router";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import DashboardLayout from "./layouts/DashboardLayout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import EmployeeDetails from "./pages/EmployeeDetails";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

function Day1App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Public routes */}
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route
            path="/dashboard"
            element={<DashboardLayout />}
          >
            <Route
              index
              element={<Dashboard />}
            />

            <Route
              path="employees"
              element={<Employees />}
            />

            <Route
              path="employees/:employeeId"
              element={<EmployeeDetails />}
            />

            <Route
              path="reports"
              element={<Reports />}
            />

            <Route
              path="settings"
              element={<Settings />}
            />
          </Route>
        </Route>

        {/* 404 fallback */}
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </>
  );
}

export default Day1App;