import { createContext, useState } from "react";

export const AppContext = createContext();
export function AppProvider({ children }) {
  const [username, setUsername] = useState("Taraka");
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );
  }
  return (
    <AppContext.Provider
      value={{username,setUsername,theme,toggleTheme,}}>
      {children}
    </AppContext.Provider>
  );
}