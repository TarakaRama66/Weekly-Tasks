import { useState } from "react";

function Select() {
  const [color, setColor] = useState("red");

  return (
    <div>
        <h1>Controlled Select</h1>
        <select value={color}onChange={(e) => setColor(e.target.value)}>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
        </select>
        <p>Selected color: {color}</p>
    </div>
  );
}

export default Select;