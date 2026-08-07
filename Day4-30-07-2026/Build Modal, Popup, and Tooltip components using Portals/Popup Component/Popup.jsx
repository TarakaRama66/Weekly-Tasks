import { createPortal } from "react-dom";

function Popup({ close }) {
  return createPortal(
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        background: "green",
        color: "white",
        padding: "15px",
        borderRadius: "5px",
      }}
    >
      Data Saved Successfully
      <br />
      <button onClick={close}>OK</button>
    </div>,
    document.getElementById("portal-root")
  );
}

export default Popup;