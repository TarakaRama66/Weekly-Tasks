import { createContext, useContext, useState } from "react";

// Create User Context
const UserContexts = createContext();

export function UserProvider({ children }) {
  const [user] = useState({
    name: "Alice Johnson",
    role: "Frontend Developer",
    department: "Engineering",
  });

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
}

// Custom Hook
export function UserContext() {
  return useContext(UserContexts);
}