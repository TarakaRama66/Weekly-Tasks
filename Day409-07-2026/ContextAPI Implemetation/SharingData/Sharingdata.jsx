import { createContext, useContext } from "react";

// Create Context
const UserContext = createContext();

// Provider Component
function UserProvider({ children }) {
  const user = {
    name: "Tarak",
    role: "Developer",
  };

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}

// Level 1
function Parent() {
  return <Child />;
}

// Level 2
function Child() {
  return <GrandChild />;
}

// Level 3
function GrandChild() {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>Name: {user.name}</h2>
      <h3>Role: {user.role}</h3>
    </div>
  );
}

// Main App Component
export default function Sharingdata() {
  return (
    <UserProvider>
        <h1>Sharing Data</h1>
      <Parent />
    </UserProvider>
  );
}