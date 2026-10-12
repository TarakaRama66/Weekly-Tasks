import {
  createContext,
  useContext,
  useState
} from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] =
    useState(false);

  function login(username, password) {
    if (
      username.trim() === "admin" &&
      password === "admin123"
    ) {
      setIsAuthenticated(true);

      return {
        success: true
      };
    }

    return {
      success: false,
      message: "Invalid username or password."
    };
  }

  function logout() {
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider."
    );
  }

  return context;
}