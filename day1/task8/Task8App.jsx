
import { useState } from "react";

function Task8App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Frontend Developer");
  const [message, setMessage] = useState("");
  const [clickCount, setClickCount] = useState(0);

  // onClick event
  function handleClick() {
    setClickCount(count => count + 1);
  }

  // onChange event
  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleRoleChange(event) {
    setRole(event.target.value);
  }

  // onSubmit event
  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim() || !email.trim()) {
      setMessage("Please enter your name and email.");
      return;
    }

    setMessage(
      `Employee ${name} registered as ${role}. Email: ${email}`
    );
  }

  return (
    <div>
      <h1>NYB Infotech</h1>
      <h2>Employee Registration</h2>

      <button type="button" onClick={handleClick}>
        Click Me
      </button>

      <p>Button clicked: {clickCount} times</p>

      <hr />

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Employee Name: </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter employee name"
          />
        </div>

        <br />

        <div>
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter email address"
          />
        </div>

        <br />

        <div>
          <label htmlFor="role">Job Role: </label>
          <select
            id="role"
            value={role}
            onChange={handleRoleChange}
          >
            <option>Frontend Developer</option>
            <option>Backend Developer</option>
            <option>Full Stack Developer</option>
            <option>Software Tester</option>
          </select>
        </div>

        <br />

        <button type="submit">Register Employee</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default Task8App;