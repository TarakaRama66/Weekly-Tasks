import { useState } from "react";
import Tooltip from "./Tooltip";

function TooltipApp() {
  const [show, setShow] = useState(false);

  return (
    <>
    <h1>Tooltip Example</h1>
      <button
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}> Submit</button>
      {show && <Tooltip />}
    </>
  );
}
export default TooltipApp;