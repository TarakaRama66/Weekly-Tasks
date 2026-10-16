
import {
  Component,
  lazy,
  Suspense,
  useState,
} from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link,
  useNavigate,
} from "react-router-dom";

import {
  EmployeeProvider,
  useEmployeeContext,
} from "./context/EmployeeContext";

const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const EmployeesPage = lazy(() => import("./pages/EmployeesPage"));
const EmployeeDetailsPage = lazy(
  () => import("./pages/EmployeeDetailsPage")
);

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <main>
          <h1>Something went wrong</h1>
          <button onClick={() => window.location.reload()}>
            Reload Application
          </button>
        </main>
      );
    }

    return this.props.children;
  }
}

function LoginPage() {
  const { login, state } = useEmployeeContext();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleLogin(event) {
    event.preventDefault();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Enter a valid email address");
      return;
    }

    login(email.trim());
    navigate("/dashboard");
  }

  if (state.isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <main>
      <h1>Employee Portal Login</h1>

      <form onSubmit={handleLogin}>
        <label htmlFor="login-email">Email</label>
        <input
          id="login-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        {error && <p role="alert">{error}</p>}

        <button type="submit">Login</button>
      </form>
    </main>
  );
}

function ProtectedRoute({ children }) {
  const { state } = useEmployeeContext();

  return state.isAuthenticated
    ? children
    : <Navigate to="/" replace />;
}

function Layout() {
  const { logout } = useEmployeeContext();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <>
      <nav aria-label="Main navigation">
        <Link to="/dashboard">Dashboard</Link>{" | "}
        <Link to="/employees">Employees</Link>{" | "}
        <button onClick={handleLogout}>Logout</button>
      </nav>

      <Suspense fallback={<p role="status">Loading page...</p>}>
        <Routes>
          <Route path="/" element={<LoginPage />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/employees"
            element={
              <ProtectedRoute>
                <EmployeesPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/employees/:id"
            element={
              <ProtectedRoute>
                <EmployeeDetailsPage />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </Suspense>
    </>
  );
}

export default function MainApp() {
  return (
    <ErrorBoundary>
      <EmployeeProvider>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </EmployeeProvider>
    </ErrorBoundary>
  );
}