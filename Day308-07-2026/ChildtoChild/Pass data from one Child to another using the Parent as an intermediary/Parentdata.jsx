// Parent.jsx
import { useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildA";

function Parentdata() {
  const [message, setMessage] = useState("");

  const receiveData = (data) => {
    setMessage(data);
  };
  return (
    <div>
      <h1>Pass data from one Child to another using the Parent as an intermediary</h1>
      <ChildA sendData={receiveData} />
      <ChildB message={message} />
    </div>
  );
}
export default Parentdata;