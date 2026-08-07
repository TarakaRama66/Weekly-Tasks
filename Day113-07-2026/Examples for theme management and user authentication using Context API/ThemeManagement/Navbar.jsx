import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
        <h1>Theme Management Using Context API</h1>
      <h2>Current Theme: {theme}</h2>

      <button onClick={toggleTheme}>Switch Theme</button>
    </div>
  );
}

export default Navbar;