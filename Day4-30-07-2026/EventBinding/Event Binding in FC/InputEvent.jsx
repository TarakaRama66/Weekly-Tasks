import { useState } from "react";

function InputEvent() {
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }
  return (
    <>
    <h1>Input Event</h1>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Enter Name"/>
      <h3>{name}</h3>
    </>
  );
}
export default InputEvent;