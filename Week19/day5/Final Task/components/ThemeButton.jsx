 import { useAppContext } from "../context/AppContext";
 
function ThemeButton() {
  const { theme, toggleTheme } = useAppContext();
 
  return (
    <button className="secondary-btn" onClick={toggleTheme}>
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}
 
export default ThemeButton;