import { useContext } from "react";
import AuthContext from "./AuthContext";

function Dashboard() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div>
        <h2>Dashboard</h2>
        {isLoggedIn ? (
        <p>Welcome! You are logged in.</p>) : (<p>Please log in to continue.</p>
      )}
    </div>
  );
}
export default Dashboard;