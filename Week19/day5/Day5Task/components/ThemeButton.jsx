import { useContext } from "react";
import { AppContext } from "../context/AppContext";
 
function ThemeButton() {
  const { theme, toggleTheme } = useContext(AppContext);
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
}
export default ThemeButton;