import { createPortal } from "react-dom";

function Modal1({ close }) {
  return createPortal(
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "8px",
        }}>
        <h2>Login Successful</h2>
        <button onClick={close}>Close</button>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
}
export default Modal1;