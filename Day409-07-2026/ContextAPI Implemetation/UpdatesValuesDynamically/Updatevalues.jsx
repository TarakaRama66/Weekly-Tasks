import { createContext, useContext, useState } from "react";

// Create Context
const UserContext = createContext();

// Provider Component
function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: "ram",
    role: "Creator",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

// Display Information
function UserInfo() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>Name: {user.name}</h2>
      <h3>Role: {user.role}</h3>
    </div>
  );
}

// Update Info
function UpdateUser() {
  const { setUser } = useContext(UserContext);

  const changeUser = () => {
    setUser({
      name: "Bob",
      role: "Manager",
    });
  };

  return <button onClick={changeUser}>Update User</button>;
}

// Main Component
export default function Updatevalues() {
  return (
    <UserProvider>
        <h1>Update Values Dynamically</h1>
      <UserInfo />
      <UpdateUser />
    </UserProvider>
  );
}