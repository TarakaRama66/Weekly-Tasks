import { useState } from "react";
import Sender from "./Sender";
import Receiver from "./Receiver";

function ChildApp() {
  const [message, setMessage] = useState("");
  return (
    <div>
        <h1>Child to Child Communication</h1>
        <Sender send={setMessage} />
        <Receiver message={message} />
    </div>
  );
}
export default ChildApp;