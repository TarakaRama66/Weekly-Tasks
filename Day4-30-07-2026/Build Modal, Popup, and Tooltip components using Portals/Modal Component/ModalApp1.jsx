import { useState } from "react";
import Modal1 from "./Modal1";

function ModalApp1() {
  const [open, setOpen] = useState(false);
  return (
    <>
    <h1>Modal Example</h1>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      {open && (<Modal1 close={() => setOpen(false)} />)}
    </>
  );
}
export default ModalApp1;