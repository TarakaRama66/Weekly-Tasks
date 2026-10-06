import { useState } from "react";
 
function Task8App() {
  const [user, setUser] = useState({
    name: "Taraka Ram",
    role: "Employee",
    isLoggedIn: false,
    isVerified: false,
    subscription: false,
  });
  const loginUser = () => {setUser({...user,isLoggedIn: true,});};

  const verifyAccount = () => {
    setUser({...user,isVerified: true,});};
  const activateSubscription = () => {
    setUser({...user,subscription: true,});};

  const changeRole = (role) => {
    setUser({...user,role,});};
  return (
    <div style={{ padding: "20px" }}>
      <h1>Smart Office Management Portal</h1>
      <button onClick={loginUser}>Login</button>--
 
      <button onClick={verifyAccount}>Verify Account</button>--

      <button onClick={activateSubscription}>Activate Plan</button>--

      <button onClick={() => changeRole("Employee")}>Employee</button>--

      <button onClick={() => changeRole("Manager")}>Manager</button>--

      <button onClick={() => changeRole("Admin")}>Admin</button>

      <hr></hr>
      {!user.isLoggedIn ? (
        <div>
          <h2>Please Login</h2>
          <p>
            Access denied. Login to continue.
          </p>
        </div>
      ) : !user.isVerified ? (
        <div>
          <h2>⚠ Account Verification Required</h2>
          <p>
            Verify your account before accessing the dashboard.
          </p>
        </div>
      ) : !user.subscription ? (
        <div>
          <h2>Subscription Required</h2>
          <p>
            Activate your plan to unlock features.
          </p>
        </div>
      ) : (
        <div>
          <h2>
            Welcome {user.name}
          </h2>
          {user.role === "Admin" && (
            <div>
              <h3>Admin Dashboard</h3>
              <ul>
                <li>Manage Users</li>
                <li>Manage Projects</li>
                <li>View Analytics</li>
                <li>System Settings</li>
              </ul>
            </div>
          )}
          {user.role === "Manager" && (
            <div>
              <h3>Manager Dashboard</h3>
              <ul>
                <li>Assign Tasks</li>
                <li>Track Team</li>
                <li>Review Performance</li>
              </ul>
            </div>
          )}
          {user.role === "Employee" && (
            <div>
              <h3>Employee Dashboard</h3>
              <ul>
                <li>View Tasks</li>
                <li>Submit Reports</li>
                <li>Update Profile</li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
export default Task8App;