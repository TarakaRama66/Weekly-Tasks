import { useTheme } from "./ThemeContext";

function ThemeButton() {
  const { toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
}

export default ThemeButton;