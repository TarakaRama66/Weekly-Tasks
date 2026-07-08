import { useState } from "react";
import Sender from "./Sender";
import Receiver from "./Receiver";

function Parent() {
  const [message, setMessage] = useState("");

  const handleMessage = (text) => {
    setMessage(text);
  };

  return (
    <div>
        <h1>Sibling Communication via Parent</h1>
      <Sender sendMessage={handleMessage} />
      <Receiver message={message} />
    </div>
  );
}
export default Parent;