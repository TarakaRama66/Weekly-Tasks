import { createContext, useContext, useState } from "react";

// Create Context
const ThemeContexts = createContext();

// Provider Component
export function ThemeProvider({ children }) {

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "light" ? "dark" : "light"
    );
  };


  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}


// Custom Hook (this was missing)
export function ThemeContext() {
  return useContext(ThemeContexts);
}