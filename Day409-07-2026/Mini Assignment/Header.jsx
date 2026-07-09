// const { theme } = useContext(ThemeContext);
import { useUser } from "./UserContext";

function Header() {
  const { theme } = theme();
  const { user } = useUser();

  return (
    <header
      style={{
        background: theme === "light" ? "#4CAF50" : "#222",
        color: "white",
        padding: "15px",
      }}
    >
      <h1>Smart Workspace Dashboard</h1>

      <p>Welcome, {user.name}</p>
    </header>
  );
}

export default Header;