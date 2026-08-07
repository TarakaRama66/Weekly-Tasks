import UserContext from "./UserContext";
import Dashboard from "./Dashboard";

function InformationApp() {
  const user = {
    name: "Kandula Gupta",
    email: "kandulagupta@gmail.com",
  };

  return (
    <UserContext.Provider value={user}>
        <h1>User Information Context</h1>
      <Dashboard />
    </UserContext.Provider>
  );
}

export default InformationApp;