import { useState } from "react";

import {
  Link,
  useLocation,
  useNavigate
} from "react-router";

import { useAuth } from "../context/AuthContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login, isAuthenticated } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from;

  function handleSubmit(event) {
    event.preventDefault();

    const result = login(username, password);

    if (!result.success) {
      setError(result.message);
      return;
    }

    setError("");

    const destination = from
      ? `${from.pathname}${from.search}${from.hash}`
      : "/dashboard";

    navigate(destination, {
      replace: true
    });
  }

  if (isAuthenticated) {
    return (
      <section className="container">
        <h1>You are already logged in.</h1>

        <Link to="/dashboard">
          Go to Dashboard
        </Link>
      </section>
    );
  }

  return (
    <section className="container login-container">
      <h1>Employee Portal Login</h1>

      <p>
        Demo credentials: admin / admin123
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username
        </label>

        <input
          id="username"
          value={username}
          onChange={(event) =>
            setUsername(event.target.value)
          }
          required
        />

        <label htmlFor="password">
          Password
        </label>

        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) =>
            setPassword(event.target.value)
          }
          required
        />

        {error && (
          <p className="error">{error}</p>
        )}

        <button type="submit">
          Login
        </button>
      </form>
    </section>
  );
}

export default Login;