import { useState } from "react";

function TextArea() {
  const [message, setMessage] = useState("");

  return (
    <div>
        <h1>Controlled TextArea</h1>
        <textarea value={message}onChange={(e) => setMessage(e.target.value)}/>
        <p>{message}</p>
    </div>
  );
}

export default TextArea;