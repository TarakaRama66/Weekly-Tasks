import { useState } from "react";
 
function Task6() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState("");
 
  const loginUser = (selectedRole) => {
    setRole(selectedRole);
    setIsLoggedIn(true);
  };
 
  const logoutUser = () => {
    setRole("");
    setIsLoggedIn(false);
  };
 
  return (
    <div className="container">
      <h1>Role Based Dashboard</h1>
 
      {!isLoggedIn ? (
        <div className="login-section">
          <h2>Select Role</h2>
 
          <button
            onClick={() => loginUser("Admin")}
          >
            Login as Admin
          </button>
 
          <button
            onClick={() => loginUser("HR")}
          >
            Login as HR
          </button>
 
          <button
            onClick={() => loginUser("Manager")}
          >
            Login as Manager
          </button>
 
          <button
            onClick={() => loginUser("Employee")}
          >
            Login as Employee
          </button>
        </div>
      ) : (
        <div className="dashboard">
          <h2>Welcome {role}</h2>
 
          {role === "Admin" && (
            <div className="card">
              <h3>Admin Dashboard</h3>
              <ul>
                <li>Manage Users</li>
                <li>Manage Projects</li>
                <li>System Reports</li>
                <li>Settings</li>
              </ul>
            </div>
          )}
 
          {role === "HR" && (
            <div className="card">
              <h3>HR Dashboard</h3>
              <ul>
                <li>Employee Records</li>
                <li>Attendance</li>
                <li>Payroll</li>
                <li>Recruitment</li>
              </ul>
            </div>
          )}
 
          {role === "Manager" && (
            <div className="card">
              <h3>Manager Dashboard</h3>
              <ul>
                <li>Team Performance</li>
                <li>Project Tracking</li>
                <li>Task Assignment</li>
              </ul>
            </div>
          )}
 
          {role === "Employee" && (
            <div className="card">
              <h3>Employee Dashboard</h3>
              <ul>
                <li>My Tasks</li>
                <li>My Attendance</li>
                <li>My Profile</li>
              </ul>
            </div>
          )}
 
          <button
            className="logout"
            onClick={logoutUser}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
 
export default Task6;