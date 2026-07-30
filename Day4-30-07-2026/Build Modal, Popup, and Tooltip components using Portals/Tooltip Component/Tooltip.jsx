import { createPortal } from "react-dom";

function Tooltip() {
  return createPortal(
    <div
      style={{
        position: "top",
        top: "120px",
        left: "100px",
        background: "black",
        color: "white",
        padding: "8px",
        borderRadius: "4px",
      }}>
        Click to submit the form
    </div>,
    document.getElementById("portal-root")
  );
}
export default Tooltip;