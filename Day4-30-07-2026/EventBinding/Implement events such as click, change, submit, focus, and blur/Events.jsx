import { useState } from "react";

function Events() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  // Click Event
  function handleClick() {
    alert("Button Clicked!");
  }
  // Change Event
  function handleChange(event) {
    setName(event.target.value);
  }
  // Submit Event
  function handleSubmit(event) {
    event.preventDefault();
    setMessage(`Welcome ${name}`);
  }
  // Focus Event
  function handleFocus() {
    console.log("Input Focused");
  }
  // Blur Event
  function handleBlur() {
    console.log("Input Lost Focus");
  }
  return (
    <>
      <h1>React Events Demo</h1>
      {/* Click Event */}
      <button onClick={handleClick}>Click Me</button>
      <hr></hr>
      {/* Form Events */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}/>
        <button type="submit">Submit</button>
      </form>
      <h2>{message}</h2>
    </>
  );
}
export default Events;