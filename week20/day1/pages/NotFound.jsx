import { Link, useLocation } from "react-router";

function NotFound() {
  const location = useLocation();

  return (
    <section className="container not-found">
      <h1>404</h1>

      <h2>Page Not Found</h2>

      <p>The requested page does not exist:</p>

      <code>{location.pathname}</code>

      <br />

      <Link to="/" className="button">
        Return Home
      </Link>
    </section>
  );
}

export default NotFound;