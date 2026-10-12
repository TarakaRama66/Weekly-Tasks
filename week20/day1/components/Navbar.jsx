import { Link, NavLink } from "react-router";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Employee Portal
      </Link>

      <div className="nav-links">
        <NavLink to="/" end>
          Home
        </NavLink>

        {!isAuthenticated ? (
          <NavLink to="/login">
            Login
          </NavLink>
        ) : (
          <>
            <NavLink to="/dashboard">
              Dashboard
            </NavLink>

            <button onClick={logout}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;