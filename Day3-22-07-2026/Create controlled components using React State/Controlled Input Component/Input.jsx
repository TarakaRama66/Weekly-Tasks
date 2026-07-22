import { useState } from "react";

function Input() {
  const [name, setName] = useState("");

  return (
    <div>
        <h1>Controlled Input</h1>
        <input type="text"value={name}onChange={(e) => setName(e.target.value)}placeholder="Enter your name"/>
        <p>Hello, {name}!</p>
    </div>
  );
}
export default Input;