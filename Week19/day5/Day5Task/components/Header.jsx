import { useContext } from "react";
import { AppContext } from "../context/AppContext";
 
function Header() {
  const { username, theme } = useContext(AppContext);
  return (
    <header>
      <h2>React Learning App</h2>
      <p>Welcome, {username}!</p>
      <p>Current theme: {theme}</p>
    </header>
  );
}
export default Header;