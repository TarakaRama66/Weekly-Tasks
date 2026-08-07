import { createContext, useContext } from "react";

// Create the Context
const UserContext = createContext();

// Provider Component
const UserProvider = ({ children }) => {
  const user = {
    name: "Tarak",
    role: "Frontend Developer",
  };

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

// Component to display the user's name
const UserName = () => {
  const { name } = useContext(UserContext);

  return <h2>Name: {name}</h2>;
};

// Component to display the user's role
const UserRole = () => {
  const { role } = useContext(UserContext);

  return <h3>Role: {role}</h3>;
};

// Component to display a greeting
const Greeting = () => {
  const { name, role } = useContext(UserContext);

  return (
    <p>
      Welcome, <strong>{name}</strong>! You are logged in as a{" "}
      <strong>{role}</strong>.
    </p>
  );
};

// Main App Component
function ConsumeContext() {
  return (
    <UserProvider>
      <div style={{ fontFamily: "Arial", padding: "20px" }}>
        <h1>React Context API Example</h1>
        <UserName />
        <UserRole />
        <Greeting />
      </div>
    </UserProvider>
  );
}

export default ConsumeContext;