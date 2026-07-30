import { useState } from "react";
import Notice from "./Notice";

function ModalApp() {
  const [showNotice, setShowNotice] = useState(false);

  return (
    <div>
      <h1>Employee Dashboard</h1>
      <p>Welcome to the company portal.</p>
      <button onClick={() => setShowNotice(true)}>Show Notice</button>
      {showNotice && (<Notice close={() => setShowNotice(false)} />)}
    </div>
  );
}
export default ModalApp;