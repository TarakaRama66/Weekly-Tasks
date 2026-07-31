import { createPortal } from "react-dom";

function Modal({ close }) {
  return createPortal(
    <div
      style={{
        position: "fixed",
        top: 100,
        left: 300,
        background: "white",
        padding: 20,
        border: "1px solid black",
      }}>
      <h2>Employee Added Successfully</h2>
      <button onClick={close}>Close</button>
    </div>,
    document.body
  );
}
export default Modal;