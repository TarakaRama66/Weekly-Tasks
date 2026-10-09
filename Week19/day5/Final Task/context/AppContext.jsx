 
import { createContext, useContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import useLocalStorage from "../hooks/useLocalStorage";
 
const AppContext = createContext(null);
 
export function AppProvider({ children }) {
  const [users, setUsers] = useLocalStorage("react-users", []);
  const [theme, setTheme] = useState("light");
 
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
 
  // Load API users only when no saved users exist.
  useEffect(() => {
    if (data.length > 0 && users.length === 0) {
      setUsers(
        data.map((user) => ({
          id: user.id,
          name: user.name,
          email: user.email,
          role: "User",
        }))
      );
    }
  }, [data, users.length, setUsers]);
 
  function addUser(user) {
    setUsers((previous) => [
      { ...user, id: Date.now() },
      ...previous,
    ]);
  }
 
  function updateUser(updatedUser) {
    setUsers((previous) =>
      previous.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      )
    );
  }
 
  function deleteUser(id) {
    setUsers((previous) =>
      previous.filter((user) => user.id !== id)
    );
  }
 
  function toggleTheme() {
    setTheme((previous) =>
      previous === "light" ? "dark" : "light"
    );
  }
 
  return (
    <AppContext.Provider
      value={{
        users,
        addUser,
        updateUser,
        deleteUser,
        theme,
        toggleTheme,
        loading,
        error,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
 
export function useAppContext() {
  const context = useContext(AppContext);
 
  if (!context) {
    throw new Error(
      "useAppContext must be used inside AppProvider"
    );
  }
 
  return context;
}