import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Dashboard from "./Dashboard";
import ProtectedRoute from "./ProtectedRoute";

function AuthenticationApp() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <>
      <h1>Protected Routes Example</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/login">Login</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <hr></hr>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}/>
        <Route
          path="/dashboard"
          element={<ProtectedRoute isAuthenticated={isAuthenticated}><Dashboard /></ProtectedRoute>}/>
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </>
  );
}
export default AuthenticationApp;