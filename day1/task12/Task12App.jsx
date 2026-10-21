import { useState } from "react";

function Task12App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [marks, setMarks] = useState(75);
  const [loading, setLoading] = useState(false);

  // Ternary operator
  const result = marks >= 40 ? "Pass" : "Fail";

  // if/else statement
  function getPerformance() {
    if (marks >= 90) {
      return "Excellent";
    } else if (marks >= 70) {
      return "Good";
    } else if (marks >= 40) {
      return "Average";
    } else {
      return "Needs Improvement";
    }
  }

  function checkLoading() {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  return (
    <div>
      <h1>NYB Infotech Dashboard</h1>

      <h2>1. Login Condition</h2>

      {isLoggedIn ? (
        <p>Welcome! You are logged in.</p>
      ) : (
        <p>Please log in to continue.</p>
      )}

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      <hr />

      <h2>2. Show Employee Details</h2>

      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>

      {showDetails && (
        <div>
          <p>Name: Rahul</p>
          <p>Role: Frontend Developer</p>
          <p>Department: Development</p>
        </div>
      )}

      <hr />

      <h2>3. Student Result</h2>

      <label htmlFor="marks">Enter Marks: </label>

      <input
        id="marks"
        type="number"
        min="0"
        max="100"
        value={marks}
        onChange={(event) => {
          const value = event.target.value;

          if (value === "") {
            setMarks("");
          } else {
            setMarks(Math.max(0, Math.min(100, Number(value))));
          }
        }}
      />

      {marks !== "" && (
        <div>
          <p>Result: {marks >= 40 ? "Pass" : "Fail"}</p>
          <p>Performance: {getPerformance()}</p>
        </div>
      )}

      <hr />

      <h2>4. Loading Condition</h2>

      <button onClick={checkLoading} disabled={loading}>
        Check Status
      </button>

      {loading && <p>Loading, please wait...</p>}
      {!loading && <p>System is ready.</p>}
    </div>
  );
}

export default Task12App;