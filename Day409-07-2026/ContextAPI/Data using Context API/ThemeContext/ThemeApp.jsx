import { useState } from "react";
import ThemeContext from "./ThemeContext";
import Home from "./Home";

function ThemeApp() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <hr></hr>
        <h1>Theme Context</h1>
      <Home />
    </ThemeContext.Provider>
  );
}

export default ThemeApp;