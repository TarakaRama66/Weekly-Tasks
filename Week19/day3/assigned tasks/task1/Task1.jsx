import { useState } from "react";
 
function Task1() {
  const [username, setUsername] = useState("");
  const [eventLogs, setEventLogs] = useState([]);
  const [mouseStatus, setMouseStatus] = useState("Outside");
 
  const addLog = (message) => {
    setEventLogs((prev) => [
      `${new Date().toLocaleTimeString()} - ${message}`,
      ...prev,
    ]);
  };
 
  const handleClick = () => {
    addLog("Button Clicked");
  };
 
  const handleDoubleClick = () => {
    addLog("Button Double Clicked");
  };
 
  const handleMouseEnter = () => {
    setMouseStatus("Inside");
    addLog("Mouse Entered Card");
  };
 
  const handleMouseLeave = () => {
    setMouseStatus("Outside");
    addLog("Mouse Left Card");
  };
 
  const handleChange = (e) => {
    setUsername(e.target.value);
    addLog(`Typing: ${e.target.value}`);
  };
 
  const handleKeyDown = (e) => {
    addLog(`Key Pressed: ${e.key}`);
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
 
    if (!username.trim()) {
      addLog("Submission Failed");
      return;
    }
 
    addLog(`Form Submitted By ${username}`);
    setUsername("");
  };
 
  return (
    <div className="container">
      <h1>Advanced Event Handling Dashboard</h1>
 
      <div
        className="card"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h2>Mouse Status : {mouseStatus}</h2>
 
        <button
          onClick={handleClick}
          onDoubleClick={handleDoubleClick}
        >
          Click / Double Click
        </button>
      </div>
 
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
 
        <button type="submit">
          Submit Form
        </button>
      </form>
 
      <div className="logs">
        <h2>Event History</h2>
 
        {eventLogs.length === 0 ? (
          <p>No Events Triggered</p>
        ) : (
          eventLogs.map((log, index) => (
            <div key={index} className="log-item">
              {log}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
 
export default Task1;