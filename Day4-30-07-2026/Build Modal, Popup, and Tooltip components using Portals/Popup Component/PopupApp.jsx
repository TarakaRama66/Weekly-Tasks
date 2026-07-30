import { useState } from "react";
import Popup from "./Popup";

function PopupApp() {
  const [show, setShow] = useState(false);

  return (
    <>
    <h1>Popup Example</h1>
      <button onClick={() => setShow(true)}>Save</button>
      {show && (<Popup close={() => setShow(false)} />)}
    </>
  );
}
export default PopupApp;